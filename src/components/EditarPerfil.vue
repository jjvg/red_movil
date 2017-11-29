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
        <div class="center">
				<h3  style="color: rgb(10, 160, 152);">Editar perfil</h3>
        </div>
   		<form action="#">
                <v-ons-row>
                        <v-ons-col>
                             <v-ons-button id="im" modifier="quiet" @click="camara()" v-bind="ver" v-model="ver">
                                 <div style="color:#5d6367"><v-ons-icon style="color: #61e4b8; margin-right: 5px; margin-top:10px " icon="md-camera" size="20px"></v-ons-icon>  Camara</div>
                             </v-ons-button>
                        </v-ons-col>
                        <v-ons-col>
                            <v-ons-button id="im" modifier="quiet"  @click="ver=true" v-model="ver" v-bind="ver">
                                <div style="color:#5d6367"><v-ons-icon style="color: rgb(172, 7, 187); margin-right: 5px; margin-top:10px " icon="md-collection-image" size="20px"></v-ons-icon> Fototeca</div>
                            </v-ons-button>    
                        </v-ons-col>
                </v-ons-row>
            <br> 
           <v-ons-card v-if="ver">
                 <div class="center">
                     <img id="myimg"style="width: 80%"></img>
                 </div>
            </v-ons-card>
            <br>
            <div class="container">
            <div class="row">
                <form class="col s12" action="#">
                    <div class="row">
                        <div class="input-field col s12 m6">
                            <i class="material-icons prefix">account_circle</i>
                            <input id="nombre" type="text" class="validate">
                            <label for="nombre">Nombre</label>
                        </div>
                        <div class="input-field col s12 m6">
                            <i class="material-icons prefix">person_outline</i>
                            <input id="apellido"  type="text" class="validate">
                            <label for="apellido">Apellido</label>
                        </div>
                        <div class="input-field col s12 m6">
                             <i class="material-icons prefix">email</i>
                            <input id="correo" type="text" class="validate">
                            <label for="correo">Correo Electrónico</label>
                        </div>
                        <div class="input-field col s12 m6">
                            <i class="material-icons prefix">sentiment_very_satisfied</i>
                            <input id="descripcion" type="text" class="validate">
                            <label for="descripcion">Sobre mí</label>
                        </div>
                        <div class="input-field col s12 m6">
                            <i class="material-icons prefix"> location_on</i>
                            <input id="direccion" type="text" class="validate">
                            <label for="direccion">Dirección</label>
                        </div>
                    </div>
                </form>
            </div>
          </div>
            <section style="margin: 20px">
                <router-link to="/principal"><v-ons-button class="button button--light" modifier="material large" >Guardar</v-ons-button></router-link>
                
            </section>
        </form>    
    <div id="deviceready" class="blink">
        <p class="event listening"></p>
        <p class="event received"></p>
    </div>
         
    </v-ons-page>


</template>
<script>
 export default {
     name: 'editarperfil',
     
     data:function(){
    
      return{
          ver:{type:Boolean, default:false},
          ver:false,
      nombre: 'Andrea',
      apellido: '',
      correo: 'andrea123@gmail.com',
      descripcion: 'Licenciada en Educación',
      direccion:''
      
    }
     document.getElementById("im").addEventListener 
         ("click", cameraTakePicture);
    
  },

   
      
   methods: {
              camara()
              {
                  this.ver=true;
                    function cameraTakePicture() { 
                     navigator.camera.getPicture(onSuccess, onFail, {  
                        quality: 50, 
                        destinationType: Camera.DestinationType.DATA_URL });  
   
                    function onSuccess(imageData) { 
                     var image = document.getElementById('myimg'); 
                    image.src = "data:image/jpeg;base64," + imageData; 
                    }  
   
                        function onFail(message) { 
                        alert('Failed because: ' + message); 
                    } 
                 }
                }
            } 
 }  
</script>
<style scoped>
.button--light {
  background-color: transparent;
  color: rgba(0,0,0,0.4);
  border: 1px solid rgba(0,0,0,0.2);
 
}
.button--light:active {
  background-color: rgba(0,0,0,0.05);
  color: rgba(0,0,0,0.4);
  border: 1px solid rgba(0,0,0,0.2);
  opacity: 3;
 
}

.toolbar--material{
    background-color: purple;
}

ons-card {
  text-align: center;
  
}

.ic {
	width: 20%;
    display: flex;
    align-items: center !important;
    flex-direction: row;
    margin-left: 10px;
	margin-right: 0px;
}

h6{
  font-size: 15px;
}



</style>
