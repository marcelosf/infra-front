<template>

    <v-dialog v-model="dialog" persistent max-width="500px">

        <v-btn fab fixed bottom right color="primary" slot="activator" @click="_clearForm">

            <v-icon>add</v-icon>

        </v-btn>

        <v-card>

            <v-card-title>

                <span class="headline">New Report</span>

            </v-card-title>

            <v-card-text>

                <v-form v-model="rules.valid" ref="form" lazy-validation>

                    <v-text-field label="Report" multi-line :rules="rules.content" v-model="report.content">

                    </v-text-field>

                </v-form>

            </v-card-text>

            <v-card-actions>

                <v-btn flat :disabled="!rules.valid" @click="save">Save</v-btn>

                <v-btn flat @click="dialog = false">Close</v-btn>

            </v-card-actions>

        </v-card>

    </v-dialog>

</template>

<script>
    import Report from '@/components/maintenance/Entities/Report';
    import {User} from '@/resources/User'

    export default {

      data () {

        return {

          dialog: false,

          report: Report.report,

          rules: Report.rules

        }

      },

      methods: {

        save () {

          this.$set(this.report, 'user_id', User.getUser().id);

          this.$emit('input', this.report);

          this._closeCreateDialog();

        },

        _closeCreateDialog () {

          this.dialog = false;

        },

        _clearForm () {

          this.$refs.form.reset();

        }

      }

    }
</script>