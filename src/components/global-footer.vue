<template>
  <footer>
    <div class="footer">
      <ul class="footer-social">
        <li class="footer-social-item">
          <a :href="github">
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li class="footer-social-item">
          <a :href="stackoverflow">
            <i class="fa fa-stack-overflow" aria-hidden="true"></i>
          </a>
        </li>
        <li class="footer-social-item">
          <a :href="linkedin">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      <div class="footer-rights">
        © {{ (new Date()).getFullYear() }} - {{author}}
      </div>
    </div>
  </footer>
</template>
<script>

export default {
  props: {
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
    },
    stackoverflow: {
      type: String,
      default: '#'
    },
    author: {
      type: String,
      default: 'Yerko Palma'
    }
  }
}
</script>
