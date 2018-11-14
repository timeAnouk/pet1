<template>
<div class="container">
  <div class="row">
    <div class="col">
      <b-button  type="submit">查看详情</b-button>
      <b-button  type="submit">新增会员</b-button>
      <b-button  type="submit">删除会员</b-button>
      <b-button  type="submit">批量导入会员</b-button>
    </div>
  </div>
  <div class="row">
    <table class="table table-bordered">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">手机号</th>
        <th scope="col">会员等级</th>
        <th scope="col">宠宝姓名</th>
        <th scope="col">品类</th>
        <th scope="col">宠宝体重</th>
        <th scope="col">宠宝年龄</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><input type="checkbox" /></td>
        <td>15301669431</td>
        <td>白银</td>
        <td>巴顿</td>
        <td>哈士奇</td>
        <td>38kg</td>
        <td>3岁</td>
      </tr>
      <tr>
        <td><input type="checkbox" /></td>
        <td>15101669431</td>
        <td>青铜</td>
        <td>麦麦/小九</td>
        <td>金毛犬/波斯猫</td>
        <td>35kg/4kg</td>
        <td>5岁/2岁</td>
      </tr>
      <tr>
        <td><input type="checkbox" /></td>
        <td>15201669431</td>
        <td>铂金</td>
        <td>奶茶</td>
        <td>边牧</td>
        <td>7kg</td>
        <td>3岁</td>
      </tr>
      <tr>
        <td><input type="checkbox" /></td>
        <td>15401669431</td>
        <td>钻石</td>
        <td>旺财</td>
        <td>田园犬</td>
        <td>31kg</td>
        <td>2岁</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
    export default {
        name: "MemberList"
    }
</script>

<style scoped>

</style>
