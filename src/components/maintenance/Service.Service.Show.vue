<template>

    <div>

        <v-layout row wrap>

            <v-flex xs12 sm12 md12 lg12>

                <v-layout row wrap>

                    <v-flex xs12 md6>

                        <service-requester></service-requester>

                    </v-flex>

                    <v-flex xs12 md6>

                        <service-answerable></service-answerable>

                    </v-flex>

                </v-layout>

            </v-flex>

            <v-flex xs12 sm12 md12 lg12>

                <v-card flat>

                    <v-card-title primary-title>

                        <div class="title">Service</div>

                    </v-card-title>

                    <v-card-text>

                        <span class="subheading">Description:</span>

                        <blockquote class="blockquote">{{ service.description }}</blockquote>

                        <span class="subheading">Status:</span>

                        <blockquote class="blockquote">

                            <v-select v-bind:items="statusOptions" v-model="status">

                            </v-select>

                        </blockquote>

                    </v-card-text>

                </v-card>

                <v-snackbar :timeout="snackbar.timeout" :bottom="true" v-model="snackbar.toggle">

                    {{ snackbar.message }}

                    <v-btn flat color="pink" @click.native="snackbar.toggle = false">CLOSE</v-btn>

                </v-snackbar>

            </v-flex>

        </v-layout>

    </div>

</template>

<script>
  import WorkspaceCard from '@/layouts/WorkspaceCard';
  import ServiceRequester from './Service.Requester';
  import ServiceAnswerable from './Service.Answerable';
  import {MaintenanceResource} from '@/resources/MaintenanceResource';

  export default {

    data () {

      return {

        statusOptions: [

            {value: 'waiting_authorization', text: 'Waiting for Authorization'},
            {value: 'authorized', text: 'Authorized'},
            {value: 'in_progress', text: 'In Progress'},
            {value: 'elaborating', text: 'Elaborating'},
            {value: 'executed', text: 'Executed'},
            {value: 'canceled', text: 'Canceled'},
            {value: 'waiting_information', text: 'Waiting for information'},
            {value: 'waiting_gear', text: 'Waiting for Gear'}

          ],

        snackbar: {

          timeout: process.env.SNACKBAR_TIMEOUT,

          message: '',

          toggle: false

        }

      }
    },

    computed: {

      code () {

        return this.$store.state.service.service.code;

      },

      service () {

        return this.$store.state.service.service;

      },

      status: {

        get () {

          return this.$store.state.service.service.status;

        },

        set (status) {

          this.$store.state.service.service.status = status;

          this._storeService(this.$store.state.service.service);

        }

      }

    },

    methods: {

      _storeService (service) {

        MaintenanceResource.updateService(service, (response) => {

          console.log(response);

          this._sendMessage(response.message);

        }, (errors) => {

          this.snackbar.message = errors.message;

        });

      },

      _sendMessage (message) {

        this.snackbar.message = message;

        this.snackbar.toggle = true;

      }

    },

    components: {

      'workspace-card': WorkspaceCard,
      'service-requester': ServiceRequester,
      'service-answerable': ServiceAnswerable

    }

  }

</script>