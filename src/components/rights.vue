<template>
  <div :class="{ 'pull-left': align === 'left', 'pull-right': align === 'right'}">
    <p class="copyright">© {{ (new Date()).getFullYear() }} - {{author}}</p>
  </div>
</template>
<script>
export default {
  props: {
    align: {
      type: String,
      default: 'left'
    },
    author: {
      type: String,
      default: 'Yerko Palma'
    }
  }
}
</script>