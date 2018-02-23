<template>

    <workspace title="New Order" classes="light-blue white--text">

        <span slot="menu">

            <v-btn icon @click.native="closeDialog" class="white--text">

                <v-icon>close</v-icon>

            </v-btn>

        </span>

        <v-form ref="form">

            <v-card flat>

                <v-card-text>

                    <v-layout row wrap>

                        <v-flex xs12 sm12 md12>

                            <v-text-field
                                    v-model="order.description"
                                    label="Description"
                                    name="description"
                                    multi-line
                                    clearable
                            >
                            </v-text-field>

                        </v-flex>

                        <v-flex xs12 sm12 md12>

                            <v-text-field
                                    v-model="order.observation"
                                    label="Observation"
                                    name="observation"
                                    multi-line
                            >

                            </v-text-field>

                        </v-flex>

                        <v-flex xs12 sm4 md4 lg4>

                            <date-picker v-model="order.start_date" label="Start Date"></date-picker>

                        </v-flex>

                        <v-flex xs12 sm4 md4 lg4>

                            <date-picker v-model="order.end_date" label="End Date"></date-picker>

                        </v-flex>

                        <v-flex xs12 sm4 md4 lg4>

                            <v-select
                                    label="Status"
                                    v-bind:items="statusItems"
                                    item-value="status"
                                    item-text="text"
                                    v-model="order.status"
                            >
                            </v-select>

                        </v-flex>

                        <v-flex xs12 sm12 md12 lg12>

                            <v-select
                                    v-bind:items="techniciansItems"
                                    item-value="id"
                                    item-text="name"
                                    v-model="order.technicians"
                                    label="Technicians"
                                    multiple
                                    chips
                            >
                            </v-select>

                        </v-flex>

                        <v-flex xs12 sm6 md6 lg6>

                            <v-select
                                v-bind:items="technicalItems"
                                item-value="id"
                                item-text="name"
                                v-model="order.technical_id"
                                label="Technical Area"
                            >
                            </v-select>

                        </v-flex>

                        <v-flex xs12 sm6 md6 lg6>

                            <epis v-model="order" :items="epiItems" label="Epis">

                            </epis>

                        </v-flex>

                    </v-layout>


                </v-card-text>

                <v-card-actions>

                    <v-btn color="primary" @click="save">Save</v-btn>

                    <v-btn @click="cancel">Cancel</v-btn>

                </v-card-actions>

            </v-card>

        </v-form>

    </workspace>

</template>

<script>
    import WorkspaceCard from '@/layouts/WorkspaceCard';
    import DatePicker from '@/layouts/DatePicker';
    import {UserResource} from '@/resources/UserResource';
    import {User} from '@/resources/User';
    import Epis from './Service.Orders.Show.Epis';
    import {MaintenanceResource} from '@/resources/MaintenanceResource';
    import Order from './Entities/Order';

    export default {

      props: ['value'],

      created () {

        this.initialize();

      },

      data () {

        return {

          dialog: false,

          statusItems: [

            {status: 'autorizado', text: 'autorizado'},
            {status: 'andamento', text: 'andamento'},
            {status: 'resolvido', text: 'resolvido'},
            {status: 'cancelado', text: 'cancelado'},
            {status: 'aguardando_info', text: 'aguardando_info'},
            {status: 'aguardando_material', text: 'aguardando_material'},
            {status: 'aberto', text: 'Aberto'}

          ],

          epiItems: [],

          techniciansItems: [],

          technicalItems: [],

          order: Order.order

        }

      },

      watch: {

        value (value) {

          if (value) {

            this._clearForm();

            this._setDefaultDescription();

          }

          this.dialog = value;

        },

        order () {

          this._setDefaultDescription();

        }

      },

      methods: {

        closeDialog () {

          this.dialog = false;

          this.$emit('input', this.dialog);

        },

        save () {

          this.$set(this.order, 'manager_id', User.getUser().id);

          this.$set(this.order, 'service_id', this._getService().id);

          this._storeOrder();

          this.closeDialog();

        },

        cancel () {

          this.closeDialog();

          this._clearForm();

        },

        _clearForm () {

          this.$refs.form.reset();

        },

        _loadTechnicians () {

          UserResource.list((response) => {

            this.techniciansItems = response.data;

          });

        },

        _loadEpiItems () {

          MaintenanceResource.listEpis((epis) => {

            this.epiItems = epis;

          });

        },

        _loadTechnicalItems () {

          MaintenanceResource.listTechnicalAreas((technicalAreas) => {

            this.technicalItems = technicalAreas;

          });

        },

        _getService () {

          return this.$store.state.service.service;

        },

        _storeOrder () {

            MaintenanceResource.storeOrder(this.order, (response) => {

              this.reloadOrdersList();

              this.dispatchOrderCreated(response);

            });

        },

        _setDefaultDescription () {

          this.$set(this.order, 'description', this._getService().description)

        },

        dispatchOrderCreated (response) {

          this.$emit('created', response);

        },

        reloadOrdersList () {

          MaintenanceResource.listOrdersByService(this._getService().id, (orders) => {

            this.$store.state.order.orders = orders;

          });

        },

        initialize () {

          this._loadTechnicians();

          this._loadEpiItems();

          this._loadTechnicalItems();

        }

      },

      components: {

        'workspace': WorkspaceCard,
        'date-picker': DatePicker,
        'epis': Epis

      }

    }
</script>