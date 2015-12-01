<template>
  <div class="container-fluid" id="cover-wrapper">
    <div class="row text-center" id="cover">
      <img src="{{src}}" class="img-circle center-block" style="display: block;" alt="...">
      <h1 class="display-3">{{title}}</h1>
      <p class="lead">{{subTitle}}</p>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      src: {
        type: String
      },
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
