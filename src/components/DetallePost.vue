<template>
<div id="home">
    <v-ons-toolbar class="toolbar--material">
        <div class="left">
        <router-link to="/home"><v-ons-back-button>Page 1</v-ons-back-button></router-link>
      </div>
      <div class="center">REDCOM</div>
    </v-ons-toolbar>
    <br>
    <br>
    <br>
    <v-ons-row>
    <div class="container" >
        <v-card large>
         <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="../assets/amigos.jpg">
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">{{post.titulo}}<i class="material-icons right">more_vert</i></span>
             <div class="left">
                <v-btn>Comentarios</v-btn>    
             </div>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">{{post.titulo}}<i class="material-icons right">close</i></span>
            <p>{{post.contenido}}</p>
        </div>
    </v-card>
       
    </div>
    </v-ons-row>
</div>
</template>

<script>
import img2 from '../assets/amigos.jpg'
export default {
     name: 'detallepost',

     data () {
         return {
              post: [
          {
          titulo: 'Core Docs',
          img:{
            type: File,
          },
          img:img2,
          contenido: 'Probando'
          }
          ],
         }
     }      
     
}
</script>

<style scoped>
.card{
    background-color: purple;
    color:purple;
    margin: 0px, 0px ,0px,0px 
}
.card-image{
    max-width: 10000px;
    margin: 0px, 0px ,0px,0px 
}
</style>
