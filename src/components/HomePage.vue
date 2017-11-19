<template>
  <v-ons-page>
   <div>
      <v-ons-toolbar class="toolbar--material">
        <div class="tool">
          <div class="center1"><img src='../assets/img/rc1.png' class="logo"></div>
          <div class="buscar"><v-ons-search-input class="busq material"></v-ons-search-input></div>
        </div>
    </v-ons-toolbar>
   </div>

     <v-ons-tabbar material swipeable position="auto"
              :tabs="tabs"
              :visible="true"
              :index.sync="activeIndex">
      </v-ons-tabbar>
    <div class="estado">
      <estado-page></estado-page>
     </div>
     <div class="post">   
        <post-page></post-page>
    </div>
  </v-ons-page>
</template>

<script>
import Post from './Post.vue'
import Estado from './Estado.vue'
export default {
  name: 'home',
  components:{
    'post-page': Post,
    'estado-page': Estado
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
.estado {
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 20px;
}
.logo{
  margin: 0 auto;
  padding: 0px;
    width: 40px;
    height: 40px;
    align: center;
    
}
.center1{
  width: 20%;
    display: flex;
  flex-direction: row;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
    justify-content: flex-start;
    
}
.busq{
  color: white !important;
   display: flex;
  flex-direction: row;
  margin-left: 5px;
    margin-right: 5px;
    width: 100%;
    justify-content: center;
}
.buscar{
    display: flex;
  flex-direction: row;
  margin-left: 5px;
    margin-right: 5px;
    width: 100%;
}
.tool{
  align-items: center;
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.toolbar--material{
    background-color: #44714E;
}
</style>
