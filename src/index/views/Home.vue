<template>
  <div class="home">
    <h1>welcome</h1>links:
    <p>
      <a href="/producer">producer page</a>
    </p>
    <p>
      <a href="https://puzzle.dovahkiin.top/">puzzle.dovahkiin.top</a>
    </p>
    <p>
      <a href="https://rankhime.dovahkiin.top/">rankhime.dovahkiin.top</a>
    </p>
    <div v-if="loading">loading.......</div>
    <div v-else>
      <div v-if="!gwf">
        <button @click="githubLogin">login with github</button>&nbsp;
        <button @click="twitterLogin">login with twitter</button>&nbsp;
        <button @click="googleLogin">login with google</button>&nbsp;
        <button @click="logout">logout</button>
        <div>
          <p v-show="userLoading">loading user info......</p>
          <p v-show="nologin">you are not login,please login</p>
          <p>{{message}}</p>
          <img style="height:150px;" :src="user.photoURL">
          <p>{{user.displayName}}</p>
        </div>
      </div>
      <div v-else>请正确地连接到互联网</div>
    </div>
  </div>
</template>

<script>
import { auth, github, twitter, google } from "@/utils/firebase";
import GFWtest from "@/utils/GFWtest";
export default {
  name: "home",
  data: () => ({
    message: "",
    user: {},
    loading: true,
    userLoading: false,
    nologin: false,
    gwf: false
  }),
  computed: {},
  mounted() {
    new GFWtest()
      .then(() => {
        this.loading = false;
        this.userLoading = true;
        auth
          .getRedirectResult()
          .then(result => {
            if (result.credential) {
              this.message = "login success";
            }
            if (auth.currentUser) {
              this.user = auth.currentUser;
              this.userLoading = false;
            } else {
              this.userLoading = false;
              this.nologin = true;
            }
          })
          .catch(error => {
            this.message = error.message;
          });
      })
      .catch(() => {
        this.loading = false;
        this.gwf = true;
      });
  },
  methods: {
    githubLogin() {
      auth.signInWithRedirect(github);
    },
    twitterLogin() {
      auth.signInWithRedirect(twitter);
    },
    googleLogin() {
      auth.signInWithRedirect(google);
    },
    logout() {
      auth
        .signOut()
        .then(() => {
          this.user = {};
          this.nologin = true;
        })
        .catch(() => {});
    }
  },
  components: {}
};
</script>
