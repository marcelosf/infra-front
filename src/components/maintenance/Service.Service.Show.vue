<template>

    <div>

        <v-layout row wrap>

            <v-flex xs12 sm12 md12 lg12>

                <v-layout row wrap>

                    <v-flex xs12 md6>

                        <service-requester></service-requester>

                    </v-flex>

                    <v-flex xs12 md6>

                        <service-answerable></service-answerable>

                    </v-flex>

                </v-layout>

            </v-flex>

            <v-flex xs12 sm12 md12 lg12>

                <v-card flat>

                    <v-card-title primary-title>

                        <div class="title">Service</div>

                    </v-card-title>

                    <v-card-text>

                        <span class="subheading">Description:</span>

                        <blockquote class="blockquote">{{ service.description }}</blockquote>

                        <span class="subheading">Status:</span>

                        <blockquote class="blockquote">

                            <v-select></v-select>

                        </blockquote>

                    </v-card-text>

                </v-card>

            </v-flex>

        </v-layout>

    </div>

</template>

<script>
  import WorkspaceCard from '@/layouts/WorkspaceCard';
  import ServiceRequester from './Service.Requester';
  import ServiceAnswerable from './Service.Answerable';

  export default {

    computed: {

      code () {

        return this.$store.state.service.service.code;

      },

      service () {

        return this.$store.state.service.service;

      }

    },

    components: {

      'workspace-card': WorkspaceCard,
      'service-requester': ServiceRequester,
      'service-answerable': ServiceAnswerable

    }

  }

</script>