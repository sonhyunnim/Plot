<!--Ranking Carousel --> 
<template>
  <div class="container">
    <div class="ranking">
      <ul class="ranking-list">
        <li><a href="#">1. 픽사 애니메이션 30주년 특별전</a></li>
        <li><a href="#">2. 이상한 나라의 앨리스</a></li>
        <li><a href="#">3. 어둠속의 대화</a></li>
        <li><a href="#">4. 즐거운 나의 집</a></li>
        <li><a href="#">5. 라이프 사진전</a></li>
      </ul>
    </div>
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

  .ranking
    margin-top: leading(2)
    height: leading(2)
    +span(4 last)
    &:hover .ranking-list
      height: leading(10)
  .ranking-list
    // width: 100%
    background: #1e0b65
    color: #fff
    font: bold 2rem "Noto Sans kr", sans-serif
    position: absolute
    overflow: hidden
    height: leading(2)
    a
      text-decoration: none
      line-height: leading(2)
      padding-left: leading(1)/2
      color: #fff
</style>
