<template>

    <v-container>

        <workspace-card :title="title | capitalize ">

                <span slot="content" v-if="ordersTab && hasOrders" class="mx-3 mt-2">

                        <v-select
                                v-bind:items="orders"
                                item-text="code"
                                item-value="id"
                                v-model="orderSelector"
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

                        <v-tabs-item :href="'#orders'" v-if="hasOrders">Orders</v-tabs-item>

                    </v-tabs-bar>

                    <v-tabs-items>

                        <v-tabs-content :id="'service'">

                            <service></service>

                        </v-tabs-content>

                        <v-tabs-content :id="'orders'" v-if="hasOrders">

                            {{ order ? order.status : '' }}

                            <orders v-model="order" @updated="_updateOrder">

                            </orders>

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
    import Order from './Entities/Order';

    export default {

        created () {

          this._initialize();

        },

        data () {

          return {

            selectedTab: null,

            selectedOrder: null,

            order: Order.order

          }

        },

        computed: {

          hasOrders () {

            return this.$store.state.order.orders !== null;

          },

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

          orderSelector: {

            get () {

              if (this.$store.state.order.orders) {

                let firstOrder = this._getFirsOrder(this.$store.state.order.orders);

                this.order = firstOrder;

                return firstOrder;

              }

              return null;

            },

            set (value) {

              let order = this._find(value);

              this.order = order;

              return order;

            }

          }

        },

        methods: {

          _initialize () {

            this._loadOrders();

          },

          _loadOrders () {

            let service = this.$store.state.service.service;

            MaintenanceResource.listOrdersByService(service.id, (orders) => {

              this.$store.state.order.orders = orders;

            });

          },

          _getFirsOrder (orders) {

            return orders[0];

          },

          _find (order) {

            return Filter.byParameterKey(order, 'id', this.$store.state.order.orders)[0];

          },

          _updateOrder () {

            console.log('testa');
            MaintenanceResource.updateOrder(this.order, (response) => {

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