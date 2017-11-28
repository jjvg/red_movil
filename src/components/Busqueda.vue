<template>
<v-ons-page id="app">
    <v-ons-toolbar class="toolbar--material">
      <div class="left">
        <router-link to="/principal"><v-ons-back-button style="color:white"></v-ons-back-button></router-link>
      </div>
      <div class="center" >
               <img src='../assets/img/rc1.png' style="width: 40px; height:40px; margin-left:0; margin-top:8px;"> 
      </div>
    </v-ons-toolbar>
    <div class="prin">
        <div class="input-field col s12 m6 busq">
          <i class="material-icons prefix">search</i>
          <input id="nombre"  type="text" class="validate">
          <label for="nombre">Búsqueda</label>
        </div>
        <div class="boton">
           
        <v-ons-button  modifier="material" class="button button--light" @click="actionSheetVisible = true">Buscar</v-ons-button>
        <v-ons-action-sheet v-model="actionSheetVisible" :visible="actionSheetVisible" cancelable: true >
         
          <resultados-page></resultados-page>
          <v-ons-action-sheet-button @click="actionSheetVisible=false" style="color: #222EF0; align: center;" >Volver</v-ons-action-sheet-button>
        </v-ons-action-sheet>
        </div>
    </div>   

</v-ons-page>
</template>

<script>
import Resultados from './Resultados.vue'
export default {
   name: 'buscar',
    components:{
    'resultados-page':Resultados,
   },
       data(){
     return{
          actionSheetVisible: false
     }
      
  },
   
  methods:{
      
      validar(){
          
              this.actionSheetVisible = true;
      }
  },
       
}
</script>
<style scoped>
.prin{
	  display: flex;
    align-items: center;
    flex-direction: row;
    align: center;
}
.busq{
    width: 60%;
    display: flex;
    margin-right: 30px;
    margin-left: 10px;
}
.logo{
  margin: 0 auto;
  padding: 0px;
    width: 40px;
    height: 40px;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 8px;    
}
.button--light {
  background-color: transparent;
  color: #9E9898;
  border: 1px solid rgba(0,0,0,0.2); 
}
.button--light:active {
  background-color: rgba(0,0,0,0.05);
  color: #9E9898;
  border: 1px solid rgba(0,0,0,0.2);
  opacity: 3;
 
}
</style>