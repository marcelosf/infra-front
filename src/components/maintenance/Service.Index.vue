<template>

    <v-container fluid>

        <workspace-card title="Services">

            <span slot="menu">

                <v-btn flat class="hidden-xs-only" :to="{name: 'maintenance.service.create'}">

                    <v-icon>add</v-icon>
                    New Service

                </v-btn>

            </span>

            <v-layout row wrap>

                <v-spacer></v-spacer>

                <v-btn icon @click.native="toggleSearch">

                    <v-icon>search</v-icon>

                </v-btn>

            </v-layout>

            <v-form ref="form">

                <v-slide-y-transition>

                    <v-layout row wrap v-show="showSearch">

                        <v-spacer></v-spacer>

                        <v-flex xs12 sm3 md3 lg3>

                            <v-select
                                    label="Search Type"
                                    v-bind:items="searchType"
                                    v-model="search.parameter"
                            ></v-select>

                        </v-flex>

                        <v-flex xs12 sm5 md5 lg5>

                            <v-text-field
                                    label="Search"
                                    v-model="search.value"
                            ></v-text-field>

                        </v-flex>

                        <v-flex xs6 sm2 md2 lg2 class="text-xs-right">

                            <v-btn color="primary" @click="getSearchResponse">

                                <v-icon>search</v-icon>
                                Search

                            </v-btn>

                        </v-flex>

                        <v-flex xs6 sm2 md2 lg2 class="text-xs-right">

                            <v-btn @click="clearForm">

                                <v-icon>clear</v-icon>
                                Clear

                            </v-btn>

                        </v-flex>

                    </v-layout>

                </v-slide-y-transition>

            </v-form>



            <v-btn class="hidden-sm-and-up primary" fab fixed bottom right :to="{name: 'maintenance.service.create'}">

                <v-icon>add</v-icon>

            </v-btn>

            <v-data-table v-bind:headers="headers"
                          v-bind:items="items"
                          v-bind:total-items="totalItems"
                          v-bind:pagination.sync="pagination"
                          hide-actions
            >

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

            <div class="text-xs-center pt-2">

                <v-pagination :length="pages"
                              v-model="pagination.page"
                              circle
                              v-bind:total-visible="10"
                >
                </v-pagination>

            </div>

        </workspace-card>

    </v-container>

</template>

<script>
  import WorkspaceCard from '@/layouts/WorkspaceCard';
  import {MaintenanceResource} from '@/resources/MaintenanceResource';

  export default {

    data () {

      return {

        search: {

          parameter: '',

          value: ''

        },

        showSearch: false,

        searchParameters: null,

        searchType: [
          {value: 'code', text: 'Code'},
          {value: 'created_at', text: 'Created At'},
          {value: 'requester', text: 'Requester'},
          {value: 'status', text: 'Status'}

        ],

        headers: [
          {text: 'Code', value: 'code', align: 'left'},
          {text: 'Created', value: 'created_at', align: 'left'},
          {text: 'Requester', value: 'requester_id', align: 'left'},
          {text: 'Status', value: 'status', align: 'left'},
          {text: 'Actions', value: null, align: 'left'}
        ],

        items: [],

        loading: true,

        pagination: {},

        totalItems: 0,

        pages: 0

      }

    },

    watch: {

      pagination: {

        handler () {

          this.loadServices((services) => {

            this.items = services.services.data;

            this.totalItems = services.services.meta.pagination.total;

            this.setPagination(services);

          }, this.pagination.page);

        },

        deep: true

      },

      search: {

        handler (value, oldValue) {

          this.searchParameters = value;

        },

        deep: true

      }

    },

    methods: {

      triggerActions (item) {

        this.$store.state.service.service = item;

        this.$router.push({

          name: 'maintenance.service.show',

          params: { service: item.id }

        });

      },

      loadServices (actions, page) {

        MaintenanceResource.paginateServices((response) => {

          actions(response);

        }, page, this.searchParameters);

      },

      getSearchResponse () {

        this.loadServices((services) => {

          this.items = services.services.data;

          this.totalItems = services.services.meta.pagination.total;

          this.setPagination(services);

        }, this.pagination.page, this.searchParameters);

      },

      clearForm () {

        this.$refs.form.reset();

      },

      setPagination (services) {

        this.pages = services.services.meta.pagination.total_pages;

        this.pagination.rowsPerPage = services.services.meta.pagination.per_page;

      },

      toggleSearch () {

        this.showSearch = !this.showSearch;

      }

    },

    components: {

      'workspace-card': WorkspaceCard

    }

  }
</script>