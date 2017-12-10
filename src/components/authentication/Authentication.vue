<template>

    <v-container grid-list-md>

        <v-layout row wrap>

            <v-flex xs6 offset-xs2>

                <account-component title="Account"></account-component>

            </v-flex>

        </v-layout>


    </v-container>

</template>

<script>
    import Account from '../../layouts/Account.vue'

    export default {

      components: {

        'account-component': Account

      }

    }
</script>