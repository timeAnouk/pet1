<template>
  <div class="container">
    <div class="box-border">
      <label>会员信息</label>
      <div class="row row-box">
        <div class="col-sm divInput">
          <form class="form-inline">
            <div class="form-group">
              <label for="inputPhone11">手机号</label>
              <input type="text" id="inputPhone11" class="form-control mx-sm-3" >
            </div>
          </form>
        </div>
        <div class="col-sm divInput">
          <form class="form-inline">
            <div class="form-group">
              <label for="inputName">姓名</label>
              <input type="text" id="inputName" class="form-control mx-sm-3" >
            </div>
          </form>
        </div>
        <div class="col-sm divInput">
          <form class="form-inline">
            <div class="form-group">
              <label for="inputCardNo">卡号</label>
              <input type="text" id="inputCardNo" class="form-control mx-sm-3" >
            </div>
          </form>
        </div>
      </div>
      <div class="row row-box">
        <div class="col-sm divInput">
          <form class="form-inline">
            <div class="form-group">
              <label for="inputlevel">等&nbsp;&nbsp;&nbsp;&nbsp;级</label>
              <input type="text" id="inputlevel" class="form-control mx-sm-3" >
            </div>
          </form>
        </div>
        <div class="col-sm divInput">
          <form class="form-inline">
            <div class="form-group">
              <label for="inputNote">备注</label>
              <input type="text" id="inputNote" class="form-control mx-sm-3" >
            </div>
          </form>
        </div>
        <div class="col-sm divInput">
        </div>
      </div>
    </div>
    <div class="box-border">
      <label>宠物信息</label>
      <div class="row row-box">
        <div class="col-sm divInput">
          <form class="form-inline">
            <div class="form-group">
              <label for="inputPetName">宠物姓名</label>
              <input type="text" id="inputPetName" class="form-control mx-sm-3" >
            </div>
          </form>
        </div>
        <div class="col-sm divInput">
          <form class="form-inline">
            <div class="form-group">
              <label for="inputPetKind">宠物品种</label>
              <input type="text" id="inputPetKind" class="form-control mx-sm-3" >
            </div>
          </form>
        </div>
        <div class="col-sm divInput"></div>
      </div>
      <div class="row row-box">
        <div class="col-sm divInput">
          <form class="form-inline">
            <div class="form-group">
              <label for="inputPetWeight">宠物体重</label>
              <input type="text" id="inputPetWeight" class="form-control mx-sm-3" >
            </div>
          </form>
        </div>
        <div class="col-sm divInput">
          <form class="form-inline">
            <div class="form-group">
              <label for="inputPetAge">宠物年龄</label>
              <input type="text" id="inputPetAge" class="form-control mx-sm-3" >
            </div>
          </form>
        </div>
        <div class="col-sm divInput">
          <b-button  type="submit">删除宠物</b-button>
        </div>
      </div>
    </div>
    <div class="row" >
      <div class="col divInput">
        <b-button  type="submit">新增宠物</b-button>
      </div>
    </div>
    <div class="row" >
      <div class="col divInput">
        <b-button  type="submit">取消</b-button>
        <b-button  type="submit">确定</b-button>
      </div>
    </div>
    <div class="row" >
      <div class="col divInput">
        <b-button  type="submit">返回</b-button>
        <b-button  type="submit">编辑信息</b-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MemberDetail"
    }
</script>

<style scoped>
 .divInput{
   padding: 1rem 0;
 }
  .box-border{
    border: 1px solid rgba(0,0,0,.1);
  }
  .row-box{
    padding: 15px 15px 0 15px;
  }
</style>
