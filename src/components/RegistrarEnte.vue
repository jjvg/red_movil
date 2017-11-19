<template>
    <v-ons-page id="app">
<div class="container">
	<div class="row">
		<div class="col s12">
			<div align="center">
				<h2>Registro de Entes</h2>
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
         			 <i class="material-icons prefix">business</i>
          			<input id="nombre"  type="text" class="validate">
          			<label for="nombre">Nombre</label>
       			</div>
       			<div class="input-field col s12 m6">
          			<i class="material-icons prefix">phone</i>
         	 		<input id="tlf" type="number" class="validate">
          			<label for="tlf">Número telefónico</label>
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
			<div class="row1">
				<div class="ic"><i class="material-icons prefix">build</i></div>
				<div class="sel">
				<v-select class="validate" :options="['Agua','Electricidad', 'Educación', 'Alimentación', 'Vialidad', 'Mascotas']" :placeholder="'Área a la que se dedica'"></v-select>
				</div>
			</div>
			<br>
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
        name: 'regente'
    }

</script>
<style scooped>
.tit{
	    display: flex;
    align-items: center;
    flex-direction: row;
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
h5{
	text-decoration: underline;
	
}
h2{
	color: purple;
}
.row1{
	width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-left: 0px;
}
</style>