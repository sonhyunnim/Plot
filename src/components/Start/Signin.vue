<template>
  <div class="signin">
    <h2>로그인</h2>
    <form action="" class="login-page-form">
      <div class="signin-input-group">
        <label class="signin-email">
          <input class="input-email" type="email" value placeholder="이메일(example@gmail.com)" required v-model="user_input.email">
        </label>
        <label class="signin-pw">
          <input class="input-pw" type="password" value placeholder="비밀번호(6자이상)" minlength="6" maxlength ="20" required v-model="user_input.password">
        </label>
      </div>
    </form>
    <div class="signin-button-wrapper">
      <a href class="signin-link" @click.prevent="signinLink">로그인 하기</a>
      <a href class="signup-link" @click.prevent="signupLink">회원가입 하기</a> 
      <a href class="facebook-link" @click.prevent="facebookLink"><span class="fa fa-facebook-official" aria-hidden="true"></span><span class="facebook-login">페이스북으로 로그인</span></a>
    </div>
  </div>
</template>
  
<script>

export default {
 
  data() {
      return {
        user_input: {
          name: '',
          email: '',
          password: ''
        },
        datalist: []
      }
    },
    
  methods: {
    facebookLink: function(){
      this.$router.push({path: '/signin'});
    },
    signinLink: function(){
      this.$router.push({path: '/home'})
    },
    signupLink: function(){
      this.$router.push({path: '/signup'})
    }
   }
  
}
</script>
  
<style lang="sass" scoped>
  @import "~config"

  h2
    color: rgb(255,255,255)
    font-size: 2rem
    padding-top: leading(2)

  input
    display: block
    margin: 0 auto
    width: span(9)
    height: leading(2)
    margin-top: leading(1)
  
  .signin-button-wrapper
    margin-top: leading(6)

  .signin-link,.signup-link
    display: block
    border: 2px solid rgb(255, 255, 255)
    color: rgb(255, 255, 255)
    width: span(5)
    height: leading(2)
    margin: 20px auto
    text-decoration: none
    margin-bottom: leading(1)
    line-height: leading(2)
    background-color: rgb(30, 11, 101)

  .facebook-link
    color: rgb(255, 255, 255)
    text-decoration: none

  .fa-facebook-official
    padding-right: 1rem  
    font-size: 2rem 
      
    
    



  




  
  

</style>