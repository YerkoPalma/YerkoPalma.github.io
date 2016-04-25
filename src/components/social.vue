<template>
  <nav id="footer" :class="{ 'pull-left': align === 'left', 'pull-right': align === 'right'}">
    <ul>
      <li>
        <a :href="facebook"><i class="fa fa-facebook-square uncolor"></i></a>
      </li>
      <li>
        <a :href="linkedin"><i class="fa fa-linkedin-square uncolor"></i></a>
      </li>
      <li>
        <a :href="github"><i class="fa fa-github uncolor"></i></a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  ready () {
    $('#footer a').mouseenter(function () {
      $(this).find('.uncolor').removeClass('uncolor')
    }).mouseleave(function () {
      $(this).find('.fa').addClass('uncolor')
    })
  },
  props: {
    align: {
      type: String,
      default: 'left'
    },
    facebook: {
      type: String,
      default: '#'
    },
    linkedin: {
      type: String,
      default: '#'
    },
    github: {
      type: String,
      default: '#'
    }
  }
}
</script>