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
        <div>
           <router-link to="/editarperfil"><v-ons-button class="material" style="border-radius:50%; 
                                                  position: absolute; 
                                                  right: 16px; 
                                                  top:8px;"
                                                 >
             <v-ons-icon icon="md-edit"></v-ons-icon></v-ons-button></router-link>
        </div>
        
        <button class="button button--light" @click="showModal">{{seguidos}} Seguidos</button>
        <v-ons-modal :visible="modalVisible" @click="modalVisible = false">
            <p style="text-align: center">
                <seguidos-page></seguidos-page>
            </p>
        </v-ons-modal>
        <button class="button button--light" @click="showModal">{{seguidores}} Seguidores</button>
        <v-ons-modal :visible="modalVisible" @click="modalVisible = false">
            <p style="text-align: center">
                <seguidores-page></seguidores-page>
            </p>
        </v-ons-modal>
                     
      </div>
    </v-ons-card>
          <div class="estado">
            <estado-page></estado-page>
          </div>
    <v-ons-card>
      <v-ons-list-header>Publicaciones</v-ons-list-header>
    <post-page></post-page>
     </v-ons-card>

    </v-ons-page>
</template>

<script>

import Post from './Post.vue'
import Estado from './Estado.vue'
import Seguidores from './Seguidores.vue'
import Seguidos from './Seguidos.vue'
export default {
  name: 'perfil',
   components:{
    'post-page': Post,
    'estado-page': Estado,
    'seguidores-page':Seguidores,
    'seguidos-page':Seguidos
   },
  data(){
    return{
      nombre: 'Andrea',
      descripcion: 'Licenciada en Educación',
      seguidos:'150',
      seguidores:'100',
      modalVisible: false,
      
    }
  },
  methods: {
    showModal() {
      this.modalVisible = true;
        }
  },
  

}
</script>

<style scoped>

.button--light {
  background-color: transparent;
  color: rgba(0,0,0,0.4);
  border: 1px solid rgba(0,0,0,0.2);
 
}
.button--light:active {
  background-color: rgba(0,0,0,0.05);
  color: rgba(0,0,0,0.4);
  border: 1px solid rgba(0,0,0,0.2);
  opacity: 1;
 
}
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
