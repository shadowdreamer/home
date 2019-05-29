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
    <button @click="githubLogin">login with github</button>
    <button @click="logout">logout</button>
    <div>      
      <p>{{message}}</p>
      <img style="height:150px;" :src="user.photoURL"/>
      <p>{{user.displayName}}</p>
    </div>
  </div>
</template>

<script>
import { auth, provider } from "@/utils/firebase";
export default {
  name: "home",
  data: () => ({
    message:'',
    user:{}
  }),
  computed:{
     
  },
  mounted() {
    auth
      .getRedirectResult()
      .then(result=> {
        console.log(result)
        if (result.credential) {
           this.message = 'login success'
        }
        if (result.user){
          this.user = auth.currentUser
        }
      })
      .catch(error=> { 
        console.log(error)
        this.message = error.message;
      });
  },
  methods: {
    githubLogin() {
      auth.signInWithRedirect(provider);
    },
    logout() {
      auth
        .signOut()
        .then(() => {})
        .catch(() => {});
    },
  },
  components: {}
};
</script>
