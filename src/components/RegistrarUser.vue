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
				<h3 style="color: rgb(10, 160, 152);">Registro de Personas</h3>
			</div>
	<div class="row">
   		<form class="col s12" action="#">
      		<div class="row">
				<div class="input-field col s12 m6">
         			 <i class="material-icons prefix">contact_mail</i>
         	 		<input id="email" type="email" class="validate">
         			 <label for="email">Correo electronico</label>
        		</div>
        		<div class="input-field col s12 m6">
         			 <i class="material-icons prefix">account_circle</i>
          			<input id="nombre"  type="text" class="validate">
          			<label for="nombre">Nombre</label>
       			</div>
       			<div class="input-field col s12 m6">
          			<i class="material-icons prefix">account_circle</i>
         	 		<input id="apellido" type="text" class="validate">
          			<label for="apellido">Apellido</label>
        		</div>
		 		<div class="input-field col s12 m6">
          			<i class="material-icons prefix">lock</i>
          			<input id="password" type="password" class="validate">
          			<label for="password">Contraseña</label>
        		</div>
			</div>
			
                <label>Sexo</label>
                <div class="center">
                    
                
                    <v-ons-select name="sexo" material class="material" style="width: 80%" v-model="selectedItem" >
                        <option class="tam" v-for="item2 in sexo" :value="item2.value" :key="item2.key">
                            {{ item2.text }}
                        </option>
                    </v-ons-select>
                
                </div>
			<br>
	  		<div class="center">
                <router-link to="/" ><v-ons-button  modifier="material large" class="button button--light" style="margin: 6px 0">Registrar</v-ons-button></router-link> 
         </div>
		
			
   		 </form>
 	  </div>
	</div>				
 </v-ons-page>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
	name: 'registro',
	data : function() {
        return {
           
            titulo:{type:String},
            titulo:'', 
            imagen:{type:File},
            contenido:{type:String},
            categoria:{type:Boolean},
      sexo: [
        { text: 'Femenino', value: 'Femenino' },
        { text: 'Masculino', value: 'Masculino' },
      ],
	}},
	computed:{
		...mapGetters([
			'nombre'
		])
	},
	methods:{
		registrarse(){
			var valor = document.getElementById("nombre").value;
				this.$store.commit('saveUser', valor);
			alert("Registrado"+" "+nombre.value);
		}
	}
	
};
</script>
<style scoped>
p{
	color: black;	
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font: Roboto;
	font-size: 20px;
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

</style>
