<template>
  <v-ons-page id="app">
      <v-ons-toolbar class="toolbar--material">

            <div class="center" >
               <img src='../assets/img/rc1.png' style="width: 40px; height:40px; margin-left:0; margin-top:8px;">
            </div>


        </v-ons-toolbar>
       <v-ons-speed-dial position="bottom right" direction="up"
      :visible="spdVisible"
      :open.sync="spdOpen" style="margin-bottom: 50px">
      <v-ons-fab :style="spdStyle">
        <v-ons-icon icon="md-dialpad" modifier="material"></v-ons-icon>
      </v-ons-fab>
      <v-ons-speed-dial-item :style="spdStyle" @click="salir()">
        <v-ons-icon icon="md-run"></v-ons-icon>
      </v-ons-speed-dial-item>
       <router-link to="/nuevopost"> <v-ons-speed-dial-item :style="spdStyle">
        <v-ons-icon icon="md-airplay"></v-ons-icon>
      </v-ons-speed-dial-item></router-link>
      <router-link to="/busqueda"><v-ons-speed-dial-item :style="spdStyle" >
        <v-ons-icon icon="md-search"></v-ons-icon>
      </v-ons-speed-dial-item></router-link>
    </v-ons-speed-dial>
    <tab></tab>
  <div id="deviceready" class="blink">
                <p class="event listening"></p>
                <p class="event received"></p>
            </div>
  </v-ons-page>
</template>
<script>
import Tabbar from './Tabbar.vue'
import auth from '../auth'
export default {
  name: 'principal',
  components: {
      'tab': Tabbar
  },
  data(){
    return{
   spdVisible:{ Type : Boolean},
   spdVisible:true,
      updated: open,
      spdOpen: true,
      }
   },
  methods:{
     salir(){
       auth.logout()
       }
     }

}
</script>

<style scoped>
.toolbar--material{
  background-color: purple;
}

</style>
