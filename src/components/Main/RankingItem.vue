<template>
  <transition name="slide">
    <div class="ranking-item" >
     <slot></slot>
    </div>
  </transition>
</template>
<script>

export default {
  name: 'RankingItem',
  props:{
    index: {
      type: Number,
      default : 0
    },
    active_index: {
      type: Number,
      default: 0
    }

  },
  data(){
    return {
       //index 초기값 설정.
      // index: 0
      // active_index: this.index,
   }
  },
  computed: {
    is_visible(){
 
     
      return this.$parent.active_index !== this.index;
    },
    
  },
  

}
</script>
<style lang="sass" scoped>
  @import "~config"
  .ranking-item
    position: absolute
    left: 0
    right: 0
    top: leading(1)
    bottom: 0
  .slide-enter,
  .slide-leave-to
    opacity: 0
  .slide-enter-active,
  .slide-leave-active
    transition: opacity 3s 
    
    

  
    
    


</style>