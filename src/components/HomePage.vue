<template>
  <v-ons-page>
    <v-ons-toolbar class="toolbar--material">
      <div class="center">REDCOM</div>
    </v-ons-toolbar>
     <v-ons-tabbar material swipeable position="auto"
              :tabs="tabs"
              :visible="true"
              :index.sync="activeIndex">
      </v-ons-tabbar>
    <post-page></post-page>
    <v-ons-list-title>Vue.js Ecosystem</v-ons-list-title>
    <v-ons-row>
      <v-ons-col>
        <v-ons-card @click="goTo('http://router.vuejs.org/')">vue-router</v-ons-card>
      </v-ons-col>
      <v-ons-col>
        <v-ons-card @click="goTo('http://vuex.vuejs.org/')">vuex</v-ons-card>
      </v-ons-col>
    </v-ons-row>
    <v-ons-row>
      <v-ons-col>
        <v-ons-card @click="goTo('http://vue-loader.vuejs.org/')">vue-loader</v-ons-card>
      </v-ons-col>
      <v-ons-col>
        <v-ons-card @click="goTo('https://github.com/vuejs/awesome-vue')">awesome-vue</v-ons-card>
      </v-ons-col>
    </v-ons-row>
     <v-ons-speed-dial position="bottom right" direction="up"
      :visible="spdVisible"
      :open.sync="spdOpen" >
      <v-ons-fab :style="spdStyle">
        <v-ons-icon icon="md-dialpad"></v-ons-icon>
      </v-ons-fab>
      <router-link to="/"><v-ons-speed-dial-item :style="spdStyle">
        <v-ons-icon icon="md-run"></v-ons-icon>
      </v-ons-speed-dial-item></router-link>
       <router-link to="/nuevopost"> <v-ons-speed-dial-item :style="spdStyle">
        <v-ons-icon icon="md-airplay"></v-ons-icon>
      </v-ons-speed-dial-item></router-link>
    </v-ons-speed-dial>
        
  </v-ons-page>
</template>

<script>
import Post from './Post.vue'
export default {
  name: 'home',
  components:{
    'post-page': Post
  },
  data () {
    return {
      msg: 'Welcome',
      essentialLinks: [
        {
          label: 'Core Docs',
          link: 'https://vuejs.org',
          icon: 'fa-book'
        },
        {
          label: 'Community Chat',
          link: 'https://chat.vuejs.org',
          icon: 'fa-commenting'
        },
        {
          label: 'Forum',
          link: 'https://forum.vuejs.org',
          icon: 'ion-chatboxes'
        },
        {
          label: 'Twitter',
          link: 'https://twitter.com/vuejs',
          icon: 'fa-twitter'
        },
        {
          label: 'Docs for this template',
          link: 'http://vuejs-templates.github.io/webpack/',
          icon: 'fa-file-text'
        }
      ],
      spdVisible: true,
      spdOpen: true,
      spdStyle: {
        backgroundColor: this.$ons.platform.isIOS() ? '#4282cc' : null
      },
      shareItems: {
        'Twitter': 'md-twitter',
        'Facebook': 'md-facebook',
        'Google+': 'md-google-plus'
      }
    };
    
  },
  methods: {
    goTo (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  text-align: center;
}

img {
  max-width: 300px;
}

ons-list-title:not(:first-of-type) {
  margin-top: 30px;
}

ons-card {
  text-align: center;
}

ons-list-item, ons-card {
  cursor: pointer;
}
ons-toolbar{
  color: purple;
}
</style>
