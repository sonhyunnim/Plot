<template>
  <div class="background">
    <navigation class="navigation"></navigation>
    <router-view></router-view>
  </div>
</template>
<script>
import Navigation from './Navigation'
export default {
  data() {
     return {

    }
  },
  components: {
    Navigation
  }
}
</script>
<style lang="sass">

  .navigation
    position: sticky
    top: 0
    // background: #fff
    z-index: 2000
  .background
    background-image: url(../../assets/images/bg_img.png)
    background-repeat: no-repeat
    background-size: 100%
    background-attachment: fixed
</style>