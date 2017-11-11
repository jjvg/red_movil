<template>
    <v-ons-page id="app">
       <!--<v-ons-toolbar>
      <div class="center">Perfil</div>
    </v-ons-toolbar>-->

    
    <v-ons-card>
       <img src="../assets/perfil.jpg" alt="Onsen UI" style="border-radius: 50%; width: 150px;
     height: 150px">
          <div class="title">
            Awesome framework
          </div>
      <div class="content">
        <div>
            <v-ons-button class="button--material"><v-ons-icon></v-ons-icon>Editar perfil</v-ons-button>
        </div>
        <v-ons-list>
          <!--<v-ons-list-header>Bindings</v-ons-list-header>-->
          <v-ons-list-item>Vue</v-ons-list-item>
          <v-ons-list-item>Angular</v-ons-list-item>
          <v-ons-list-item>React</v-ons-list-item>
        </v-ons-list>
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
.img{
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
.button--material {
  font-weight: 100;
  font-size: 10px;
  font-weight: bold;
  font-family: 'Roboto' ;
 

}


</style>
