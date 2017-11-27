<template>
    <v-ons-page id="app">
        <v-ons-toolbar class="toolbar--material">
            <div class="left">
        <router-link to="/principal"><v-ons-back-button>Page 1</v-ons-back-button></router-link>
      </div>
            <div class="center"><img src='../assets/img/rc1.png'  class="logo"></div>
        </v-ons-toolbar>
    <v-ons-card>    
    <v-ons-list>
    <v-ons-list-header style="color:  rgb(10, 160, 152);font-weight: bold;">Comentarios</v-ons-list-header>
      <v-ons-list-item v-for="item in datos" :key="item.link">
        <div class="left">
          <img class="list-item__thumbnail" :src="item.img">
          
        </div>
        
        <div class="center">

          <span class="list-item__title">{{item.nombre}}</span>
          <span class="list-item__subtitle">{{item.contenido}}</span>
        </div>
      </v-ons-list-item>
      </v-ons-list>
     
     
    <div class="comenta">
         <v-ons-input name="comentario" type="text" placeholder="Comentar..."></v-ons-input>
           
                <div class="right">
                    <v-ons-button class="material" style="border-radius:50%; top:6px;"><i class="zmdi zmdi-check"></i>
                    </v-ons-button>
                </div>  
                          
    </div>
             
     </v-ons-card>         
    </v-ons-page>
</template>

<script>
import imagen from '../assets/img/perfil.jpg'
export default {
   name: 'comentario',
   data: function() {
    return {
           
        datos: [
          {
          nombre: 'María Perez',
          img:imagen,
          contenido: 'Buena foto',
          },
          {
          nombre: 'José Torres',
          img: imagen,
          contenido: 'Saludos',
          },
          {
          nombre: 'Ana Rojas',
          img: imagen,
          contenido: 'Me encanta esta foto',
          },
        ]
      }
   },
}


</script>
<style scoped>
.toolbar--material{
    background-color: purple;
}
.logo{
  margin: 0 auto;
  padding: 0px;
    width: 40px;
    height: 40px;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 8px;    
}

</style>