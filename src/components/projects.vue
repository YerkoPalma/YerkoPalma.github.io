<template>
  <section id="projects" class="projects-section">
    <h1>¿Qué he hecho?</h1>
      <div class="container-fluid">
        <div class="projects-wrapper">
          <template v-for="project in projects">
            <div class="project-thumbnail" id="{{project.id}}" :class="{ 'new-row': $index % 3 == 0 }" >
              <div class="project-content">
                <div class="project-hover" @click="fadeIn($index)">
                  <i class="fa fa-plus fa-5x"></i>
                </div>
                <img class="img-responsive" :src="project.thumbnail"/>
              </div>
              <div class="project-caption">
                <h3>{{project.name}}</h3>
                <span class="sub-title">{{project.description}}</span>
              </div>
            </div>
            <div class="project-panel" id="{{project.id}}-modal" v-show="project.show" transition="bounce">
              <span @click="fadeOut($index)" class="times">&times;</span>
              <div class="container">
                <div v-html="project.content | marked"></div>
              </div>
            </div>
          </template>

        </div>
      </div>
  </section>
</template>

<script>
import marked from 'marked'

export default{
  methods: {
    fadeIn: function(index) {
      let projectSelected = this.projects[index]
      projectSelected.show = true
      this.projects[index] = projectSelected
      let body = document.getElementsByTagName('body')[0]
      
      body.style.overflow = 'hidden'
      
    },
    fadeOut: function(index){
      let projectSelected = this.projects[index]
      projectSelected.show = false
      this.projects[index] = projectSelected
      let body = document.getElementsByTagName('body')[0]
      
      body.style.overflow = 'visible'
    }
  },
  ready() {
    //update the content of every project, loading the md content
    for (let project of this.projects){
      let client = new XMLHttpRequest()
      client.open('GET', project.content, false)
      client.onreadystatechange = function() {
        project.content = client.responseText
      }
      client.send(null)
    }
  },
  data() {
    return {
      projects: [
        {
          id: 'palmacontabilidad',
          name: 'Palma Contabilidad',
          description: 'Website design',
          thumbnail: 'assets/img/palmacontabilidad-thumbnail.png',
          content: '/src/media/palmacontabilidad.md',
          show: false
        },
        {
          id: 'salvador',
          name: 'Salvador Palma Navea',
          description: 'Website design',
          thumbnail: 'assets/img/salvador.png',
          content: '/src/media/salvador.md',
          show: false
        },
        {
          id: 'chilena',
          name: 'Reembolsos Movil',
          description: 'Mobile app',
          thumbnail: 'assets/img/chilena-thumbnail.png',
          content: '/src/media/chilena.md',
          show: false
        },
        {
          id: 'observatorioweb',
          name: 'Observatorio Web',
          description: 'Web App',
          thumbnail: 'assets/img/observatorioweb.png',
          content: '/src/media/observatorioweb.md',
          show: false
        },
        {
          id: 'github',
          name: 'Github Projects',
          description: 'Open Source Projects',
          thumbnail: 'assets/img/github.png',
          content: '/src/media/github.md',
          show: false
        },
        {
          id: 'codepen',
          name: 'CodePen Projects',
          description: 'Open Source Pens',
          thumbnail: 'assets/img/codepen.png',
          content: '/src/media/codepen.md',
          show: false
        }
      ]
    }
  },
  filters: {
    marked: marked
  }
}
</script>
