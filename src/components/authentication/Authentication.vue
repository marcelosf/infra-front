<template>

    <v-container grid-list-md>

        <v-layout row wrap>

            <v-flex xs12 sm6 md6 offset-sm2 offset-md2>

                <account-component title="Account" @error="showError"></account-component>

            </v-flex>

        </v-layout>

        <v-snackbar :timeout="snackbar.timeout" :bottom="true" v-model="snackbar.toggle">

            {{ snackbar.message }}

            <v-btn flat color="pink" @click.native="snackbar.toggle = false">CLOSE</v-btn>

        </v-snackbar>

    </v-container>

</template>

<script>
    import Account from '../../layouts/Account.vue'

    export default {

      data () {

        return {

          snackbar: {

            toggle: false,

            message: '',

            timeout: process.env.SNACKBAR_TIMEOUT

          }

        }

      },

      methods: {

        showError (message) {

          this.snackbar.message = message;

          this.snackbar.toggle = true;

        }

      },

      components: {

        'account-component': Account

      }

    }
</script>