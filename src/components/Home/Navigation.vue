<!--Search -->
<template>
    <div id="navigation" :style="isScroll">
      <div class="header container">
        <router-link to="/home" active-class="activated" tag="a">
          <div class="logo">
            <img src="../../assets/images/logo.svg" alt="">
          </div>
        </router-link>
      
        <div class="menu">
          <ul>
            <li ><a href="#" @click.prevent="scrollCategory('app')">홈</a></li>
            <!-- <router-link to="/search" active-class="activated" tag="li" > -->
            <li>
              <form class="search-form">
                <i class="fa fa-search" @click="gotoSearch"></i>
                <label for="search" class="search-label">
                  <input
                  id="search"
                  type="text"
                  placeholder="Search"
                  class= "search-input"
                  :class= "{ active: isActive }"
                  @blur="closeSearch"
                  @focus.self="openSearch">
                </label>
              </form>
            </li>
            <li ><a href="#" @click.prevent="scrollCategory('category')">카테고리</a></li>
            <li ><a href="#" @click.prevent="scrollCategory('recommand')">추천</a></li>
            <router-link to="/mypage" active-class="activated" class="mypage" tag="li"> 
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
      isActive: false,
      isScroll: ''
    }
  },
  mounted(){
      let navHeight = document.getElementById('navigation').scrollHeight;
      window.onscroll = () => { 
        if(!this.isScroll && (window.scrollY > navHeight)){
          this.isScroll = {
                          background: '#fff',
                          boxShadow: 'rgba(0,0,0,0.2) 0 1px 3px'
                          }
        }
        else if(this.isScroll && (window.scrollY < navHeight)){
          this.isScroll = '';
        }
      }
  },
  methods: {
    gotoSearch(e){
      this.isActive === false ? this.isActive = true : this.isActive = false;
      
    },
    openSearch(){
      this.$router.push( {path: '/search'} )
    },
    closeSearch(){
      this.isActive = false
      this.$router.push( {path: '/home'} )
    },
    scrollCategory(id){
      let el = document.getElementById(id);
      el.scrollIntoView(true);
    }
  }
  
}
</script>
<style lang="sass" scoped>
  @import "~config"

  .container
    +container(1190px 12)
  #navigation
    position: sticky
    top: 0
    z-index: 2000
  .logo
    +span(2)
    height: leading(3)
    // background: #999
    img
      height: leading(2)
      margin-top: leading(1)/2
  .menu
    +span(last 5)
    margin-top: leading(1)/2
    height: leading(2)
    ul
      display: flex
      justify-content: space-around
      li
        line-height: leading(2)
        a
          font: bold 2rem "Noto Sans kr", sans-serif
          color: #1e0b65
          text-decoration: none
          line-height: leading(2)

  .search-form
    position: relative

  .search-input
    // background: skyblue
    display: none
    position: absolute
    top: leading(1)/2
    right: leading(1)
    height: 3rem
    border: 2px solid #1e0b65


  .active
    display: block
  .fa-search
    color: #1e0b65
    font-size: 2rem
    line-height: leading(2)
    
  .fa-user-circle-o
    line-height: leading(2)
    font-size: 3rem


</style>