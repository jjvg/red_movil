<template>
    <v-ons-page id="app">
       <v-ons-toolbar class="toolbar--material">
      <div class="center white-text">REDCOM</div>
    </v-ons-toolbar>
    <v-ons-card>
        <img src="../assets/perfil.jpg" alt="Imagen perfil" >
          <div class="title">
            {{nombre}}
          </div>
      <div class="content">

        <v-ons-list>
          <v-ons-list-header>Información</v-ons-list-header>
          <v-ons-list-item>{{correo}}</v-ons-list-item>
          <v-ons-list-item>{{descripcion}}</v-ons-list-item>
          
        </v-ons-list>
        <div >
            <div class="rigth"><v-ons-button  modifier="material" style="margin: 6px 0">Publicar</v-ons-button></div>
            <v-ons-button modifier="material" style="border-radius:50%; 
                                                  position: absolute; 
                                                  right: 16px; 
                                                  top:8px;">
             <v-ons-icon icon="md-edit"></v-ons-icon></v-ons-button>
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
      correo: 'andrea123@gmail.com',
      descripcion: 'ggasgs'
    }
  }
  
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
