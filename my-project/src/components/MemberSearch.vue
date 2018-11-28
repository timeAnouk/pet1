<template>
  <div class="search-bar">
    <div class="container">
      <div class="row">
        <div class="col-sm divInput">
          <input  type="text" placeholder="手机号"/>
        </div>
        <div class="col-sm divInput">
          <input  type="text" placeholder="宠物名"/>
        </div>
        <div class="col-sm divInput">
          <input  type="text" placeholder="宠物品种"/>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm divInput">
          <input  type="text" placeholder="会员名称"/>
        </div>
        <div class="col-sm divInput">
          <input  type="text" placeholder="宠物体重"/>
        </div>
        <div class="col-sm divInput">
          <input  type="text" placeholder="宠物年龄"/>
        </div>
      </div>
      <div class="row">
        <div class="col divInput">
          <b-button v-on:click="checkMember">查找</b-button>
          <b-button v-on:click="clearMember">重置</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "MemberSearch",
      methods:{
        checkMember:function(){
          alert("查找会员");
        },
        clearMember:function(){
          alert("清空会员");
        },
      }
    }
</script>

<style scoped>
  .search-bar{
    margin-top:2rem;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .divInput{
    padding: 1rem 0;
  }
</style>
