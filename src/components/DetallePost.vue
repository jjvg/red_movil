<template>
    <div class="container" id="post">
        <v-card>
         <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" :src="datos.img">
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">{{datos.titulo}}<i class="material-icons right">more_vert</i></span>
             <div class="left">
                <v-btn>Comentarios</v-btn>    
             </div>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">{{datos.titulo}}<i class="material-icons right">close</i></span>
            <p>{{datos.contenido}}</p>
        </div>
    </v-card>
       
    </div>
</template>

<script>
export default {
     name: 'detallepost',

     props : {
         datos,
     }
}
</script>

<style scoped>

</style>
