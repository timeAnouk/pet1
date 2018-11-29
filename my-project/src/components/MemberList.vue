<template>
<div class="container">



  <div class="row">
    <div class="col listBtn">
      <b-button  type="submit">
        <router-link to="/MemberDetail">查看详情</router-link>
      </b-button>
      <b-button  type="submit">
        <router-link to="/MemberDetail">新增会员</router-link>
      </b-button>
      <b-button  type="submit"  v-on:click="deleteMember">删除会员</b-button>
      <b-button  type="submit">
        <router-link to="/BatchImport">批量导入会员</router-link>
      </b-button>
    </div>
  </div>
  <div class="row">
    <table class="table table-bordered">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">手机号</th>
        <th scope="col">会员等级</th>
        <th scope="col">宠宝(姓名/品类/体重/年龄)</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="value in results">
        <td><input type="checkbox" /></td>
        <td>{{value.phone}}</td>
        <td>{{value.level}}</td>
        <td class="pets-cell">
          <table class="table pets-cell-table">
            <tbody>
            <tr  v-for="pet in value.pets">
              <td>{{pet.petName}}</td>
              <td>{{pet.petType}}</td>
              <td>{{pet.petWeight}}kg</td>
              <td>{{pet.petAge}}岁</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
    export default {
        name: "MemberList",
      data: function () {
        let data = {
          results:[
            {
              id:"1111",
              phone:"15601011111",
              level:"青铜",
              pets:[
                {
                  id:"2222",
                  petName:"巴顿",
                  petType:"哈士奇",
                  petWeight:"38",
                  petAge:"2"
                },
                {
                  id:"2223",
                  petName:"乐乐",
                  petType:"金毛",
                  petWeight:"22",
                  petAge:"2"
                },
                {
                  id:"2224",
                  petName:"闹闹",
                  petType:"蓝猫",
                  petWeight:"5",
                  petAge:"2"
                },

              ]
            },
            {
              id:"1111",
              phone:"15601011111",
              level:"青铜",
              pets:[
                {
                  id:"2222",
                  petName:"巴顿",
                  petType:"哈士奇",
                  petWeight:"38",
                  petAge:"2"
                }
              ]
            },
          ],
        };
        return data;
      },
        methods:{
          deleteMember:function(){
            alert("删除会员");
          }
        }
    };
</script>

<style scoped>
   .listBtn{
     padding:1.5rem 0;
   }
  .pets-cell{
    padding: 0 !important;
  }
  .pets-cell-table{
    margin-bottom: 0 !important;
  }
</style>
