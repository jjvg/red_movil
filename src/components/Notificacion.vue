<template>
    <v-ons-page id="app">
    <v-ons-list>
    <v-ons-list-item v-for="item in datos" :key="item.link">
        <v-collection>
        <v-collection-avatar :src="item.img"
            <span class="title impor">{{item.nombre}}</span>
            <p>
                {{item.contenido}}
            </p>
            <span slot="secondary"><v-icon>thumb-up</v-icon></span>
        </v-collection-avatar>
    </v-collection>
    </v-ons-list-item>
    </v-ons-list>
    </v-ons-page>
</template>
<script>
import img3 from '../assets/img/perfil.jpg'
export default {
    name: 'notificacion',
     data: function() {
    return {
           datos: [
          {
          nombre: 'Maria Gomez',
          img:{ type: File,},
          img:img3,
          contenido: 'Tiene toda la razon estoy de acuerdo que desastre'
          },
          {
          label: 'Jose Moreno',
          img: img3,
          contenido: 'No puede ser hasta donde hemos llegado Dios'
          },
           {
          label: 'Luisa Marcano',
          img: img3,
          contenido: 'Asi no se puede seguir hay que denunciarlo , yo le dare me gusta'
          },
           {
          label: 'Marta Lopez',
          img: img3,
          contenido: 'vamos que si podemos mejorar'
          },
        ]
      }
  },
}
</script>
<style scoped>
.import{
    color: grey;
    font-size: 20px;
    
}
</style>
