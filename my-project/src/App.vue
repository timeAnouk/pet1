<template>
  <div id="app">
    <div id="loginIn" v-if="seenLogin">
      <!-- navbar-1.vue -->
      <b-navbar toggleable="md" class="b-navbar nav-bg" type="dark" variant="info">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">宠小格</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
          <!--<b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>-->

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto" right>
            <b-navbar-nav>
              <b-nav-item href="#">猫狗发源地</b-nav-item>
              <b-nav-item v-on:click="loginOut">注销</b-nav-item>
            </b-navbar-nav>

            <!--<b-nav-form></b-nav-form>-->

            <!--<b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>-->

            <!--<b-nav-item-dropdown right>-->
            <!-- Using button-content slot -->
            <!--<template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>-->
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
      <!-- navbar-1.vue -->
      <SideBar></SideBar>
      <div class="container-fluid">
        <div class="row flex-xl-nowrap">
          <!--sidebar-->
          <div class="side-left col-12 col-md-2 col-xl-2"></div>
          <!--sidebar-->
          <!--content-->
          <div class="col-12 col-md-10">
            <router-view></router-view>
          </div>
          <!--content-->
        </div>
      </div>
    </div>
    <div id="loginPage" v-if="!seenLogin">
      <div id="loginBlock" v-if="loginCmd==='login'" class="column">
        <div class="col-sm divInput">
          <input  class="txtInput" type="text" v-model="userName" placeholder="登录名称"/>
        </div>
        <div class="col-sm divInput">
          <input  class="txtInput" type="password" v-model="pwd" placeholder="登录密码"/>
        </div>
        <div class="col-sm divInput">
          <label v-on:click="forgetAction">忘记密码？</label>
          <input type="checkbox" id="autoLogin" v-model="autoLoginMark"/>
          <label >自动登录</label>
        </div>
        <div class="col-sm divInput">
          <b-button v-on:click="loginAction">登录</b-button>
          <b-button v-on:click="registerAction">注册</b-button>
        </div>
      </div>
      <div id="forgetBlock" v-else-if="loginCmd==='forget'" class="column">
        <div class="col-sm divInput">
          <input  class="txtInput" type="text" v-model="forgetPhone" placeholder="手机号码"/>
        </div>
        <div class="col-sm divInput">
          <input  class="txtInput" type="password" v-model="forgetNewPwd" placeholder="新密码"/>
        </div>
        <div class="col-sm divInput">
          <input  class="txtInput" type="password" v-model="forgetRPwd" placeholder="再次确认密码"/>
        </div>
        <div class="col-sm divInput">
          <input  type="text" class="verifyInput" v-model="forgetVerify" placeholder="验证码"/>
          <b-button id="verifyBtn" v-on:click="sendVerify" >验证码</b-button>
        </div>
        <div class="col-sm divInput">
          <b-button v-on:click="returnLogin">返回登录</b-button>
          <b-button v-on:click="forgetLogin">使用新密码登录</b-button>
        </div>
      </div>
      <div id="registerBlock" v-else-if="loginCmd==='register'" class="column">
        <div class="col-sm divInput">
          <input  class="txtInput" v-model="registerPhone" type="text" placeholder="手机号码"/>
        </div>
        <div class="col-sm divInput">
          <input  class="txtInput" v-model="registerUserName" type="password" placeholder="用户名称"/>
        </div>
        <div class="col-sm divInput">
          <input  class="txtInput" v-model="registerPwd" type="password" placeholder="密码"/>
        </div>
        <div class="col-sm divInput">
          <input  class="txtInput" v-model="registerRPwd" type="password" placeholder="再次确认密码"/>
        </div>
        <div class="col-sm divInput">
          <input  class="txtInput" v-model="registerShop" type="text" placeholder="店名"/>
        </div>
        <div class="col-sm divInput">
          <input type="checkbox"v-model="contractTag"/>
          <label v-on:click="checkContract">
            同意宠小格服务协议和隐私条款
          </label>
        </div>
        <b-button v-on:click="returnLogin">返回登录</b-button>
        <b-button v-on:click="registerLogin">注册</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import SideBar from "./components/SideBar";

