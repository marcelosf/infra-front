<template>

    <v-container fluid>

        <v-card>

            <v-toolbar class="white" light>

                <v-toolbar-title>Novo Serviço</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>

                    <v-icon>list</v-icon>

                </v-btn>

            </v-toolbar>

            <v-card-text>

                <v-select
                    label="Responsavel"
                    max-height="400"
                    hint="Informe o responsável pelo serviço"
                    persistent-hint
                    :class="spacing"
                ></v-select>

                <v-select
                    label="Serviço"
                    max-height="400"
                    hint="Informe o tipo de serviço"
                    persistent-hint
                    multiple
                    chips
                    :class="spacing"
                ></v-select>

                <v-select
                    label="Local"
                    hint="Informe o local onde será executado o serviço"
                    persistent-hint
                    autocomplete
                    :class="spacing"
                ></v-select>

                <v-text-field
                   label="Observações"
                   name="observation"
                   multi-line
                ></v-text-field>

                <v-btn primary>Enviar</v-btn>

            </v-card-text>

        </v-card>

    </v-container>

</template>

<script>
    export default {

      data () {

        return {

          spacing: ''

        }

      }

    }
</script>