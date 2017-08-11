<template>
  <div class="container">
    <!--그리드  -->
    <!-- <div class="category ">
        <div class="cg-heading "></div> 
    </div> -->
    <!--LoginPage  -->
    <div class="login-page-warpper">
      <!--로그인페이지 컨텐츠-->
        <div class="login-page-center">
          <!--컨텐츠 로고 -->
          <div class="logo">
              <img src="../../assets/images/logo_w.svg" alt="plot 홈페이지 로고">  
             <!-- <h2></h2> -->
          </div>
          <form action="" class="login-page-form">
            <div class="login-page-input-group">
                <div class="login-input-list">
                  <label class="login-input">
                    <input class="input-email" type="email" value placeholder="이메일(example@gmail.com)" required v-model="user_input.email">
                  </label>
                  <label class="login-input">
                    <input class="input-pw" type="password" value placeholder="비밀번호(6자이상)" minlength="6" maxlength ="20" required v-model="user_input.password">
                  </label>
                </div>
                <div class="login-btn">
                  <button class="login-page-btn" type="submit" @click.prevent="submitData">로그인</button>
                </div>
            </div>
          </form>
          <div class="login-button-warpper">
            <a href class="login-join-link" @click="joinLink"><span class="join">회원가입 하기</span></a> 
            <a href class="login-facebook-link" @click.prevent="facebookLink"><span class="fa fa-facebook-official" aria-hidden="true"></span><span class="facebook-login">페이스북으로 로그인</span></a>
          </div>
        </div>
    </div>
  </div>
</template>
  
<script>
  // 이메일 검증 
  // var emailRegex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  // //비밀번호 검증 : 특수문자 / 문자 / 숫자 포함 형태의 6~20자리 이내의 암호 정규식
  // var pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/;


  export default {
    // 들어가는 데이터
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
    computed: {
      validation: function () {
        return {
          email: emailRegex.test(this.user_input.email),
          password: pwRegex.test(this.user_input.password)
        }
      }
    },
    methods: {
      submitData() {
        // console.log(this.user_input);
        // VueResource === this.$http
        // 데이터 저장
        // this.$http.post('https://vue-http-e614e.firebaseio.com/users.json', this.user_input)
        //           .then((response)=> { console.log(response)})
        //           .catch((error)=> { console.log(error.message)});
        this.$router.push({path: '/home'});
      },
      fetchData() { // 파이어베이스로부터 데이터를 가져오는 역할
        this.$http.get('https://vue-http-e614e.firebaseio.com/users.json')
                  .then((response)=> { return response.json(); }) // .json파일로 데이터를 가져와서
                  .then((data)=> { 
                    this.datalist = Object.values(data); //values값만 빼옴. key값은 필요없어서.
                  })
                  .catch((error)=> { console.log(error.message) });
      },    
      joinLink: function() {
        this.$router.push({path: '/signup'});
      },
      facebookLink: function() {
        this.$router.push({path: '/home'});
      }
    }
  }
</script>
  
<style lang="sass" scoped>
  @import "~config"
  // .page
  //   // background: url('../assets/images/bg_img.png') no-repeat
  //   // background-position: 50px 0
  //   background-size: 100%
  .container
    +container(1190px 12)
    height: 100vh
  .category
    // background: blue
    // margin-top: leading(2)
  // .cg-heading
    // background: #999
    // +span(2)
    // height: leading(2)
    // margin-right: span(10)

  //
  .login-page-warpper
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    
  .login-page-center 
    width: 373px
    height: 504px
    box-shadow: 0 3px 59px 0 rgba(0, 0, 0, 0.5)
    background: url('../../assets/images/b_g.png') no-repeat
    
  .logo
    height: leading(8)
    // display: flex
    img
      width: 180px
      height: 40px
      margin-top: leading(2)
      padding-left: span(3.37)

  .login-page-input-group
    height: leading(11)
    padding-left: span(1.5)

  .input-email
    width: 285px
    height: 37px
    margin-bottom: span(0.9)
    // margin-top: leading(1)
    font-family: NotoSansKR
    font-size: 16px
    // line-height: 2.25;
    // color: #666666;
    
  .input-pw
    width: 285px
    height: 37px
    font-family: NotoSansKR
    font-size: 16px
  
  .login-page-btn
    color: #ffffff
    width: 177px
    height: 42px
    background-color: #1e0b65
    border: solid 2px #ffffff
    // display: inline-block
    text-align: center
    margin-top: leading(4)
    // margin-bottom: leading(-0.1)
  
  // 로그인 버튼
  .login-btn
    width: 42px
    height: 16px
    font-family: NotoSansKR
    font-size: 16px
    // font-weight: bold
    text-align: center
    padding-left: span(2.3)
   
  .login-button-warpper
    padding-left: span(3.37)

  .login-join-link
    width: 172px
    height: 41px
    background-color: #1e0b65
    border: solid 2px #ffffff
    display: inline-block
    text-align: center
    margin-top: leading(1)
    text-decoration: none

  .join 
    width: 42px
    height: 14pxs
    font-family: NotoSansKR
    font-size: 16px
    // font-weight: bold
    color: #ffffff
    line-height: 2.5
    
  .login-facebook-link
    width: 172px
    height: 41px
    // background-color: #1e0b65
    // border: solid 2px #ffffff
    display: inline-block
    text-align: center
    color: #ffffff
    text-decoration: none
    // margin-top: leading(1)

  .facebook-login
    width: 112px
    height: 20px
    font-family: NotoSansKR
    font-size: 12px
    line-height: 3
    padding-left: span(0.5)

  //
</style>