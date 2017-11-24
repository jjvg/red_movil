<template>
<v-ons-page>
    <div class="coment">
        
        <div class="img">{{img}} </div>
        <div class="ctn2">
        
            <div class="nombre"  v-model="nombre">{{nombre}} </div>
            <div class="coment" v-model="contenido">{{contenido}} </div>
        </div>
    </div>
    <div class="comenta">
              <div class="ic">
                    <i class="material-icons">chat_bubble</i>
              </div>
              <div class="com">
                     <v-ons-input name="comentario" type="text" placeholder="¿Qué opinas?"></v-ons-input>
              </div>
              
    </div>
              <v-ons-button modifier="material" style="margin: 6px 0">Comentar</v-ons-button>
    </v-ons-page>
</template>

<script>
import imagen from '../assets/img/rc1.png'
export default {
   name: 'comentarios',
   data: function() {
    return {
           
          
          nombre: 'María Conchita',
          img:{ type: File},
          img:imagen,
          contenido: 'Probando',
          }

      },

}


</script>
