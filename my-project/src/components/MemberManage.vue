<template>
  <div>
    <div>
      <div class="search-bar">
        <div class="container">
          <div class="row">
            <div class="col-sm divInput">
              <input  type="text" v-model="search.phone" placeholder="手机号"/>
            </div>
            <div class="col-sm divInput">
              <input  type="text" v-model="search.petName" placeholder="宠物名"/>
            </div>
            <div class="col-sm divInput">
              <input  type="text" v-model="search.petType" placeholder="宠物品种"/>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm divInput">
              <input  type="text" v-model="search.memberName" placeholder="会员名称"/>
            </div>
            <div class="col-sm divInput">
              <input  type="text" v-model="search.petWeight" placeholder="宠物体重"/>
            </div>
            <div class="col-sm divInput">
              <input  type="text" v-model="search.petAge" placeholder="宠物年龄"/>
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
    </div>
    <div>
      <div class="container">
        <div class="row">
          <div class="col listBtn">
           <!-- <b-button  type="submit">
              <router-link   to="/MemberDetail">查看详情</router-link>
            </b-button>-->
            <b-button  type="submit">
              <label @click="checkPath">新增会员</label>
              <!--<router-link to="/MemberDetail">新增会员</router-link>-->
            </b-button>
            <!--<b-button  type="submit"  v-on:click="deleteMember">删除会员</b-button>-->
            <b-button  type="submit">
              <router-link to="/BatchImport">批量导入会员</router-link>
            </b-button>
          </div>
        </div>
        <div class="row">
          <table class="table table-bordered table-hover">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">手机号</th>
              <th scope="col">会员等级</th>
              <th scope="col">宠宝(姓名/品类/体重/年龄)</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(value,index) in results">
              <td>
                <b-button>
                  <router-link   to="/MemberDetail">查看</router-link>
                </b-button>
                <b-button @click="deleteMember(index)">删除</b-button>
              </td>
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
    </div>
  </div>
</template>

<script>
    import MemberDetail from "./MemberDetail";
    export default {
      name: "MemberManage",
      components: {MemberDetail},
      data: function () {
        let data = {
          search:
            {
              phone:'',
              petName:'',
              petType:'',
              memberName:'',
              petWeight:'',
              petAge:'',
            },
          results:[
            {
              id:"1111",
              phone:"15600000000",
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
              id:"2222",
              phone:"15611111111",
              level:"白银",
              pets:[
                {
                  id:"2222",
                  petName:"八哥",
                  petType:"八哥",
                  petWeight:"38",
                  petAge:"2"
                }
              ]
            },
            {
              id:"3333",
              phone:"15622222222",
              level:"黄金",
              pets:[
                {
                  id:"2222",
                  petName:"豆豆",
                  petType:"拉布拉多",
                  petWeight:"38",
                  petAge:"2"
                }
              ]
            },
          ],
          selectNum:[],
        };
        return data;
      },
      methods:{
        checkPath:function(){
          this.$router.push({ path: '/MemberDetail', props: this.results})
    },
        checkMember:function(){
          if(!this.search.phone&&!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.search.phone))){
            alert("不是完整的11位手机号");
            return;
          }
          if(!Object.values(this.search).join("")){
            alert("请至少填写一个查询条件");
          }
          /*Vue.axios.get("http://localhost:8080?name=tom&age=23").then((response) => {
        console.log(response.data)
      })*/
          alert("查找会员");
        },
        clearMember:function(){
          this.search.phone="";
          this.search.petName="";
          this.search.petType="";
          this.search.memberName="";
          this.search.petWeight="";
          this.search.petAge="";
          alert("已清空搜索条件");
        },
        checkDetail:function(index){
          alert("查看会员");
          ///Router.push('MemberDetail')
          //this.results.splice(index,1);
        },
        deleteMember:function(index){
          alert("删除会员");
          this.results.splice(index,1);
        }
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
  .listBtn{
    padding:1.5rem 0;
  }
  .pets-cell{
    padding: 0 !important;
  }
  .pets-cell-table{
    margin-bottom: 0 !important;
    margin-top: 1rem;
  }
  .listBtn a{
    color:#ffffff;
  }
  td a{
    color:#ffffff;
  }

</style>
