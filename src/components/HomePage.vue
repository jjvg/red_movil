<template>
  <v-ons-page id="app" modifier="material">	  
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
      
     
      
    };
    
  },
  methods: {
  
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
