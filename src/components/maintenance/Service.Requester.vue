<template>

    <v-card flat>

        <v-card-title>

            <div class="title">Requester</div>

        </v-card-title>

        <v-card-text>

            <span v-for="item in requester" :key="item.id">

                <v-chip>

                    <v-avatar>

                        <v-icon>{{ item.icon }}</v-icon>

                    </v-avatar>

                    {{ item.content }}

                </v-chip>

                <br>

            </span>

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