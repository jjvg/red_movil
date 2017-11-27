<template>
  <v-ons-page id="app">
      <v-ons-toolbar class="toolbar--material" modifier="material" >
          <div class="center"><img src='../assets/img/rc1.png'  class="logo"></div>
          
      </v-ons-toolbar>
       <v-ons-speed-dial position="bottom right" direction="up"
      :visible="spdVisible"
      :open.sync="spdOpen" style="margin-bottom: 50px">
      <v-ons-fab :style="spdStyle">
        <v-ons-icon icon="md-dialpad"></v-ons-icon>
      </v-ons-fab>
      <router-link to="/"><v-ons-speed-dial-item :style="spdStyle">
        <v-ons-icon icon="md-run"></v-ons-icon>
      </v-ons-speed-dial-item></router-link>
       <router-link to="/nuevopost"> <v-ons-speed-dial-item :style="spdStyle">
        <v-ons-icon icon="md-airplay"></v-ons-icon>
      </v-ons-speed-dial-item></router-link>
      <v-ons-speed-dial-item :style="spdStyle" >
        <v-ons-icon icon="md-search"></v-ons-icon>
      </v-ons-speed-dial-item>
    </v-ons-speed-dial>
    <tab></tab>
  
  </v-ons-page>
</template>
<script>
import Tabbar from './Tabbar.vue' 
export default {
  name: 'principal',
  components: {
      'tab': Tabbar
  },
   spdVisible: true,
      updated:open,
      spdOpen: true,
     
}
</script>

<style scoped>
.toolbar--material{
  background-color: purple;
}
.logo{
  margin: 0 auto;
  padding: 0px;
    width: 45px;
    height: 45px;
    align: center;
    margin-left: 140px; 
    margin-top: 8px;  
}

</style>
