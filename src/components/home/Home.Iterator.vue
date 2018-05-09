<template>

    <v-container fluid grid-list-md>

        <v-data-iterator

                content-tag="v-layout"
                row
                wrap
                :items="items"
                :rows-per-page-items="rowsPerPageItems"
                :pagination.sync="pagination"
        >

            <v-flex

                slot="item"
                slot-scope="props"
                xs12
                md4
                sm6
                lg3

            >

                <v-card>

                    <v-card-title><h4>{{ props.item.patchPort }}</h4></v-card-title>

                    <v-divider></v-divider>

                    <v-list dense>

                        <v-list-tile>

                            <v-list-tile-content>Local:</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item | local }}</v-list-tile-content>

                        </v-list-tile>

                        <v-list-tile>

                            <v-list-tile-content>Hostname</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.switchHostname }}</v-list-tile-content>

                        </v-list-tile>

                        <v-list-tile>

                            <v-list-tile-content>IP</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.switchIP }}</v-list-tile-content>

                        </v-list-tile>

                        <v-list-tile>

                            <v-list-tile-content>Switch</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.switchIdentification }}</v-list-tile-content>

                        </v-list-tile>

                        <v-list-tile>

                            <v-list-tile-content>Serviço</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.service }}</v-list-tile-content>

                        </v-list-tile>

                        <v-list-tile>

                            <v-list-tile-content>VLAN</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.switchVlan }}</v-list-tile-content>

                        </v-list-tile>

                        <v-list-tile>

                            <v-list-tile-content>Porta do Switch</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.switchPort }}</v-list-tile-content>

                        </v-list-tile>

                        <v-list-tile>

                            <v-list-tile-content>Sala Rack</v-list-tile-content>
                            <v-list-tile-content class="align-end">{{ props.item.rackLocation }}</v-list-tile-content>

                        </v-list-tile>

                    </v-list>

                </v-card>

            </v-flex>

        </v-data-iterator>

    </v-container>

</template>

<script>
    export default {
      props: ['data'],

      created () {

        console.log(this.data);

      },

      data () {

        return {

          rowsPerPageItems: [1],

          pagination: {

            rowsPerPage: 4

          }

        }

      },

      computed: {

        local () {

          return this.data.build + '-' + this.data.floor + '-' + this.data.room;

        },

        items () {

          return this.data;

        }

      },

      filters: {

        local (localData) {

          return localData.build + '-' + localData.room;

        }

      }

    }

</script>