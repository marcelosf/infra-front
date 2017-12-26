<template>

    <v-card class="my-5">

        <v-card-title>

            <h3 class="headline">{{ title }}</h3>

        </v-card-title>

        <v-card-text>

            <v-form>

                <v-text-field
                        label="Login"
                        v-model="credentials.code"
                        required
                ></v-text-field>

                <v-text-field
                        name="account-password"
                        label="Password"
                        v-model="credentials.password"
                        type="password"
                        required
                ></v-text-field>

            </v-form>

        </v-card-text>

        <v-card-actions>

            <v-btn flat @click="login()">Login</v-btn>

        </v-card-actions>

    </v-card>

</template>

<script>
    import {Authentication} from '@/resources/Authentication';

    export default {

      props: ['title'],

      data () {

        return {

          credentials: {

            code: '',

            password: ''

          }

        }
      },

      methods: {

        login () {

          let auth = new Authentication();

          auth.login(this.credentials, (error) => {

            this.$emit('error', error.response.data.message);

          });

        }

      }

    }
</script>