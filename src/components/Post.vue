<template>
<div class="container">
     <v-ons-list>
      <v-ons-list-item v-for="item in datos" :key="item.link">
        <v-ons-card>
            <div class="pub">
               <div class="img">
                   <img src="../assets/img/perfil.jpg" style="width: 150% !important;" class="perfil">
               </div> 
                <div class="col">
                  <div class="f1">
                      <h4>Andrea</h4>
                  </div>
                  <div class="f2">
                      <h6>Hace 2 minutos</h6>
                  </div>
                </div>
            </div>
           
            <router-link to="/detallepost"><div class="card__imagen posti">
                <img :src="item.img" style="width: 100%">    
            </div></router-link>
            <div class="card_content">
                <h5 style="text-decoration:none;">{{item.contenido}}</h5>
            </div>
            
            <v-ons-row>
                <v-ons-col>
                  <div  class="col2">
                      <div class="ic"><i class="material-icons" style="color: #5d6367;">thumb_up</i></div>
                     <h6 style="color: #5d6367; margin-left:10px; margin-top: 15px;"> Me gusta</h6>
                  </div>
                </v-ons-col>
                <v-ons-col>
                  
                  <router-link to="/detallepost">
                  <div class="col2">
                      <div class="ic"><i class="material-icons" style="color: #5d6367;margin-top: 2px;">chat_bubble_outline</i></div>
                     <h6 style="color: #5d6367;margin-left:10px;margin-top: 15px;"> Comentarios</h6>
                  </div>
                  </router-link>
                </v-ons-col>  
                <v-ons-col>
                  <div class="right">
                  <div  class="col2">
                      <div class="ic"><i class="material-icons" style="color: #5d6367; margin-top: 2px;">local_offer</i></div>
                   </div>
                  </div>
                </v-ons-col>
                  
                
            </v-ons-row>
            <div class="com">
                
            </div>
        </v-ons-card>
      </v-ons-list-item>
    </v-ons-list>
</div>
</template>
<script>
import img2 from '../assets/amigos.jpg'
import DetallePost from './DetallePost.vue'
import Comentarios from './Comentario.vue'
export default {
  name: 'post',
  components: {
    DetallePost,
    'comentarios-page': Comentarios,
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
          contenido: 'Celebrando con mis amigos'
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
.texto{
   display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    margin-left: 0px;
    
}
h6{
  font-size: 15px;
}
.ic{
  width: 20%;
  display: flex;
  margin-right:5px;
}

.p{
    display: inline-block;
    
}
.perfil {
    border-radius: 50%;
}
.pub{
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
}

.img{
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 30px;    
}
.posti{
  margin-top: 15px;
}
.col{
  display: flex;
    align-items: left;
    flex-direction: column;
    width: 100%;
    margin-left: 20px;
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
.col2{
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 7px;
}
h4{
  color: #44714E;
  line-height: 0;
}

h6{
  line-height: 0;
  font-size: 10px;
}
.h5{
  text-align: justify;
  font-size: 15px;
  color: #00000099;
}

</style>