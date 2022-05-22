<template>
  <div class="animals-view">
    <menu-principal :activeItem="itemMenu"/>

    <div v-for="animal in animales" :key="animal.id">
      <div class="gallery col-md-2">
        <img :src="animal.imagen" alt="" @click="navigateAnimal">
        <div class="desc">
          <h4>
            {{animal.nombre}}
            <img src="@/assets/img/iconMale.png" alt="Icono género masculino" class="img-fluid iconGender" v-if="animal.sexo == 'macho'"/>
            <img src="@/assets/img/iconFemale.png" alt="Icono género masculino" class="img-fluid iconGender" v-if="animal.sexo == 'hembra'"/>
            <img src="@/assets/img/iconUnknown.png" alt="Icono género masculino" class="img-fluid iconGender" v-if="animal.sexo == 'desconocido'"/>
          </h4>
          <p>{{animal.especie}} {{animal.tamanyo}}</p>
          <p>{{animal.edad}} años</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MenuPrincipal from '@/components/MenuPrincipal.vue'

  export default {
    name: 'animals-view',
    components: {
      MenuPrincipal,
    },
    data() {
      return {
        itemMenu: 'animals',
        animales: []
      };
    },
    async created() {
      const response = await fetch("http://192.168.1.134:8069/apirest/animales");
      const data = await response.json();
      this.animales = data.data
    },
    methods: {
      navigateAnimals() {
        this.router.push('/animals')
      }
    }
  }
</script>

<style scoped>
  .animals-view > div {
    margin-top: 20px;    
  }

  .gallery:hover {
    cursor: pointer;
  }

  div.gallery {
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 15px;
    float: left;
  }

  div.gallery:hover {
    border: 1px solid #777;
  }

  div.gallery img {
    width: 100%;
    height: 200px;
  }

  div.desc {
    padding: 15px;
    text-align: center;
  }

  .iconGender {
    width: 25px !important;
    height: 25px !important;
  }
</style>