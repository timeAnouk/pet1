<template>
  <div class="container">
    <div class="row">
      <label>日期</label>
      <div>
        <div class="input-group date form_date" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
          <input class="form-control settime-input" type="text" >
          <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
        </div>
      </div>
      <b-button>查询</b-button>
      <b-button>新增预约</b-button>
      <b-button>保存</b-button>
      <div class="row">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th scope="col">时间</th>
            <th scope="col">预估完成时间</th>
            <th scope="col">会员卡号</th>
            <th scope="col">手机号</th>
            <th scope="col">宠宝姓名</th>
            <th scope="col">宠宝品种</th>
            <th scope="col">宠宝体重</th>
            <th scope="col">精油</th>
            <th scope="col">洗护种类</th>
            <th scope="col">洁齿</th>
            <th scope="col">足底</th>
            <th scope="col">药浴</th>
            <th scope="col">更多</th>
            <th scope="col">备注</th>
            <th scope="col">操作</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>10：30</td>
            <td>30分钟</td>
            <td>12345</td>
            <td>15888888888</td>
            <td>圆圆</td>
            <td>小型</td>
            <td>5kg</td>
            <td>闪电</td>
            <td>洗澡</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td>查看</td>
            <td>无</td>
            <td>
              <b-button>编辑</b-button>
              <b-button>取消</b-button>
              <b-button>删除</b-button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "OrderManage",
      data(){
        return{
          date:'',
          date2:'2010-3-2'
        }
      },

      mounted:function(){
        this.dateDefind();
      },
      methods:{
        dateDefind(){
          var self=this;
          $('.form_date').datetimepicker({
            language:  'zh-CN',
            format:'yyyy-mm-dd',
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0
          }),
            $('.form_date').datetimepicker()
              .on('hide',function(e){
                self.settimeInput=$('.settime-input').val();
              })
        }
      },
    }
</script>

<style scoped>

</style>
