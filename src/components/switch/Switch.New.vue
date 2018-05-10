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
                        v-model="switches.numberOfPorts"
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

                <v-btn color="primary">Criar</v-btn>

                <v-btn>Cancelar</v-btn>

            </v-form>

        </workspace-card>

    </v-container>

</template>

<script>
    import WorkspaceCard from '@/layouts/WorkspaceCard';

    export default {

      data () {

        return {

          switches: {

            hostname: '',

            name: '',

            ip: '',

            numberOfPorts: null,

            brand: 'HP5120-G',

            register: '',

            stack: null

          }

        }

      },

      components: {

        'workspace-card': WorkspaceCard

      }

    }
</script>