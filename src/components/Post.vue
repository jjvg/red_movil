<template>
<div class="container" id="app">
     <v-ons-list>
      <v-ons-list-item v-for="item in publicacion" :key="item.link">
        <v-ons-card>
            <div class="pub">
               <div class="img">
                   <img src="../assets/perfil.jpg" style="width: 150% !important;" class="perfil">
               </div>
                <div class="col">
                  <div class="f1">
                      <h4>{{p.authenticated}}</h4>
                  </div>
                  <div class="f2">
                      <h6>Hace 2 minutos</h6>
                  </div>
                </div>
            </div>

              <img :src="item.avatar" style="width: 100%">
            <router-link to="/detallepost"><div class="card__imagen posti">

                <img :src='item.avatar' style="width: 100%">
            </div></router-link>
            <div class="card_content">
               {{item.titulo}}
               {{item.avatar}}
            </div>
            <v-ons-row>
                <v-ons-col>
                    <v-ons-button modifier="quiet material" style="color: #5d6367">
                         <v-ons-icon icon="md-thumb-up" size="20px"></v-ons-icon>
                    </v-ons-button>
                </v-ons-col>
                <v-ons-col>
                  <router-link to="/comentario">
                     <v-ons-button modifier="quiet material" style="color: #5d6367">
                         <v-ons-icon icon="md-comments" size="20px"></v-ons-icon>
                    </v-ons-button>
                  </router-link>
                </v-ons-col>
                <v-ons-col>
                   <v-ons-button modifier="quiet material" style="color: #5d6367">
                         <v-ons-icon icon="md-label" size="20px"></v-ons-icon>
                    </v-ons-button>
                </v-ons-col>
            </v-ons-row>
            <div class="com">

            </div>
        </v-ons-card>
      </v-ons-list-item>
    </v-ons-list>
</div>
</template>
<script>
import auth from '../auth'
import img2 from '../assets/img/falla.jpg'
import DetallePost from './DetallePost.vue'
import Comentarios from './Comentario.vue'
import axios from 'axios'
export default {
  name: 'post',
   created: function() {
     this.getPub();
  },

  components: {
    DetallePost,
    'comentarios-page': Comentarios,
  },


  data: function() {
    return {
      datos:[
          {
          img:{
            type: File,
          },
          img:img2,
          contenido: 'Bote de aguas blancas'
          },
          {
          label: 'Community Chat',
          img: img2,
          contenido: '...'
          },
        ],
          publicacion:[],
      }
  },
  methods: {
     getPub: function(){
       axios.get('http://127.0.0.1:8000/api/publicacion/?format=json',{
          headers: {Authorization: `JWT ${auth.getAuthHeader()}`}
       }).then(response =>{
         this.publicacion= response.data
         this.p=auth.getUser();
        });
      },
  },



};
</script>
<style>
.texto{
   display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    margin-left: 0px;

}
h6{
  font-size: 15px;
}
.ic{
  width: 20%;
  display: flex;
  margin-right:5px;
}

.p{
    display: inline-block;

}
.perfil {
    border-radius: 50%;
}
.pub{
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
}

.img{
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 30px;
}
.posti{
  margin-top: 15px;
}
.col{
  display: flex;
    align-items: left;
    flex-direction: column;
    width: 100%;
    margin-left: 20px;
}
.botn{
  display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
}
.gustar{
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
	margin-right: 5px;
}
.col2{
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 7px;
}
h4{
  line-height: 0;
}

h6{
  line-height: 0;
  font-size: 10px;
}


</style>
