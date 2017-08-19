<template>
  <div id="banner">
    <banner-carousel>
      <banner-carousel-item class="carousel-item" v-for="(item,index) in rankingList":index="index" :key="index" >
        <img :src="item.thumbnail_img[1]" :alt="item.alt" class="cover">
          <div class="explain">
          <h2>{{ item.id+1 }}</h2>
          <h3>{{ item.title }}</h3>
          <div class="text-sub">
            <span class="place">{{item.place}}</span>
            <span>{{item.location}}</span>
            <span>{{item.duration[0]}} - {{item.duration[1]}}</span>
          </div>
        </div>
      </banner-carousel-item>
    </banner-carousel>
  </div>
</template>

<script>
import BannerCarousel     from './BannerCarousel'
import BannerCarouselItem from './BannerCarouselItem'

export default {
  name: 'Banner',
  components: {
    BannerCarousel, BannerCarouselItem
  },
  created() {
      //  let items = this.items;
      let rankingList = this.rankingList;
  }, 
    
  data () {
    return {
      
    }
  },
  computed:{
    rankingList: function () {
      return this.$store.getters.getList.slice(0,4);
    }
  },
  
}
</script>

<style lang="sass" scoped>
  @import "~config"

  html 
    font-size: 10px
    background: #fff
    // box-sizing: border-box
    +global-box-sizing(border-box)
  body
    margin: 0
    font-size: 1.6rem

  #banner
    // +container(1190px 12)
    // margin-top: 20px
    color: #2c3e50

  .carousel-item
    position: relative
    overflow: hidden
    padding-bottom: 20%

  .cover
    position: absolute
    width: 90%
    height: auto
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
  .explain 
    position: relative
    left: 65%
    top:  leading(6)
    width: 23%
    height: 60%  
    z-index: 1000
    text-align: right
    padding: 0 2%
  h2
    text-align: left
    font-size: 2rem
    margin-bottom: 2%
  h3
    // padding-top: 10px
    border-top: 1px solid rgb(30, 11, 101)
    font-size: 1.8rem
    color: rgb(34, 34, 34)
    font-weight: bold
    line-height: leading(2)
  
  .text-sub
    position: absolute
    margin-top: 15% 
    width: 50%
    // text-align: right
    right: 10%
  span
    display: block
    margin-top: 2%
    font-size: 1.4rem
  .place  
    // word-break: keep-all
 
  
  
</style>
