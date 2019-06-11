<template>
  <v-container>
    <v-layout row wrap> 
      <v-flex xs12 md6 lg4 class="ma-1">
        <FireBaseLogin/>
      </v-flex>     
      <v-flex xs12 md5 lg4 class="ma-1">
        <v-card>
          <v-card-text>
            <p>
              <a href="/producer">producer page</a>
            </p>
            <p>
              <a href="https://puzzle.dovahkiin.top/">神经衰弱小游戏</a>
            </p>
            <p>
              <a href="https://rankhime.dovahkiin.top/">DD测试</a>
            </p>
            <p>
              <a href="https://pyear.dovahkiin.top/">普罗丢人年鉴2019</a>
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "home",
  data: () => ({}),
  methods: {
    say(){
      alert('cnm')
    }
  },
  components: {
    FireBaseLogin: () => import("@/components/FireBaseLogin")
  }
};
</script>
