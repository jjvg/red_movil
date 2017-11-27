<template>
    <v-ons-page id="app">
        <v-ons-toolbar class="toolbar--material">
            <div class="left">
                <router-link to="/principal"><v-ons-back-button>Page 1</v-ons-back-button></router-link>
            </div>
            <div class="center"><img src='../assets/img/rc1.png'  class="logo"></div>
            
        </v-ons-toolbar>

			<div align="center">
				<h3  style="color: rgb(10, 160, 152);">Editar perfil</h3>
			</div>
    <div class="container">
        
         <form class="col s12" id="editarPerfil" method="EditarPerfil" action="/editarperfil">
         <div class="center">
            <div class="row">
                <v-ons-row>
                    <v-ons-col>
                    <div class="col2">
                <v-ons-button id="im" modifier="quiet">
                    <div style="color:#5d6367"><i class="material-icons" style="color: #61e4b8; margin-right: 5px; margin-top:10px ">add_a_photo</i>   Camara</div>
                </v-ons-button>
                </div>
                </v-ons-col>
                <v-ons-col>
                    <div class="col2">
                        <v-ons-button id="im" modifier="quiet">
                    <div style="color:#5d6367"><i class="material-icons" style="color: rgb(172, 7, 187); margin-right: 5px; margin-top:10px ">collections</i> Fototeca</div>
                     </v-ons-button>
                    </div>
                </v-ons-col>
            </v-ons-row>
            </div> 
           <v-ons-card>
                 <div class="center">
                     <img id="myimg"style="width: 80%"></img>
                 </div>
            </v-ons-card>
            <br>
          
            <div class="row">
                <div class="col s12 m6 l2">
                   <label for="nombre">Nombre</label>
                   <div class="input-field" >
                      <v-text-input name="nombre" id="nombre" v-model="nombre"></v-text-input>
                   </div>   
                </div>
            </div>
            <div class="row">
                <div class="col s12 m6 l2">
                   <label for="apellido">Apellido</label>
                   <div class="input-field" >
                       
                      <v-text-input name="apellido" id="apellido" v-model="apellido"></v-text-input>
                   </div>   
                </div>
            </div>
            
            <div class="row">
                <div class="col s12 m6 l2">
                    
                     <label for="correo">Correo eléctronico</label>             
                        <div class="input-field">
                            <v-text-input name="correo" id="correo"  v-model="correo"></v-text-input>
                        </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m6 l4">
                    <label for="descripcion">Descripción</label>
                    <div class="input-field">
                          <v-text-area name="descripcion" id="descripcion" length="50" v-model="descripcion"></v-text-area>
                   </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m6 l4">
                    <label for="direccion">Dirección</label>
                    <div class="input-field">
                          <v-text-input name="direccion" id="direccion" v-model="direccion"></v-text-input>
                   </div>
                </div>
            </div>

            <section style="margin: 20px">
                <router-link to="/principal"><v-ons-button class="button button--light" modifier="material" >Guardar</v-ons-button></router-link>
                <router-link to="/principal"><v-ons-button class="button button--light" modifier="material">Cancelar</v-ons-button></router-link>
            </section>
         </div>
         </form>
         </div>
         
    </v-ons-page>


</template>
<script>
 export default {
     name: 'editarperfil',
     
     data(){
    
      return{
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
img{
     border-radius: 50%;
     width: 80px;
     height: 80px;
     
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

.logo{
  margin: 0 auto;
  padding: 0px;
    width: 40px;
    height: 40px;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 8px;    
}
</style>
