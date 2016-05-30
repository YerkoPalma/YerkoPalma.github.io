<style lang="less" src="./style/main.less"></style>
<template>
  <div id="app">
    <router-view></router-view>
    <global-footer></global-footer>
  </div>
</template>
<script>
import globalFooter from 'components/global-footer'

export default {
  data () {
    return {

    }
  },
  components: {
    globalFooter
  }
}
</script>
