<template>

    <div>

        <v-tabs fixed centered>

            <v-toolbar class="white">

                <v-toolbar-title>{{ title }}</v-toolbar-title>

                <v-spacer></v-spacer>

                <slot name="menu"></slot>

                <v-tabs-bar color="transparent" slot="extension">

                    <v-tabs-slider color="blue"></v-tabs-slider>

                    <slot name="tabs-item"></slot>

                </v-tabs-bar>

            </v-toolbar>

            <v-tabs-items>

                <slot name="tabs-content"></slot>

            </v-tabs-items>

        </v-tabs>

    </div>

</template>

<script>
  export default {

    props: ['title']

  }
</script>