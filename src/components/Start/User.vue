<template>
    <div class="container">
      <div class="background">
        <router-view></router-view>
        <svg 
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="242px" height="262px">
        <path fill-rule="evenodd"  fill="rgb(83, 191, 50)"
        d="M48.155,35.968 C48.155,35.968 146.937,167.421 159.403,153.065 C171.869,138.711 189.759,146.841 226.319,192.377 C262.879,237.913 231.059,279.461 151.875,253.435 C72.691,227.409 134.830,269.925 64.884,207.433 C5.593,154.459 1.900,115.407 18.043,103.718 C34.186,92.028 -13.199,19.046 4.660,4.184 C22.518,-10.676 39.988,18.463 48.155,35.968 Z"/>
        </svg>
      </div>
    </div>
  
</template>
<script>
export default {
  
}
</script>
<style lang="sass" scoped>
  @import "~config"
  .container
    +container(1190px 12)
    overflow: hidden
    // background: red
  .background
    margin: 0 auto
    margin-top: leading(4)
    background: url('../../assets/images/b_g.png') no-repeat
    background-size: cover
    width: 420px
    height: leading(24)
    text-align: center
    box-shadow: 0px 3px 59px 0px rgba(0, 0, 0, 0.5)

  
</style>