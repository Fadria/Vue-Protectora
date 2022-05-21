<template>
  <div class="about-view">
    <menu-principal :activeItem="itemMenu"/>
  </div>
</template>

<script>
  import MenuPrincipal from '@/components/MenuPrincipal.vue'

  export default {
    name: 'about-view',
    components: {
      MenuPrincipal,
    },
    data() {
      return {
        itemMenu: 'about'
      };
    },
  }
</script>

<style scoped>
  h2{
    margin-top: 80px;
    margin-bottom: 30px;
  }

  #linkToAsign{
    margin-top: 20px;
  }

  a:hover {
    cursor: pointer;
  }
  
</style>