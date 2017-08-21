<template>
  <transition name="fade">
    <div class="carousel-item" v-show="is_visible">
     <slot></slot>
    </div>
  </transition>
</template>
<script>
import Item from './BannerCarousel'
export default {
  name: 'CarouselItem',
  props:{
    index: {
      type: Number,
      default : 0
    }
  },
  data(){
    return {
       //index 초기값 설정.
      // index: 0
    }
  },
  computed: {
    is_visible(){
      // console.log('this.$parent.active_index:',this.$parent.active_index)
      // console.log('this.index:',this.index)
      this.$emit('getIndex',this.index);
      return this.$parent.active_index === this.index;
    },
    
  },
  

}
</script>
<style lang="sass" scoped>
  @import "~config"
  .carousel-item
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
  .fade-enter,
  .fade-leave-to
    opacity: 0
  .fade-enter-active,
  .fade-leave-active
    transition: opacity 3s 
    
    

  
    
    


</style>