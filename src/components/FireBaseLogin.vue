<template>
  <div>
    <v-card class="px-3 py-2">
      <div v-if="!loading && !gfw && !user">
        <v-card-text class="headline">SIGN IN WITH :</v-card-text>
        <v-card-actions>
          <v-btn @click="firebaselogin('twitter')" color="#55acee" block dark>
            <v-icon>$vuetify.icons.twitter</v-icon>
          </v-btn>
          <v-btn @click="firebaselogin('github')" color="333" block dark>
            <v-icon>$vuetify.icons.github</v-icon>
          </v-btn>
          <v-btn @click="firebaselogin('google')" block>
            <v-icon>$vuetify.icons.google</v-icon>
          </v-btn>
        </v-card-actions>
      </div>
      <div v-else-if="user">
        <v-avatar size="50" color="takane">
          <img :src="user.photoURL">
        </v-avatar>
        <div class="my-3 title">{{user.displayName}}</div>

        <v-btn @click="firebaselogout" block>
          <span class>logout</span>
        </v-btn>
      </div>
      <div v-show="loading">
        <v-progress-circular :width="5" :size="80" color="takane" indeterminate></v-progress-circular>
      </div>
      <div v-show="!loading && gfw">
        <p class="headline">Oops! Please connect the internet scientifically</p>
      </div>
    </v-card>
  </div>
</template>
<script>
import { auth } from "@/utils/firebase";
import GFWtest from "@/utils/GFWtest";
export default {
  name: "firebaselogin",
  data: () => ({
    loading: true,
    loadinguser: false,
    gfw: true,
    user: null
  }),

  methods: {
    firebaselogin(type) {
      let provider;
      switch (type) {
        case "google":
          provider = new auth.GoogleAuthProvider();
          break;
        case "twitter":
          provider = new auth.TwitterAuthProvider();
          break;
        case "github":
          provider = new auth.GithubAuthProvider();
          break;
      }
      auth().signInWithRedirect(provider);
    },
    firebaselogout() {
      auth().signOut();
      window.location.reload();
    }
  },
  mounted() {
    window.onload = () => {
      new GFWtest()
        .then(() => {
          this.gfw = false;
          auth().onAuthStateChanged(user => {
            if (user) {
              this.user = user;
              this.loading = false;
            } else {
              this.loading = false;
            }
          });
          auth().getRedirectResult();
        })
        .catch(() => {
          this.loading = false;
          this.gfw = true;
        });
    };
  }
};
</script>