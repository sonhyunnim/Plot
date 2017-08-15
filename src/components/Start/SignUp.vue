<template>
  <div class="signup">
    <h2>회원가입</h2>
    <form action="" class="login-page-form">
      <div class="signup-input-group">
        <label class="signup-name">
          <input class="input-name" type="text" placeholder="이름(홍길동)" required> 
        </label>
        <label class="signup-email">
            <input class="input-email" type="email" value placeholder="이메일(example@gmail.com)" required>
        </label>
        <label class="signup-pw">
          <input class="input-pw" type="password" placeholder="비밀번호(6자이상)" minlength="6" maxlength ="20" required>
        </label>
      </div>

      <!-- <div class="signup-link">
            <button class="signup-submit" type="submit">가입하기</button>
      </div> -->
    <div class="signup-agreememt">
      <!--플롯 사이트 서비스에 관한 동의 요구 -->
      <div class="signup-agreememt-item">
        <input id="signup-service-agreememt" type="checkbox">
          <label class="signup-agreement-label" for="signup-agreement" >
            <a class="signup-agreement-link" href="#">플롯 서비스 이용약관</a>
            <span>에 동의합니다.</span>
          </label>
      </div>
      <!--개인정보 수집 이용에 관한 동의 요구-->
      <div class="signup-agreememt-item">
        <input id="signup-privacy-agreememt" type="checkbox">
          <label class="signup-agreement-label" for="signup-agreement" >
            <a class="signup-agreement-link" href="#">개인정보 수집 이용</a>
            <span>에 동의합니다.</span>
          </label>
      </div>
    </div>
    
    <div class="signup-button-wrapper">
      
      <button 
      class="signup-link" 
      type="submit"
      @click="onConfirm">가입하기</button>
      <!-- <a href class="signup-link" @click.prevent="signupLink">가입하기</a>  -->
      <a href class="signin-link" @click.prevent="signinLink">로그인</a>
      <a href class="facebook-link" @click.prevent="facebookLink"><span class="fa fa-facebook-official" aria-hidden="true"></span><span class="facebook-login">페이스북으로 로그인</span></a>
    </div>
    </form>
  </div>
</template>
  
<script>

export default {
   beforeRouteUpdate (to, from, next) {
    if( this.is_confirm ) {
      next();
    } 
      
       next();
    },
 
  data() {
      return {
        user_input: {
          name: '',
          email: '',
          password: ''
        },
        datalist: [],
        is_confirm: false
      }
    },
  methods: {
    facebookLink: function(){
      this.$router.push({path: '/'});
    },
    signinLink: function(){
      this.$router.push({path: '/signin'})
    },
    signupLink: function(){
      this.$router.push({path: '/signup'})
    },
    onConfirm() {
      this.is_confirm = true;
    }
   }
  
}
</script>
  
<style lang="sass" scoped>
  @import "~config"
  
  h2
    color: rgb(255,255,255)  
    font-size: 2rem
    padding-top: leading(3)

  .input-name,.input-email,.input-pw
    display: block
    margin: 0 auto
    width: span(9)
    height: leading(2)
    margin-top: leading(1)
    
  .signup-agreememt
    color: rgb(255, 255, 255)
    margin-top: leading(1)
    text-align: justify
  
  .signup-agreememt-item
    margin-left: span(3)
    margin-bottom: 1rem
  .signup-agreement-link
    text-decoration: none  
    color: rgb(255, 255, 255)  
    font-weight: strong
    &:hover
      text-decoration: underline
  .signup-button-wrapper
    margin-top: leading(1)

  .signin-link,.signup-link
    display: block
    border: 2px solid rgb(255, 255, 255)
    color: rgb(255, 255, 255)
    width: span(5)
    height: leading(2)
    margin: 20px auto
    text-decoration: none
    line-height: leading(2)
    background-color: rgb(30, 11, 101)

  .facebook-link
    color: rgb(255, 255, 255)
    text-decoration: none
    &:hover
      text-decoration: underline

  .fa-facebook-official
    padding-right: 1rem  
    font-size: 2rem 
      
    
    



  




  
  

</style>