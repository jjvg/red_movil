<template>
<v-ons-page id="app">
    <v-ons-toolbar class="toolbar--material">
            <div class="left">
                <router-link to="/principal"><v-ons-back-button style="color: white"></v-ons-back-button></router-link>
            </div>
            <div class="center" >
               <img src='../assets/img/rc1.png' style="width: 40px; height:40px; margin-left:0; margin-top:8px;"> 
            </div>
            
            
        </v-ons-toolbar>
    <v-ons-card>
    <div class="pub">
       <div class="img">
           <img src="../assets/perfil.jpg" style="width: 150% !important;" class="perfil">
       </div> 
       <div class="col">
           <div class="f1">
                <h4>Andrea</h4>
            </div>
            <div class="f2">
                <h6>Hace 2 minutos</h6>
            </div>
        </div>
    </div>
    <div class="card__imagen posti">
        <img src="../assets/img/falla.jpg" style="width: 100%">    
    </div>
    <div class="center">
    <div class="card_content">
        <h3 style="font-weight: bold;">{{titulo}}</h3>
    </div>
    <div class="card_content">
        <h5 style="color: blue">Barquisimeto - Edo. Lara</h5>
        <h5 style="color: blue">Hidrolara</h5>
        <h5>{{contenido}}</h5>
    </div>
    </div>
       
         <div class="center">
                <router-link to="/comentario" ><v-ons-button  modifier="material quiet"  style="margin: 6px 0; color: #5d6367"><v-ons-icon icon="md-comments" size="30px"></v-ons-icon></v-ons-button></router-link>
                <v-ons-button  modifier="quiet material" style="color: #5d6367" ><v-ons-icon icon="md-label" size="30px"></v-ons-icon></v-ons-button>
         </div>
          
</v-ons-card>
    
</v-ons-page>
</template>

<script>
import img2 from '../assets/amigos.jpg'
export default {
     name: 'detallepost',
    created: function() {
         this.getPub();
      },
     data () {
         return {
     
                    titulo: 'Bote de agua Av. Caracas',
                    contenido: ' En la Av. Caracas con calles 3 y 4, frente a la urb. Ulala hay un bote de aguas blancas que lleva ya más de una semana',
                    publicacion:[],
                }

            } ,
             methods: {
     getPub: function(){
       axios.get('http://127.0.0.1:8000/api/publicacion/?format=json').then(response =>{
         this.publicacion= response.data
       });

     },
     getUrl: function(algo){
       var dir = algo;
       var url = "../assets/img/" + dir;
       return url;
     }
  },
}      
     

</script>

<style scoped>


.button--light:active {
  background-color: rgba(0,0,0,0.05);
  color: rgba(0,0,0,0.4);
  border: 1px solid rgba(0,0,0,0.2);
  opacity: 3;
 
}

.card-image{
    max-width: 10000px;
    margin: 0px, 0px ,0px,0px 
}

.img{
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 30px;    
}

.col{
  display: flex;
    align-items: left;
    flex-direction: column;
    width: 100%;
    margin-left: 20px;
}
h5{
  text-align: justify;
  font-size: 15px;
  color: #00000099;
  text-decoration: none;
}
.posti{
  margin-top: 15px;
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
h4{
  line-height: 0;
}

h6{
  line-height: 0;
  font-size: 10px;
}

.pub{
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
}
.toolbar--material{
    background-color: purple;
}
</style>

