import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

import twitter from '@/icons/twitter'
import google from '@/icons/google'
import github from '@/icons/github'
Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    takane: '#a6126a',
    primary: '#a6126a',
  },
  icons:{
    twitter:{
      component:twitter
    },
    google:{
      component:google
    },
    github:{
      component:github
    },
  }
})
