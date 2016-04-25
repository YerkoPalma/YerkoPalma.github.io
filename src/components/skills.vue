<template>
  <section id="skills" class="skills-section">
      <div class="container">
          <div class="row">
            <h1>¿Para qué soy bueno?</h1>
              <div class="nav-tabs-navigation">
                <div class="nav-tabs-wrapper">
                  <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" v-for="tab in tabs" v-bind:class="{ 'active' : $index === 0 }">
                      <a href="#{{tab.target}}" role="tab" aria-controls="{{tab.target}}" data-toggle="tab">{{tab.name}}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-7">

                <!-- Tabs content -->
                <div class="tab-content">
                  <!-- Front-end -->
                  <skill v-for="area in areas"
                    :tools="area.tools"
                    :level="area.level"
                    :skill-id="area.name">
                  </skill>
                </div>
              </div>
              <div class="col-md-5">
                <div class="jumbotron">
                  <div id="canvas-container">
                    <canvas id="myChart" width="370" height="400"></canvas>
                  </div>
                </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import skill from './skill.vue'

export default{
  data(){
    return {
      tabs: [
        { target: 'frontend', name: 'Front-end'},
        { target: 'backend', name: 'Back-end'},
        { target: 'database', name: 'Bases de datos'},
        { target: 'mobile', name: 'Mobile'}
      ],
      areas: [
        {
          name: 'frontend',
          level: 75,
          tools: [
            {name: 'vue.js', level: 60, type: 'js'},
            {name: 'angular', level: 40, type: 'js'},
            {name: 'jquery', level: 90, type: 'js'},
            {name: 'ember', level: 25, type: 'js'},
            {name: 'sass', level: 75, type: 'style'},
            {name: 'compass', level: 40, type: 'style'},
            {name: 'css', level: 90, type: 'style'},
            {name: 'less', level: 85, type: 'style'},
            {name: 'photoshop', level: 20, type: 'design'},
            {name: 'gimp', level: 60, type: 'design'},
            {name: 'ilustrator', level: 30, type: 'design'}
          ]
        },
        {
          name: 'backend',
          level: 85,
          tools: [
            {name: 'ruby on rails', level: 85, type: 'mvc'},
            {name: 'express.js', level: 80, type: 'mvc'},
            {name: 'cakePhp', level: 90, type: 'mvc'},
            {name: 'wordpress', level: 85, type: 'cms'},
            {name: 'pagekit', level: 70, type: 'cms'},
            {name: 'crogo', level: 5, type: 'cms'},
            {name: '.net', level: 90, type: 'mvc'}
          ]
        },
        {
          name: 'database',
          level: 60,
          tools: [
            {name: 'mysql', level: 75, type: 'sql'},
            {name: 'postgresql', level: 85, type: 'sql'},
            {name: 'sql server', level: 80, type: 'sql'},
            {name: 'sqlite', level: 30, type: 'sql'},
            {name: 'mongodb', level: 90, type: 'nosql'},
            {name: 'dynamodb', level: 30, type: 'nosql'},
            {name: 'redis', level: 0, type: 'nosql'},
          ]
        },
        {
          name: 'mobile',
          level: 70,
          tools: [
            {name: 'java (android)', level: 55, type: 'native'},
            {name: 'swift (iOS)', level: 0, type: 'native'},
            {name: 'objective-c (iOS)', level: 0, type: 'native'},
            {name: 'c# (windows phone)', level: 30, type: 'native'},
            {name: 'ionic', level: 90, type: 'hibrid'},
            {name: 'cordova', level: 80, type: 'hibrid'},
            {name: 'titanium', level: 20, type: 'hibrid'},
            {name: 'phonegap', level: 80, type: 'hibrid'}
          ]
        }
      ]
    }
  },
  events: {
    'chartify' : function (data) {
      // remove previous canvas
      let container = document.getElementById('canvas-container')
      
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
      // add a new canvas
      let canvas = document.createElement('canvas')

      canvas.id = 'chart'
      canvas.width = 370
      canvas.height = 400
      canvas.style.zIndex = 8
      
      container.appendChild(canvas)
      
      let chartLayer = document.getElementById('chart')
      let ctx = chartLayer.getContext('2d')
      
      let _data = {
        labels: data.map(obj => { return obj.name }),
        datasets: [{
          label: 'Nivel',
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBackgroundColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(179,181,198,1)",
          data: data.map(obj => { return obj.level })
        }]
      }
      let myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: _data,
        options: {
          default: {
            global: {
              title: {
                display: false
              },
              legend: {
                display: false
              }
            }
          }
        }
      })
    }
  },
  components: {
    skill
  }
}
</script>