export default {
  name: 'app',
  components: {SideBar},
  data: function () {
    let data = {
      //登录输密码页面
      loginCmd: "login",
      //进入登录状态
      seenLogin: false,
      userName:'',
      pwd:'',
      autoLoginMark:false,
      forgetPhone:'',
      forgetNewPwd:'',
      forgetRPwd:'',
      forgetVerify:'',
      registerPhone:'',
      registerUserName:'',
      registerPwd:'',
      registerRPwd:'',
      registerShop:'',
      contractTag:false,

    };
    return data;
  },
  methods:{
    loginAction(){
      console.log("userName ->"+this.userName+"; pwd->"+this.pwd);
      if(!this.userName||!this.pwd){
        alert("您未填写用户名或密码！");
        return;
      }
      if(this.userName=="1234"&this.pwd=="1234"){
        this.seenLogin=true;
      }else{
        alert("您填写用户名或密码不正确！");
        return;
      }
      /*Vue.axios.get("http://localhost:8080?name=tom&age=23").then((response) => {
        console.log(response.data)
      })*/
    },
    forgetLogin(){
      if(!this.forgetPhone||!this.forgetNewPwd||!this.forgetRPwd||!this.forgetVerify){
        alert("请确认信息已填写完整");
        return;
      }
      if(this.forgetNewPwd!=this.forgetRPwd){
        alert("两次输入密码不一致，请重新填写");
        return;
      }
      this.seenLogin=true;
      this.loginCmd='login';
    },
    sendVerify(){
      if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.forgetPhone))){
        alert("不是完整的11位手机号");
        return;
      }else{
        var obj = $("#verifyBtn");
        var countdown=60;
        setTime(obj);
        function setTime(obj) { //发送验证码倒计时
          if (countdown == 0) {
            obj.attr('disabled',false);
            obj.text("验证码");
            countdown = 60;
            return;
          } else
          {
            obj.attr('disabled',true);
            obj.text(countdown +'s');
            countdown--;
          }
          setTimeout(function() {setTime(obj) },1000);
        }
      }
    },
    loginOut(){
      this.seenLogin=false;
    },
    registerAction(){
      this.loginCmd='register';
    },
    returnLogin(){
      this.loginCmd='login';
    },
    forgetAction(){
      this.loginCmd='forget';
    },
    checkContract(){
      alert("查看服务协议和免责声明");
    },
    registerLogin(){
      if(!this.registerPhone||!this.registerUserName||!this.registerPwd||!this.registerShop){
        alert("请确认信息已填写完整");
        return;
      }
      if(this.registerPwd!=this.registerRPwd){
        alert("两次输入密码不一致，请重新填写");
        return;
      }
      if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.registerPhone))){
        alert("不是完整的11位手机号");
        return;
      }
      if(!this.contractTag){
        alert("如需注册，请同意用户协议.");
        return;
      }
      this.seenLogin=true;
      this.loginCmd='login';
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.b-navbar{
  position: sticky;
  top: 0;
  z-index: 1071;
}
.nav-bg{
  background-color: #840228!important;
}
.side-left{
  position: sticky;
  padding-top: 80px;
  z-index: 1071;
}
  .divInput{
    padding:0.5rem 0;
  }
  #loginBlock,#forgetBlock,#registerBlock{
    width: 660px;
    margin: 10rem auto;
    box-shadow: 7px 7px 7px #f2f2f2;
    background-color: #840228!important;
    padding: 4rem 2rem 2rem 2rem;
    color: #ffffff;
  }
  .verifyInput{
    width:11rem;
  }
  .txtInput{
    width:16rem;
  }
  #verifyBtn{
    width:5rem;
  }
</style>
