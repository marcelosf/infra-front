<template>

    <v-form ref="form">

        <v-container grid-list-lg>

            <v-layout row wrap>

                <v-flex xs12 sm4 md4 lg4>

                    <v-select
                            label="Bloco"
                            v-bind:items="locales"
                            item-text="build"
                            item-value="build"
                            v-model="build"
                            persistent-hint
                            autocomplete
                            required
                    ></v-select>

                </v-flex>

                <v-flex xs12 sm4 md4 lg4>

                    <v-select
                            label="Andar"
                            v-bind:items="floorItems"
                            item-text="floor"
                            item-value="floor"
                            v-model="floor"
                            persistent-hint
                            autocomplete
                            required
                    ></v-select>

                </v-flex>

                <v-flex xs12 sm4 md4 lg4>

                    <v-select
                            label="Sala"
                            v-bind:items="localeItems"
                            item-text="local"
                            item-value="local"
                            v-model="room"
                            persistent-hint
                            autocomplete
                            required
                    ></v-select>

                </v-flex>

            </v-layout>

        </v-container>

    </v-form>

</template>

<script>
  import {Locales} from '@/resources/Locales';
  import {Filter} from '@/filters/Filter';

  export default {

    created () {

      Locales.list((items) => {

        this.locales = items;

      });

    },

    data () {

      return {

        locales: [],

        filteredList: [],

        build: '',

        buildRule: [(value) => !!value || 'Please, select an option.'],

        floor: '',

        floorRule: [(value) => !!value || 'Please, select an option.'],

        room: '',

        roomRule: [(value) => !!value || 'Please, select an option.'],

        valid: false

      }

    },

    computed: {

      floorItems () {

        if (this.build) {

          let floors = Filter.byParameterKey(this.build, 'build', this.locales);

          this.filteredList = floors;

          this.dispatchUpdateEvent();

          return floors;

        }

        return [];

      },

      localeItems () {

        if (this.floor) {

          let locales = Filter.byParameterKey(this.floor, 'floor', this.filteredList);

          this.dispatchUpdateEvent();

          return locales;

        }

        return [];

      }

    },

    methods: {

      dispatchUpdateEvent () {

        this.$emit('update', {build: this.build, floor: this.floor, room: this.room, valid: this.valid});

      },

      clearForm () {

        this.$refs.form.reset();

      }

    }

  }

</script>