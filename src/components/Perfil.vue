<template>
    <v-ons-page id="app">
    <v-ons-card>
        <img src="../assets/perfil.jpg" alt="Imagen perfil" >
          <div class="title">
            {{nombre}}
          </div>
      <div class="content">

        <v-ons-list>
          <v-ons-list-header>Acerca de {{nombre}}</v-ons-list-header>
          <v-ons-list-item>{{descripcion}}</v-ons-list-item>
          
        </v-ons-list>
        <div >
<<<<<<< HEAD
          <router-link to="/nuevopost"><v-ons-button style="margin: 10px 0;" class="material" @click="nuevoPost()">Publicar</v-ons-button></router-link>
=======
          <router-link to="/nuevopost"><v-ons-button style="margin: 10px 0;" class="material">Publicar</v-ons-button></router-link>
            
>>>>>>> 1ccf437286b5813295d36a8dcb0e4c9d04d23f58
          <router-link to="/editarperfil"><v-ons-button class="material" style="border-radius:50%; 
                                                  position: absolute; 
                                                  right: 16px; 
                                                  top:8px;"
                                                 >
             <v-ons-icon icon="md-edit"></v-ons-icon></v-ons-button></router-link>
        </div>
        
      </div>
    </v-ons-card>
    <v-ons-card>
      <v-ons-list-header>Publicaciones</v-ons-list-header>
    <post-page></post-page>
     </v-ons-card>

    </v-ons-page>
</template>

<script>

import Post from './Post.vue'
export default {
  name: 'perfil',
   components:{
    'post-page': Post,
   },
  data(){
    return{
      nombre: 'Andrea',
      descripcion: 'ggasgs'
    }
  },
  

}
</script>

<style scoped>
img{
     border-radius: 50%;
     width: 150px;
     height: 150px;
     
     }

.toolbar--material{
    background-color: purple;
}
ons-card {
  text-align: center;
  
}
</style>
