<template>
  <div class="container">
    <label>添加商品</label>
    <label>编辑商品</label>
    <form>
      <div class="form-group row">
        <label for="inputGoodsKind" class="col-sm-2 col-form-label">商品类型</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputGoodsKind" value="">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputGoodsName" class="col-sm-2 col-form-label">商品名称</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputGoodsName" placeholder="">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputGoodsQRcode" class="col-sm-2 col-form-label">商品条码</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputGoodsQRcode" placeholder="">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputGoodsStandard" class="col-sm-2 col-form-label">商品规格</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputGoodsStandard" placeholder="">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputGoodsPrice" class="col-sm-2 col-form-label">商品售价</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputGoodsPrice" placeholder="">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputGoodsStock" class="col-sm-2 col-form-label">商品库存</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputGoodsStock" placeholder="">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputGoodsPic" class="col-sm-2 col-form-label">商品图片</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputGoodsPic" placeholder="">
        </div>
      </div>
      <div class="form-group row">
        <div class="btn-group" role="group" aria-label="开启会员/关闭会员">
          <button type="button" class="btn btn-secondary">开启会员价格</button>
          <button type="button" class="btn btn-secondary">关闭会员价格</button>
          <label>开启会员价格</label>
        </div>
      </div>
    </form>
    <div class="row">
      <div class="col divInput">
        <b-button  type="submit">取消</b-button>
        <b-button  type="submit">保存并上架</b-button>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "StockAdd"
    }
</script>

<style scoped>

</style>
