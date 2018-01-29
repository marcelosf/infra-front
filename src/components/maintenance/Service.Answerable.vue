<template>

    <v-card flat>

        <v-card-title primary-title>

            <div class="title">Answerable</div>

        </v-card-title>

        <v-card-text>

            <span v-for="item in answerable" :key="item.id">

                <v-chip>

                    <v-avatar><v-icon>{{ item.icon }}</v-icon></v-avatar>

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

        answerable () {

          let service = this.$store.state.service.service;

          return [

            {id: 1, icon: 'account_circle', title: 'Name', 'content': service.answerable},
            {id: 2, icon: 'room', title: 'Local', 'content': 'Answerable Local'},
            {id: 3, icon: 'phone', title: 'Phone', 'content': 'Answerable Phone'},
            {id: 4, icon: 'email', title: 'E-mail', 'content': service.answerable_email}

          ];

        }

      }

    }
</script>