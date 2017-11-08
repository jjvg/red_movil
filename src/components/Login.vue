<template>
    <v-ons-page id="app">
        <v-ons-toolbar class="toolbar-material">
            <div class="center">Bienvenido</div>
        </v-ons-toolbar>

        <div class="header">
            <img src="../assets/logo.png">
        </div>
        <div align="center">
						¿Aun no te has Registrado?<router-link to="/home">Registrarse</router-link>	
					</div>
    </v-ons-page>

   
</template>
<script>
export default {
  name: 'login'
}
</script>
<style scoped>
.toolbar--material{
    background-color: purple;
}

</style>
