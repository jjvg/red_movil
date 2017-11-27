<template>
<div id="home">
    <v-ons-toolbar class="toolbar--material">
        <div class="left">
        <router-link to="/principal"><v-ons-back-button>Page 1</v-ons-back-button></router-link>
      </div>
      <div class="center"><img src='../assets/img/rc1.png'  class="logo"></div>
    </v-ons-toolbar>
    <br>
    <br>
    <br>
    <v-ons-row>
    <div class="container" >
        <div class="card--material small">
                    <div class="center">
                        <img src="../assets/amigos.jpg" style="width: 100%">
                        <h3 style="color: black;">{{titulo}}</h3>
                    </div>
                    <div class="center">
                         <h5 style="color: black;">{{contenido}}</h5>
                    </div>
                     <div class="right">
                        
                    </div>
                    </div>
                    
        </div>
       
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
     
                    titulo: 'Celebrando con mis amigos',
                    contenido: 'Hoy disfrutamos de un juego en equipo y todos trabajamos juntos para alcanzar nuestra meta'
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
.logo{
  margin: 0 auto;
  padding: 0px;
    width: 40px;
    height: 40px;
    margin-left: 100px;
    margin-right: 100px;    
}
</style>

