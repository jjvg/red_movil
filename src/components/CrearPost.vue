<template>
    <v-ons-page id="app">
        <v-ons-toolbar class="toolbar--material">
        <div class="left">
            <router-link to="/home"><v-ons-back-button>Page 1</v-ons-back-button></router-link>
        </div>
        <div class="center"><img src='../assets/img/rc1.png'  class="logo"></div>
        </v-ons-toolbar>
    
    <div class="container">
        
        <form id="registroPost" method="POST" action="/home">
        <div class="right publ">
             <router-link to="/home"><h4 style="color: #20cc0b;">Publicar</h4></router-link>
             </div>
        <div class="">
            <v-ons-row>
                <v-ons-col>
                  <div class="col2">
                      <div class="ic"><i class="material-icons" style="color: #4bdc1c;">add_a_photo</i></div>
                     <div><h6 style="color: #5d6367;"> Cámara</h6></div>
                  </div>
                </v-ons-col>
                <v-ons-col>
                    <div class="col2">
                      <div class="ic"><i class="material-icons" style="color: rgb(220, 161, 28);">collections</i></div>
                     <div><h6 style="color: #5d6367;"> Fototeca</h6></div>
                  </div>
                </v-ons-col>
            </v-ons-row>
        </div>
        
            
        <div class="row l">
         
            <div class="col s12 m6 l4">
            <div class="input field inp" >
                 <v-text-area name="contenido" id="contenido" length="50" v-model="contenido" placeholder="Cuéntanos qué está sucediendo"></v-text-area>
                     <label for="text">Situación Actual</label>
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
          <div class="lugar"> 
                <div class= "tit">
					<div class="ic"><i style="color: #20cc0b;" class="material-icons prefix">place</i></div>
    				<div class="ub"><h5 style="color: #656158d1;">Lugar del acontecimiento</h5></div>
				</div>
                <div class="lbl"> 
                        <label>Estado</label>
                </div>
                <div class="edo"> 
                    <v-ons-select name="area" material class="material" style="width: 80%" v-model="selectedItem" >
                        <option class="tam" v-for="item1 in edos" :value="item1.value" :key="item1.key">
                            {{ item1.text }}
                        </option>
                    </v-ons-select>
                 </div>
                 <div class="lbl"> 
                        <label>Ciudad</label>
                </div>
                <div class="ciudad"> 
                    <v-ons-select name="area" material class="material" style="width: 80%" v-model="selectedItem" >
                        <option class="tam" v-for="item2 in ciudad" :value="item2.value" :key="item2.key">
                            {{ item2.text }}
                        </option>
                    </v-ons-select>
                 </div>
                 <div class="input-field">
         	 		<input id="dir" type="text" class="validate">
          			<label for="dir">Dirección</label>
        		</div>

          </div>
        <section style="margin: 20px">
            
        </section>
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
}
</style>
