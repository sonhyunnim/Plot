<template>
  <div class="carousel">
     <slot></slot>
      <div class="information" >
        <!-- <div class="explain"  v-for="(item,n) in rankingList" :index="n" :key="n"  :class="{'is-active':active_index === n-1}" v-show="is_visible">
          <h2>{{ item.id+1 }}</h2>
          <h3>{{ item.title }}</h3>
          <div class="text-sub">
            <span>{{item.place}}</span>
            <span>{{item.location}}</span>
            <span>{{item.duration[0]}} ~ {{item.duration[1]}}</span>
          </div>
        </div> -->
        <button type="button" class="carousel-button is-prev" @click="prevItem">
          <i class="fa fa-chevron-left" aria-hidden="true"alt="prev item"></i>
        </button>
        <button type="button" class="carousel-button is-next" @click="nextItem">
          <i class="fa fa-chevron-right" aria-hidden="true"alt="next item"></i>
        </button>
        <div class="indicators">
          <a href="" role="tab" @click.prevent="gotoItem(n-1)" :key="n" v-for="n in items_count" :class="{'is-active':active_index === n-1}">
            <i :class="activeIndexSrc(n-1)" aria-hidden="true"></i>
          </a>
      </div> 
    </div>
  </div>
</template>
<script>
export default {
  name: 'Carousel',
  props:{
    index: {
      type: Number,
      default : 0
    }
  },
  // 각각의 아이템에 인덱스 설정.
  mounted() {
    this.items.forEach((item,i)=> item.index = i);
    
  },
  data(){
     return {
       active_index: this.index,
       //캐럴셀 아이템 
       items: this.$children ,
       
       
     }
  },
  computed: {
    items_count(){
      return this.items.length;
    },
    // is_visible(){
      
    //   console.log('this.active_index:',this.active_index)
    //   console.log('this.index:',this.index)
    
    //   return this.active_index === this.index;
    // },
     
    rankingList: function () {
      return this.$store.getters.getList.slice(0,4);
    }
  },
  methods: {
    activeIndexSrc(n){
      let path = this.active_index === n ? 'fa fa-dot-circle-o' : 'fa fa-circle';
    return `${path}`;
    },
    prevItem(){
      // console.log('prev item');
      if( --this.active_index < 0) {
        this.active_index = this.items_count - 1;
        }
    },
    nextItem(){
      // console.log('next item');
      if( ++this.active_index >= this.items_count) {
        this.active_index = 0;
      }
    },
    gotoItem(n){
      this.active_index = n;
    },
    
  }
}
</script>
<style lang="sass" scoped>
  @import "~config"
  .carousel
    background: black
    width: 100%
    position: relative
    padding-bottom: 35%

    
  .information
      background-color: rgb(255, 255, 255)
      opacity: 0.8
      position: absolute
      left: 65%
      top: 30%
      width: 23%
      height: 60%
      text-align: right
      padding: 30px
  // h2
  //   text-align: left
  //   font-size: 2rem
  // h3
  //   // padding-top: 10px
  //   border-top: 1px solid rgb(30, 11, 101)
  //   font-size: 1.8rem
  //   color: rgb(34, 34, 34)
  //   font-weight: bold
  //   line-height: leading(2)
  //   background: red
  // .text-sub
  //   margin-top: 20% 
  //   span
  //     display: block
  //     margin-top: 2%
  //     font-size: 1.4rem
      
  .carousel-button
    position: absolute
    bottom: 5%
    border: none
    opacity: 1
    background-color: #fff
    transition: opacity 0.4s
    transform: translateY(-50%)
    &.is-prev
      left: 20px
    &.is-next
      right: 20px  
  .indicators
    position: absolute
    left: 50%
    bottom: 10%
    transform: translateX(-50%)

    a 
      margin:
        left: 4px
        right: 4px
        
      &is-active
        cursor: default 
  .fa
    font-size: 1.3rem
    color: rgb(30, 11, 101)      
        
        

        

</style>
