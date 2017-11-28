<template>
    <v-ons-page id="app">
        <v-ons-toolbar class="toolbar--material">
            <div class="left">
                <router-link to="/principal"><v-ons-back-button style="color: white"></v-ons-back-button></router-link>
            </div>
            <div class="center" >
               <img src='../assets/img/rc1.png' style="width: 40px; height:40px; margin-left:0; margin-top:8px;"> 
            </div>
            
            
        </v-ons-toolbar>
    <v-ons-card>    
    <v-ons-list>
    <v-ons-list-header style="color:  rgb(10, 160, 152);font-weight: bold;">Comentarios</v-ons-list-header>
      <v-ons-list-item v-for="item in datos" :key="item.link">
        <div class="list__item__left">
          <img class="list-item__thumbnail" :src="item.img">
          
        </div>
        
        <div class="list__item__center">
          <span class="list-item__title">{{item.nombre}}</span>
          <span class="list-item__subtitle">{{item.contenido}}</span>
        </div>
      </v-ons-list-item>
      </v-ons-list>
     
     
    <div class="comenta">
         <textarea class="textarea" rows="3" placeholder="Comentar..."></textarea>
                <div class="right">
                    <v-ons-button class="material" style=" position: relative;border-radius:50%; top:4px;"><v-ons-icon icon="md-check"></v-ons-icon>
                    </v-ons-button>
                </div>  
                          
    </div>
             
     </v-ons-card> 
             
    </v-ons-page>
</template>

<script>
import imagen from '../assets/img/perfil.jpg'
import img1 from '../assets/img/perrito.jpg'
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
          img: img1,
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

.textarea {
  
  background: transparent;
  font-family: -apple-system, 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
  font-weight: 400;
  font-size: 14px;
  padding: 5px 5px 5px 5px;
  font-size: 15px;
  font-weight: 400;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #1f1f21;
  width: 80%;
  margin-right: 10px ; 
}

.list__item__left {
 
  padding: 0 12px 0 0;
  line-height: 1.2em;
  min-height: 44px;
}

.list__item__center {
  margin-right: auto;
  -webkit-background-size: 100% 1px;
  background-size: 100% 1px;
  padding: 12px 6px 12px 0;
 
}


.list-item__title {
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  -webkit-box-ordinal-group: 1;
  -webkit-order: 0;
  -moz-box-ordinal-group: 1;
  -ms-flex-order: 0;
  order: 0;
  color: #000;
  font-weight: 900;
  font-size: 16px;
}
.list-item__subtitle {
  opacity: 1;
  font-size: 14px;
  -webkit-box-ordinal-group: 2;
  -webkit-order: 1;
  -moz-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
}

.toolbar--material{
    background-color: purple;
}


</style>