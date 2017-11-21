<template>
  <v-ons-page>
   <div>
      <v-ons-toolbar class="toolbar--material">
        <div class="tool">
          <div class="log"><img src='../assets/img/rc1.png' class="logo"></div>
          <div class="buscar">
              <div class="ico"><i class="material-icons" style="color: white;">search</i></div>
         	 	  <div class="b"><input id="busq" type="text" ></div>
          </div>
          <div class="perfil">
           <router-link to="/perfil"><i class="material-icons" style="color: white;">account_circle</i></router-link>
          </div>
        </div>
    </v-ons-toolbar>
    
   </div>

     
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
.log{
  width: 20%;
    display: flex;

    justify-content: flex-start;
    
}

.buscar{
    display: flex;
    width: 60%;
    align-items: center;
}
.perfil{
   display: flex;
    width: 20%;
    align-items: flex-end !important;
}
.tool{
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.toolbar--material{
    background-color: #44714E;
}
</style>
