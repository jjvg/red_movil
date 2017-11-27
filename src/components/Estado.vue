<template>
    <div class="ctn-edo">
        </router-link><v-ons-card>
        <div class="estado">
            <div class="img">
                <img src="../assets/perfil.jpg" class="perfil">
            </div> 
	        <div class="edo">                
   		      <router-link to="/nuevopost"><h6 style="color: #080e0d54; font-family: Roboto;font-style: Roboto; font-size: 15px; align-content: center;"> ¿Qué está sucediendo?</h6>
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
    margin-botton: 100px;
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
