<template>
  <div>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <v-flex text-xs-center>
          <v-card flat max-width="360">
            <v-btn @click="firebaselogin('twitter')" color="#55acee" dark block class="pl-1 pr-5 mb-3">
              <v-img
                contain
                width="20"
                height="20"
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg"
              ></v-img>
              <span class>sign in with twitter</span>
            </v-btn>
            <v-btn @click="firebaselogin('github')" color="333" dark block class="pl-1 pr-5 mb-3">
              <v-img
                contain
                width="20"
                height="20"
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg"
              ></v-img>
              <span class>sign in with github</span>
            </v-btn>
            <v-btn @click="firebaselogin('google')" block class="pl-1 pr-5 mb-3">
              <v-img
                contain
                width="20"
                height="20"
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              ></v-img>
              <span class>sign in with google</span>
            </v-btn>
            <v-btn @click="firebaselogout" block>
              <span class>logout</span>
            </v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import { auth } from "@/utils/firebase";

export default {
    name: "firebaselogin",
    data:()=>({
    }),
    computed:{
      user(){
        return auth().currentUser
      }
    },
    methods:{
        firebaselogin(type){
            let provider;
            switch(type){
                case 'google':provider = new auth.GoogleAuthProvider();break;
                case 'twitter':provider = new auth.TwitterAuthProvider();break;
                case 'github':provider = new auth.GithubAuthProvider();break
            }
            auth().signInWithRedirect(provider);
        },
        firebaselogout(){
            auth.signOut()
        }
    },
    mounted(){

    }
};
</script>