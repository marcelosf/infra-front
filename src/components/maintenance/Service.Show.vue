<template>

    <v-container>

        <workspace-card :title="title | capitalize ">

                <span slot="content" v-if="ordersTab" class="mx-3 mt-2">

                        <v-select
                                v-bind:items="orders"
                                item-text="code"
                                item-value="id"
                                v-model="order"
                        >
                        </v-select>

                </span>

                <span slot="menu">

                    <v-btn icon :to="{name: 'maintenance.service'}">

                        <v-icon>list</v-icon>

                    </v-btn>

                    <v-btn icon :to="{name: 'maintenance.service.create'}">

                        <v-icon>add</v-icon>

                    </v-btn>

                </span>

                <v-tabs centered v-model="selectedTab">

                    <v-tabs-bar>

                        <v-tabs-slider></v-tabs-slider>

                        <v-tabs-item :href="'#service'">Service</v-tabs-item>

                        <v-tabs-item :href="'#orders'">Orders</v-tabs-item>

                    </v-tabs-bar>

                    <v-tabs-items>

                        <v-tabs-content :id="'service'">

                            <service></service>

                        </v-tabs-content>

                        <v-tabs-content :id="'orders'">

                            <orders></orders>

                        </v-tabs-content>

                    </v-tabs-items>

                </v-tabs>

        </workspace-card>

    </v-container>

</template>

<script>
    import WorkspaceCard from '@/layouts/WorkspaceCard';
    import ServiceServiceShow from './Service.Service.Show';
    import ServiceOrderShow from './Service.Orders.Show';
    import {MaintenanceResource} from '@/resources/MaintenanceResource';
    import {TextFilters} from '@/filters/TextFilters';
    import {Filter} from '@/filters/Filter';

    export default {

        created () {

          this._initialize();

        },

        data () {

          return {

            selectedTab: null,

            selectedOrder: null

          }

        },

        computed: {

          title () {

            let title = 'Service ' + this.$store.state.service.service.code;

            if (this.selectedTab === 'service') {

              return title;

            }

            title = title + ' Order';

            return title;

          },

          ordersTab () {

            return this.selectedTab === 'orders';

          },

          orders () {

            return this.$store.state.order.orders;

          },

          order: {

            get () {

              if (!this.$store.state.order.order) {

                this.$store.state.order.order = this.$store.state.order.orders[0];

                return this.$store.state.order.order;

              }

              return this.$store.state.order.order;

            },

            set (value) {

              let order = Filter.byParameterKey(value, 'id', this.$store.state.order.orders);

              this.$store.state.order.order = order[0];

            }

          }

        },

        methods: {

          _initialize () {

            this._loadOrders();

            this.$store.state.order.order = null;

          },

          _loadOrders () {

            let service = this.$store.state.service.service;

                MaintenanceResource.listOrdersByService(service.id, (response) => {

                  this.$store.state.order.orders = response;

                });

            }

        },

        components: {

          'service': ServiceServiceShow,
          'orders': ServiceOrderShow,
          'workspace-card': WorkspaceCard

        },

        filters: {

          capitalize (value) {

            return TextFilters.capitalize(value);

          }

        }

    }
</script>