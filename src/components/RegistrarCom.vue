<template>
    <v-ons-page id="app">
	    <v-ons-toolbar class="toolbar--material">
			<div class="left">
				<router-link to="/"><v-ons-back-button style="color: white"></v-ons-back-button></router-link>
			</div>
			<div class="center"><img src='../assets/img/rc1.png'  class="logo"></div>
        </v-ons-toolbar>
    
        <div class="container">

			<div align="center">
				<h3  style="color: rgb(10, 160, 152);">Registro de Comunidades</h3>
			</div>
	<div class="row">
   		<form class="col s12" action="#">
      		<div class="row">
				<div class="input-field col s12 m6">
         			 <i class="material-icons prefix">email</i>
         	 		<input id="email" type="email" class="validate">
         			 <label for="email">Correo electrónico</label>
        		</div>
        		<div class="input-field col s12 m6">
         			 <i class="material-icons prefix">supervisor_account</i>
          			<input id="nombre"  type="text" class="validate">
          			<label for="nombre">Nombre</label>
       			</div>
		 		<div class="input-field col s12 m6">
          			<i class="material-icons prefix">lock</i>
          			<input id="password" type="password" class="validate">
          			<label for="password">Contraseña</label>
        		</div>
			</div>
				<div class= "tit">
					<i class="material-icons prefix" style="color: rgb(10, 160, 152);">place</i>
					<h5 style="color: rgb(10, 160, 152);">Ubicación</h5>
				</div>
			<label>Estado</label>
                <div class="center">
                    
                
                    <v-ons-select name="edo" material class="material" style="width: 80%" v-model="selectedItem" >
                        <option class="tam" v-for="item1 in edos" :value="item1.value" :key="item1.key">
                            {{ item1.text }}
                        </option>
                    </v-ons-select>
                
                </div>
                <label>Ciudad</label>
                <div class="center">
                    
                
                    <v-ons-select name="ciudad" material class="material" style="width: 80%" v-model="selectedItem" >
                        <option class="tam" v-for="item2 in ciudad" :value="item2.value" :key="item2.key">
                            {{ item2.text }}
                        </option>
                    </v-ons-select>
                
                </div>
                <div class="col s12 m12 l6">
               <div class="input-field">
                     <v-text-area name="contenido" id="contenido" length="50" v-model="contenido"></v-text-area>
                     <label for="text"><i class="material-icons">pin_drop</i>Dirección</label>
                </div>
           </div>
			
         <div class="center">
                <router-link to="/" ><v-ons-button  modifier="material large" class="button button--light" style="margin: 6px 0">Registrar</v-ons-button></router-link> 
         </div>
			
			
   		 </form>
 	  </div>
	</div>				
 </div>		 


    </v-ons-page>
</template>
<script>
    export default {
		name: 'regcom',
		data : function() {
        return {
           
            titulo:{type:String},
            titulo:'', 
            imagen:{type:File},
            contenido:{type:String},
            categoria:{type:Boolean},
      edos: [
        { text: 'Lara', value: 'Lara' },
        { text: 'Yaracuy', value: 'Yaracuy' },
        { text: 'Falcón', value: 'Falcón' },
        { text: 'Zulia', value: 'Zulia'},
        { text: 'Aragua', value: 'Aragua' }
      ],
      
      ciudad: [
        { text: 'Barquisimeto', value: 'Barquisimeto' },
        { text: 'San Felipe', value: 'San Felipe' },
        { text: 'Coro', value: 'Coro' },
        { text: 'Maracaibo', value: 'Maracaibo'},
        { text: 'Maracay', value: 'Maracay' }
      ],
      selectedItem: ''
        

       }
       
   
      
   },
    }

</script>

<style scooped>
.logo{
  margin: 0 auto;
  padding: 0px;
    width: 40px;
    height: 40px;
    align: center;
    margin-left: 70px;
    margin-right: 0px;    
    margin-top: 8px;   
}

.tit{
	    display: flex;
    align-items: center;
    flex-direction: row;
    align: center;
    margin-left: 100px;
}

.ic {
	width: 20%;
    display: flex;
    align-items: center !important;
    flex-direction: row;
    margin-left: 10px;
	margin-right: 0px;
}
.ub{
	width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-left: 10px;
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
.toolbar--material{
    background-color: purple
}
</style>