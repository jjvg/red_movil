<template>
<v-ons-page id="app">
    <v-ons-toolbar class="toolbar--material">
      <div class="left">
        <router-link to="/principal"><v-ons-back-button style="color:white"></v-ons-back-button></router-link>
      </div>
      <div class="center" >
          <img src='../assets/img/rc1.png' style="width: 40px; height:40px; margin-left:0; margin-top:8px;">
      </div>
    </v-ons-toolbar>
    <div class="prin">
        <div class="input-field col s12 m6 busq">
          <i class="material-icons prefix">search</i>
          <input id="input-Search"  type="text" class="form-control" v-model="textSearch">
          <label for="input-Search">Búsqueda</label>

        </div>
    </div>
<div class="ctnb">
         <form class="col s12" >

              <v-ons-list-item >
            <div id="list-users" v-if="usersFilter && usersFilter.length">

              <div class="panel panel-default pub" v-for="user of usersFilter" :key="user.link">
                <div class="left img">
                  <img src="../assets/perfil.jpg" alt="" width="40px" style=  "border-radius: 50% !important">
                </div>
                <div class="col"  >
                 <div class="title f1"  v-on:click="getPerfil(user.id)" >
                   <router-link :to="url">  <h5>{{user.name}}</h5>
                    <input :id="user.id" type="hidden" :value="user.id"></router-link>
                  </div>
                  <div class="f2">
                    <h6>{{user.email}} - Estado {{user.estado}}</h6>
                  </div>
                </div><br><br><br><br>
              </div>
            </div>
            <div class="text-center" v-else>
                <h4>No se han encontrado coincidencias</h4>
            </div>
            </v-ons-list-item >
           </form>
           </div>

</v-ons-page>
</template>

<script>
import Resultados from './Resultados.vue'
import axios from 'axios'
export default {
   name: 'buscar',
    components:{
    'resultados-page':Resultados,
   },

   created: function () {
     this.getUser();

   },
   computed:{
     usersFilter: function(){
       var textSearch = this.textSearch;
       return this.users.filter(function(el) {
         return el.name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
       });
       console.log(this.users);
     }
   },
       data(){
     return{
          actionSheetVisible: false,
          textSearch: "",
          url: "",
          users: [],
     }

  },

  methods:{
      getUser: function(){
        axios.get('http://127.0.0.1:8000/api/user/?format=json')
    .then(response => {
      this.users = response.data
    });
  
      },
       getPerfil: function(id){
  
        var inp = $("#"+id).val();
        this.url = '/perfil/?id='+inp;
    },
  },
     
       

}
</script>
<style scoped>
h6{
  line-height: 0px;
  font-size: 12px;
}
.col{
  display: flex;
    align-items: left;
    flex-direction: column;
    width: 100%;
    margin-left: 20px;
}
h5{
  color: black;
}
h4{
     color: #26a69a;
}
.pub{
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
}
h5{
  line-height: 0;
  font-size: 15px;
}
.img{
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 40px;
    border-radius: 50%;
}
.prin{
	  display: flex;
    align-items: center;
    flex-direction: row;
    align: center;
    margin-bottom: 20px;
}
.ctnb{
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
}
.busq{
    width: 100%;
    display: flex;
    margin-right: 30px;
    margin-left: 10px;
}
.logo{
  margin: 0 auto;
  padding: 0px;
    width: 40px;
    height: 40px;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 8px;
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
.toolbar--material{
    background-color: purple;
}
</style>
