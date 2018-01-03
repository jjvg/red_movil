<template>
    <v-ons-page id="app">
		<v-ons-toolbar class="toolbar--material">
            
            <div class="center tt" >
               <img src='../assets/img/rc1.png' style="width: 40px; height:40px; margin-left:0; margin-top:8px;"> 
            </div>            
        </v-ons-toolbar> 
        <div class="center">

                    <div class="text">
                        <br><br>
                        ¡Registro exitoso!<br>
                        <router-link to="/">  Inicia sesión </router-link><br>
                        para descubrir más sobre RedCom
                    </div>
                        
        </div>
</v-ons-page>
</template>
<script>
export default {
    name: 'reg1'
}
</script>
<style scoped>
.text{
     font-size: 20px;
     color: green;
}
.tt{
    margin-left: 150px;
}
</style>