<template>
<div class="container">
  <div class="box-border">
    <div class="row row-box">
      <div class="col-sm divInput">
        <b-button  type="submit">新增商品</b-button>
      </div>
      <div class="col-sm divInput">
        <b-button  type="submit">批量导入产品</b-button>
      </div>
      <div class="col-sm divInput"></div>
    </div>
    <div class="row row-box">
      <div class="col-sm divInput">
        <form class="form-inline">
          <div class="form-group">
            <label for="inputPetWeight">商品名称</label>
            <input type="text" id="inputPetWeight" class="form-control mx-sm-3" >
          </div>
        </form>
      </div>
      <div class="col-sm divInput">
        <form class="form-inline">
          <div class="form-group">
            <label for="inputPetAge">商品类型</label>
            <input type="text" id="inputPetAge" class="form-control mx-sm-3" >
          </div>
        </form>
      </div>
      <div class="col-sm divInput">
        <b-button  type="submit">查询</b-button>
      </div>
    </div>
  </div>

  <div class="row">
    <table class="table table-bordered">
      <thead>
      <tr>
        <th scope="col">商品名称</th>
        <th scope="col">商品编码</th>
        <th scope="col">库存/销量</th>
        <th scope="col">商品分类</th>
        <th scope="col">状态</th>
        <th scope="col">操作</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>皇家狗粮</td>
        <td>0000001</td>
        <td>50/180</td>
        <td>狗粮</td>
        <td>已上架</td>
        <td>
          <b-button  type="submit">上架</b-button>
          <b-button  type="submit">下架</b-button>
          <b-button  type="submit">编辑</b-button>
          <b-button  type="submit">删除</b-button>
        </td>
      </tr>
      <tr>
        <td>卵磷脂</td>
        <td>0000003</td>
        <td>50/180</td>
        <td>零食</td>
        <td>已上架</td>
        <td>
          <b-button  type="submit">上架</b-button>
          <b-button  type="submit">下架</b-button>
          <b-button  type="submit">编辑</b-button>
          <b-button  type="submit">删除</b-button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
    export default {
        name: "StockManage"
    }
</script>

<style scoped>

</style>
