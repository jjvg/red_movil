<template>
    <v-ons-page id="app">
    <v-ons-card>
        <img src="../assets/perfil.jpg" alt="Imagen perfil" >
          <div class="title">
            {{user.namen}}
          </div>
      <div class="content">

        <v-ons-list>
          <v-ons-list-header>Acerca de {{user.name}}</v-ons-list-header>
          <v-ons-list-item>{{perfil.info}}</v-ons-list-item>

        </v-ons-list>
        <div>
           <router-link to="/editarperfil"><v-ons-button class="material" style="border-radius:50%;
                                                  position: absolute;
                                                  right: 16px;
                                                  top:8px;"
                                                 >
             <v-ons-icon icon="md-edit"></v-ons-icon></v-ons-button></router-link>
        </div>
        <div class="boton">
        <v-ons-button  modifier="material" class="button button--light" @click="showModal">{{seguidos}} Seguidos</v-ons-button>
        <v-ons-modal :visible="modalVisible" @click="modalVisible = false">
            <p style="text-align: center">
                <seguidos-page></seguidos-page>
            </p>
        </v-ons-modal>
        <v-ons-button  modifier="material" class="button button--light"  @click="showModal1">{{seguidores}} Seguidores</v-ons-button>
        <v-ons-modal :visible="modalVisible1" @click="modalVisible1 = false">
            <p style="text-align: center">
                <seguidores-page></seguidores-page>
            </p>
        </v-ons-modal>
        </div>

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
import axios from 'axios'
import auth from '../auth'
export default {
  name: 'perfil',
   components:{
    'post-page': Post,
    'estado-page': Estado,
    'seguidores-page':Seguidores,
    'seguidos-page':Seguidos
   },
   created(){
      this.getUserInstance();
   },
  data(){
    return{
      nombre: 'Andrea',
      descripcion: 'Licenciada en Educación',
      seguidos:'150',
      seguidores:'100',
      modalVisible: false,
      modalVisible1:false,
      idUser:'',
      user: [],
      perfil:{
        avatar:{Type: Img},
        avatar:'',
        info:'',
      }


    }
  },
  methods: {
    showModal() {
            this.modalVisible = true;

        },
    showModal1(){
      this.modalVisible1= true;
    },
      getUserInstance: function (){
        this.user = auth.getUser()
        this.idUser = this.user.userperfil
        var url = 'http://127.0.0.1:8000/api/perfil/'+this.idUser+'/?format=json';
              axios.get(url,{
                headers: {Authorization: `JWT ${auth.getAuthHeader()}`}
              }).then(response => {
                this.perfil = response.data
              });
        console.log(this.user);
      },
    },

}
</script>

<style scoped>

.button--light {
  background-color: transparent;
 color: rgba(0,0,0,0.4);
  border: 1px solid rgba(0,0,0,0.2);
  font-size: 12px;

}
.button--light:active {
  background-color: rgba(0,0,0,0.05);
  color: rgba(0,0,0,0.4);
  border: 1px solid rgba(0,0,0,0.2);
  opacity: 3;

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
