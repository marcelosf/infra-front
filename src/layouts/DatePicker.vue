<template>

    <v-menu
        lazy
        :close-on-content-click="false"
        v-model="menu"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
    >

        <v-text-field
            slot="activator"
            :label="label"
            v-model="dateFormatted"
            prepend-icon="event"
            @blur="onDateFieldBlur"
        >
        </v-text-field>

        <v-date-picker v-model="date" no-title scrollable actions @input="datePickerOnInput">

            <template slot-scope="{ save, cancel }">

                <v-card-actions>

                    <v-spacer></v-spacer>

                    <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                    <v-btn flat color="primary" @click="save">Ok</v-btn>

                </v-card-actions>

            </template>

        </v-date-picker>

    </v-menu>

</template>

<script>
    export default {

      props: ['label', 'model'],

      data () {

        return {

          menu: false,

          date: null,

          dateFormatted: null,

          modal: false

        }

      },

      methods: {

        onDateFieldBlur () {

          this.date = this._parseDate(this.dateFormatted);

          console.log(this.date);

        },

        datePickerOnInput (date) {

          this.dateFormatted = this._formatDate(date);

        },

        _parseDate (date) {

          if (!date) {

            return null;

          }

          return date.replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/, '$3-$2-$1');

        },

        _formatDate (date) {

          if (!date) {

            return null;

          }

          return date.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/, '$3/$2/$1');

        }

      }

    }
</script>