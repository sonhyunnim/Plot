<!--Search -->
<template>
  <div>
    <div class="header container">
      <div class="logo">
        <img src="../../assets/images/logo.svg" alt="">
      </div>
    
      <div class="menu">
        <ul>
          <router-link to="/" active-class="activated"  tag="li"> 
          <a href>홈</a>
          </router-link>
          <router-link to="/search" active-class="activated" tag="li" >
            <form class="form">
              <label for="search">
                <input 
                id="search-input"
                type="text"
                placeholder="Search"
                :class="{ active: isActive }"
                @blur="isActive = false">
                <i 
                class="fa fa-search" 
                @click.self="gotoSearch"
                 ></i>
              </label>
            </form>   
          </router-link>
          <router-link to="/" active-class="activated"  tag="li"> 
            <a href>카테고리</a>
          </router-link>
          <router-link to="/" active-class="activated"  tag="li"> 
            <a href>추천</a>
          </router-link>
          <router-link to="/mypage" active-class="activated" class="mypage"  tag="li"> 
            <a href><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

// import Search from './Search'
export default {
  data() {
     return {
     isActive: false
    }
  },
  components: {
    // Search
  },
  methods: {
    gotoSearch(){
      this.$router.push( {path: '/search'} )

    }
  }
  
}
</script>
<style lang="sass" scoped>
  @import "~config"

  .container
    +container(1190px 12)
  .logo
    +span(3)
    height: leading(4)
    // background: #999
    img
      height: leading(2)
      margin-top: leading(1)
      // width: 200%
  .menu
    +span(last 5)
    margin-top: leading(1)
    height: leading(2)
    ul
      display: flex
      justify-content: space-between
      li
        line-height: leading(2)
        a
          font: bold 2rem "Noto Sans kr", sans-serif
          color: #1e0b65
          text-decoration: none
          line-height: leading(2)

  input 
    // display: none
  .active
    display: block
  .fa-user-circle-o
    line-height: leading(2)
    font-size: 3rem

</style>