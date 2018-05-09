<template>

    <v-container fluid>

        <v-slide-y-transition mode="out-in">

            <div>

                <v-card class="hidden-sm-and-down">

                    <v-layout row wrap>

                        <v-spacer></v-spacer>

                        <v-btn flat color="primary" @click.native="toggleSearch">

                            <v-icon>search</v-icon>
                            Busca

                        </v-btn>

                    </v-layout>

                    <home-search ref="search" v-model="toggle" @update="setSearch">

                    <span slot="actions">

                        <v-btn flat color="primary" @click="search">

                            Buscar

                        </v-btn>

                    </span>

                    </home-search>

                    <v-layout column align-center>

                        <v-data-table
                                v-bind:headers="headers"
                                v-bind:items="items"
                                v-bind:total-items="totalItems"
                                v-bind:pagination.sync="pagination"
                                v-bind:loading="loading"
                                hide-actions
                        >
                            <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>

                            <template slot="items" slot-scope="props">

                                <td class="text-xs-left">{{ props.item.build }}</td>
                                <td class="text-xs-left">{{ props.item.floor }}</td>
                                <td class="text-xs-left">{{ props.item.room }}</td>
                                <td class="text-xs-left">{{ props.item.patchPort }}</td>
                                <td class="text-xs-left">{{ props.item.switchHostname }}</td>
                                <td class="text-xs-left">{{ props.item.switchIP }}</td>
                                <td class="text-xs-left">{{ props.item.switchIdentification }}</td>
                                <td class="text-xs-left">{{ props.item.switchVlan }}</td>
                                <td class="text-xs-left">{{ props.item.switchPort }}</td>
                                <td class="text-xs-left">{{ props.item.rackLocation }}</td>

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

                </v-card>

                <home-iterator :data="items" class="hidden-md-and-up">

                </home-iterator>

            </div>

        </v-slide-y-transition>

    </v-container>

</template>

<script>
  import {HomeResource} from '@/resources/HomeResource';
  import HomeSearch from './Home.Search';
  import HomeIterator from './Home.Iterator';
  import {LocalFilter} from '@/filters/LocalFilter';

  export default {

    data () {

      return {

        headers: [

          {text: 'Bloco', align: 'left', sortable: 'true', value: 'build'},
          {text: 'Pavimento', align: 'left', sortable: 'true', value: 'floor'},
          {text: 'Sala', align: 'left', sortable: 'true', value: 'room'},
          {text: 'Ponto', align: 'left', sortable: 'true', value: 'patchPort'},
          {text: 'Hostname', align: 'left', sortable: 'true', value: 'switchHostname'},
          {text: 'IP', align: 'left', sortable: 'true', value: 'switchIP'},
          {text: 'Switch', align: 'left', sortable: 'true', value: 'switchIdentification'},
          {text: 'VLAN', align: 'left', sortable: 'true', value: 'switchVlan'},
          {text: 'Porta do Switch', align: 'left', sortable: 'true', value: 'switchPort'},
          {text: 'Sala Rack', align: 'left', sortable: 'true', value: 'rackLocation'}

        ],

        items: [],

        totalItems: 100,

        pagination: {},

        pages: 0,

        toggle: false,

        loading: false,

        searchParameters: {}

      }

    },

    watch: {

      pagination: {

        handler () {

          this.showLoader();

          this.loadList((response) => {

            this.updateList(response);

            this.hideLoader();

          }, this.pagination.page, this.searchParameters);

        },

        deep: true

      }

    },

    methods: {

      loadList (actions, page, search) {

        HomeResource.list((response) => {

          actions(response);

        }, page, search);

      },

      setPagination (list) {

        this.pages = list.meta.pagination.total_pages;

        this.pagination.rowsPerPage = list.meta.pagination.per_page;

      },

      toggleSearch () {

        this.toggle = !this.toggle;

      },

      setSearch (search) {

        this.searchParameters = search;

      },

      search () {

        HomeResource.list((response) => {

          this.updateList(response);

        }, this.pagination.page, this.searchParameters);

        this.closeDialog();

      },

      closeDialog () {

        this.$refs.search.closeForm();

      },

      updateList (list) {

        this.items = list.data;

        this.totalItems = list.meta.pagination.total;

        this.setPagination(list);

      },

      showLoader () {

        this.loading = true;

      },

      hideLoader () {

        this.loading = false;

      }

    },

    components: {

      'home-search': HomeSearch,
      'home-iterator': HomeIterator

    },

    filters: {

      local (data) {

        return LocalFilter.buildRoomFormat(data);

      }

    }

  }
</script>