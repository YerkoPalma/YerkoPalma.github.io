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
                  <div role="tabpanel" class="tab-pane fade in active" id="frontend">
                    <div class="row">
                      <div class="container">
                        <div class="col-md-7">
                          <p class="text-left">Js-Dom</p>
                          <div class="progress">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                            </div>
                          </div>
                          <p class="text-left">Js-MVC/MVVM</p>
                          <div class="progress">
                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                              <span class="sr-only">20% Complete</span>
                            </div>
                          </div>
                          <p class="text-left">Css-Style</p>
                          <div class="progress">
                            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                              <span class="sr-only">60% Complete (warning)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> <!-- /Front-end -->

                  <!-- Back-end -->
                  <div role="tabpanel" class="tab-pane fade" id="backend">

                  </div><!-- /Back-end -->
                  <div role="tabpanel" class="tab-pane fade" id="mobile">...</div>
                </div>
              </div>
              <div class="col-md-5">
                <div class="jumbotron">
                  <h3>Hello, world!</h3>
                  <p>...</p>
                  <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
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
  }
}
</script>
