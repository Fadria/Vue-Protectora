
/**
 * @Author: Federico Adrià Carrasco
 * @Date: 04/06/2022
 * @Email: fadriacarrasco@gmail.com
 *
 */

<template>
  <div class="about-view">
    <menu-principal :activeItem="itemMenu"/>

    <div id="volunteerDiv">

        <div class="row" id="rowText">
          <div class="col-md-10 offset-2">
            <p class="pText">Si quieres convertirte en voluntario, tan sólo tienes que indicarnos tu email y nos pondremos en contacto contigo lo más pronto posible.</p>
            <p class="pText">Puedes ayudarnos a cuidar de los animales, pasearlos, jugar con ellos y organizar diferentes eventos en la protectora, hay todo tipo de tareas que puedes realizar.</p>
            <p class="pText">¡Te esperamos!</p>
          </div>
        </div>

        <img src="@/assets/img/volunteerImage.jpg" alt="Imagen voluntariado" class="col-md-4 offset-1 img-fluid"/>

        <div id="formDiv" class="col-md-6">
          <form @submit.prevent="sendEmail()">
            <div class="container">

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Email:</label>
                    <input type="email" class="form-control" placeholder="Introduzca su email..." v-model="data.email" required>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                      <button class="btn btn-primary form-control">Enviar solicitud</button>
                  </div>
                </div>
              </div>
            </div>

          </form>
        </div>
    </div>

  </div>
</template>

<script>
  import MenuPrincipal from '@/components/MenuPrincipal.vue'
  import emailjs from 'emailjs-com';

  export default {
    name: 'about-view',
    components: {
      MenuPrincipal,
    },
    data() {
      return {
        itemMenu: 'volunteer',
        data: {
          email: ''
        }
      };
    },
    methods: {
      sendEmail() {
        // Inicialización de la librería mediante la id de usuario
        emailjs.init("oMNQl837fBLnYTnfR");

        // Datos a enviar en el formulario
        var templateParams = {
          email: this.data.email,
          mensaje: "Solicitud de voluntariado"
        };

        // Enviamos el mensaje
        emailjs.send('nuevolazo', 'template_i5ajs9w', templateParams)
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
  #volunteerDiv {
    margin-top: 40px;
  }

  #formDiv {
    display: inline-block;
    vertical-align: top;
  }
  
  #rowText {
    display: inline-block;
    margin-bottom: 40px;
  }

  .pText {
    text-align: justify;
  }
</style>