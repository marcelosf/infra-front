<template>

    <v-container>

        <workspace-card title="Service">

            <span slot="menu">

                <v-btn icon class="primary" :to="{name: 'maintenance.service'}">

                    <v-icon>list</v-icon>

                </v-btn>

                <v-btn icon class="primary" :to="{name: 'maintenance.service.create'}">

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