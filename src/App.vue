<template>

  <v-app light>
    <v-navigation-drawer
      fixed
      :clipped="clipped"
      v-model="drawer"
      app
    >

      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          exact
        >

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
  export default {
    data () {
      return {
        clipped: true,
        drawer: true,
        fixed: true,
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire'
        }],
        right: true,
        title: 'IAG Inventory'
      }
    }
  }
</script>
