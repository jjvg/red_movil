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
				<h3  style="color: rgb(10, 160, 152);">Registro de Comunidades</h3>
			</div>
	<div class="row">
   		<form class="col s12"  :action="url1">
               <p v-if="mostrar">{{msg}}</p>      <!-- esto es lo que digo que no se quiere mostrar, el if no hace caso -->
      		<div class="row">
				<div class="input-field col s12 m6">
         			 <i class="material-icons prefix">email</i>
         	 		<input id="email" type="email" v-model="userCom.email" class="validate" required>
         			 <label for="email">Correo electrónico</label>
                     <div class="al"> <h4 v-if="usersFilter && usersFilter.length" v-show="show">Este usuario ya se encuentra registrado</h4>
                      <h5  v-else>Usuario disponible</h5></div>
        		</div>
        		<div class="input-field col s12 m6">
         			 <i class="material-icons prefix">supervisor_account</i>
          			<input id="nombre"  type="text" class="validate" required>
          			<label for="nombre">Nombre</label>
       			</div>
		 		<div class="input-field col s12 m6">
          			<i class="material-icons prefix">lock</i>
          			<input id="password" type="password" class="validate" required v-model="userCom.password">
          			<label for="password">Contraseña</label>
        		</div>
			</div>
				<div class= "tit">
					<i class="material-icons prefix" style="color: rgb(10, 160, 152);">place</i>
					<h5 style="color: rgb(10, 160, 152);">Ubicación</h5>
                </div>
                <v-ons-row>
                    <v-ons-col name="a" id="a">
			              <label>Estado</label>
                    <v-ons-select name="edo" id="edo"  v-on:change="getCiudad()" material class="material" style="width: 80%" v-model="userCom.estado" required>
                        <option class="tam" name="edos" id="edos" v-for="item1 in estados" :value="item1.id" :key="item1.key">
                            {{ item1.estado }}
                        </option>
                    </v-ons-select>
                    </v-ons-col>
                </v-ons-row>
                  <v-ons-col name="b" id="b">

                     <label>Ciudad</label>

                    <v-ons-select name="ciudad" id="ciudad" material class="material" style="width: 80%"  required >
                        <option class="tam1" v-for="item2 in ciudad.ciudades" :value="item2.id" :key="item2.key">
                            {{item2}}
                        </option>
                    </v-ons-select>

                    </v-ons-col>
                <div class="col s12 m12 l6">
               <div class="input-field">
                     <v-text-area name="contenido" id="contenido" length="50" v-model="userCom" required></v-text-area>
                     <label for="text"><i class="material-icons">pin_drop</i>Dirección</label>
                </div>
                <input id="volv"  type="text" :value="url1">
                 </div>
            <div class="center"> <button class="button--light btn1" modifier="large" type="submit" @click="submit()" >REGISTRAR</button> </div>
   		 </form>
 	  </div>
	</div>

 </v-ons-page>
</template>
<script>

import axios from 'axios'
import auth from '../auth'
    export default {
        name: 'regcom',

 created: function() {


     this.getEstado();
     this.getUser();
     var volver = this.getParameterByName('volver');
      console.log(this.volver1);
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
       var textSearch = this.userCom.email;
       var a = this.users.filter(function(el) {
         return el.email.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
       });
       console.log('sii');
       this.getUrl(a);
       return a;

     },
   },
	data : function() {
      return {
        //Definicion de Objeto Usuario de tipo Comunidad
        userCom:{
        _cls: '',
        email: '',
        name: '',
        password: '',
        estado: '',
        ciu: '',
        direccion: '',
        telefono_contacto: 0,
        a_intereses: Array,
        a_intereses: [],
        modificado: { type: Date },
        activo: true,
        userperfil: '',
      },
      selectedItem: '',
      selectedItem1: '',
      url:'',
      ciudad: [],                    //arreglo que almacena las ciudades del estado seleccionado
      estados:[],                   //arreglo que almacena los estados
      textSearch: "",               //utilizado para buscar que el usuario no esté registrado
      users: [],                    //utilizado para la búsqueda del correo electrónico
      show: false,
      volver1: false,
      mostrar: false,
      url1:'',
      msg: 'El correo electrónico que ha proporcionado se encuentra siendo utilizado por otro usuario, por favor intene de nuevo',

       }


   },

   methods:{
     // Metodo para almacenar usuario y sus credenciales
     submit(){
       var crede = {
         username:this.email,
         password1:this.password,
         password2:this.password,
         email:this.email,
       }
       auth.signup(crede,'/')
     },
       //método para buscar llenar el array ciudad con los datos del estado seleccionado
       getCiudad: function(){
          this.url='http://127.0.0.1:8000/api/estados/'+this.userCom.estado+'/?format=json';
           axios.get(this.url).then(response =>{
         this.ciudad = response.data

                });

       },
       //método que se ejecuta en created para llenar el arreglo estados con los estados de venezuela
      getEstado: function(){
       axios.get('http://127.0.0.1:8000/api/estados/?format=json').then(response =>{
         this.estados = response.data
       });
     },
     //método utilizado para llenar el arreglo de users
     getUser: function(){
          axios.get('http://127.0.0.1:8000/api/user/?format=json')
        .then(response => {
        this.users = response.data
    });console.log(this.users);
     },
     //método para definir la url
     getUrl: function(a){
         console.log('2');
         if(a && a.length){
             this.volver = true;
             this.url1="#/registrarcom/?volver=true";
             console.log(this.url1);
             return "#/registrarcom/?volver=true";

         }
         else{
             this.url1="#/reg1";
             console.log(this.url1);
             return "#/reg1";
         }
         console.log('3');
     },
     //obtener el valor de volver al momento de renderizar
      getParameterByName: function(volver, url2) {

      if (!url2) url2 = window.location.href;
       console.log('casi');
        volver = volver.replace(/[\[\]]./g, "\\$&");
        var regex = new RegExp("[?&.]" + volver + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url2);console.log('listo1');
        if (!results) return null;
        if (!results[2]) return '';
        this.volver1 = decodeURIComponent(results[2].replace(/\+/g, ""));

                //de aqui para abajo es para ver si logro mostrar el mensaje
        if(a && a.length)
        {
            this.mostrar = true;
        }
        else{
            this.mostrar = false;
        }

    },

   }
    }

</script>

<style scooped>
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
p{
    color:red;
    font-size: 14px;
    align: center;
    text-align: center;
}
.al{
    margin-left: 45px;
    margin-top: 0px;

}

</style>
