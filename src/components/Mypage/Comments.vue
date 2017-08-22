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
    console.log(this.$store.getters.getCommentList);
  },
  computed: {
    commentList: function () {
      return this.$store.getters.getCommentList
    }
  }
}
</script>
<style>


</style>