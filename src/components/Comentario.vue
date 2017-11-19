<template>

    <div class="comentarios">
        
        <div class="img">{{item.img2}} </div>
        <div class="ctn2">
        
            <div class="nombre">{{item.nombre}} </div>
            <div class="coment">{{item.contenido}} </div>
        </div>
    </div>
    <div class="comentario">
              <div class="ic">
                    <i class="material-icons">chat_bubble</i>
              </div>
              <div class="com">
                     <v-ons-input name="comentario" type="text" placeholder="¿Qué opinas?"></v-ons-input>
              </div>
              
              <v-ons-button  modifier="material" style="margin: 6px 0">Comentar</v-ons-button>
    </div>
</template>

<script>
import img2 from 'https://pbs.twimg.com/profile_images/2669709327/0d45257779c840117f61f48822a82954_normal.jpeg'
export default {
   name: 'comentarios'
}

data: function() {
    return {
           datos: [
          {
          nombre: 'María Conchita',
          img:{
            type: File,
          },
          img:img2,
          contenido: 'Probando'
          },
          {
          nombre: 'Pepito',
          img: img2,
          contenido: 'buu'
          },
        ]
      }
  },
</script>
