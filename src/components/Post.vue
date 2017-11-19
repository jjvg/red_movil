<template>
<div class="container">
     <v-ons-list>
      <v-ons-list-item v-for="item in datos" :key="item.link">
        <v-ons-card>
            <div class="card__title center">{{item.label}}</div>
            <router-link to="/detallepost"><div class="card__imagen">
                <img :src="item.img" style="width: 100%">    
            </div></router-link>
            <div class="card_content">
                <p>{{item.contenido}}</p>
            </div>
            <div class="botn">
               <div class="gustar"><v-ons-button  modifier="material" style="margin: 6px 0"><i class="material-icons">thumb_up</i>Me gusta</v-ons-button></div>
              <div class="cm"><v-ons-button  modifier="material" style="margin: 6px 0"><i class="material-icons" prefix>chat_bubble</i>Comentarios</v-ons-button></div>
              
              </div>
              <div class="coment">
            <div class="comentario">
              <div class="ic">
                <i class="material-icons">chat_bubble</i>
              </div>
              <div class="com">
                <v-ons-input name="comentario" type="text" placeholder="¿Qué opinas?"></v-ons-input>
              </div>
              </div>
              <v-ons-button  modifier="material" style="margin: 6px 0">Comentar</v-ons-button>
            </div>
        </v-ons-card>
      </v-ons-list-item>
    </v-ons-list>
</div>
</template>
<script>
import img2 from '../assets/amigos.jpg'
import DetallePost from './DetallePost.vue'
export default {
  name: 'post',
  components: {
    DetallePost
  },
  data: function() {
    return {
           datos: [
          {
          label: 'Core Docs',
          img:{
            type: File,
          },
          img:img2,
          contenido: 'Probando'
          },
          {
          label: 'Community Chat',
          img: img2,
          contenido: 'hola'
          },
        ]
      }
  },
  methods: {
     verDetalle(){
       
     }
  }
}
</script>
<style>
.comentario{
   display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
}
.ic{
  width: 20%;
  display: flex;
  flex-direction: row;
  margin-left: 10px;
	margin-right: 0px;
}

.com{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}
.botn{
  display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
}
.gustar{
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
	margin-right: 5px;
}
.cm{

}
</style>