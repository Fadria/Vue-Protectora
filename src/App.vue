<template>  
  <router-view/>
</template>

<style>
  #app {
    font-family: "Poppins";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: "Poppins";
    src: local("Poppins"), url(./assets/fonts/poppins_medium.ttf) format("truetype");
  }

  body{
    background-color: whitesmoke;
  }


  #title {
    background-color: grey;
    color: white;
    padding: 8px;
    text-align: center;
    margin: 0px;
    vertical-align: -webkit-baseline-middle;
  }
</style>