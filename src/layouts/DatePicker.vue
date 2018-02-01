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
        >
        </v-text-field>

        <v-date-picker v-model="date" no-title scrollable actions>

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

      props: ['label', 'value'],

      data () {

        return {

          date: null,

          menu: false,

          dateFormatted: null,

          modal: false

        }

      },

      watch: {

        value (value) {

          value ? this.date = value : this.date = null;

        },

        date (value) {

          this.dateFormatted = this._formatDate(value);

          this.$emit('input', this.date);

        }

      },

      methods: {

        _formatDate (date) {

          if (!date) {

            return null;

          }

          return date.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/, '$3/$2/$1');

        }

      }

    }
</script>