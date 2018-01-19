<template>

    <v-container grid-list-md>

        <v-layout row wrap>

            <v-flex xs12 sm6 md6 offset-sm2 offset-md2>

                <account-component title="Account" @error="showError"></account-component>

            </v-flex>

        </v-layout>

        <v-snackbar :timeout="5000" :bottom="true" v-model="snackbar">

            {{ snackbarText }}

            <v-btn flat color="pink" @click.native="snackbar = false">CLOSE</v-btn>

        </v-snackbar>

    </v-container>

</template>

<script>
    import Account from '../../layouts/Account.vue'

    export default {

      data () {

        return {

          snackbar: false,

          snackbarText: 'Default'

        }

      },

      methods: {

        showError (message) {

          this.snackbarText = message;

          this.snackbar = true;

        }

      },

      components: {

        'account-component': Account

      }

    }
</script>