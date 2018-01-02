<template>

    <div>

        {{ userMenu.name }}

        <v-btn icon>

            <v-icon>account_circle</v-icon>

        </v-btn>

    </div>

</template>

<script>

export default {

  computed: {

    userMenu () {

      return this.$store.state.user.user;

    }

  }

}

</script>