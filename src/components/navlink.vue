<template>
  <li>
      <a class="page-scroll" href="#{{link}}"><slot></slot></a>
  </li>
</template>

<script>
  export default{
    props: {
      link: {
        type: String,
        required: true
      }
    }
  }
</script>
