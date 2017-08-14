<template>
  <div class="container">
    <div class="start-content">
      <img class="logo" src="../../assets/images/logo_w.svg" alt="plot 홈페이지 로고"> 
      <span class="service-msg">플롯은 나만의 전시공간 서비스입니다.</span>
      <div class="start-button-wrapper">
        <a href class="facebook-link" @click.prevent="facebookLink"><i class="fa fa-facebook" aria-hidden="true"></i>페이스북 로그인</a>
        <a href class="login-link" @click.prevent="signinLink">로그인</a>
        <a href class="join-link" @click.prevent="signupLink">회원가입</a> 
      </div>
    </div>
  </div>
</template>
  
<script>

export default {
  methods: {
    facebookLink: function(){
      this.$router.push({path: '/'});
    },
    signinLink: function(){
      this.$router.push({path: '/signin'})
    },
    signupLink: function(){
      this.$router.push({path: '/signup'})
    }
   }
  
}
</script>
  
<style lang="sass" scoped>
  @import "~config"
  .container
    +container(1190px 12)
    height: 100vh
  .start-content
    position: relative
    margin: 0 auto
    margin-top: leading(5)
    background: url('../../assets/images/b_g.png') no-repeat
    background-position: center
    width: 373px
    height: 500px
    text-align: center
    box-shadow: 0px 3px 59px 0px rgba(0, 0, 0, 0.5)
  


  .logo
    width: 150px
    padding-top: leading(2)

  .start-button-wrapper
    text-align: center  
  a
    display: block
    border: 2px solid rgb(255, 255, 255)
    width: 175px
    height: leading(2)
    margin: 20px auto
    text-decoration: none
    margin-bottom: leading(1)
    color: #fff
    line-height: leading(2)
  .service-msg
    display: block
    padding-top: leading(6)
    padding-bottom: leading(1)
    color: #fff
  .facebook-link
    background-color: rgb(73, 105, 240)
  .fa-facebook
    padding-right: 10px  
    font-size: 20px
    
  .login-link,.join-link  
    background-color: rgb(30, 11, 101)
    
    
    

  
  

    
    


  



    
    
   
    
    
    
  




  
  

</style>