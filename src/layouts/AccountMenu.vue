<template>

    <div>

        {{ user.name }}

        <v-btn icon>

            <v-icon>account_circle</v-icon>

        </v-btn>

    </div>

</template>

<script>

export default {

  props: ['user']

}

</script>