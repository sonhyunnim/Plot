<template>
  <div class="mypage">
    <div class="user-info container">
      <div class="user">
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        <span class="user-name">유저 이름</span>
      </div>
      <div class="user-display-count">
        <span class="display-count">
          <i class="fa fa-eye" aria-hidden="true">21</i>
        </span>
        <span class="user-display">내가 본 전시</span>
      </div>
      <div class="user-like-count">
        <span class="display-count">
          <i class="fa fa-heart" aria-hidden="true">14</i>
        </span>
        <span class="user-display">좋아요 수</span>
      </div>
    </div>
    <div class="mypage-display">
      <div class="mypage-display-bg">
        <ul class="mypage-display-list container">
          <li>
            <router-link to="/mypage" active-class="activated" tag="a">
              보고싶어요
            </router-link>
          </li>
          <li>
            <router-link to="/mypage/display" active-class="activated" tag="a"> 
              봤어요
            </router-link>
          </li>
          <li>
            <router-link to="/mypage/comments" active-class="activated"  tag="a"> 
              코멘트
            </router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
     return {
    }
  },
  components: {
  }
}
</script>
<style lang="sass" scoped>
  @import "~config"
  .container
    +container(960px 8)
  .user-info
    // background: red
    height: leading(10)
    text-align: center
  .mypage-display
    background: #e5e5e5
  .mypage-display-bg
    background: #F0F0F0
    height: leading(2)
    box-shadow: rgba(0,0,0,0.2) 0 1px 2px

  .mypage-display-list
    display: flex
    li
      +span(1 of 8)
      line-height: leading(2)
      a
        text-decoration: none


</style>