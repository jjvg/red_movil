<template>
<div class="container">
  <v-ons-list-title>holaaa</v-ons-list-title>
     <v-ons-list>
      <v-ons-list-item v-for="item in datos" :key="item.link">
        <v-ons-card>
            <div class="card__title center">{{item.label}}</div>
            <div class="card__imagen">
                <img :src="item.img" style="width: 100%">    
            </div>
            <div class="card_content">
                <p>{{item.contenido}}</p>
            </div>
        </v-ons-card>
      </v-ons-list-item>
    </v-ons-list>
</div>
</template>
<script>
import img2 from '../assets/amigos.jpg'
export default {
  name: 'post',
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
          contenido: 'Probando'
          },
        ]
      }
  }
}
</script>
