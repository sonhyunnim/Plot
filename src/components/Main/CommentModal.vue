<template>
  <div class="modal">
    <div class="modal-background" @click.self="closeModal">
      <div class="modal-content">
        <div class="comment-header">
          <h2 class="display-heading">{{displayHeading}}</h2>
          <button class="modal-close" @click="closeModal">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div class="comment-body">
          <div class="display-poster">
            <img :src="displayPoster">
          </div>
          <textarea v-model.lazy="comment" class="display-comment" placeholder="이 전시에 대한 생각을 자유롭게 적어주세요"></textarea>
        </div>
        <div class="comment-footer">
          <button class="save-comment" @click="saveComment($event)">후기 등록</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      comment: '',
      index: this.$store.getters.getCommentModal
    }
  },
  computed:{
    displayHeading: function () {
      return this.$store.getters.getList[this.index].title;
    },
    displayPoster: function () {
      return this.$store.getters.getList[this.index].poster_img;
    },
  },
  methods: {
    closeModal(){
      this.$store.commit('setCommentModal', false);
      document.getElementsByTagName("body")[0].style.overflow = "";
    },
    saveComment(e){
      // this.$http.post('https://plot-b2239.firebaseio.com/user/comments.json', {
      //             "id": this.index,
      //             "comment": this.comment
      //           }).then(response => {
      //             window.alert('전시후기가 등록되었습니다.')
      //             console.log(response.data);
      //           })
      this.closeModal();
    }
  }
}
</script>
  
<style lang="sass" scoped>
  @import "~config"
  .modal
    position: fixed
    bottom: 0
    left: 0
    right: 0
    top: 0
    z-index: 2000
  .modal-background
    bottom: 0
    left: 0
    position: absolute
    right: 0
    top: 0
    background-color: rgba(10,10,10,.45)
    // overflow: hidden
  .modal-content
    width: 620px
    height: 45%
    position: relative
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    background: #fff
    border-radius: 5px
  .comment-header
    border-bottom: 2px solid #999
    padding: leading(1)
    font: bold 1.6rem "Noto Sans kr", sans-serif
  .comment-body
    display: flex
    padding: leading(1)
    justify-content: space-between
  .display-poster
    position: relative
    overflow: hidden
    padding-top: 27%
    border: 2px solid #999
    margin-right: leading(1)
    width: 27%
    img
      position: absolute
      width: auto
      height: 100%
      top: 0
      left: 50%
      transform: translateX(-50%)
  .display-comment
    width: 100%
  .modal-close
    position: absolute
    top: leading(1)/2
    right: leading(1)/2
    border: none
    background: #fff
    i
      font-size: 2rem
      color: #999
  .comment-footer
    background: #999

  .save-comment
    position: absolute
    bottom: leading(1)
    right: leading(1)
    background: #ffcd1a
    padding: leading(1)/2
    border: none
    border-radius: 5px
    color: #666
    font: bold 1.4rem "Noto Sans kr", sans-serif
</style>