<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer fixed v-model="drawer" app>
        <v-list dense>
          <v-list-tile @click.stop="$router.push({name:'home'})">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="showAbout=true">
            <v-list-tile-action>
              <v-icon>info</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>About</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar fixed app color="takane" dark>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title >welcome</v-toolbar-title>
      </v-toolbar>
      <v-content >   
        <router-view/>
      </v-content>
      <AppAbout :showAbout="showAbout" @close="showAbout = false"/>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "app",
  data: () => ({
    drawer: false,
    showAbout: false
  }),
  components: {
    AppAbout:()=>import('@/components/About')
  },
};
</script>
<style>
  html{
    overflow-y: auto;
  }
  * {
  scrollbar-color: #bd237f #f2f2f2;
  scrollbar-width: thin;
}
*::-webkit-scrollbar {
  width: 6px;
  background-color: #f2f2f2;
}
*::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #bd237f;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
}
</style>
