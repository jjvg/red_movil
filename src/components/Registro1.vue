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

             <div class="opt">
                <div class="personas">
                  <router-link to="/home"><v-ons-button style="margin: 10px 0;" class="material"><i class="material-icons">face</i> Personas</v-ons-button></router-link>
                </div>
                <div class="comunidad">
                    <router-link to="/registrarcom"><v-ons-button style="margin: 10px 0;" class="material"><i class="material-icons">supervisor_account</i> Comunidad</v-ons-button></router-link>
                </div>
                <div class="Ente">
                    <router-link to="/registrarente"><v-ons-button style="margin: 10px 0;" class="material"><i class="material-icons">business</i> Ente</v-ons-button></router-link>
                </div>
             </div>
    </v-ons-page>
</template>
<script>
    export default {
        name: 'paso1'
    }

</script>

<style scoped>
.opt{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 20px;
}
</style>