<template>
  <div class="contact-view">
    <menu-principal :activeItem="itemMenu"/>

    <div id="contactDiv">

      <div>
        <iframe class=" col-lg-5 col-12 offset-1 rounded shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3081.441154278595!2d-0.4681700849403125!3d39.436759922576066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60510a244a7965%3A0x8e012b2e0fc49f74!2sAyuntamiento%20de%20Torrent!5e0!3m2!1ses!2ses!4v1653216387431!5m2!1ses!2ses" 
        allowfullscreen></iframe>

        <div id="formDiv">
          <form @submit.prevent="sendEmail()">
            <div class="container">

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Nombre Completo:</label>
                    <input type="text" class="form-control" placeholder="Introduzca su nombre..." v-model="data.nombre" required>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label>Email:</label>
                    <input type="email" class="form-control" placeholder="Introduzca su email..." v-model="data.email" required>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="textareaMessage">Motivo de su mensaje:</label>
                    <textarea class="form-control" id="textareaMessage" rows="3" v-model="data.mensaje" required></textarea>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                      <button class="btn btn-primary form-control">Enviar solicitud de contacto...</button>
                  </div>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    
    </div>

  </div>
</template>

<script>
  import MenuPrincipal from '@/components/MenuPrincipal.vue'
  import emailjs from 'emailjs-com';

  export default {
    name: 'contact-view',
    components: {
      MenuPrincipal,
    },
    data() {
      return {
        itemMenu: 'contact',
        data: {
          nombre: '',
          email: '',
          mensaje: ''
        }
      };
    },
    methods: {
      sendEmail() {
        // Inicialización de la librería mediante la id de usuario
        emailjs.init("oMNQl837fBLnYTnfR");

        // Datos a enviar en el formulario
        var templateParams = {
          nombre: this.data.nombre,
          email: this.data.email,
          mensaje: this.data.mensaje
        };

        // Enviamos el mensaje
        emailjs.send('nuevolazo', 'template_i5ajs9w', templateParams)
          .then(function() {
            alert("Email enviado correctamente")
          }
        );

        // Reseteamos los campos del formulario
        this.data.nombre = ''
        this.data.email = ''
        this.data.mensaje = ''
      },
    }
  }
</script>

<style scoped>
  #contactDiv {
    margin-top: 80px;
  }

  iframe {
    padding: 0px;
    height: 500px;
    width: 100%;
    border: 2px solid #ffa500;
  }

  #formDiv {
    display: inline-block;
    vertical-align: top;
  }
</style>