<template>
  <footer>
    <div class="container">
      <social align="left"></social>
      <rights align="right"></rights>
    </div>
  </footer>
</template>
<script>
import social from './social'
import rights from './rights'

export default {
  components: {
    social,
    rights
  }
}
</script>
