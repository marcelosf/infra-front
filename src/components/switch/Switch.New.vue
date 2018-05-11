<template>

    <v-container>

        <workspace-card title="Novo Switch">

            <v-form>

                <v-text-field
                    label="Hostname"
                    name="switch-hostname"
                    v-model="switches.hostname"
                    hint="Ex.: C_ABET_HP5120-G_E1"
                    required
                ></v-text-field>

                <v-text-field
                        label="Nome"
                        name="switch-name"
                        v-model="switches.name"
                        hint="Ex.: C_ABET_E1_2"
                        required
                ></v-text-field>

                <v-text-field
                    label="IP"
                    name="switch-ip"
                    v-model="switches.ip"
                    required
                ></v-text-field>

                <v-text-field
                        label="Número de Portas"
                        name="switch-number-of-ports"
                        v-model="switches.num_ports"
                        required
                ></v-text-field>

                <v-text-field
                        label="Marca"
                        name="switch-brand"
                        v-model="switches.brand"
                        required
                ></v-text-field>

                <v-text-field
                        label="Patrimonio"
                        name="switch-register"
                        v-model="switches.register"
                ></v-text-field>

                <v-text-field
                        label="Pilha"
                        name="switch-stack"
                        v-model="switches.stack"
                        required
                ></v-text-field>

                <v-btn color="primary" @click="save">Criar</v-btn>

                <v-btn @click="redirectToList">Cancelar</v-btn>

            </v-form>

        </workspace-card>

    </v-container>

</template>

<script>
    import WorkspaceCard from '@/layouts/WorkspaceCard';
    import {StackResource} from '@/resources/StackResource';
    import {SwitchResource} from '@/resources/SwitchResource';
    import {RackResource} from '@/resources/RackResource';

    export default {

      data () {

        return {

          switches: {

            hostname: '',

            name: '',

            ip: '',

            num_ports: null,

            brand: 'HP5120-G',

            register: '',

            stack: null,

            stack_id: null

          },

          stack: {

            hostname: '',

            rack_id: null

          }

        }

      },

      methods: {

        save () {

          this.getRack((rack) => {

            this.stack.rack_id = rack[0].id;

            this.stack.hostname = this.switches.hostname;

            this.storeStack(this.stack, (stack) => {

                this.switches.stack_id = stack.id;

                this.storeSwitch(this.switches, (switches) => {

                  console.log(switches);

                });

            });

          });

        },

        storeStack (stack, actions) {

          StackResource.store(stack, (response) => {

            actions(response);

          });

        },

        storeSwitch (switches, actions) {

          SwitchResource.store(switches, (response) => {

            actions(response);

          });

        },

        getRack (actions, errors) {

          let rackName = this.switches.hostname.split('_');

          RackResource.list({parameter: 'name', value: rackName[0]}, (rack) => {

            actions(rack);

          }, (errors));

        },

        redirectToList () {

          this.$router.push({name: 'home'});

        }

      },

      components: {

        'workspace-card': WorkspaceCard

      }

    }
</script>