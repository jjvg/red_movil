<template>
  <v-ons-page id="app">
       <v-ons-toolbar class="toolbar--material" modifier="material">
      <div class="center white-text">REDCOM</div>
    </v-ons-toolbar>
    <tab></tab>
   
  </v-ons-page>
</template>
<script>
import Tabbar from './Tabbar.vue' 
export default {
  name: 'principal',
  components: {
      'tab': Tabbar
  }
}
</script>

<style scoped>
.toolbar--material{
  background-color: purple;
}
</style>
