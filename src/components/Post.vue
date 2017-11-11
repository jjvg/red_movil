<template>
    <v-ons-page id="app">
     <v-ons-list>
      <v-ons-list-item v-for="item in essentialLinks" :key="item.link">
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
    </v-ons-page>
</template>
<script>
export default {
  name: 'post',
  data(){
      return{
           essentialLinks: [
        {
          label: 'Core Docs',
          img: url('../assets/amigos.jpg'),
          contenido: 'Probando'
        },
        {
          label: 'Community Chat',
          img: url('../assets/amigos.jpg'),
          contenido: 'Probando'
        }
        ]
      }
  }
}
</script>
