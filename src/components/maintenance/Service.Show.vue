<template>

    <v-container>

        <workspace-card :title="'Service ' + code">

                <span slot="menu">

                    <v-btn icon :to="{name: 'maintenance.service'}">

                        <v-icon>list</v-icon>

                    </v-btn>

                    <v-btn icon :to="{name: 'maintenance.service.create'}">

                        <v-icon>add</v-icon>

                    </v-btn>

                </span>

                <v-tabs centered>

                    <v-tabs-bar>

                        <v-tabs-slider></v-tabs-slider>

                        <v-tabs-item :href="'#service'">Service</v-tabs-item>

                        <v-tabs-item :href="'#orders'">Orders</v-tabs-item>

                    </v-tabs-bar>

                    <v-tabs-items>

                        <v-tabs-content :id="'service'">

                            <service></service>

                        </v-tabs-content>

                        <v-tabs-content :id="'orders'">

                            <orders></orders>

                        </v-tabs-content>

                    </v-tabs-items>

                </v-tabs>

        </workspace-card>

    </v-container>

</template>

<script>
    import WorkspaceCard from '@/layouts/WorkspaceCard';
    import ServiceServiceShow from './Service.Service.Show';
    import ServiceOrderShow from './Service.Orders.Show';

  export default {

    computed: {

      code () {

        return this.$store.state.service.service.code;

      }

    },

    components: {

      'service': ServiceServiceShow,
      'orders': ServiceOrderShow,
      'workspace-card': WorkspaceCard

    }

  }

</script>