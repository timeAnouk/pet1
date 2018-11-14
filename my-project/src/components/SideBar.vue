<template>
  <div class="side-left col-12 col-md-2 col-xl-2 bd-sidebar">
    <div class="bd-item d-flex align-items-center">会员管理</div>
    <div class="bd-item d-flex align-items-center">收银管理</div>
    <div class="bd-item d-flex align-items-center">洗护预约</div>
    <div class="bd-item d-flex align-items-center">寄养</div>
    <div class="bd-item d-flex align-items-center">库存管理</div>
    <div class="bd-item d-flex align-items-center">消息提醒</div>
    <div class="bd-item d-flex align-items-center">报表</div>
    <div class="bd-item d-flex align-items-center">系统设置</div>
  </div>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>
  .bd-sidebar{
    position: fixed;
    padding-top: 20px;
    height: 100%;
    z-index: 1071;
    border-right: 1px solid rgba(0,0,0,.1);
  }
  .bd-item{
    display: block;
    padding: .25rem 1.5rem;
    font-weight: 500;
    color: rgba(0,0,0,.65);
  }
</style>
