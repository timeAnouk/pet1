
<template>
  <div class="container">
    <div class="row">
      <label class="block-title">会员信息</label>
      <b-button  type="submit" @click="checkProps">Props信息</b-button>
    </div>
    <div class="box-border ">
      <div class="row row-box">
        <div class="col-sm divInput">
          <form class="form-inline">
            <div class="form-group">
              <label for="inputPhone11">手机号</label>
              <input type="text" id="inputPhone11" v-model="member.phone" class="form-control mx-sm-3" >
            </div>
          </form>
        </div>
        <div class="col-sm divInput">
          <form class="form-inline">
            <div class="form-group">
              <label for="inputName" >姓名</label>
              <input type="text" id="inputName" v-model="member.name" class="form-control mx-sm-3" >
            </div>
          </form>
        </div>
        <div class="col-sm divInput">
          <form class="form-inline">
            <div class="form-group">
              <label for="inputCardNo">卡号</label>
              <input type="text" id="inputCardNo" v-model="member.cardNo" class="form-control mx-sm-3" >
            </div>
          </form>
        </div>
      </div>
      <div class="row row-box">
        <div class="col-sm divInput">
          <form class="form-inline">
            <div class="form-group">
              <label for="inputlevel">等&nbsp;&nbsp;&nbsp;&nbsp;级</label>
              <input type="text" id="inputlevel" v-model="member.level" class="form-control mx-sm-3" >
            </div>
          </form>
        </div>
        <div class="col-sm divInput">
          <form class="form-inline">
            <div class="form-group">
              <label for="inputNote">备注</label>
              <input type="text" id="inputNote" v-model="member.note" class="form-control mx-sm-3" >
            </div>
          </form>
        </div>
        <div class="col-sm divInput">
        </div>
      </div>
    </div>
    <div class="row marginTop15">
      <label class="block-title">宠物信息</label>
      <b-button  type="submit" @click="addPet">新增宠物</b-button>
    </div>
    <div class="box-border">
     <!-- <label>宠物信息</label>-->
      <div v-for="(pet,index) in pets">
        <div class="row row-box">
          <div class="col-sm divInput">
            <form class="form-inline">
              <div class="form-group">
                <label for="inputPetName">宠物姓名</label>
                <input type="text" id="inputPetName" v-model="pet.petName" class="form-control mx-sm-3" >
              </div>
            </form>
          </div>
          <div class="col-sm divInput">
            <form class="form-inline">
              <div class="form-group">
                <label for="inputPetKind">宠物品种</label>
                <input type="text" id="inputPetKind" v-model="pet.petType" class="form-control mx-sm-3" >
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
                <input type="text" id="inputPetWeight" v-model="pet.petWeight" class="form-control mx-sm-3" >
              </div>
            </form>
          </div>
          <div class="col-sm divInput">
            <form class="form-inline">
              <div class="form-group">
                <label for="inputPetAge">宠物年龄</label>
                <input type="text" id="inputPetAge" v-model="pet.petAge" class="form-control mx-sm-3" >
              </div>
            </form>
          </div>
          <div class="col-sm divInput">
            <b-button  type="submit" @click="deletePet(index)">删除宠物</b-button>
          </div>
        </div>
      </div>

    </div>
    <div class="row" >

    </div>
    <div class="row" >
      <div class="col divInput">
        <b-button  type="submit">编辑</b-button>
        <b-button  type="submit" @click="addMember">提交</b-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "MemberDetail",
      props:'',
      data: function () {
        let data = {
          member:{
            phone:'',
            name:'',
            cardNo:'',
            level:'',
            note:'',
          },
          pets:[
            {
              id:"",
              petName:"",
              petType:"",
              petWeight:"",
              petAge:"",
              inputId:1
            },
          ]
        };
        return data;
      },
      methods:{
        checkProps:function(){
          console.log(this.props)
          console.log(JSON.stringify(this.props));
        },
        addPet:function(){
          var newPet={
              id:"",
              petName:"",
              petType:"",
              petWeight:"",
              petAge:"",
              inputId:1
            };
          newPet.inputId=this.pets.length+1;
          this.pets.push(newPet);
          console.log(this.pets)
        },
        deletePet:function(index){
          if(this.pets.length<=1){
            alert("仅有一只宠物，确定删除此宠物？");
          }else{
            alert("删除此宠物");
            this.pets.splice(index,1);
            console.log(JSON.stringify(this.pets));
          }

        },
        addMember:function(){
          if(!this.member.phone||!this.member.name||!this.member.cardNo||!this.member.level){
            alert("会员必填项未填全");
            return;
          }
          //console.log(JSON.stringify(this.pets));
          var petsNameVerify=this.pets.filter((item)=>{return item.petName.length>0});
          //console.log(JSON.stringify("petsNameVerify---"+petsNameVerify));
          if(petsNameVerify.length!=this.pets.length){
            alert("宠物名称不能为空");
            return;
          }
          alert("成功添加手机号为"+this.member.phone+"会员");



        },
      }
    }
</script>

<style scoped>
 .divInput{
   padding: 1rem 0;
 }
  .box-border{
    border-bottom: 1px solid rgba(0,0,0,.1);
    padding: 15px;
   /* margin: 20px 0;*/
  }
  .row-box{
    padding: 15px 15px 0 15px;
  }
  .block-title{
    margin: 0.5rem 1rem;
    font-weight: bolder;
  }
  .marginTop15{
    margin-top: 15px;
  }
</style>
