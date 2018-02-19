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

                        <v-flex xs2 sm2 md2>

                            {{ i + 1 }}

                        </v-flex>

                        <v-flex xs3 sm3 md3>

                            <b>Sent on:</b> {{ report ? report.created_at : '' | dateTimeBr }}

                        </v-flex>

                        <v-flex xs7 sm7 md7>

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

        <report-create v-model="report" @input="saveReport">

        </report-create>

        <message v-model="message.toggle" :message="message.text">

        </message>

    </workspace>

</template>

<script>
  import Workspace from '@/layouts/WorkspaceCard';
  import {MaintenanceResource} from '@/resources/MaintenanceResource';
  import {DateTimeFilter} from '@/filters/DateTimeFilter';
  import ReportCreate from './Service.Order.Report.Create';
  import SnackBar from '@/layouts/SnackBar';

  export default {

    props: ['value', 'order'],

    data () {

      return {

        dialog: false,

        reports: [],

        report: null,

        message: {

          toggle: false,

          text: ''

        }

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

      saveReport (report) {

        if (report) {

          this._setReportOrderId();

          this._storeOrderReport();

        }

      },

      _loadReports (order) {

        if (order) {

          MaintenanceResource.listOrderReportsByOrder(order, (reports) => {

            this.reports = reports;

          });

        }

      },

      _storeOrderReport () {

        MaintenanceResource.storeOrderReport(this.report, (response) => {

          console.log('store');

          this._pushReport(response.data);

          this._showMessage(response.message);

        }, (error) => {

          this._showMessage(error.message);

        });

      },

      _setReportOrderId () {

        if (this.report) this.report.order_id = this.order.id;

      },

      _pushReport (report) {

        this._loadReports(report.order_id);

      },

      _showMessage (text) {

        this.message.text = text;

        this.message.toggle = true;

      }

    },

    components: {

      'workspace': Workspace,
      'report-create': ReportCreate,
      'message': SnackBar

    },

    filters: {

      dateTimeBr (date) {

        return DateTimeFilter.formatToBr(date);

      }

    }

  }

</script>