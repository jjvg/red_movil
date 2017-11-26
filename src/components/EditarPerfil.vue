<template>
    <v-ons-page id="app">
        <v-ons-toolbar class="toolbar--material">
      <div class="center">Editar Perfil</div>
    </v-ons-toolbar>

    <br>
    <br>
    <div class="container">
         <form id="editarPerfil" method="EditarPerfil" action="/editarperfil">
            <div class="row">
                <div class="col s12 m12 l2">
                    <v-file-input v-model="img" placeholder="Selecione una imagen"></v-file-input>
                </div>
            </div> 

        
            <div class="row">
                <div class="col s12 m12 l4">
                   <label for="text">Nombre</label>
                   <div class="input field" >
                      <v-text-input name="nombre" id="nombre" v-model="nombre"></v-text-input>
                   </div>   
                </div>
            </div>
            <div class="row">
                <div class="col s12 m12 l4">
                   <label for="text">Apellido</label>
                   <div class="input field" >
                      <v-text-input name="apellido" id="apellido" v-model="apellido"></v-text-input>
                   </div>   
                </div>
            </div>
            
            <div class="row">
                <div class="col s12 m12 l6">
                    <label for="text">Correo eléctronico</label>
                    <div class="input field">
                          <v-text-input name="correo" id="correo"  v-model="correo"></v-text-input>
                   </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m12 l6">
                    <label for="text">Descripción</label>
                    <div class="input field">
                          <v-text-area name="descripcion" id="descripcion" length="50" v-model="descripcion"></v-text-area>
                   </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m12 l6">
                    <label for="text">Dirección</label>
                    <div class="input field">
                          <v-text-input name="direccion" id="direccion" v-model="direccion"></v-text-input>
                   </div>
                </div>
            </div>
                 
        <section style="margin: 20px">
             <router-link to="/principal"><v-ons-button style="margin: 10px 0;" modifier="material">Publicar</v-ons-button></router-link>
             <router-link to="/principal"><v-ons-button style="margin: 10px 0;" modifier="material">Cancelar</v-ons-button></router-link>  -->
        </section>
    </form>

    </div>
    </v-ons-page>


</template>
<script>
 export default{
     name: 'editarperfil',
     data(){
    
      return{
      nombre: 'Andrea',
      apellido: '',
      correo: 'andrea123@gmail.com',
      descripcion: 'ggasgs',
      direccion:''
    }
    
  },
 }   
</script>
<style scoped>
img{
     border-radius: 50%;
     width: 80px;
     height: 80px;
     
}
.toolbar--material{
    background-color: purple;
}
ons-card {
  text-align: center;
  
}
</style>
