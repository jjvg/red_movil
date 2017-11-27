<template>
    <v-ons-page id="app">
    <v-ons-card>
    <v-ons-list>
    <v-ons-list-header style="color:  rgb(10, 160, 152);font-weight: bold;">Actividad</v-ons-list-header>
    <v-ons-list-item tappable modifier="material" v-for="item in datos" :key="item.link" class="ite">
        <div class="left">
          <img class="list-item__thumbnail" :src="item.img">
        </div>
        <div class="center">
          <span class="list-item__title">{{item.nombre}}</span>
          <span class="list-item__subtitle">{{item.contenido}}</span>
        </div>
      </v-ons-list-item>
      <br>
    <v-ons-list-header style="color:  rgb(10, 160, 152);font-weight: bold;">Publicaciones</v-ons-list-header>
      <v-ons-list-item tappable  modifier="longdivider " class="material ite" v-for="i in publi" :key="i.link">
      {{i.cont}}
      </v-ons-list-item>
    </v-ons-list>
    </v-ons-card>
    </v-ons-page>
</template>
<script>
import img3 from '../assets/img/perfil.jpg'
export default {
    name: 'notificacion',
     data: function() {
    return {
           datos: [
          {
          nombre:'Maria Gomez',
          img:{ type: File,},
          img:img3,
          contenido: 'ha comenzado a seguirte'
          },
          {
          nombre:'Jose Vaamonde',
          img: img3,
          contenido: 'te ha etiquetado en una nueva denuncia'
          },
           ],
          publi:[
          {
          cont: 'Tu denuncia esta siendo seguida'
          },
           {
          cont: 'Tu denuncia ha sido atendida'
          },
        ]
         
      }
  },
}
</script>
<style scoped>
.import{
    color: grey;
    font-size: 20px;
    
}
.ite{
     border-bottom: 1px grey solid;
     border-left: 1px grey solid;
     margin: 2px;
     border-radius: 5%
}

</style>
