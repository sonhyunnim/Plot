<!--Recommand Carousel --> 
<template>
  <div class="recommand">
    <div class="rc-items container">
      <div class="rc-item1">item1</div>
      <div class="rc-item2">item2</div>
      <div class="rc-item3">item3</div>
      <div class="rc-item4">item4</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
     return {


    }
  }
}
</script>
<style lang="sass" scoped>
  @import "~config"
  
  .container
    +container(1190px 12)
</style>
