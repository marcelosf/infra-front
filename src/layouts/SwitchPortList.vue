<template>

    <div>

        <v-select

                label="Switch"
                name="connection-switch"
                :items="switchItems"
                item-text="name"
                item-value="id"
                v-model="selectedSwitch"

        ></v-select>

        <v-card >

            <v-toolbar color="primary" dark>

                <v-toolbar-title>Switch</v-toolbar-title>

                <v-spacer></v-spacer>

            </v-toolbar>

            <v-data-table

                    :items="ports"
                    hide-headers
                    :rows-per-page-items="table.rowsPerPageItems"
                    :rows-per-page-text="table.rowsPerPageText"
                    no-data-text="Sem dados disponíveis"


            >

                <template slot="items" slot-scope="props">

                    <td>

                        <v-btn flat>

                            <v-icon left>router</v-icon>

                            {{ props.item.port }}

                        </v-btn>

                    </td>

                    <td>

                        <v-edit-dialog lazy>

                            <v-btn flat>

                                <v-icon left>aspect_ratio</v-icon>

                                {{ props.item.ppanel | valueOrText }}

                            </v-btn>

                            <div slot="input" class="mt-3 mb-3 mx-5 title">Atualizar Ponto</div>

                            <v-select

                                    color="primary"
                                    slot="input"
                                    :items="patchItems"
                                    item-text="patchPort"
                                    item-value="patchPort"
                                    label="Patch Panel"
                                    name="connection-ppanel"
                                    prepend-icon="aspect_ratio"
                                    v-model="props.item.ppanel"
                                    @input="switchAssignPatch(props.item)"


                            ></v-select>

                        </v-edit-dialog>

                    </td>

                </template>

            </v-data-table>

            <snack-bar :message="snackBar.message" v-model="snackBar.active">

            </snack-bar>

        </v-card>

    </div>

</template>

<script>
    import SnackBar from '@/layouts/SnackBar';
    import {SwitchPortResource} from '@/resources/SwitchPortResource';
    import {SwitchResource} from '@/resources/SwitchResource';
    import {PatchResource} from '@/resources/PatchResource';
    import {Filter} from '@/filters/Filter';
    import {TextFilters} from '@/filters/TextFilters';

    export default {

      props: ['rackId'],

      data () {

        return {

          ports: [],

          switchItems: [],

          patchItems: [],

          selectedSwitch: null,

          table: {

            rowsPerPageText: 'Linhas por página',

            rowsPerPageItems: [10, 5]

          },

          snackBar: {

            active: false,

            message: ''

          }

        }

      },

      watch: {

        rackId (value) {

          this.getSwitches({parameter: 'dstack.rack_id', value: value});

          this.getPatches({parameter: 'rack_id', value: value});

        },

        selectedSwitch (value) {

          this.setPorts({parameter: 'switch_id', value: value});

        }

      },

      methods: {

        setPorts (search) {

          this.resourceHandler((ports) => {

            console.log(ports);

            this.ports = ports.data;

          }, '', search);

        },

        getSwitches (search) {

          this.switchResourceHandler((switches) => {

            this.switchItems = switches.data;

          }, '', search);

        },

        getPatches (search) {

          this.patchResourceHandler((patches) => {

            this.patchItems = this.getFreePatches(patches.data);

          }, '', search);

        },

        getFreePatches (patches) {

          let filtered = Filter.byParameterKey('', 'switchPort', patches);

          filtered.forEach((item) => {

          });

          return filtered;

        },

        switchAssignPatch (switchPort) {

          let port = this.setPatchIdToSwitchPort(switchPort);

          this.switchPortResourceHandler((response) => {

            this.getPatches({parameter: 'rackId', value: this.rackId});

            this.showMessage(response.message);

          }, port);

        },

        setPatchIdToSwitchPort (switchPort) {

          let patch = Filter.byParameterKey(switchPort.ppanel, 'patchPort', this.patchItems);

          let port = switchPort;

          port.ppanel_id = patch[0].id;

          return port;

        },

        showMessage (message) {

          this.snackBar.message = message;

          this.snackBar.active = true;

        },

        resourceHandler (actions, page, search, errors) {

          return SwitchPortResource.listSwitchPorts(actions, page, search, errors);

        },

        switchResourceHandler (actions, page, search, errors) {

          return SwitchResource.listSwitches(actions, page, search, errors);

        },

        patchResourceHandler (actions, page, search, errors) {

          return PatchResource.list(actions, page, search, errors);

        },

        switchPortResourceHandler (actions, data, errors) {

          return SwitchPortResource.update(actions, data, errors);

        }

      },

      components: {

        'snack-bar': SnackBar

      },

      filters: {

        valueOrText (value) {

            return TextFilters.valueOrText(value, 'Livre');

        }

      }

    }
</script>