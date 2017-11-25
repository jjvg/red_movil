<template>
<div class="container">
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
                  <button class="button button--light"><v-ons-icon icon="ion-plus-circled">Seguir</v-ons-icon></button>
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
  name: 'seguidores',
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
          label: 'Ana Rodriguez',
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
   font-size: 14px;

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
h5{

}
</style>