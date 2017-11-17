<template>
    <v-ons-page id="app">
       <!--<v-ons-toolbar>
      <div class="center">Perfil</div>
               
    </v-ons-toolbar>-->

    
    <v-ons-card>
        <img src="../assets/perfil.jpg" alt="Onsen UI" >
          <div class="title">
            Andrea
          </div>
      <div class="content">

        <v-ons-list>
          <v-ons-list-header>Información</v-ons-list-header>
          <v-ons-list-item>Correo electrónico</v-ons-list-item>
          <v-ons-list-item>Descripción</v-ons-list-item>
          
        </v-ons-list>
        <div >
            <div class="left"><v-ons-button class="button--material"><v-ons-icon></v-ons-icon>Escribir publicación</v-ons-button></div>
            <v-ons-button class="button--material" style="border-radius:50%; 
            position: absolute; right: 16px; top:8px;"> <v-ons-icon icon="md-edit"></v-ons-icon></v-ons-button>
        </div>
        
      </div>
    </v-ons-card>
    
      

    </v-ons-page>
        </template>
<script>

export default {
  name: 'perfil'

}
</script>

<style scoped>
img{
     border-radius: 50%;
     width: 150px;
     height: 150px;
     
     }

.toolbar--material{
    background-color: purple;
}
ons-card {
  text-align: center;
  
}

.btn {
  
  font-weight: bold;
  font-family: 'Roboto' ;
  position: absolute;
  right: 16px;
  border-radius: 50%;
  top:8px;
  
  
 
}


</style>
