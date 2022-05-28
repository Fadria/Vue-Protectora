<template>
  <div class="requisito-view">
    <menu-principal :activeItem="itemMenu"/>

    <div id="requisitoDiv">
      <div class="col-md-5 offset-1">
        <h1>{{requisito.titulo}}</h1>
      </div>
    </div>

    <img class="col-md-5 offset-1 imageRequisito" :src="requisito.imagen" alt="Imagen del requisito">

    <div class="col-md-5" id="content">    
      {{requisito.contenido}}
    </div>    
  </div>
</template>

<script>
  import MenuPrincipal from '@/components/MenuPrincipal.vue'
  import ip from './ip.txt';

  export default {
    name: 'contact-view',
    components: {
      MenuPrincipal,
    },
    data() {
      return {
        itemMenu: 'requirements',
        requisito: null
      };
    },
    async created() {
      // Obtenemos los datos del animal
      const response = await fetch(ip + "apirest/requisitos/" + this.$route.params.id);
      const data = await response.json();
      this.requisito = data.data[0]
    },
  }
</script>

<style scoped>
  .animal-view {
    margin-bottom: 100px;
  }
  
  #requisitoDiv {
    margin-top: 80px;
  }

  h1 {
    text-align: center;
  }

  #content {
    display: inline-block;
    text-align: justify;
  }

  img {
    vertical-align: top;
  }

</style>