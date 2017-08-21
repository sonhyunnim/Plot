<template>
  <transition name="slide">
    <!-- <div class="ranking-item" v-show="is_visible"> -->
    <div class="ranking-item">
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
      // console.log('this.$parent.active_index:',this.$parent.active_index)
      // console.log('this.index:',this.index)
      //리스트의 현제 인덱스(this.index) ===보여지는 (active_index)
      // console.log('this.$parent',this.$parent)
      // console.log('this.index',this.index)
      // console.log('this.active_index',this.active_index)
      return this.$parent.active_index === this.index;
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
    transition: opacity 2s 
    
    

  
    
    


</style>