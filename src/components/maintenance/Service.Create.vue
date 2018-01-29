<template>

    <v-container fluid>

        <workspace-card title="Novo Serviço">

            <span slot="menu">

                <v-btn flat :to="{name: 'maintenance.service'}">

                    <v-icon>list</v-icon>
                    List

                </v-btn>

            </span>

            <v-form v-model="rules.valid">

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

        <v-snackbar :timeout="snackbar.timeout" :bottom="true" v-model="snackbar.toggle">

            {{ snackbar.message }}

            <v-btn flat color="pink" @click.native="snackbar.toggle = false">CLOSE</v-btn>

        </v-snackbar>

    </v-container>



</template>

<script>
    import WorkspaceCard from '@/layouts/WorkspaceCard';
    import LocaleSelector from '@/layouts/LocaleSelector';
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

          snackbar: {

            toggle: false,

            message: '',

            timeout: process.env.SNACKBAR_TIMEOUT

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

          this.service.local_id = data.room;

        },

        store () {

          MaintenanceResource.storeService(this.service, (response) => {

            this.showMessage('Serviço criado com sucesso');

          }, () => {

            this.showMessage('An Error occurred and we can not to complete your service order');

          });

        },

        showMessage (message) {

          this.snackbar.message = message;

          this.snackbar.toggle = true;

        },

        answerableRequired () {

          let answerable = this.service.answerable_id;

          return (answerable && answerable.length > 0) || 'Please, select an option';

        }

      },

      components: {

        'workspace-card': WorkspaceCard,
        'locale-selector': LocaleSelector

      }

    }
</script>