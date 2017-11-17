<template>
    <v-ons-page id="app">
        <v-ons-toolbar class="toolbar--material">
      <div class="center">Nueva Publicacion</div>
    </v-ons-toolbar>
    <br>
    <br>
    <br>
    <div class="container">
         <form id="registroPost" method="POST" action="/home">
        <div class="row">
            <div class="col s12 m6 l4">
            <div class="input field" style="margin: 20px,40px,20px,10px">
                 <v-text-input name="titulo" id="titulo" v-model="titulo" placeholder="Titulo de tu Problema"></v-text-input>
             </div>   
            </div>
             <div class="col s12 m6 l4">
                <div class="input-field">
                    <v-file-input v-model="img" placeholder="Selecione una imagen"></v-file-input>
                 </div>
            </div>
        </div>
        <div class="row">
           <div class="col s12 m12 l6">
               <div class="input-field">
                     <v-text-area name="contenido" id="contenido" length="50" v-model="contenido"></v-text-area>
                     <label for="text">Describe la Situacion</label>
                </div>
           </div>
        </div>
         <div class="row">
             <div class="col s12 m6 l4">
                     <div class="input-field">
                    <v-select name="select" id="select" v-model="selectedItem" :item="items"></v-select>
                    <label for="select">Seleccione el Area dirigida</label>
                    </div>
             </div>
         </div>
        
        <section style="margin: 20px">
             <router-link to="/home"><v-ons-button style="margin: 10px 0;" class="material" @click="savePost()">Publicar</v-ons-button></router-link>
             <router-link to="/home"><v-ons-button style="margin: 10px 0;" class="material" @click="regresar()">Cancelar</v-ons-button></router-link>  
        </section>
    </form>

    </div>
   
    </v-ons-page>


</template>

<script>
export default {
   name: 'crearpost',

   data () {
       return {
           post:[
            titulo, 
            imagen,
            contenido,
            categoria
           ],
            items:[
                'Seguridad',
                'Salud',
                'Deporte',
                'Servicios' ,
                'Arte',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                'Trasporte',
            ],
            selectedItem:'ninguno',
        

       }
   },
   methods: {

       savePost(){
           redirect: '/home';
            
       },
       regresar(){
           redirect: '/home';
       }
   }
}
</script>

<style scoped>

</style>
