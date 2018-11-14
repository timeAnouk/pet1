<template>
  <div id="app">
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
          <b-nav-item href="#">注销</b-nav-item>
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
</template>

<script>
import SideBar from "./components/SideBar";
export default {
  name: 'app',
  components: {SideBar}
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
