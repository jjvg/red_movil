<template>
    <v-ons-page id="app">
        <v-ons-toolbar class="toolbar--material">
            <div class="center">Comentarios</div>
        </v-ons-toolbar>
    <v-ons-card>    
    <v-ons-list>
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
                    <v-ons-button class="material" style="border-radius:50%; top:6px;">
                        <v-ons-icon icon="md-edit"></v-ons-icon>
                    </v-ons-button>
                </div>  
                          
    </div>
             
     </v-ons-card>         
    </v-ons-page>
</template>

<script>
import imagen from '../assets/img/rc1.png'
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
</style>