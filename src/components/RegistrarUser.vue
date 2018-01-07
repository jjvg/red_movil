<template>
 <v-ons-page id="app">
	 	    <v-ons-toolbar class="toolbar--material">
            <div class="left">
                <router-link to="/"><v-ons-back-button style="color: white"></v-ons-back-button></router-link>
            </div>
            <div class="center" >
               <router-link to="/">
                    <img src='../assets/img/rc1.png' style="width: 40px; height:40px; margin-left:100px; margin-top:8px;">
                </router-link> 
            </div>
            
            
        </v-ons-toolbar>
		

<div class="container">
			<div align="center">
				<h3 style="color: rgb(10, 160, 152);">Registro de Personas</h3>
			</div>
	<div class="row">
   		<form class="col s12">
      		<div class="row">
				<div class="input-field col s12 m6">
         			 <i class="material-icons prefix">email</i>
         	 		<input id="email" type="email" v-model="textSearch" class="validate" required>
         			 <label for="email">Correo electrónico</label>
                     <div class="al"> <h4 v-if="usersFilter && usersFilter.length" v-show="show">Este usuario ya se encuentra registrado</h4>
                      <h5  v-else>Usuario disponible</h5></div>
        		</div>
        		<div class="input-field col s12 m6">
         			 <i class="material-icons prefix">account_circle</i>
          			<input id="nombre"  type="text" class="validate" required>
          			<label for="nombre">Nombre</label>
       			</div>
       			<div class="input-field col s12 m6">
          			<i class="material-icons prefix">account_circle</i>
         	 		<input id="apellido" type="text" class="validate" required>
          			<label for="apellido">Apellido</label>
        		</div>
		 		<div class="input-field col s12 m6">
          			<i class="material-icons prefix">lock</i>
          			<input id="password" type="password" class="validate" required>
          			<label for="password">Contraseña</label>
        		</div>
			</div>
			
                <label>Sexo</label>
                <div class="center">
                    <v-ons-select name="sexo" material class="material" style="width: 150%" v-model="selectedItem" required>
                        <option class="tam" v-for="item2 in sexo" :value="item2.value" :key="item2.key">
                            {{ item2.text }}
                        </option>
                    </v-ons-select>
                </div>
			<br>
	  	
		 <div class="center"> 
			 <button class="button--light btn1" modifier="large" type="submit" onclick = "validar()">REGISTRAR</button> </div>
			
   		 </form>
            
 	  </div>
	</div>				
 </v-ons-page>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
	name: 'registro',
    created: function() {
        this.getUser();
    },
    //función que se ejecuta al escribir en el input email
   computed:{
     usersFilter: function(){
         var inpEm=$("#email").val();
       if(inpEm == "")
       {
           this.show = false
           
       }
       else{
           this.show = true
           
       }
       var textSearch = this.textSearch;
       return this.users.filter(function(el) {
         return el.email.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
       });
       
     }
   },
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
        //método utilizado para llenar el arreglo de users
     getUser: function(){
          axios.get('http://127.0.0.1:8000/api/user/?format=json')
        .then(response => {
        this.users = response.data
    });
  
     }
	}
	
};
</script>
<style scoped>
.btn1{
    width: 100%;
    box-sizing: border-box;
    font: inherit;
    font-style: inherit;
    font-variant-ligatures: inherit;
    font-variant-caps: inherit;
    font-variant-numeric: inherit;
    font-variant-east-asian: inherit;
    font-weight: 500;
    font-stretch: inherit;
    font-size: 14px;
    line-height: 36px;
    font-family: 'Roboto', 'Noto', sans-serif;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12), 0 3px 1px -2px rgba(0, 0, 0, .2);
    min-height: 36px;
    line-height: 36px;
    padding: 0 16px;
    text-align: center;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    opacity: 1;  
    line-height: 32px;
    letter-spacing: 0;
    border-radius: 3px;
    -webkit-font-smoothing: antialiased;
}
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
.toolbar--material{
	background-color: purple;
}

h4{
    font-size: 12px;
    color: red;
    line-height: 0px;
    
}
h5{
    font-size: 12px;
    color: #26a69a;
    line-height: 0px;
    
}
.al{
    margin-left: 45px;
    margin-top: 0px;
}

</style>
