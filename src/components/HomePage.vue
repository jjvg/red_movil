<template>
  <v-ons-page>	  
    <div class="estado">
      <estado-page></estado-page>
     </div>
     <div class="post">   
        <post-page></post-page>
    </div>
     <v-ons-speed-dial position="bottom right" direction="up"
      :visible="spdVisible"
      :open.sync="spdOpen" >
      <v-ons-fab :style="spdStyle">
        <v-ons-icon icon="md-dialpad"></v-ons-icon>
      </v-ons-fab>
      <router-link to="/"><v-ons-speed-dial-item :style="spdStyle" 
      >
        <v-ons-icon icon="md-run"></v-ons-icon>
      </v-ons-speed-dial-item></router-link>
       <router-link to="/nuevopost"> <v-ons-speed-dial-item :style="spdStyle">
        <v-ons-icon icon="md-airplay"></v-ons-icon>
      </v-ons-speed-dial-item></router-link>
      <v-ons-speed-dial-item :style="spdStyle" >
        <v-ons-icon icon="md-search"></v-ons-icon>
      </v-ons-speed-dial-item>
    </v-ons-speed-dial>
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
      
      spdVisible: true,
      updated:open,
      spdOpen: true,
      spdStyle: {
        backgroundColor: this.$ons.platform.isIOS() ? '#4282cc' : null
      },
      
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
    margin-top: 20px;
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
  width: 300%;
    display: flex;

    justify-content: flex-start;
    
}

.buscar{
    display: flex;
    width: 60%;
    align-items: right;
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
    background-color: purple;
}
</style>
