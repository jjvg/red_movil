<template>
    <v-ons-page id="app" modifier="material">
            <v-ons-row>
             <v-ons-col>
                  <div class="card--material small purple ">
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
                    <v-ons-col width="20%"></v-ons-col>
                         <v-ons-col  vertical-align="center">
                           <v-ons-icon fixed-width size="30px" icon="md-account-box"></v-ons-icon>
                           <v-ons-input name="email" type="email" required="true" placeholder="Correo"></v-ons-input>
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
                <router-link to="/principal"><v-ons-button  modifier="material" style="margin: 6px 0">Ingresar</v-ons-button></router-link> 
                 </div>
                
                    <div class="center">
                    <v-ons-row>
                        <v-ons-col width="99%">
                            ¿Aun no te has Registrado..?<div style="color:  rgb(10, 160, 152);font-weight: bold;" @click="actionSheetVisible = true">  Registrarse</div>
                        </v-ons-col>
                        <v-ons-col>
                            
                        </v-ons-col>
                    </v-ons-row>
                    </div>
                    <v-ons-action-sheet v-model="actionSheetVisible" :visible="actionSheetVisible" cancelable: true>
                        <v-ons-action-sheet-button @click="actionSheetVisible=false" >Tipo de registro</v-ons-action-sheet-button>
                        <router-link to="/registraruser"><v-ons-action-sheet-button>Usuario</v-ons-action-sheet-button></router-link>
                        <v-ons-action-sheet-button>Comunidad</v-ons-action-sheet-button>
                        <v-ons-action-sheet-button>Ente</v-ons-action-sheet-button>
                    </v-ons-action-sheet>
    
    </v-ons-page>

   
</template>
<script>
export default {
  name: 'login',
  data(){
     return{
          actionSheetVisible: false
     }
      
  },
   
  methods:{
      
      validar(){
          
              this.actionSheetVisible = true;
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
.card__title{

}
</style>
