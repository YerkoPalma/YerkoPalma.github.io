<template>
  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
          <div class="navbar-header page-scroll">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand page-scroll" href="{{root.url}}">{{root.name}}</a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse navbar-ex1-collapse">
              <ul class="nav navbar-nav pull-rigth">
                  <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                  <li class="hidden">
                      <a class="page-scroll" href="#cover-wrapper"></a>
                  </li>
                  <li>
                      <a class="page-scroll" href="#services">Servicios</a>
                  </li>
                  <li>
                      <a class="page-scroll" href="#skills">Habilidades</a>
                  </li>
                  <li>
                      <a class="page-scroll" href="#projects">Proyectos</a>
                  </li>
                  <li>
                      <a class="page-scroll" href="#experience">Experiencia</a>
                  </li>
                  <li>
                      <a class="page-scroll" href="#contact">Contacto</a>
                  </li>
              </ul>
          </div>
          <!-- /.navbar-collapse -->
      </div>
      <!-- /.container -->
  </nav>
</template>

<script>
  export default{
    props: {
      root: {
        type: Object,
        required: true
      }
    },
    data(){
      return {
        url: "#",
        name: ""
      }
    }
  }
</script>
