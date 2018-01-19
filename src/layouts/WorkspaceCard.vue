<template>

    <v-card>

        <v-toolbar class="white">

            <v-toolbar-title>{{ title }}</v-toolbar-title>

            <v-spacer></v-spacer>

            <slot name="menu"></slot>

        </v-toolbar>

        <v-card-text>

            <v-container grid-list-lg>

                <slot></slot>

            </v-container>

        </v-card-text>

    </v-card>

</template>

<script>
    export default {

      props: ['title']

    }
</script>