
/**
 * @Author: Federico Adrià Carrasco
 * @Date: 04/06/2022
 * @Email: fadriacarrasco@gmail.com
 *
 */

<template>
  <div class="requirements-view">
    <menu-principal :activeItem="itemMenu"/>
    
    <div class="container" id="requirements" >
			<a :href="'/requirements/' + requisito.id" v-for="requisito in requisitos" :key="requisito.id">
				<div class="col-md-12 rounded shadow-lg"><h3>{{requisito.titulo}}</h3></div>
			</a>
    </div>

  </div>
</template>

<script>
  import MenuPrincipal from '@/components/MenuPrincipal.vue'
  import ip from './ip.txt';

  export default {
    name: 'requirements-view',
    components: {
      MenuPrincipal,
    },
    data() {
      return {
        itemMenu: 'requirements',
				requisitos: []
      };
    },
    async created() {
      const response = await fetch(ip + "apirest/requisitos");
      const data = await response.json();
      this.requisitos = data.data
    }
  }
</script>

<style scoped>
  #requirements{
    margin-top: 80px;
  }
  
  #requirements div {
		display: inline-block;
		margin: 10px;
		padding: 20px;
		text-align: center;
		border: 2px solid darkslategrey;
		background-color: #a9f0d2;
    margin-bottom: 50px;
  }

  #requirements div:hover {
    cursor: pointer;
	}
</style>