<template>

    <v-select
        v-bind:items="items"
        v-model="epis"
        item-value="id"
        item-text="equipament"
        multiple
        @blur="dispatchEpis"
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

          this.epis = value.epis

        }

      },

      methods: {

        dispatchEpis () {

          if (this._epiUpdated()) {

            let epi = this.value;

            epi.epis = this.epis;

            this._emitEpi(epi);

          }

        },

        _epiUpdated () {

          return this.epis.length !== this.value.epis.length;

        },

        _emitEpi (epi) {

          this.$emit('input', epi);

          this.$emit('updated');

        }

      }

    }
</script>