<template>
  <div class="container">
    <ul class="cg-items container">
      <li :key="index" v-for="(data, index) in filterList">
        <img  :src="data.poster_img" alt="전시 포스터 이미지">
        <div class="action-wrapper">
          <router-link :to="{ name: 'detail', params: { Id: data.id }}" tag="a" class="detail-link"></router-link>
          <div class="action-info">
            <div class="display-title">{{data.title}}</div>
            <div class="rating">
              <i class="fa fa-star rating-number1" :class="{'hover': index === isHover}" aria-hidden="true"
                @mouseenter="mouseEnter(index, $event)">
              </i>
              <i class="fa fa-star rating-number2" :class="{'hover': index === isHover}" aria-hidden="true"
                @mouseenter="mouseEnter(index, 2)">
              </i>
              <i class="fa fa-star rating-number3" :class="{'hover': index === isHover}" aria-hidden="true"
                @mouseenter="mouseEnter(index, 3)">
              </i>
              <i class="fa fa-star rating-number4" :class="{'hover': index === isHover}" aria-hidden="true"
                @mouseenter="mouseEnter(index, 4)">
              </i>
              <i class="fa fa-star rating-number5" :class="{'hover': index === isHover}" aria-hidden="true"
                @mouseenter="mouseEnter(index, 5)">
              </i>
            </div>
            <div class="wish-comment">
              <div class="wish">
                <i class="fa fa-heart" aria-hidden="true"></i>
                <a href="" @click.prevent="wishCount(index, $event)">보고싶어요</a>
              </div>
              <div class="comment">
                <i class="fa fa-comment" aria-hidden="true"></i>
                <a href="#" @click.prevent="openModal(data.id)">코멘트쓰기</a>
              </div>
              <comment-modal v-if="commentModal===data.id"></comment-modal>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <span class="more container"><a href="">더보기</a></span>
  </div>
</template>
  
<script>
import CommentModal from './CommentModal'

export default {
  data() {
    return {
      isActive: [],
      isHover: ''
    }
  },
  components: {
    CommentModal
  },
  computed: {
    filterList: function () {
      return this.$store.getters.getFilter
    },
    commentModal: function () {
      return this.$store.getters.getCommentModal
    }
  },
  methods: {
    openModal(index){
      // console.log(index);
      this.$store.commit('setCommentModal', index)
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    },
    wishCount(index, e){
      e.target.style.color = "#ff5539";
      e.target.parentNode.firstChild.style.color = "#ff5539";

      this.$http.get('https://plot-b2239.firebaseio.com/user/like.json')
                .then(response => {
                  response.data.push(index);
                  this.$http.put('https://plot-b2239.firebaseio.com/user/like.json', response.data)
                  .then(response => {
                    window.alert('"보고싶어요"에 추가되었습니다.')
                    this.$store.commit('likeList', response.data);
                  })
                })
                .catch(error => console.log(error.message));
    },
    mouseEnter(index, e){
      console.log(index, e.target);
      // this.isHover = index;
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
    text-align: center
    padding: leading(1)/2
    font: 1.4rem "Noto Sans kr", sans-serif

  .display-title
    padding-bottom: leading(1)/2
    border-bottom: 1px solid #999
  .rating
    margin-top: leading(1)
  .wish-comment
    margin-top: leading(1)
    display: flex
    justify-content: space-around
    a
      color: #333
      text-decoration: none
      &.active
        color: #ff5539
    i
      &.active
        color: #ff5539
  .wish:hover a, .wish:hover .fa-heart
    color: #ff5539
  
  .comment:hover a, .comment:hover .fa-comment
    color: #5d5df6
  .fa-star
    color: #999
    font-size: 2.5rem
  .hover
    color: rgb(255, 205, 26)
  .fa-heart, .fa-comment
    color: #999

  .more
    padding-top: leading(2)
    text-align: center
    a
      +span(2)
      +push(5)
      border: 2px solid #1e0b65
      height: leading(2)
      line-height: leading(2)
      padding-top: leading(1)/4
      color: #1e0b65
      text-decoration: none
      font: bold 2rem "Noto Sans kr", sans-serif

</style>