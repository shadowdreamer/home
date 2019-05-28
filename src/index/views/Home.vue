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
    <input type="text" v-model="email">
    <input type="text" v-model="password">
    <button @click="login">login</button>
    <button @click="logout">logout</button>
    <button @click="getuser">get user</button>
    <button @click="write">write</button>
  </div>
</template>

<script>
import { firestore, auth } from "@/utils/firebase";
import firebaseui from "firebaseui";
export default {
  name: "home",
  data: () => ({
    password: "12345678",
    email: "uzumaki@yeah.net"
  }),
  mounted() {
  },
  methods: {
    login() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(e => {
          console.log(e);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    logout() {
      auth
        .signOut()
        .then(e => {
          console.log(e);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getuser() {
      var user = auth.currentUser;
      console.log(user);
    },
    write() {
      firestore.collection("users")
        .add({
          first: "Ada",
          last: "Lovelace",
          born: 1815
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    }
  },
  components: {}
};
</script>
