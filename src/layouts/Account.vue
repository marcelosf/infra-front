<template>

    <v-card class="my-5">

        <v-card-title>

            <h3 class="headline">{{ title }}</h3>

        </v-card-title>

        <v-card-text>

            <v-form>

                <v-text-field
                        label="Login"
                        v-model="login"
                        required
                ></v-text-field>

                <v-text-field
                        name="account-password"
                        label="Password"
                        v-model="password"
                        type="password"
                        required
                ></v-text-field>

            </v-form>

        </v-card-text>

    </v-card>

</template>

<script>
    export default {

      props: ['title'],

      data () {
        return {

          login: '',

          password: ''
        }
      }
    }
</script>