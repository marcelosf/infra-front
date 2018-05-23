<template>

    <v-container>

        <workspace-card title="Espelhamento | Rack:">

            <span slot="content">

                <v-select

                        name="connections-rack"
                        :items="rackItems"
                        item-text="name"
                        item-value="id"
                        v-model="rack"
                        class="ma-4"
                        @change="selectRack"

                ></v-select>

            </span>

            <v-layout>

                <v-flex sm5 md5 lg5>

                    <switchport-list :rackId="selectedRack"></switchport-list>

                </v-flex>

                <v-flex sm7 md7 lg7>

                    <patchport-list :rackId="rack"></patchport-list>

                </v-flex>

            </v-layout>

        </workspace-card>

    </v-container>

</template>

<script>
    import WorkspaceCard from '@/layouts/WorkspaceCard';
    import SwitchPortList from '@/layouts/SwitchPortList';
    import PatchPortList from '@/layouts/PatchPortList';
    import {RackResource} from '@/resources/RackResource';

    export default {

      created () {

        this.initialize();

      },

      data () {

        return {

          rack: '',

          rackItems: []

        }

      },

      computed: {

        selectedRack () {

          return this.rack;

        }

      },

      methods: {

        initialize () {

          this.getRackItems();

        },

        getRackItems () {

          this.rackResourceHandler({}, (racks) => {

            this.rackItems = racks;

          });

        },

        rackResourceHandler (search, actions, errors) {

          return RackResource.list(search, actions, errors);

        },

        selectRack () {

          console.log(this.rack);

        }

      },

      components: {

        'workspace-card': WorkspaceCard,
        'switchport-list': SwitchPortList,
        'patchport-list': PatchPortList

      }

    }
</script>