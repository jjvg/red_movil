<template>
    <v-ons-tabbar swipeable position="bottom" modifier="material" style="background-color: purple; color: purple" 
    :visible="true" :index.sync="activeIndex">
  <template slot="pages">
    <home-page></home-page>
    <perfil-page></perfil-page>
    
  </template>

  <v-ons-tab  icon="md-home" label="Home"></v-ons-tab>
  <v-ons-tab icon="md-account" label="Perfil"></v-ons-tab>
  <v-ons-tab icon="md-notifications" label="Noti"></v-ons-tab>
</v-ons-tabbar>
</template>

  
<script>
import HomePage from './HomePage.vue'
import Perfil from './Perfil.vue'
export default {
  name: 'tabbar',
  components: {
    'home-page':HomePage,
    'perfil-page':Perfil,
  },
 data: function(){
    return {
        msg: 'Welcome',
       activeIndex: 0,
               
          computed: {
                 title() {
                          return this.tabs[this.activeIndex].label;
                         }
                    }
          }
      }
}
</script>
<style scoped>
ons-tab{
  background-color: purple;
  
}
</style>
