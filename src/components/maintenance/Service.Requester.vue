<template>

    <v-card flat>

        <v-card-title>

            <div class="title">Requester</div>

        </v-card-title>

        <v-card-text>

            <v-list v-for="item in requester">

                <v-list-tile>

                    <v-list-tile-avatar>

                        <v-icon large>{{ item.icon }}</v-icon>

                    </v-list-tile-avatar>

                    <v-list-tile-content>

                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>

                        <v-list-tile-sub-title>{{ item.content }}</v-list-tile-sub-title>

                    </v-list-tile-content>

                </v-list-tile>

            </v-list>

        </v-card-text>

    </v-card>

</template>

<script>
    export default {

      computed: {

        requester () {

          let service = this.$store.state.service.service;

          return [

            {icon: 'account_circle', title: 'Name', content: service.requester},
            {icon: 'room', title: 'Local', content: 'Requester Local'},
            {icon: 'phone', title: 'Phone', content: 'Requester Phone'},
            {icon: 'email', title: 'E-mail', content: service.requester_email}

          ];

        }

      }

    }
</script>