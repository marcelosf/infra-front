<template>

    <div>

        <v-select

                name="connection-patch-list"
                label="Patch Panel"
                :items="patchItems"
                item-value="patchNumber"
                item-text="patchNumber"
                v-model="patchSelected"

        ></v-select>

        <v-card>

            <v-toolbar color="primary" dark>

                <v-toolbar-title>Patch Port</v-toolbar-title>

            </v-toolbar>

            <v-data-table
                    :items="patchList"
                    hide-headers
                    :rows-per-page-items="table.rowsPerPageItems"
                    :rows-per-page-text="table.rowsPerPageText"
                    no-data-text="Sem dados disponíveis"
            >

                <template slot="items" slot-scope="props">

                    <td>

                        <v-btn flat>

                            <v-icon left>aspect_ratio</v-icon>

                            {{ props.item.patchPort }}

                        </v-btn>

                    </td>

                    <td>

                        <v-edit-dialog lazy>

                            <v-btn flat>

                                <v-icon left>router</v-icon>

                                {{ props.item.switchHostname | valueOrText }}

                            </v-btn>

                            <div slot="input" class="mt-3 mb-3 mx-5 title">Atualizar Ponto</div>

                            <v-select

                                    color="primary"
                                    slot="input"
                                    :items="switchItems"
                                    item-text="name"
                                    item-value="name"
                                    label="Switch"
                                    name="connection-ppanel-switch"
                                    prepend-icon="aspect_ratio"
                                    v-model="props.item.switchHostname"


                            ></v-select>

                        </v-edit-dialog>

                    </td>

                    <td>

                        <v-edit-dialog lazy>

                            <v-btn flat @click="switchPortClicked(props.item)">

                                <v-icon left>video_label</v-icon>

                                {{ props.item.switchPort | valueOrText }}

                            </v-btn>

                            <div slot="input" class="mt-3 mb-3 mx-5 title">Atualizar Ponto</div>

                            <v-select

                                    color="primary"
                                    slot="input"
                                    :items="switchPortItems"
                                    item-text="port"
                                    item-value="port"
                                    label="Porta do Switch"
                                    name="connection-ppanel-port"
                                    prepend-icon="aspect_ratio"
                                    v-model="props.item.switchPort"
                                    @input="selectSwitchPort(props.item)"


                            ></v-select>

                        </v-edit-dialog>

                    </td>

                </template>

            </v-data-table>

        </v-card>

        <snack-bar v-model="snackBar.active" :message="snackBar.message"></snack-bar>

    </div>

</template>

<script>
    import {PatchResource} from '@/resources/PatchResource';
    import SnackBar from '@/layouts/SnackBar';
    import {Filter} from '@/filters/Filter';
    import {TextFilters} from '@/filters/TextFilters';
    import {SwitchResource} from '@/resources/SwitchResource';
    import {SwitchPortResource} from '@/resources/SwitchPortResource';

    export default {

      props: ['rackId'],

      data () {

        return {

          patchItems: [],

          patchSelected: null,

          patchList: [],

          patchPortItems: [],

          switchItems: [],

          switchPortItems: [],

          table: {

            rowsPerPageItems: [10, 5],

            rowsPerPageText: 'Linhas por página'

          },

          snackBar: {

            active: false,

            message: ''

          }

        }

      },

      watch: {

        rackId (value) {

          this.setPatchItems({parameter: 'rack_id', value: value});

          this.setSwitchItems({parameter: 'dstack.rack_id', value: value});

        },

        patchSelected (value) {

          this.setPatchList(value);

        }

      },

      methods: {

        setPatchItems (search) {

          this._patchHandler((patches) => {

            this.patchItems = this._addPatchNumberAttributeToPatchItems(patches);

          }, '', search);

        },

        setSwitchItems (search) {

          this._switchResourceHandler((switches) => {

            this.switchItems = switches.data;

          }, '', search);

        },

        setSwitchPortItems (search) {

          this._switchPortResourceHandler((ports) => {

            this.switchPortItems = ports.data;

          }, '', search);

        },

        clearSwitchPortItems () {

          this.switchPortItems = [];

        },

        setPatchList (patchNumber) {

          this.patchList = this._getPatchPortsByPatchNumber(patchNumber);

        },

        selectSwitchPort (port) {

          this._updateSwitchPort(port);

        },

        switchPortClicked (port) {

          if (port.switchHostname) {

            return this.setSwitchPortItems({parameter: 'dswitch.hostname', value: port.switchHostname})

          }

          this.clearSwitchPortItems();

        },

        showMessage (message) {

          this.snackBar.message = message;

          this.snackBar.active = true;

        },

        _updateSwitchPort (port) {

          let switchPort = this._getSwitchPortDataFromPatch(port)[0];

          switchPort.ppanel_id = port.id;

          this._switchPortResourceUpdate((response) => {

            this.showMessage(response.message);

          }, switchPort);

        },

        _patchHandler (actions, page, search, errors) {

          return PatchResource.list((response) => {

            actions(response.data);

          }, page, search, errors);

        },

        _getSwitchPortDataFromPatch (patch) {

          return Filter.byParameterKey(patch.switchPort, 'port', this.switchPortItems);

        },

        _addPatchNumberAttributeToPatchItems (items) {

            let patches = items;

            let formattedPatchList = [];

            Filter.interactive(patches, (patch) => {

              let patchNumber = this._getPatchNumberFromPatch(patch);

              patch['patchNumber'] = patchNumber;

              formattedPatchList.push(patch);

            });

            return formattedPatchList;

        },

        _getPatchPortsByPatchNumber (patchNumber) {

          return Filter.byParameterKey(patchNumber, 'patchNumber', this.patchItems);

        },

        _getPatchNumberFromPatch (patch) {

          return patch.patchPort.replace(/(\d{1,2}\w)-(\d{2})-(\d{2})/, '$1-$2');

        },

        _switchResourceHandler (actions, page, search, error) {

          return SwitchResource.listSwitches(actions, page, search, error)

        },

        _switchPortResourceHandler (actions, page, search, error) {

          return SwitchPortResource.listSwitchPorts(actions, page, search, error);

        },

        _switchPortResourceUpdate (actions, data, errors) {

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