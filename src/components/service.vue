<template>
  <i class="{{i}}"></i>
  <p class="service-title">{{title}}</p>
  <p class="lead"><slot></slot></p>
</template>

<script>
  export default{
    props: {
      i: {
        type: String
      },
      title: {
        type: String
      }
    }
  }
</script>
