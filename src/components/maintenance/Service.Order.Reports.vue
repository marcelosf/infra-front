<template>

    <workspace title="Reports" classes="light-blue white--text">

        <span slot="content">

            <span class="ml-3 title">

                {{ order ? order.code : '' }}

            </span>

        </span>

        <span slot="menu">

            <v-btn icon @click.native="dialog = false" class="white--text">

                <v-icon>close</v-icon>

            </v-btn>

        </span>

        <v-expansion-panel>

            <v-expansion-panel-content v-for="(item,i) in 5" :key="i">

                <div slot="header">

                    User Name

                </div>

                <v-card>

                    <v-card-text class="grey lighten-3">

                        Report Content

                    </v-card-text>

                </v-card>

            </v-expansion-panel-content>

        </v-expansion-panel>

    </workspace>

</template>

<script>
  import Workspace from '@/layouts/WorkspaceCard';

  export default {

    props: ['value', 'order'],

    data () {

      return {

        dialog: true

      }

    },

    watch: {

      value (value) {

        this.dialog = value;

      },

      dialog (value) {

        this.$emit('input', value);

      },

      order (value) {

        console.log(value);

      }

    },

    components: {

      'workspace': Workspace

    }

    }

</script>