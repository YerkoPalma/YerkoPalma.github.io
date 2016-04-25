<template>
  <div class="container-fluid" id="cover-wrapper">
    <div class="row text-center" id="cover">
      <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
        <div class="flipper">
          <div class="front">
            <img :src="gravatar" class="img-circle center-block" style="display: block;" alt="...">
          </div>
          <div class="back">
            <!-- back content -->
            <div class="card">
              <a class="publicity" href="https://github.com/YerkoPalma" target="_blank">
                <i class="fa fa-github uncolor" aria-hidden="true"></i>
              </a>
              <a class="publicity" href="http://stackoverflow.com/users/3178237/yerko-palma" target="_blank">
                <i class="fa fa-stack-overflow uncolor" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 class="display-3">{{title}}</h1>
      <p class="lead">{{subTitle}}</p>
      <div class="col-md-6 col-md-offset-3 self-description">
        <p>{{description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'js-md5'

  export default{
    data () {
      return{
        mail: 'yerko.palma@usach.cl',
        description: 'Desarrollador full stack, con preferencia por Javascript <3. También soy aficionado del diseño, con espiritu emprendedor. Actualmente trabajando como desarrollador .NET/Js, pero con ganas de ayudar en tu próximo proyecto. '
      }
    },
    computed: {
      gravatar: function () {
        var src = 'https://s.gravatar.com/avatar/' + md5(this.mail) + '?s=180'
        return src;
      }
    },
    props: {
      title: {
        type: String,
        required: true
      },
      subTitle: {
        type: String,
      }
    }
  }
</script>
