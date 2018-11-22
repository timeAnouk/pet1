<template>
  <div id="app">
    <div id="loginIn" v-if="seenLogin">
      <!-- navbar-1.vue -->
      <b-navbar toggleable="md" class="b-navbar" type="dark" variant="info">

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
          <input  type="text" placeholder="登录名称"/>
        </div>
        <div class="col-sm divInput">
          <input  type="password" placeholder="登录密码"/>
        </div>
        <label v-on:click="forgetAction">忘记密码？</label>
        <b-button v-on:click="loginAction">登录</b-button>
        <b-button v-on:click="registerAction">注册</b-button>
      </div>
      <div id="forgetBlock" v-else-if="loginCmd==='forget'" class="column">
        <div class="col-sm divInput">
          <input  type="text" placeholder="登录名称"/>
        </div>
        <div class="col-sm divInput">
          <input  type="password" placeholder="新密码"/>
        </div>
        <div class="col-sm divInput">
          <input  type="password" placeholder="再次确认密码"/>
        </div>
        <div class="col-sm divInput">
          <input  type="text" placeholder="验证码"/>
          <b-button>验证码</b-button>
        </div>
        <b-button v-on:click="loginAction">确认使用新密码</b-button>
      </div>
      <div id="RegisterBlock" v-else-if="loginCmd==='register'" class="column">
        <div class="col-sm divInput">
          <input  type="text" placeholder="电话"/>
        </div>
        <div class="col-sm divInput">
          <input  type="password" placeholder="用户名称"/>
        </div>
        <div class="col-sm divInput">
          <input  type="password" placeholder="密码"/>
        </div>
        <div class="col-sm divInput">
          <input  type="password" placeholder="再次确认密码"/>
        </div>
        <div class="col-sm divInput">
          <input  type="text" placeholder="店名"/>
        </div>
        <div class="col-sm divInput">
          <input type="checkbox" />
          <label>同意XX服务协议和隐私条款</label>
        </div>
        <b-button v-on:click="returnLogin">返回登录</b-button>
        <b-button v-on:click="loginAction">注册</b-button>
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
      loginCmd: "login",
      seenLogin: false,
    };
    return data;
  },

  methods:{
    loginAction(){
      this.seenLogin=true;
      this.loginCmd='login';
      /*Vue.axios.get("http://localhost:8080?name=tom&age=23").then((response) => {
        console.log(response.data)
      })*/
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
.side-left{
  position: sticky;
  padding-top: 80px;
  z-index: 1071;
}
</style>
