<template>
  <div id="app">
    <v-app id="inspire">
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
          <v-list-tile @click.stop="$router.push({name:'about'})">
            <v-list-tile-action>
              <v-icon>contact_support</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>About</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <div v-show="loading">loading</div>
        <div v-show="!loading">
          <div v-if="!gfw">
            <FireBaseLogin v-if="!user"/>
            <div v-else>
              {{user.displayName}}
            </div>
          </div>
          <div v-else>no internat</div>
        </div>
      </v-navigation-drawer>
      <v-toolbar fixed app color="takane" dark>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>welcome {{user?user.displayName:''}}</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout>
            <v-flex text-xs-center>
              <router-view/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import { auth } from "@/utils/firebase";
import GFWtest from "@/utils/GFWtest";
export default {
  name: "app",
  data: () => ({
    drawer: false,
    loading: true,
    gfw: true,
    user: null
  }),
  mounted() {
    new GFWtest()
      .then(() => {
        this.loading = false;
        this.gfw = false;
        this.user = auth().currentUser
        // if (!this.user) {
        //   auth().getRedirectResult()
        //     .then(() => {
        //       if (auth.currentUser) {
        //         this.user = auth().currentUser;
        //         this.userLoading = false;
        //       } else {
        //         this.userLoading = false;
        //         this.nologin = true;
        //       }
        //     })
        //     .catch(error => {
        //       this.message = error.message;
        //     });
        // }
      })
      .catch(() => {
        this.loading = false;
        this.gfw = true;
      });
  },
  components: {
    FireBaseLogin: () => import("@/components/FireBaseLogin")
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
