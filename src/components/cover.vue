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
            <div class="card"></div>
          </div>
        </div>
      </div>
      <h1 class="display-3">{{title}}</h1>
      <p class="lead">{{subTitle}}</p>
    </div>
  </div>
</template>

<script>
import md5 from 'js-md5'

  export default{
    data(){
      return{
        mail: 'yerko.palma@usach.cl'
      }
    },
    computed: {
      gravatar: function() {
        //https://s.gravatar.com/avatar/d809533c5ce964b709e2b38e6573973b?s=180
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
