<template>

    <v-snackbar :timeout="timeout" :bottom="position" v-model="toggle">

        {{ message }}

        <v-btn flat color="pink" @click.native="snackbar.toggle = false">CLOSE</v-btn>

    </v-snackbar>

</template>

<script>
    export default {

      props: ['message', 'value'],

      data () {

        return {

          toggle: false,

          timeout: parseInt(process.env.SNACKBAR_TIMEOUT),

          position: 'bottom'

        }

      },

      watch: {

        value (value) {

          this.toggle = value;

        },

        toggle (value) {

          console.log(value);

          this.$emit('input', value);

        }

      }

    }
</script>