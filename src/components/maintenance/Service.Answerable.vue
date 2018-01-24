<template>

    <v-card flat>

        <v-card-title primary-title>

            <div class="title">Answerable</div>

        </v-card-title>

        <v-card-text>

            <v-list v-for="item in answerable">

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

        answerable () {

          let service = this.$store.state.service.service;

          return [

            {icon: 'account_circle', title: 'Name', 'content': service.answerable},
            {icon: 'room', title: 'Local', 'content': 'Answerable Local'},
            {icon: 'phone', title: 'Phone', 'content': 'Answerable Phone'},
            {icon: 'email', title: 'E-mail', 'content': service.answerable_email}

          ];

        }

      }

    }
</script>