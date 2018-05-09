<template>

    <v-container fluid>

        <workspace-card title="Switches">

            <v-layout column align-center>

                <v-data-table
                        v-bind:headers="headers"
                        v-bind:items="items"
                        v-bind:total-items="totalItems"
                        v-bind:pagination.sync="pagination"
                        hide-actions
                >
                    <template slot="items" slot-scope="props">

                        <td class="text-xs-right">{{ props.item.name }}</td>
                        <td class="text-xs-right">{{ props.item.ip }}</td>
                        <td class="text-xs-right">{{ props.item.num_ports }}</td>
                        <td class="text-xs-right">{{ props.item.brand }}</td>
                        <td class="text-xs-right">{{ props.item.stack }}</td>

                    </template>

                </v-data-table>

                <v-card flat>

                    <v-card-text>

                        <div class="text-xs-center pt-2">

                            <v-pagination
                                    :length="pages"
                                    v-model="pagination.page"
                                    circle
                                    v-bind:total-visible="10"
                            >

                            </v-pagination>

                        </div>

                    </v-card-text>

                </v-card>

            </v-layout>

        </workspace-card>

    </v-container>

</template>

<script>
    import WorkspaceCard from '@/layouts/WorkspaceCard';
    import {SwitchResource} from '@/resources/SwitchResource';

    export default {

      data () {

        return {

          headers: [

            {text: 'Nome', align: 'left', sortable: 'true', value: 'register'},
            {text: 'IP', align: 'left', sortable: 'true', value: 'ip'},
            {text: 'Nº portas', align: 'left', sortable: 'true', value: 'num_ports'},
            {text: 'Marca', align: 'left', sortable: 'true', value: 'brand'},
            {text: 'Pilha', align: 'left', sortable: 'true', value: 'stack'}

          ],

          items: [],

          totalItems: 0,

          pages: 0,

          pagination: {}

        }

      },

      watch: {

        pagination: {

          handler () {

            this.loadList((list) => {

              console.log(list);

              this.items = list.data.data;

              this.totalItems = list.data.meta.pagination.total;

              this.setPagination(list);

            }, this.pagination.page);

          },

          deep: true

        }

      },

      methods: {

        loadList (actions, page, search) {

          SwitchResource.listPatchPanels((response) => {

            console.log(response);

            actions(response);

          }, page, search);

        }

      },

      setPagination (list) {

        this.pages = list.list.meta.pagination.total_pages;

        this.pagination.rowsPerPage = list.list.meta.pagination.per_page;

      },

      components: {

        'workspace-card': WorkspaceCard

      }

    }
</script>