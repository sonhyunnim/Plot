<template>
  <div class="category container">
    <h2 class="cg-heading container">카테고리</h2>
    <ul class="container">
      <li class="cg-list"><a href="">장르별</a></li>
      <li class="cg-list"><a href="">지역별</a></li>
      <li class="cg-list"><a href="">날짜별</a></li>
      <li class="cg-sort"><a href="">추천순</a></li>
    </ul>
    <ul class="cg-items container">
      <router-link to="/detail"  class="active" active-class="activated"  tag="li"> 
          <a href><img src="../../assets/images/poster01.gif" alt=""></a>
      </router-link>
      <router-link to="/detail"  class="active" active-class="activated"  tag="li"> 
          <a href><img src="../../assets/images/poster02.gif" alt=""></a>
      </router-link>
      <router-link to="/detail"  class="active" active-class="activated"  tag="li"> 
          <a href><img src="../../assets/images/poster03.gif" alt=""></a>
      </router-link>
      <router-link to="/detail"  class="active" active-class="activated"  tag="li"> 
          <a href><img src="../../assets/images/poster04.gif" alt=""></a>
      </router-link>
      <router-link to="/detail"  class="active" active-class="activated"  tag="li"> 
          <a href><img src="../../assets/images/poster02.gif" alt=""></a>
      </router-link>
      <router-link to="/detail"  class="active" active-class="activated"  tag="li"> 
          <a href><img src="../../assets/images/poster01.gif" alt=""></a>
      </router-link>
      <router-link to="/detail"  class="active" active-class="activated"  tag="li"> 
          <a href><img src="../../assets/images/poster02.gif" alt=""></a>
      </router-link>
      <router-link to="/detail"  class="active" active-class="activated"  tag="li"> 
          <a href><img src="../../assets/images/poster03.gif" alt=""></a>
      </router-link>
      <router-link to="/detail"  class="active" active-class="activated"  tag="li"> 
          <a href><img src="../../assets/images/poster04.gif" alt=""></a>
      </router-link>
      <router-link to="/detail"  class="active" active-class="activated"  tag="li"> 
          <a href><img src="../../assets/images/poster02.gif" alt=""></a>
      </router-link>
    </ul>
    <div class="more"><a href="">더보기</a></div>
  </div>
</template>
<script>
export default {
  data() {
     return {


    }
  }
}
</script>
<style lang="sass" scoped>
  @import "~config"
  
  .container
    +container(1190px 12)
    // +global-box-sizing(border-box)

  .category
    // background: blue
    margin-top: leading(2)
  .cg-heading
    background: #1e0b65
    color: #fff
    font: bold 2rem "Noto Sans kr", sans-serif
    +span(2)
    line-height: leading(2)
    height: leading(2)
    margin-right: span(10)
  .cg-list, .more
    a
      +span(2)
      line-height: leading(2)
      color: #1e0b65
      border: 2px solid #1e0b65
      box-sizing: border-box
      height: leading(2)
      margin-top: leading(2)
      text-decoration: none
      font: bold 2rem "Noto Sans kr", sans-serif
  .more a
    +push(5)
  .cg-sort
    a
      +span(2 last)
      line-height: leading(2)
      color: #1e0b65
      border: 2px solid #1e0b65
      height: leading(2)
      margin-top: leading(2)
      text-decoration: none
      font: bold 2rem "Noto Sans kr", sans-serif
  .cg-items
    +container(10 nest)
    li
      +span(2 of 10 .15)
      // height: auto
      background: #1e0b65
      // border: 2px solid #fff
      margin-top: leading(2)
      position: relative
      overflow: hidden
      padding-top: 30%
      img
        position: absolute
        width: auto
        height: 85%
        top: 0
        left: 50%
        transform: translateX(-50%)

</style>
