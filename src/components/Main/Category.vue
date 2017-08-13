<template>
  <div class="container" v-cloak>
    <h2 class="cg-heading container">카테고리</h2>
    <div class="container">
      <div class="category" :key="index" v-for="(list, index) in cg_lists">
        <i class="fa fa-caret-down" aria-hidden="true"></i>
        <h2 class="cg-list-heading">
          <a href="" @click.prevent="toggleList(list, $event)">{{list.heading}}</a>
        </h2>
        <ul v-if="list.items" class="cg-list" :class="{'active' : cg_lists[index] === isActive }">
          <li>
             <a href="" @click.prevent="filterItem(index, $event)" :key="i" v-for="(item, i) in list.items">{{item}}</a> 
          </li>
        </ul>
        <input v-if="!list.items" @click="changeText(index, $event)" class="cg-list" :class="{'active' : cg_lists[index] === isActive }" type="date">
      </div>
    </div>

    <ul class="cg-items container">
      <li :key="index" v-for="(data, index) in initList">
        <img  :src="data.poster_img" alt="전시 포스터 이미지">
        <div class="action-wrapper">
          <router-link to="/detail" tag="a" class="detail-link"></router-link>
          <div class="action-info">
            <div class="display-title">{{data.title}}</div>
            <div class="rating">
              <i class="fa fa-star rating-number1" aria-hidden="true"></i>
              <i class="fa fa-star rating-number2" aria-hidden="true"></i>
              <i class="fa fa-star rating-number3" aria-hidden="true"></i>
              <i class="fa fa-star rating-number4" aria-hidden="true"></i>
              <i class="fa fa-star rating-number5" aria-hidden="true"></i>
            </div>
            <div class="wish-comment">
              <div class="wish">
                <i class="fa fa-heart" aria-hidden="true"></i>
                <a href="">보고싶어요</a>
              </div>
              <div class="comment"><a href="">코멘트쓰기</a></div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <span class="more container"><a href="">더보기</a></span>
  </div>
</template>
<script>

export default {
  computed: {
    initList: function () {
      console.log(this.$store.getters.getList);
      this.$store.getters.getList.push(this.datalist)
      return this.$store.getters.getList
    }
  },
  data() {
    return {
      date: '',
      isActive: '',
      datalist: [],
      cg_lists: [
        {
          heading: '장르별',
          items: ['모든 장르', '미술', '사진', '영상', '공예', '조각', '설치', '기타']
        },
        {
          heading: '지역별',
          items: ['모든 지역', '서울', '인천', '대전', '대구', '울산', '광주', '부산', '경기도', '강원도', '충청도', '경상도', '전라도', '제주도']
        },
        {
          heading: '날짜별'
        },
        {
          heading: '추천순',
          items: ['추천순', '인기순']
        }
      ]
    }
  },
  methods: {
    toggleList(list, e){
      this.isActive === list ? this.isActive = '' : this.isActive = list
      // console.log(list.heading === '날짜별');
    },
    filterItem(index, e){
      console.log(e.target);
      console.log(index);
      let el = e.target
      this.cg_lists[index].heading = el.textContent
      this.isActive = ''
    },
    changeText(index, e){
      console.log(e.target.value);
      if (e.target.value) {
        this.cg_lists[index].heading = e.target.value
      }
    },
    resetList(){
      this.isActive = ''
    }
  }
  }
</script>
<style lang="sass" scoped>
  @import "~config"
  
  .container
    +container(1190px 12)
    // +global-box-sizing(border-box)
  [v-cloak]
    display: none

  .cg-heading
    margin-top: leading(2)
    padding-left: leading(1)/4
    background: #1e0b65
    color: #fff
    font: bold 2rem "Noto Sans kr", sans-serif
    +span(2)
    line-height: leading(2)
    height: leading(2)
    margin-right: span(10)

  .category
    +span(2)
    margin-top: leading(2)
    position: relative
    background: red
    
  .cg-list-heading, .cg-list, .cg-sort-heading, .cg-sort
    border: 2px solid #1e0b65
    a
      padding-top: leading(1)/4
      padding-left: leading(1)/4
      color: #1e0b65
      display: block
      text-decoration: none
      font: bold 2rem "Noto Sans kr", sans-serif
      
  .cg-list-heading, .cg-sort-heading
    height: leading(2)

  .cg-list, .cg-sort
    display: none
    max-height: leading(7)
    overflow: scroll
    border-top: none
    background: #fff
    position: absolute
    width: 100%
    top: leading(2)
    z-index: 1000
  .active
    display: block

  .cg-items
    +span(12 of 12 nest)
    margin-bottom: leading(2)
    li
      +span(2 of 10 .17)
      background: #1e0b65
      margin-top: leading(2)
      position: relative
      overflow: hidden
      padding-top: 27%
      border-radius: 3px
      &:hover .action-wrapper
        opacity: 1
      img
        position: absolute
        width: auto
        height: 100%
        top: 0
        left: 50%
        transform: translateX(-50%)
  .action-wrapper
    position: absolute
    bottom: 0
    width: 100%
    height: 100%
    opacity: 0
  .detail-link
    display: block
    background: black
    opacity: 0.5
    width: 100%
    height: 50%
  .action-info
    background: #fff
    height: 50%
  .fa-star
    color: #666
    &:hover
      color: yellow
  .more
    display: inlineblock
    padding-top: leading(2)
    background: blue
    a
      +span(2)
      +push(5)
      border: 2px solid #1e0b65
      height: leading(2)
      line-height: leading(2)
      padding-top: leading(1)/4
      padding-left: leading(1)/4
      color: #1e0b65
      text-decoration: none
      font: bold 2rem "Noto Sans kr", sans-serif
</style>
