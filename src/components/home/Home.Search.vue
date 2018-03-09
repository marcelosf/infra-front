<template>

    <v-dialog persistent v-model="toggle" max-width="800px">

        <v-card>

            <v-card-title>

                <span class="headline">Busca</span>

            </v-card-title>

            <v-card-text>

                <form ref="form" v-model="valid" lazy-validation>

                    <v-container grid-list-lg>

                        <v-layout row wrap>

                            <v-flex xs12 sm12 md12>

                                <locale-selector ref="locale" @update="triggerLocalUpdate">

                                </locale-selector>

                            </v-flex>

                            <v-flex xs6 sm4 md4>

                                <v-text-field
                                        name="port"
                                        label="Ponto"
                                        v-model="search.patchPort"
                                ></v-text-field>

                            </v-flex>

                            <v-flex xs6 sm4 md4>

                                <v-text-field
                                        name="hostname"
                                        label="Hostname"
                                        v-model="search.switchHostname"
                                ></v-text-field>

                            </v-flex>

                            <v-flex xs6 sm4 md4>

                                <v-text-field
                                        name="ip"
                                        label="IP"
                                        v-model="search.switchPortIp"
                                ></v-text-field>

                            </v-flex>

                            <v-flex xs6 sm6 md6>

                                <v-text-field
                                        name="switchIdentification"
                                        label="Switch"
                                        v-model="search.switch"
                                ></v-text-field>

                            </v-flex>

                            <v-flex xs6 sm6 md6>

                                <v-text-field
                                        name="switchPort"
                                        label="Porta do switch"
                                        v-model="search.switchPort"
                                ></v-text-field>

                            </v-flex>

                            <v-flex xs6 sm6 md6>

                                <v-text-field
                                        name="rackLocal"
                                        label="Sala do Rack"
                                        v-model="search.rackLocal"
                                ></v-text-field>

                            </v-flex>

                            <v-flex xs6 sm6 md6>

                                <v-text-field
                                        name="resource"
                                        label="Serviço"
                                        v-model="search.resource"
                                ></v-text-field>

                            </v-flex>

                        </v-layout>

                    </v-container>

                </form>

            </v-card-text>

            <v-card-actions>

                <slot name="actions">

                </slot>

                <v-btn flat color="secondary" @click="clearForm">Limpar</v-btn>

                <v-btn flat @click="closeForm">Fechar</v-btn>

            </v-card-actions>

        </v-card>

    </v-dialog>

</template>

<script>
    import LocaleSelector from '@/layouts/LocaleSelector';
    import {ObjectIterator} from '@/libs/ObjectIterator'

    export default {

      props: ['value'],

      data () {

        return {

          toggle: false,

          search: {

            build: '',

            floor: '',

            local: '',

            patchPort: '',

            switchHostname: '',

            switchPortIp: '',

            switch: '',

            resource: '',

            switchPort: '',

            switchPortVlan: '',

            rackLocal: '',

            rack: ''

          },

          valid: false

        }

      },

      watch: {

        value (value) {

          this.toggle = value;

          this.dispatchToggle();

        },

        search: {

          handler () {

            this.triggerSearch();

          },

          deep: true

        }

      },

      methods: {

        dispatchToggle () {

          this.$emit('input', this.toggle);

        },

        triggerLocalUpdate (value) {

          this.search.build = value.build;

          this.search.floor = value.floor;

          this.search.room = value.room;

        },

        triggerSearch () {

          this.$emit('update', this.search);

        },

        clearForm () {

          this.$refs.form.reset();

          this.$refs.locale.clearForm();

          this.clearSearch();

        },

        clearSearch () {

          ObjectIterator.clear(this.search);

        },

        closeForm () {

          this.toggle = false;

          this.$emit('input', this.toggle);

        }

      },

      components: {

        'locale-selector': LocaleSelector

      }

    }
</script>