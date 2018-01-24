<template>

    <v-container>

        <workspace-card title="Service">

            <span slot="menu">

                <v-btn flat :to="{name: 'maintenance.service'}">

                    <v-icon>list</v-icon>
                    List

                </v-btn>

                <v-btn flat :to="{name: 'maintenance.service.create'}">

                    <v-icon>add</v-icon>
                    New

                </v-btn>

            </span>

        </workspace-card>

    </v-container>

</template>

<script>
  import WorkspaceCard from '@/layouts/WorkspaceCard';

  export default {

    components: {

      'workspace-card': WorkspaceCard

    }

  }

</script>