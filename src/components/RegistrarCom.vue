
<template>
    <v-ons-page id="app">
        <div class="container">
	<div class="row">
		<div class="col s12">
			<div align="center">
				<h2>Registro de Comunidades</h2>
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
					<div class="ic"><i class="material-icons prefix">place</i></div>
					
				
				<div class="ub"><h5>Ubicación</h5></div>
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