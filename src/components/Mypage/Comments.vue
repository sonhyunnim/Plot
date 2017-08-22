<template>
  <h2>{{}}</h2>
</template>
<script>
export default {
  data() {
     return {


    }
  },
  created(){
    this.$http.get('https://plot-b2239.firebaseio.com/user/comments.json')
              .then(response => {
              })
  },
  computed: {
    mypageUser: function () {
      return this.$store.getters.getMypageUser
    }
  }
}
</script>
<style>


</style>