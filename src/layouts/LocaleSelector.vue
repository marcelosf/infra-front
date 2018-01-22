<template>

    <v-container grid-list-lg>

        <v-layout row wrap>

            <v-flex xs12 sm4 md4 lg4>

                <v-select
                        label="Bloco"
                        v-bind:items="locales"
                        item-text="build"
                        item-value="id"
                        v-model="build"
                        persistent-hint
                        autocomplete
                ></v-select>

            </v-flex>

            <v-flex xs12 sm4 md4 lg4>

                <v-select
                        label="Andar"
                        v-bind:items="floorItems"
                        item-text="floor"
                        item-value="id"
                        v-model="floor"
                        persistent-hint
                        autocomplete
                ></v-select>

            </v-flex>

            <v-flex xs12 sm4 md4 lg4>

                <v-select
                        label="Sala"
                        v-bind:items="localeItems"
                        item-text="name"
                        item-value="id"
                        v-model="room"
                        persistent-hint
                        autocomplete
                ></v-select>

            </v-flex>

        </v-layout>

    </v-container>

</template>

<script>
  import {Locales} from '@/resources/Locales';
  import {Filter} from '@/filters/LocaleFilter';

  export default {

    created () {

      Locales.list((items) => {

        this.locales = items;

      });

    },

    data () {

      return {

        locales: [],

        build: '',

        floor: '',

        room: ''

      }

    },

    computed: {

      floorItems () {

        let build = this.locales[(this.build - 1)];

        if (build) {

          let floors = Filter.byParameterKey(build.floor, 'floor', this.locales);

          this.dispatchUpdateEvent();

          return floors;

        }

        return [];

      },

      localeItems () {

        let locale = this.locales[(this.floor - 1)];

        if (locale) {

          let locales = Filter.byParameterKey(locale.name, 'name', this.locales);

          this.dispatchUpdateEvent();

          return locales;

        }

        return [];

      }

    },

    methods: {

      dispatchUpdateEvent () {

        this.$emit('update', {build: this.build, floor: this.floor, room: this.room});

      }

    }

  }

</script>