<template>
    <div class="ctn-edo" id="app">
        <v-ons-card>
        <div class="estado">
            <div class="img">
                <img src="../assets/perfil.jpg" class="perfil">
            </div> 
	        <div class="edo">                
   		      <router-link to="/nuevopost">
                 <v-ons-button style="color: #080e0d54; align-content: center;" modifier="quiet">¿Qué está sucediendo?</v-ons-button>
 	        </router-link>
              </div>
        </div>
        </v-ons-card>
    </div>

</template>


<script>
export default {
   name: 'estado'
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cartica{
    margin-bottom: 100px;
}
img{
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 30px;
    
}
.perfil{
    border-radius: 50%;  
    
}

.edo {
    
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-left: 40px;
}


.estado {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
}

.ctn-edo{
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
}

.bton {
    display: flex !important ;
    justify-content: flex-end !important ; 
}
</style>
