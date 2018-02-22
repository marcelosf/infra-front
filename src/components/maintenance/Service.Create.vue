<template>

    <v-container grid-list-md>

        <workspace-card title="Novo Serviço">

            <span slot="menu">

                <span class="hidden-xs-only">

                    <v-btn flat :to="{name: 'maintenance.service'}">

                        <v-icon>list</v-icon>
                        List

                    </v-btn>

                </span>

                <span class="hidden-sm-and-up">

                    <v-btn icon :to="{name: 'maintenance.service'}">

                        <v-icon>list</v-icon>

                    </v-btn>

                </span>

            </span>

            <v-form ref="form" v-model="rules.valid">

                <v-select
                        label="Responsavel"
                        v-bind:items="userItems"
                        v-model="service.answerable_id"
                        :rules="rules.answerable_id"
                        item-value="id"
                        item-text="name"
                        max-height="400"
                        hint="Informe o responsável pelo serviço"
                        persistent-hint
                        required
                ></v-select>

                <locale-selector @update="updateLocaleData"></locale-selector>

                <v-text-field
                        label="Descrição"
                        name="description"
                        v-model="service.description"
                        :rules="rules.description"
                        multi-line
                        required
                ></v-text-field>

                <v-btn color="primary" :disabled="!rules.valid" @click="store">Enviar</v-btn>

            </v-form>

        </workspace-card>

        <message :message="message.text" v-model="message.toggle">

        </message>

    </v-container>

</template>

<script>
    import WorkspaceCard from '@/layouts/WorkspaceCard';
    import LocaleSelector from '@/layouts/LocaleSelector';
    import SnackBar from '@/layouts/SnackBar';
    import {Locales} from '@/resources/Locales';
    import {UserResource} from '@/resources/UserResource';
    import {MaintenanceResource} from '@/resources/MaintenanceResource';
    import Service from './Entities/Service';
    import {User} from '@/resources/User';

    export default {

      created () {

        this.initialize();

      },

      data () {

        return {

          service: Service.service,

          rules: Service.rules,

          userItems: [],

          message: {

            toggle: false,

            text: ''

          }

        }

      },

      methods: {

        initialize () {

          Locales.list((items) => {

            this.locales = items;

          });

          UserResource.list((users) => {

            this.userItems = users.data;

          }, (error) => {

            this.showMessage(error);

          });

          this.service.requester_id = User.getUser().id;

        },

        updateLocaleData (data) {

          this.service.locale_id = data.room;

        },

        store () {

          MaintenanceResource.storeService(this.service, (response) => {

            this.showMessage(response.message);

            this.clearForm();

          }, () => {

            this.showMessage('An Error occurred and we can not complete your service order');

          });

        },

        showMessage (message) {

          this.message.text = message;

          this.message.toggle = true;

        },

        answerableRequired () {

          let answerable = this.service.answerable_id;

          return (answerable && answerable.length > 0) || 'Please, select an option';

        },

        clearForm () {

          this.$refs.form.reset();

        }

      },

      components: {

        'workspace-card': WorkspaceCard,
        'locale-selector': LocaleSelector,
        'message': SnackBar

      }

    }
</script>