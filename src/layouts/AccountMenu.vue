<template>

    <div>

        {{ userMenu.name }}

        <v-btn :to="{ name: 'authentication' }" icon>

            <v-icon class="white--text">account_circle</v-icon>

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