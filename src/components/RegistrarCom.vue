<template>
    <v-ons-page id="app">
		    <v-ons-toolbar class="toolbar--material">
        <div class="left">
            <router-link to="/home"><v-ons-back-button>Page 1</v-ons-back-button></router-link>
        </div>
        <div class="center"><img src='../assets/img/rc1.png'  class="logo"></div>
        </v-ons-toolbar>
    
        <div class="container">
	<div class="row">
		<div class="col s12">
			<div align="center">
				<h2 style="color: rgba(62, 173, 48, 0.79);">Registro de Comunidades</h2>
			</div>
		</div>
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
			<div class="row">
				<div class= "tit">
					<div class="ic"><i style="color: #20cc0b;" class="material-icons prefix">place</i></div>
					
				
				<div class="ub center" style="color: #656158d1;"><h5>Ubicación</h5></div>
				</div>
				<br>
				<div class="col s10 m8">
					<v-select class="validate" :options="['Lara','Yaracuy', 'Zulia', 'Mérida', 'Dto Capital', 'Falcón']" :placeholder="'Estado'"></v-select>
					<v-select class="validate" :options="['Barqto','San Felipe', 'Maracaibo', 'Mérida', 'Caracas', 'Coro']" :placeholder="'Ciudad'"></v-select>
					<div class="input-field col s12 m6">
         	 		<input id="dir" type="text" class="validate">
          			<label for="dir">Dirección</label>
        		</div>
  				</div>
			</div>
			
	  		<div class="row">
				<div class="col s6">
					<button class="btn waves-effect waves-light" type="submit" v-on:click="registrarse()">Registrar</button>
				</div>
					<div class="col s6">
					<button class="btn waves-effect waves-light" type="submit" name="cancelar">Cancelar</button>
			</div>
			</div>
			
			
   		 </form>
 	  </div>
	</div>				
 </div>		 


    </v-ons-page>
</template>
<script>
    export default {
        name: 'regcom'
    }

</script>

<style scooped>
.logo{
  margin: 0 auto;
  padding: 0px;
    width: 40px;
    height: 40px;
    align: center;
    margin-left: 100px;
    margin-right: 100px;    
}

.tit{
	    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 15px;
	align: center;
	width: 50%;
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
    margin-left: 0px;
	align: center;

}
</style>