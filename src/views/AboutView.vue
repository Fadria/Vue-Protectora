<template>
  <div class="about-view">
    <menu-principal :activeItem="itemMenu"/>

    <div id="aboutDiv">
      <img src="@/assets/img/aboutImage.png" alt="Logotipo de la aplicación" class="col-md-5 offset-1 img-fluid"/>

      <div id="aboutText" class="col-md-5">
        <p>
          La Protectora Nuevo Lazo surgió en 1999 con el objetivo de ayudar a los animales más desfavorecidos a encontrar una nueva familia, 
          un nuevo lazo.
        </p>
        <p>Esto incluye tanto perros, gatos y hurones como a diferentes animales exóticos tales como fénecs, ajolotes o guacamayos.</p>
        <p>Desde entonces hemos logrado encontrar un nuevo hogar a más de 1000 animales, y seguimos sumando.</p>
        <p>¿Nos ayudarás a encontrar un hogar a estos animales?</p>

        <p class="text-muted mb-0"><a href="/animals"><button class="btn btn-info">Ver animales</button></a></p>
      </div>
    </div>

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
    }
  }
</script>

<style scoped>
  #aboutDiv {
    margin-top: 80px;
  }

  #aboutText {
    display: inline-block;
    vertical-align: top;
    font-size: 18px;
    padding: 40px;
  }

  #aboutText > p {
    text-align: justify;
  }

  h2{
    margin-top: 80px;
    margin-bottom: 30px;
  }

  #linkToAsign{
    margin-top: 20px;
  }

  a{
    color: inherit;
    text-decoration: inherit;
  }

  a:hover {
    cursor: pointer;
  }
  
</style>