<template>
  <div id="welcome">
    <img :src="require('@/assets/logo.jpg')" alt="avata" class="avata">
    <p class="logo">Dovahkiin P</p>
    <div class="imas thankyou">
      <p>{{message.f}}</p>
      <p v-show="message.s">{{message.s}}</p>
    </div>
    <div class="imas dream">
      <div>
        <p>
          <img :src="require('@/assets/346.png')" alt="cgss">
          <span @click="doCopy('129221376')">
            129 221 376
            <span class="copy"></span>
          </span>
        </p>
        <p>
          <img :src="require('@/assets/39.png')" alt="mltd">
          <span @click="doCopy('MMCDBYYJ')">
            MMCDBYYJ
            <span class="copy"></span>
          </span>
        </p>

        <p v-for="(item, index) in links" :key="index">
          <img :src="require(`@/assets/logo/${item.src}`)" :alt="item.alt">
          <a :href="item.href" target="blank">
            {{item.des}}
            <span class="link"></span>
          </a>
        </p>
      </div>
    </div>
    <div class="imas mocho" @click.stop="mocho">{{mochoing?"そうしんちゅう～～":"終わりだよ( o・▽・ o)"}}</div>
  </div>
</template>
<script>
import http from "@/utils/axios";
export default {
  data:()=>({
    mochoing:false
  }),
  computed: {
    links: () => {
      return require("./links.json").links;
    },
    message() {
      const word = require("./kotoba.json").kotoba;
      return word[Math.floor(Math.random() * word.length)];
    }
  },
  methods: {
    doCopy(value) {
      this.$copyText(value).then(
        () => {
          const h = this.$createElement;
          this.$notify({
            title: "消息",
            type: "success",
            message: h("span", null, [
              h("span", null, "已复制"),
              h("span", { style: "color:pink" }, value)
            ]),
            position: "bottom-right",
            duration: 3000
          });
        },
        () => {
          this.$notify({
            title: "消息",
            message: `貌似没法复制，手动吧`,
            type: "error",
            position: "bottom-right",
            duration: 3000
          });
        }
      );
    },
    mocho() {
      if (this.mochoing)return;
      this.mochoing=true
      http("./mocho").then(e => {
        this.$notify({
          title: "もちょだよ(●・▽・●)",
          message: e.data,
          position: "bottom-right",
          offset: 66
        })
        this.mochoing = false
      }).catch(err=>{
        this.$notify({
          title: "もちょだよ(●・▽・●)",
          message: err,
          position: "bottom-right",
          offset: 66
        })
        this.mochoing = false
      })
    }
  }
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
}
a {
  text-decoration-line: none;
  color: #755575;
}
#welcome {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #755575;
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
  width: 100vw;
  background-image: url("https://i.niupic.com/images/2019/05/24/_330.jpg");
  background-size: cover;
  background-position: center;
}
@media screen and (min-width: 700px) {
  #welcome {
    background-image: url("https://i.niupic.com/images/2019/05/24/_331.jpg");
  }
}
.logo {
  font-size: 40px;
}
.avata {
  height: 80x;
  width: 80px;
  border-radius: 50px;
  margin-top: 50px;
  border: 2px solid rgba(179, 132, 14, 0.63);
}
.imas {
  margin: 10px 20px 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.6);
}
.thankyou {
  font-size: 25px;
  font-style: italic;
  color: white;
  text-shadow: 0px 0px 5px rgb(179, 132, 14);
}
.dream {
  font-size: 20px;
}
.dream > div {
  display: inline-block;
  text-align: left;
}
.dream div p {
  margin-bottom: 18px;
}
.dream div p img {
  height: 26px;
  vertical-align: middle;
}
.mocho {
  user-select: none;
}
</style>
