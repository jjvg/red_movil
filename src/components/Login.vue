<template>
    <v-ons-page id="app" modifier="material">
            <v-ons-row>
             <v-ons-col>
                  <div class="card--material small purple ">
                    <div class="card-image">
                        <img src="../assets/img/hands.jpg" style="width: 100%">
                        <span class="card__title white-text center">Bienvenido a REDCOM</span>
                    </div>
                    <div class="card-material__content white-text center">
                     ¡Soluciones para la comunidad al alcance de tu móvil!
                    </div>
                  </div>
             </v-ons-col>
            </v-ons-row>
            <v-ons-row>
                <v-ons-col>
                     <br>
                </v-ons-col>
            </v-ons-row>
                 <div class="form-group">
                <v-ons-row>
                    <v-ons-col width="20%"></v-ons-col>
                         <v-ons-col  vertical-align="center">
                           <v-ons-icon fixed-width size="30px" icon="md-account-box"></v-ons-icon>
                           <v-ons-input  class="form-control" type="email" required="true" placeholder="Correo" v-model="credentials.email"></v-ons-input>
                       </v-ons-col>
                </v-ons-row>
                </div>
                <div class="form-group">
                <v-ons-row>
                    <v-ons-col width="20%"></v-ons-col>
                         <v-ons-col >
                        <v-ons-icon fixed-width size="30px" icon="md-lock"></v-ons-icon>
                        <v-ons-input class="form-control" type="password" required="true" placeholder="Contraseña" v-model="credentials.password"></v-ons-input>
                       </v-ons-col>
                </v-ons-row>
                 </div>
                 <div class="center">
             <router-link to="/principal"><v-ons-button  modifier="material" class="button button--light" style="margin: 6px 0" @click="submit()">Ingresar</v-ons-button></router-link>
                 </div>
                <br>
                    <div class="center">
                    <v-ons-row>
                        <v-ons-col width="99%">
                            ¿Aún no te has Registrado?<div style="color:  rgb(10, 160, 152);font-weight: bold;" @click="actionSheetVisible = true">  Regístrate aquí</div>
                        </v-ons-col>
                        <v-ons-col>
                        </v-ons-col>
                    </v-ons-row>
                    </div>
                    <v-ons-action-sheet v-model="actionSheetVisible" :visible="actionSheetVisible" cancelable: true >

                            <router-link to="/registrarpersona"><v-ons-action-sheet-button><v-ons-icon icon="md-face" size="30px" style="margin: 0px 20px 0px 20px"></v-ons-icon>  Usuario</v-ons-action-sheet-button></router-link>
                            <router-link to="/registrarcom"><v-ons-action-sheet-button><v-ons-icon icon="md-accounts" size="30px" style="margin: 0px 20px 0px 20px"></v-ons-icon>  Comunidad</v-ons-action-sheet-button></router-link>
                            <router-link to="/registrarente"><v-ons-action-sheet-button><v-ons-icon icon="md-markunread-mailbox" size="30px" style="margin: 0px 20px 0px 20px"></v-ons-icon> Ente</v-ons-action-sheet-button></router-link>
                            <v-ons-action-sheet-button @click="actionSheetVisible=false"  ><v-ons-icon icon="md-close-circle" size="30px" style="margin: 0px 20px 0px 20px"></v-ons-icon>  Cancelar</v-ons-action-sheet-button>

                    </v-ons-action-sheet>
    </v-ons-page>


</template>
<script>
import auth from '../auth'
export default {
  name: 'login',
  data(){
     return{
        credentials: {
          email : '',
          username:'',
          password: ''

        },
        error: '',
        actionSheetVisible: false,
        token:''
      }

     },
     methods: {
        submit() {
        var credentials = {
          username: this.credentials.email,
          password: this.credentials.password,
          email: this.credentials.email
        }
        auth.login(credentials, '/principal')


     }

     }
}
</script>
<style scoped>
.toolbar--material{
    background-color: purple
}

p{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: Roboto;
    color:cadetblue;
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

</style>
