<template>
  <section id="projects" class="projects-section">
    <h1>¿Qué he hecho?</h1>
      <div class="container-fluid">
        <div class="projects-wrapper">
          <div class="project-thumbnail" id="palmacontabilidad">
            <div class="project-content">
              <div class="project-hover" v-on:click="fadeIn()">
                <i class="fa fa-plus fa-5x"></i>
              </div>
              <img class="img-responsive" src="assets/img/palmacontabilidad-thumbnail.png"/>
            </div>
            <div class="project-caption">
              <h3>Palma Contabilidad</h3>
              <span class="sub-title">Website design</span>
            </div>
          </div>

          <div class="project-panel" id="palmacontabilidad-modal">
            <i v-on:click="fadeOut()" class="fa fa-times fa-5x"></i>
          </div>

          <div class="project-thumbnail" id="salvador">
            <div class="project-content">
              <div class="project-hover">
                <i class="fa fa-plus fa-5x"></i>
              </div>
              <img class="img-responsive" src="assets/img/salvador.png"/>
            </div>
            <div class="project-caption">
              <h3>Salvador Aarón</h3>
              <span class="sub-title">Website design</span>
            </div>
          </div>

          <div class="project-thumbnail" id="chilena">
            <div class="project-content">
              <div class="project-hover">
                <i class="fa fa-plus fa-5x"></i>
              </div>
              <img class="img-responsive" src="assets/img/chilena-thumbnail.png"/>
            </div>
            <div class="project-caption">
              <h3>Chilena Reembolsos</h3>
              <span class="sub-title">Mobile app</span>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default{
  methods: {
    fadeIn: function(el) {
      el = document.getElementById('palmacontabilidad-modal');
      console.log(el);
      if (el.classList)
        el.classList.add('shown');
      else
        el.className += ' ' + 'shown';
    },
    fadeOut: function(el){
      el = document.getElementById('palmacontabilidad-modal');
      console.log(el);
      if (el.classList)
        el.classList.remove('shown');
      else
        el.className = el.className.replace(new RegExp('(^|\\b)' + 'shown'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }
}
</script>
