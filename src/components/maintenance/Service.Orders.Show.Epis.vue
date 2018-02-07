<template>

    <v-select
        v-bind:items="items"
        v-model="epis"
        item-value="id"
        item-text="equipament"
        multiple
    >

    </v-select>

</template>

<script>
    export default {

      props: ['items', 'value'],

      data () {

        return {

          epis: []

        }

      },

      watch: {

        value (value) {

          this.epis = value.epis;

          console.log(value.epis);

        }

      }

    }
</script>