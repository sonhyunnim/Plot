<template>
  <div class="background">
    <navigation></navigation>
    <router-view></router-view>
    <footer-comp></footer-comp>
  </div>
</template>
<script>
import Navigation from './Navigation';
import FooterComp from './FooterComp';

export default {
  // beforeRouteEnter (to, from, next) {
  //   let token = sessionStorage.getItem('token');
  //   token && next();
  //   !token && next({name: 'start'});
  // },
  created(){
    this.$store.dispatch('likeList', 'https://plot-b2239.firebaseio.com/user.json');
    this.$store.dispatch('mypageUser', 'https://plot-b2239.firebaseio.com/user.json');
    this.$store.dispatch('commentList', 'https://plot-b2239.firebaseio.com/user/comments.json');
  },
  data() {
     return {

    }
  },
  components: {
    Navigation, FooterComp
  },
}
</script>
<style lang="sass">
  @import "~config"
  .background
    background-image: url(../../assets/images/bg_img.png)
    background-repeat: no-repeat
    background-size: 100%
    background-attachment: fixed
</style>