<template>
    <v-ons-page id="app">
        <v-ons-toolbar class="toolbar--material">
        <div class="left">
            <router-link to="/principal"><v-ons-back-button>Page 1</v-ons-back-button></router-link>
        </div>
        <div class="center"><img src='../assets/img/rc1.png'  class="logo"></div>
        </v-ons-toolbar>
    
    <div class="container">
        
        <form id="registroPost" method="POST" action="/principal">
       
           
           <h3  style="color: rgb(10, 160, 152);">Nueva Publicación</h3>
        <br>
        <div class="">
            <v-ons-row>
                <v-ons-col>
                  <div class="col2">
                      <div class="ic"><i class="material-icons" style="color: #61e4b8;">add_a_photo</i></div>
                     <div><h6 style="color: #5d6367;"> Cámara</h6></div>
                  </div>
                </v-ons-col>
                <v-ons-col>
                    <div class="col2">
                      <div class="ic"><i class="material-icons" style="color: rgb(220, 34, 236);">collections</i></div>
                     <div><h6 style="color: #5d6367;"> Fototeca</h6></div>
                  </div>
                </v-ons-col>
            </v-ons-row>
        </div>
        
            
        <div class="row l">
         
            <div class="input-field col s12 m6 l4">
               
                    <input id="situacion" type="text" class="validate">
         			 <label for="email">Cuéntanos qué está sucediendo</label>
                
                </div>
             
        </div>
      
        <div class="row">
           <div class="col s12 m12 l6">
               <div class="input-field">
                     <v-text-area name="contenido" id="contenido" length="50" v-model="contenido"></v-text-area>
                     <label for="text">Describe la Situación</label>
                </div>
           </div>
        </div>
         <v-ons-list>
             <v-ons-list-item>
                <div class="center">
                    <label  >¿Con qué área se relaciona esta situación?</label>
                
                    <v-ons-select name="area" material class="material" style="width: 80%" v-model="selectedItem" >
                        <option class="tam" v-for="item in items" :value="item.value" :key="item.key">
                            {{ item.text }}
                        </option>
                    </v-ons-select>
                
                </div>
                
            </v-ons-list-item>
         </v-ons-list>
         
				<div class= "tit">
					<i class="material-icons prefix" style="color: rgb(10, 160, 152);">place</i>
					<h5 style="color: rgb(10, 160, 152);">¿Dónde ocurrió?</h5>
				</div>
         <label>Estado</label>
                <div class="center">
                    
                
                    <v-ons-select name="edo" material class="material" style="width: 80%" v-model="selectedItem" >
                        <option class="tam" v-for="item1 in edos" :value="item1.value" :key="item1.key">
                            {{ item1.text }}
                        </option>
                    </v-ons-select>
                
                </div>
                <label>Ciudad</label>
                <div class="center">
                    
                
                    <v-ons-select name="ciudad" material class="material" style="width: 80%" v-model="selectedItem" >
                        <option class="tam" v-for="item2 in ciudad" :value="item2.value" :key="item2.key">
                            {{ item2.text }}
                        </option>
                    </v-ons-select>
                
                </div>
                <div class="col s12 m12 l6">
               <div class="input-field">
                     <v-text-area name="contenido" id="contenido" length="50" v-model="contenido"></v-text-area>
                     <label for="text">Dirección</label>
                </div>
           </div>

        <section style="margin: 20px">
            
        </section>
         <div class="center">
                <router-link to="/principal" ><v-ons-button  modifier="material large" class="button button--light" style="margin: 6px 0">Publicar</v-ons-button></router-link> 
         </div>
    </form>

    </div>
   
    </v-ons-page>


</template>

<script>
export default {
   name: 'crearpost',

   data : function() {
        return {
           
            titulo:{type:String},
            titulo:'', 
            imagen:{type:File},
            contenido:{type:String},
            categoria:{type:Boolean},
            items: [
        { text: 'Otra', value: 'Otra' },
        { text: 'Salud', value: 'Salud' },
        { text: 'Seguridad', value: 'Seguridad' },
        { text: 'Arte', value: 'Arte' },
        { text: 'Alimentación', value: 'Alimentación' }
      ],
      edos: [
        { text: 'Lara', value: 'Lara' },
        { text: 'Yaracuy', value: 'Yaracuy' },
        { text: 'Falcón', value: 'Falcón' },
        { text: 'Zulia', value: 'Zulia'},
        { text: 'Aragua', value: 'Aragua' }
      ],
      
      ciudad: [
        { text: 'Barquisimeto', value: 'Barquisimeto' },
        { text: 'San Felipe', value: 'San Felipe' },
        { text: 'Coro', value: 'Coro' },
        { text: 'Maracaibo', value: 'Maracaibo'},
        { text: 'Maracay', value: 'Maracay' }
      ],
      selectedItem: ''
        

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
.logo{
  margin: 0 auto;
  padding: 0px;
    width: 40px;
    height: 40px;
    align: center;
    margin-left: 100px;
    margin-right: 100px;    
}
.inp{
  margin-top: 10px; 
  width: 100%; 
}
.tam{
    font-size: 10px;
}

.tit{
	    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 15px;
}

.ic {
	width: 20%;
    display: flex;
    align-items: center !important;
    flex-direction: row;
    margin-left: 10px;
	margin-right: 0px;
}
.ub{
	width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-left: 0px;
}
.publ{
    margin: 0 auto;
    padding: 0;
    margin-top: 10px;
    margin-bottom: 5px;
}

h6{
  font-size: 15px;
}
.ic{
  width: 20%;
  display: flex;
  margin-right:5px;
}
.col2{
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 7px;
    margin-left:20px;
}
ons-toolbar{
  color: purple;
}
h3{
    text-align: center;
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
.l{
    margin-top: 30px;
}

.tit{
	    display: flex;
    align-items: center;
    flex-direction: row;
    align: center;
    margin-left: 80px;
}

</style>
