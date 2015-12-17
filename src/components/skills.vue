<template>
  <section id="skills" class="skills-section">
      <div class="container">
          <div class="row">
              <div class="col-lg-7">
                <!-- Tabs -->
                <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" v-for="tab in tabs" v-bind:class="{ 'active' : $index === 0 }">
                    <a href="#{{tab.target}}" role="tab" aria-controls="{{tab.target}}" data-toggle="tab">{{tab.name}}</a>
                  </li>
                </ul>

                <!-- Tabs content -->
                <div class="tab-content">
                  <!-- Front-end -->
                  <skill v-for="area in areas"
                    :tools="area.tools"
                    :level="area.level"
                    :skill-id="area.name">
                  </skill>

                   <!-- /Front-end -->

                </div>
              </div>
              <div class="col-md-5">
                <div class="jumbotron">
                  <canvas id="myChart" width="400" height="400"></canvas>
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
        { target: "frontend", name: "Front-end"},
        { target: "backend", name: "Back-end"},
        { target: "database", name: "Bases de datos"},
        { target: "mobile", name: "Mobile"}
      ],
      areas: [
        {
          name: 'frontend',
          level: 75,
          tools: [
            {name: 'vue.js', level: 50, type: 'js-mvvm'},
            {name: 'angular', level: 40, type: 'js-mvc'},
            {name: 'jquery', level: 90, type: 'js-dom'},
            {name: 'd3.js', level: 30, type: 'data-visualization'},
            {name: 'css3', level: 80, type: 'style'},
            {name: 'less', level: 85, type: 'style'},
            {name: 'sass', level: 75, type: 'style'},
            {name: 'compass', level: 40, type: 'style'}
          ]
        },
        {
          name: 'backend',
          level: 85,
          tools: [
            {name: 'ruby on rails', level: 85, type: 'mvc'},
            {name: 'node.js', level: 75, type: 'backend'},
            {name: 'express.js', level: 80, type: 'mvc'},
            {name: 'cakePhp', level: 90, type: 'mvc'},
            {name: 'wordpress', level: 85, type: 'cms'},
            {name: 'pagekit', level: 70, type: 'cms'},
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
            {name: 'mongodb', level: 90, type: 'nosql - document'},
            {name: 'dynamodb', level: 30, type: 'nosql - key/value'}
          ]
        },
        {
          name: 'mobile',
          level: 70,
          tools: [
            {name: 'android', level: 55, type: 'native'},
            {name: 'ios', level: 0, type: 'native'},
            {name: 'ionic', level: 90, type: 'hibrid - webview'},
            {name: 'cordova', level: 80, type: 'hibrid - webview'},
            {name: 'nativescript', level: 20, type: 'hibrid - native'}
          ]
        }
      ]
    }
  },
  events: {
    'chartify' : function (data) {
      //var Chart = require('chart.js/Chart');
      //console.log('typeof chart: ' + typeof Chart);
      var ctx = document.getElementById("myChart").getContext("2d");

      var _data = {
        labels: data.map(function (obj) { return obj.name }),
        datasets: [{
          label: "",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: data.map(function (obj) { return obj.level })
        }]
      };
      console.log(JSON.stringify(_data.datasets.data));
      var myRadarChart = new Chart(ctx).Radar(_data);
    }
  },
  components: {
    skill
  }
}
</script>
