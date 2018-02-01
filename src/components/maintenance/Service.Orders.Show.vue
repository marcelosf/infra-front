<template>

    <div>

        <v-layout row wrap>

            <v-flex xs12 sm12 md12 lg12>

                <v-card flat>

                    <v-card-title primary-title>

                        <div class="title">Observation</div>

                    </v-card-title>

                    <v-card-text>

                        <blockquote class="blockquote">

                            {{ order ? order.observation : ''}}

                        </blockquote>

                    </v-card-text>

                </v-card>

            </v-flex>

            <v-flex xs12 sm6 md6 lg6>

                <v-card flat>

                    <v-card-text>

                        <date-picker label="Start date"></date-picker>

                    </v-card-text>

                </v-card>

            </v-flex>

            <v-flex xs12 sm6 md6 lg6>

                <v-card flat>

                    <v-card-text>

                        <date-picker label="End date"></date-picker>

                    </v-card-text>

                </v-card>

            </v-flex>

            <v-flex xs12 sm12 md12 lg12>

                <v-card flat>

                    <v-card-text>

                        <v-select
                                label="Status"
                                v-bind:items="statusItems"
                                item-value="status"
                                item-text="text"
                                v-model="order"
                        ></v-select>

                    </v-card-text>

                </v-card>

            </v-flex>

            <v-flex xs12 sm12 md12 lg12>

                <v-card flat>

                    <v-card-title primary-title>

                        <div class="title">Report</div>

                    </v-card-title>

                    <v-card-text>

                        <blockquote class="blockquote">

                            {{ order ? order.report : '' }}

                        </blockquote>

                    </v-card-text>

                </v-card>

            </v-flex>


        </v-layout>

    </div>

</template>

<script>
  import DatePicker from '@/layouts/DatePicker';

  export default {

    data () {

      return {

        statusItems: [

          {status: 'autorizado', text: 'autorizado'},
          {status: 'andamento', text: 'andamento'},
          {status: 'resolvido', text: 'resolvido'},
          {status: 'cancelado', text: 'cancelado'},
          {status: 'aguardando_info', text: 'aguardando_info'},
          {status: 'aguardando_material', text: 'aguardando_material'}

        ]

      }

    },

    computed: {

      order: {

        get () {

          return this.$store.state.order.order;

        },

        set (value) {

          console.log(value);

          this.$store.state.order.order.status = value;

        }

      },

      orderStatus () {

        return this.$store.getters.orders.status;

      }

    },

    components: {

      'date-picker': DatePicker

    }

  }

</script>