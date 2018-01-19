<template>

    <v-container fluid>

        <workspace-card title="Novo Serviço">

            <span slot="menu">

                <v-btn icon>

                    <v-icon>list</v-icon>

                </v-btn>

            </span>

            <v-select
                    label="Responsavel"
                    max-height="400"
                    hint="Informe o responsável pelo serviço"
                    persistent-hint
            ></v-select>

            <v-select
                    label="Serviço"
                    max-height="400"
                    hint="Informe o tipo de serviço"
                    persistent-hint
                    multiple
                    chips
            ></v-select>

            <locale-selector @update="updateLocaleData"></locale-selector>

            <v-text-field
                    label="Observações"
                    name="observation"
                    multi-line
            ></v-text-field>

            <v-btn color="primary" @click="store">Enviar</v-btn>

        </workspace-card>

        <v-snackbar :timeout="5000" :bottom="true" v-model="snackbar">

            {{ snackbarText }}

            <v-btn flat color="pink" @click.native="snackbar = false">CLOSE</v-btn>

        </v-snackbar>

    </v-container>



</template>

<script>
    import WorkspaceCard from '@/layouts/WorkspaceCard';
    import LocaleSelector from '@/layouts/LocaleSelector';
    import {Locales} from '@/resources/Locales';
    import {MaintenanceResource} from '@/resources/MaintenanceResource';

    export default {

      created () {

        Locales.list((items) => {

          this.locales = items;

        });

      },

      data () {

        return {

          service: {

            build: '',

            floor: '',

            room: ''

          },

          snackbar: false,

          snackbarMessage: ''

        }

      },

      methods: {

        updateLocaleData (data) {

          this.service.build = data.build;

          this.service.floor = data.floor;

          this.service.room = data.room;

        },

        store () {

          MaintenanceResource.storeService(this.service, (response) => {

            console.log(response);

            this.showMessage('Serviço criado com sucesso');

          }, (error) => {

            console.log(error);

          });

        },

        showMessage (message) {

          this.snackbarText = message;

          this.snackbar = true;

        }

      },

      components: {

        'workspace-card': WorkspaceCard,
        'locale-selector': LocaleSelector

      }

    }
</script>