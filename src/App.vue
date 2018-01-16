<template>

  <v-app light>
    <v-navigation-drawer
      fixed
      :clipped="clipped"
      v-model="drawer"
      app
    >

      <v-list>

        <v-list-tile ripple v-model="activatedItem" v-for="item in items" :key="item.id" :to="{ name: item.link }">

          <v-list-tile-action>

            <v-icon light v-html="item.icon"></v-icon>

          </v-list-tile-action>

          <v-list-tile-content>

            <v-list-tile-title v-text="item.title"></v-list-tile-title>

          </v-list-tile-content>

        </v-list-tile>

      </v-list>

    </v-navigation-drawer>

    <v-toolbar fixed app :clipped-left="clipped">

      <v-toolbar-side-icon @click.stop="drawer = !drawer" light></v-toolbar-side-icon>

      <v-toolbar-title v-text="title"></v-toolbar-title>

      <v-spacer></v-spacer>

      <account-menu></account-menu>

    </v-toolbar>

    <v-content>

      <router-view></router-view>

    </v-content>

    <v-footer :fixed="fixed" app>

      <span>&copy; 2017</span>

    </v-footer>

  </v-app>

</template>

<script>
  import AccountMenu from '@/layouts/AccountMenu.vue';

  export default {

    data () {

      return {

        clipped: true,

        drawer: true,

        fixed: true,

        activatedItem: false,

        items: [

            {id: 1, icon: 'account_balance', title: 'Diretoria', link: 'home.directory'},
            {id: 2, icon: 'school', title: 'Colegiados', link: 'home.collegiate'},
            {id: 3, icon: 'send', title: 'Comissões', link: 'home.commissions'},
            {id: 4, icon: 'email', title: 'E-mail', link: 'home.email'},
            {id: 5, icon: 'computer', title: 'Suporte', link: 'home.support'},
            {id: 6, icon: 'build', title: 'Serviços', link: 'home.services'},
            {id: 7, icon: 'book', title: 'Normas', link: 'home.roles'},
            {id: 8, icon: 'send', title: 'CCE', link: 'home.cce'},
            {id: 9, icon: 'photo_camera', title: 'Imagens', link: 'home.images'},
            {id: 10, icon: 'perm_identity', title: 'Comunidade', link: 'home.community'},
            {id: 11, icon: 'send', title: 'ASIAG', link: 'home.community'}

        ],

        right: true,

        title: 'Intranet IAG'

      }

    },

    components: {

      'account-menu': AccountMenu

    }
  }
</script>
