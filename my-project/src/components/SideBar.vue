<template>
  <div class="side-left col-12 col-md-2 col-xl-2 bd-sidebar">
    <div class="bd-item d-flex align-items-center">
      <router-link to="/">会员管理</router-link>
    </div>
    <div class="bd-item d-flex align-items-center">
      <router-link to="/CashierManage">收银管理</router-link>
    </div>
    <div class="bd-item d-flex align-items-center">
      <router-link to="/OrderManage">洗护预约</router-link>
    </div>
    <div class="bd-item d-flex align-items-center">
      <router-link to="/FosterManage">寄养</router-link>
    </div>
    <div class="bd-item d-flex align-items-center">
      <router-link to="/StockManage">库存管理</router-link>
    </div>
    <div class="bd-item d-flex align-items-center">
      <router-link to="/InfoManage">消息提醒</router-link>
    </div>
    <div class="bd-item d-flex align-items-center">
      <router-link to="/ReportManage">报表</router-link>
    </div>
    <div class="bd-item d-flex align-items-center">
      <router-link to="/SettingManage">系统设置</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SideBar",
  }
</script>

<style scoped>
  .bd-sidebar{
    position: fixed;
    padding-top: 20px;
    height: 100%;
    z-index: 1073;
    border-right: 1px solid rgba(0,0,0,.1);
  }
  .bd-item{
    display: block;
    padding: .25rem 1.5rem;
    font-weight: 500;
    color: rgba(0,0,0,.65);
  }
</style>
