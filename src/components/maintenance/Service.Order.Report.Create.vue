<template>

    <v-dialog v-model="dialog" persistent max-width="500px">

        <v-btn fab fixed bottom right color="primary" slot="activator">

            <v-icon>add</v-icon>

        </v-btn>

        <v-card>

            <v-card-title>

                <span class="headline">New Report</span>

            </v-card-title>

            <v-card-text>

                <v-form>

                    <v-text-field label="Report" multi-line>

                    </v-text-field>

                </v-form>

            </v-card-text>

            <v-card-actions>

                <v-btn flat>Save</v-btn>

                <v-btn flat @click="dialog = false">Close</v-btn>

            </v-card-actions>

        </v-card>

    </v-dialog>

</template>

<script>
    export default {

      data () {

        return {

          dialog: false

        }

      }

    }
</script>