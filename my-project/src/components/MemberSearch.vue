<template>
  <div class="search-bar">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <input  type="text" placeholder="手机号"/>
        </div>
        <div class="col-sm">
          <input  type="text" placeholder="宠物名"/>
        </div>
        <div class="col-sm">
          <input  type="text" placeholder="宠物品种"/>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <input  type="text" placeholder="会员名称"/>
        </div>
        <div class="col-sm">
          <input  type="text" placeholder="宠物体重"/>
        </div>
        <div class="col-sm">
          <input  type="text" placeholder="宠物年龄"/>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <b-button  type="submit">查找</b-button>
          <b-button  type="submit">重置</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MemberSearch"
    }
</script>

<style scoped>
  .search-bar{
    margin-top:2rem;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .row-style{
    padding: 1rem;
  }
</style>
