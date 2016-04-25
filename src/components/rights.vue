<template>
  <div :class="{ 'pull-left': align === 'left', 'pull-right': align === 'right'}"></div>
</template>
<script>
export default {
  props: {
    align: {
      type: String,
      default: 'left'
    }
  }
}
</script>