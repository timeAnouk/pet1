import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MemberManage from '@/components/MemberManage'
import MemberDetail from '@/components/MemberDetail'
import BatchImport from '@/components/BatchImport'
import CashierManage from '@/components/CashierManage'
import FosterManage from '@/components/FosterManage'
import InfoManage from '@/components/InfoManage'
import OrderManage from '@/components/OrderManage'
import ReportManage from '@/components/ReportManage'
import SettingManage from '@/components/SettingManage'
import StockManage from '@/components/StockManage'
import StockAdd from '@/components/StockAdd'

Vue.use(Router);
Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    //会员入口
    {
      path: '/',
      name: 'MemberManage',
      component: MemberManage
    },
    //会员详情
    {
      path: '/MemberDetail',
      name: 'MemberDetail',
      component: MemberDetail
    },
    //批导
    {
      path: '/BatchImport',
      name: 'BatchImport',
      component: BatchImport
    },
    //收银入口
    {
      path: '/CashierManage',
      name: 'CashierManage',
      component: CashierManage
    },
    //寄养入口
    {
      path: '/FosterManage',
      name: 'FosterManage',
      component: FosterManage
    },
    //消息入口
    {
      path: '/InfoManage',
      name: 'InfoManage',
      component: InfoManage
    },
    //预约入口
    {
      path: '/OrderManage',
      name: 'OrderManage',
      component: OrderManage
    },
    //报表入口
    {
      path: '/ReportManage',
      name: 'ReportManage',
      component: ReportManage
    },
    //设置入口
    {
      path: '/SettingManage',
      name: 'SettingManage',
      component: SettingManage
    },
    //库存入口
    {
      path: '/StockManage',
      name: 'StockManage',
      component: StockManage
    },
    //添加库存
    {
      path: '/StockAdd',
      name: 'StockAdd',
      component: StockAdd
    },

  ]
})
