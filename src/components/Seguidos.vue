<template>
<div class="container" id="app">
     <v-ons-list>
      <v-ons-list-item v-for="item in datos" :key="item.link">
        <v-ons-card>

          <v-ons-list-item>
              <div class="left">
                <img :src="item.img" class="perfil">
              </div>
              <div class="center">
                <div class="title">
                  <h5>{{item.label}}</h5>
                </div>
              </div>
              <div class="right">
                  <v-ons-button  modifier="material" class="button--light"><v-ons-icon icon="md-minus-circle">No Seguir</v-ons-icon></v-ons-button>
              </div>
          </v-ons-list-item>
        </v-ons-card>
      </v-ons-list-item>
    </v-ons-list>
    
</div>
</template>
<script>
import img2 from '../assets/amigos.jpg'
export default {
  name: 'seguidos',
  data: function() {
    return {
           datos: [
          {
          label: 'María Perez',
          img:{
            type: File,
          },
          img:img2,
          },
          {
          label: 'José Torres',
          img: img2,
          },
          {
          label: 'Ana Rojas',
          img: img2,
          },
        ]
      }
  },
  
  }

</script>
<style scoped>
.button{
  position: right;
   font-size: 12px;

}
.button--light {
  background-color: transparent;
  color: rgba(0,0,0,0.4);
  border: 1px solid rgba(0,0,0,0.2);
 
}
.button--light:active {
  background-color: rgba(0,0,0,0.05);
  color: rgba(0,0,0,0.4);
  border: 1px solid rgba(0,0,0,0.2);
  opacity: 1;
 
}
.pub{
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
}
img{
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 50px;    
}
v-ons-card{
  text-align: center;
}
</style>