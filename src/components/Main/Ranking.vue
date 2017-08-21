<!--Ranking Carousel --> 
<template>
  <div class="container">
    <div class="ranking">
      <h2 class="ranking-heading">
        <i class="fa fa-caret-down" aria-hidden="true"></i>
        실시간 전시 랭킹
      </h2>
        <ranking-item>
          <ul tag="ul" class="ranking-list" @click="showRanking">
            <li :key="index" v-for="(data, index) in rankingList" :class="{'is-active':active_index === index-1}" @click="nextItem" >
              <router-link :to="{ name: 'detail', params: { Id: data.id }}" tag="a" class="detail-link" >
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
    this.showRanking();
  },
  components: {
    RankingItem
  },
  data(){
    return {
      active_index : null,
      // items : this.$children
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
      // console.log('this.active_index',this.active_index)
      // console.log('this.rankingList',this.rankingList)
      // console.log('showcurrent')
    },
    showRanking(){
      setInterval(this.nextItem,3000);
      
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
    a
      text-decoration: none
      line-height: leading(1)
      padding: leading(1)/2
      color: #fff
      display: inline-block
      width: 100%
      .is-active  
        transform: translateY(-45px)
      &:hover
        background: #fff
        border: 2px solid #1e0b65
        color: #1e0b65
        font-weight: bold
          
</style>
