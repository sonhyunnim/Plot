<!--Ranking Carousel --> 
<template>
  <div class="container">
    <div class="ranking">
      <h2 class="ranking-heading">
        <i class="fa fa-caret-down" aria-hidden="true"></i>
        실시간 전시 랭킹
      </h2>
      <ranking-item>
        <ul tag="ul" class="ranking-list" @mouseover="onMouseOver" @mouseout="showCurrent">
          <li :key="index,data" v-for="(data, index) in rankingList" :class="{'is-active':active_index === index-1} " @click="showCurrent" >
            <router-link :to="{ name: 'detail', params: { Id: data.id }}" tag="a" class="detail-link" @click="nextItem" >
              {{++index+'.'+' '+data.title}}
            </router-link>
          </li>
        </ul >
      </ranking-item>
    </div>
  </div>
</template>
<script>
import RankingItem from './RankingItem'
export default {
  mounted(){
    this.showCurrent()
  },
  components: {
    RankingItem
  },
  data(){
    return {
      active_index :  true,
      hover: false,
      intaval_id: null
      
    }  
  },
  computed: {
    rankingList() {
      return this.$store.getters.getList.slice(0,5);
    },
    
    
  },
  methods: {
    nextItem(index) {
      let active_index = this.index
      if( ++this.active_index >= this.rankingList.length) {
        this.active_index = 0;
      }
    },
    showCurrent(){
      this.intaval_id = setInterval(this.nextItem,2000);
    },
    onMouseOver(){
      clearInterval(this.intaval_id);
    }
  }
}
</script>
<style lang="sass" scoped>
  @import "~config"
  
  .container
    +container(1190px 12)

  .ranking
    margin-top: leading(2)
    height: leading(2)
    position: relative
    +span(3 last)
    &:hover .ranking-list
      height: auto
      position: static
      
      

  .ranking-heading
    font: bold 2rem "Noto Sans kr", sans-serif
    height: leading(1)
    color: #1e0b65
    padding-left: leading(1)/2
    i
      padding-right: leading(1)/2

  .ranking-list
    margin-top: leading(1)/2
    width: 100%
    background: #1e0b65
    color: #fff
    font: 1.6rem "Noto Sans kr", sans-serif
    position: absolute
    overflow: hidden
    height: leading(2)
    position: relative
    .is-active  
      background: #1e0b65
      position: absolute
      top: 0
      bottom: 0
      left: 0 
      right: 0
    a
      text-decoration: none
      line-height: leading(1)
      padding: leading(1)/2
      color: #fff
      display: inline-block
      width: 100%
      
      &:hover
        background: #fff
        border: 2px solid #1e0b65
        color: #1e0b65
        font-weight: bold
          
</style>
