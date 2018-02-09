<template>

    <workspace title="Reports" classes="light-blue white--text">

        <span slot="content">

            <span class="ml-3 title">

                {{ order ? order.code : '' }}

            </span>

        </span>

        <span slot="menu">

            <v-btn icon @click.native="dialog = false" class="white--text">

                <v-icon>close</v-icon>

            </v-btn>

        </span>

        <v-expansion-panel>

            <v-expansion-panel-content v-for="(report,i) in reports" :key="i">

                <div slot="header">

                    <v-layout wrap row>

                        <v-flex xs3 sm3 md3>

                            <b>Sent on:</b> {{ report ? report.created_at : '' | dateTimeBr }}

                        </v-flex>

                        <v-flex xs9 sm9 md9>

                            <b>By:</b> {{ report ? report.user.name : '' }}

                        </v-flex>

                    </v-layout>

                </div>

                <v-card>

                    <v-card-text class="grey lighten-3">

                        {{ report ? report.content : '' }}

                    </v-card-text>

                </v-card>

            </v-expansion-panel-content>

        </v-expansion-panel>

        <report-create></report-create>

    </workspace>

</template>

<script>
  import Workspace from '@/layouts/WorkspaceCard';
  import {MaintenanceResource} from '@/resources/MaintenanceResource';
  import {DateTimeFilter} from '@/filters/DateTimeFilter';
  import ReportCreate from './Service.Order.Report.Create';

  export default {

    props: ['value', 'order'],

    data () {

      return {

        dialog: true,

        reports: []

      }

    },

    watch: {

      value (value) {

        this.dialog = value;

      },

      dialog (dialog) {

        if (dialog && this.order) this._loadReports(this.order.id);

        this._emitReport(dialog);

      }

    },

    methods: {

      _emitReport (value) {

        this.$emit('input', value)

      },

      _loadReports (order) {

        if (order) {

          MaintenanceResource.listOrderReportsByOrder(order, (reports) => {

            console.log(reports);

            this.reports = reports;

          });

        }

      }

    },

    components: {

      'workspace': Workspace,
      'report-create': ReportCreate

    },

    filters: {

      dateTimeBr (date) {

        return DateTimeFilter.formatToBr(date);

      }

    }

  }

</script>