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

                            Observation text.

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

                        <v-select label="Status"></v-select>

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

                            Observation text.

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

    components: {

      'date-picker': DatePicker

    }

  }

</script>