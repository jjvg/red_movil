<template>
    <v-ons-page id="app" modifier="material">
            <v-ons-row>
             <v-ons-col>
                  <div class="card--material small purple">
                    <div class="card-image">
                        <img src="../assets/amigos.jpg" style="width: 100%">
                        <span class="card__title white-text center">Bienvenido a REDCOM</span>
                    </div>
                    <div class="card-material__content white-text center">
                     La red social donde puedes obtener ayuda en tu comunidad
                    </div>
                  </div>
             </v-ons-col>
            </v-ons-row>
            <v-ons-row>
                <v-ons-col>
                     <br>
                </v-ons-col>
            </v-ons-row>
                 <form name="login" action="#">
                <v-ons-row>
                    <v-ons-col width="15%"></v-ons-col>
                         <v-ons-col  vertical-align="center">
                       <div class="left">
                           <v-ons-icon style="margin-right: -1px"fixed-width size="30px" icon="md-account-box"></v-ons-icon>
                        </div>
                        <div class="center">
                           <v-ons-input name="email" type="email" required="true" placeholder="Correo"></v-ons-input>
                         </div> 
                       </v-ons-col>
                </v-ons-row>
                <v-ons-row>
                    <v-ons-col width="20%"></v-ons-col>
                         <v-ons-col >
                        <v-ons-icon fixed-width size="30px" icon="md-lock"></v-ons-icon>
                        <v-ons-input name="pasword" type="password" required="true" placeholder="Contraseña"></v-ons-input>
                       </v-ons-col>
                </v-ons-row>
                 </form>
                 <div class="center">
                     <v-ons-button @click="verificar()" modifier="material" style="margin: 6px 0">Ingresar</v-ons-button>
                 </div>
                 <br>
                    <div align="center">
						¿Aun no te has Registrado..?<router-link to="/home">  Registrarse</router-link>	
					</div>
    </v-ons-page>

   
</template>
<script>
export default {
  name: 'login',

  methods:{
      verificar(){

      }
  }
}
</script>
<style scoped>
.toolbar--material{
    background-color: purple;
}
p{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: Roboto;
}
.card__title{

}
</style>
