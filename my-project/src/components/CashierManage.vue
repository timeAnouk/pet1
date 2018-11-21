<template>
  <div>
    <div class="search-bar">
      <div class="container">
        <div class="row">
          <div class="col-sm divInput">
            <input  type="text" placeholder="会员卡号"/>
          </div>
          <div class="col-sm divInput">
            <input  type="text" placeholder="手机号码"/>
          </div>
          <div class="col-sm divInput">
            <input  type="text" placeholder="卡内余额"/>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm divInput">
            <input  type="text" placeholder="会员等级"/>
          </div>
          <div class="col-sm divInput">
            <input  type="text" placeholder="宠宝姓名"/>
          </div>
          <div class="col-sm divInput">
            <input  type="text" placeholder="宠物品种"/>
          </div>
        </div>
        <div class="row">
          <div class="col divInput">
            <b-button  type="submit">查找</b-button>
            <b-button  type="submit">重置</b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="shopping-cart">
      <div class="row">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th scope="col">商品名称</th>
            <th scope="col">数量</th>
            <th scope="col">原价</th>
            <th scope="col">会员价</th>
            <th scope="col">操作</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>商品一</td>
            <td>1</td>
            <td>300</td>
            <td>200</td>
            <td>
              <b-button  type="submit">删除</b-button>
            </td>
          </tr>
          <tr>
            <td>商品二</td>
            <td>2</td>
            <td>500</td>
            <td>400</td>
            <td>
              <b-button  type="submit">删除</b-button>
            </td>
          </tr>
          <tr>
            <td>商品三</td>
            <td>5</td>
            <td>100</td>
            <td>80</td>
            <td>
              <b-button  type="submit">删除</b-button>
            </td>
          </tr>
          <tr>
            <td>洗澡</td>
            <td>1</td>
            <td>100</td>
            <td>90</td>
            <td>
              <b-button  type="submit">删除</b-button>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="row">
            <label>总价：1000</label>
            <label>&nbsp;&nbsp;&nbsp;&nbsp;折后价：770</label>
            <b-button  type="submit">结算</b-button>
            <b-button  type="submit">取消</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "CashierManage",
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
  .shopping-cart{
    padding: 2rem;
  }
</style>
