<template>

    <v-container fluid>

        <workspace-card title="Services">

            <span slot="menu">

                <v-btn flat class="hidden-xs-only" :to="{name: 'maintenance.service.create'}">

                    <v-icon>add</v-icon>
                    New

                </v-btn>

            </span>

            <v-layout row>

                <v-flex xs12 sm6 offset-sm6>

                    <v-text-field
                            append-icon="search"
                            label="Search"
                            single-line
                            hide-details
                            v-model="search"
                    ></v-text-field>

                </v-flex>

            </v-layout>

            <v-btn class="hidden-sm-and-up primary" fab fixed bottom right :to="{name: 'maintenance.service.create'}">

                <v-icon>add</v-icon>

            </v-btn>

            <v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search">

                <template slot="items" slot-scope="props">

                    <tr>

                        <td class="text-xs-left">{{ props.item.code }}</td>
                        <td class="text-xs-left">{{ props.item.created_at }}</td>
                        <td class="text-xs-left">{{ props.item.requester }}</td>
                        <td class="text-xs-left">{{ props.item.status }}</td>
                        <td>
                            <v-btn icon @click="triggerActions(props.item)">
                                <v-icon>more_vert</v-icon>
                            </v-btn>
                        </td>
                    </tr>

                </template>

            </v-data-table>

        </workspace-card>

    </v-container>

</template>

<script>
  import WorkspaceCard from '@/layouts/WorkspaceCard';
  import {MaintenanceResource} from '@/resources/MaintenanceResource';

  export default {

    created () {

      MaintenanceResource.listServices((services) => {

        console.log(services);

        this.items = services;

      }, (errors) => {

        console.log(errors);

      })

    },

    data () {

      return {

        search: '',

        headers: [
          {text: 'Code', value: 'code', align: 'left'},
          {text: 'Created', value: 'created_at', align: 'left'},
          {text: 'Requester', value: 'requester_id', align: 'left'},
          {text: 'Status', value: 'status', align: 'left'},
          {text: 'Actions', value: null, align: 'left'}

        ],

        items: []

      }

    },

    methods: {

      triggerActions (item) {

        this.$store.state.service.service = item;

        this.$router.push({

          name: 'maintenance.service.show',

          params: { service: item.id }

        });

      }

    },

    components: {

      'workspace-card': WorkspaceCard

    }

  }
</script>