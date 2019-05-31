<template>
  <div class="home">
    <p>
      <a href="/producer">producer page</a>
    </p>
    <p>
      <a href="https://puzzle.dovahkiin.top/">puzzle.dovahkiin.top</a>
    </p>
    <p>
      <a href="https://rankhime.dovahkiin.top/">rankhime.dovahkiin.top</a>
    </p>
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
    gwf: false,
    drawer: false
  }),
  computed: {},
  mounted() {
    new GFWtest()
      .then(() => {
        this.loading = false;
        this.userLoading = true;
        auth()
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
