<template>

    <v-container fluid>

        <workspace-card title="Serviços">

            <span slot="menu">

                <v-btn icon :to="{name: 'maintenance.service.create'}">

                    <v-icon>add</v-icon>

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