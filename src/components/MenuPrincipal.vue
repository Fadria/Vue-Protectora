<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <img src="@/assets/logo.png" alt="Logotipo de la aplicación" id="logo"/>

    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item" :class="{ 'active' : activeItem == 'about'}">
        <a class="nav-link" :href="'/'">Quiénes somos</a>
      </li>

      <li class="nav-item" :class="{ 'active' : activeItem == 'contact'}">
        <a class="nav-link" :href="'/contact'">Contacto</a>
      </li>

      <li class="nav-item" :class="{ 'active' : activeItem == 'animals'}">
        <a class="nav-link" :href="'/animals'">Ver animales</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'menu-unidad',
    props: {
      activeItem: String,
    },
}
</script>

<style scoped>
  .navbar {
    background-color: #91e6c2;
    font-size: 18px;
  }

  .navbar-nav > li > a::after {
      content:'|';
      padding-left:10px;
      @media (max-width: 767px) {
          content: none;
          padding-left:0;
      }
  }

 .navbar-nav > li:last-child > a::after {
    content:none;
  }  

  #logo {
    height: 50px;
  }

</style>