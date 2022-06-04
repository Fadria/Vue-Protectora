
/**
 * @Author: Federico Adrià Carrasco
 * @Date: 04/06/2022
 * @Email: fadriacarrasco@gmail.com
 *
 */

<template>
  <div class="animal-view">
    <menu-principal :activeItem="itemMenu"/>

    <div id="animalDiv">
      <div class="col-md-5 offset-1">
        <h1>{{animal.nombre}}</h1>
        <h3>{{animal.especie}} {{animal.sexo}} {{animal.tamanyo}}</h3>
      </div>
    </div>

    <img class="col-md-5 offset-1 imageAnimal" :src="animal.imagen" alt="Imagen del animal">

    <table class="table col-md-6">
      <thead>
        <tr>
          <th scope="col">Edad</th>
          <th scope="col">Chip</th>
          <th scope="col">Urgente</th>
          <th scope="col">Esterilizado</th>
          <th scope="col">Exótico</th>
          <th scope="col">Pelo</th>
          <th scope="col" v-if="animal.especie == 'Perro'">PPP</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{animal.edad}} años</td>
          <td>{{animal.chip}}</td>
          <td>{{animal.urgente}}</td>
          <td>{{animal.esterilizado}}</td>
          <td>{{animal.exotico}}</td>
          <td>{{animal.pelo}}</td>
          <td v-if="animal.especie == 'Perro'">{{animal.perroPeligroso}}</td>
        </tr>
      </tbody>
    
      <p id="historiaAnimal" class="col-md-10">{{animal.historia}}</p>


      <div id="formDiv">
        <form @submit.prevent="sendEmail()">
          <div class="container">

            <div class="row">
              <div class="col-md-10">
                <div class="form-group">
                  <label>Obtener más información:</label>
                  <input type="email" class="form-control" placeholder="Introduzca su email..." v-model="data.email" required>
                </div>
              </div>
            </div>

            <div class="col-md-10">
              <div class="form-group">
                <button class="btn btn-primary form-control">Enviar solicitud de contacto...</button>
              </div>
            </div>
          </div>

        </form>
      </div>

    </table>

    
  </div>
</template>

<script>
  import MenuPrincipal from '@/components/MenuPrincipal.vue'
  import emailjs from 'emailjs-com';
  import ip from './ip.txt';

  export default {
    name: 'contact-view',
    components: {
      MenuPrincipal,
    },
    data() {
      return {
        itemMenu: 'animals',
        data: {
          email: ''
        },
        animal: null
      };
    },
    async created() {
      // Obtenemos los datos del animal
      const response = await fetch(ip + "apirest/animales/" + this.$route.params.id);
      const data = await response.json();
      this.animal = data.data
    },
    methods: {
      sendEmail() {
        // Inicialización de la librería mediante la id de usuario
        emailjs.init("oMNQl837fBLnYTnfR");

        // Datos a enviar en el formulario
        var templateParams = {
          email: this.data.email,
          animal: this.$route.params.id,
          nombre: this.animal.nombre
        };

        // Enviamos el mensaje
        emailjs.send('nuevolazo', 'template_iiqga9k', templateParams)
          .then(function() {
            alert("Solicitud enviada correctamente")
          }
        );

        // Reseteamos los campos del formulario
        this.data.email = ''
      },
    }    
  }
</script>

<style scoped>
  .animal-view {
    margin-bottom: 100px;
  }
  
  #animalDiv {
    margin-top: 80px;
  }

  .imageAnimal {
    width: auto;
    height: 75 0px;
    text-align: center;
  }

  img {
    text-align: center;
    vertical-align: top;
  }

  h1, h3 {
    text-align: center;
  }

  table {
    display: inline-block;
  }

  #historiaAnimal{
    text-align: justify;
    padding: 0px;
    margin-top: 20px;
  }

  form {
    margin-top: 40px;
  }
</style>