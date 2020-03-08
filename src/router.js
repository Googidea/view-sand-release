import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout'
import OnlyShowMap from '@/views/showMap'

Vue.use(Router)

//通用路由表
export const commonRouter= [
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    hidden:true,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/index')
  },
  
  {
    path: '/404',
    hidden: true,
    component: () => import('@/views/errorPage/404'),
  },
]

//需要权限验证的路由表
export const roleRouter=[
  {
    path: '/example',
    component: Layout,
    name:'example',
    children: [
      {
        path: 'list',
        component: () => import('@/views/example/TableExample'),
        name: 'list',
        meta: { title: 'example', icon: 'example', noCache: true }
      }
    ]
  },

  {
    path: '/demo',
    component: Layout,
    name:'demo',
    meta: { title: '菜单', icon: 'example'},
    children: [
      {
        path: 'first',
        component: () => import('@/views/demo/first'),
        name: 'first',
        children:[
          {
            path: 'second',
            component: () => import('@/views/demo/second'),
            name: 'second',
            meta: { title: '菜单', icon: 'example', noCache: true, }
          }
        ]
      }
    ]
  },
  {
    path: '/weatherShowMenu',
    component: Layout,
    name:'weatherShowMenu',
    meta: { title: '气象展示', icon: 'example'},
    children: [
      {
        path: 'weatherIndex',
        component: () => import('@/views/weatherShow/weatherIndex'),
        name: 'weatherIndex',
        children:[
          {
            path: 'actuallyRain',
            component: () => import('@/views/weatherShow/actuallyRain'),
            name: 'actuallyRain',
            meta: { title: '全国实况降水图', icon: 'example', noCache: false,}
          },
        ],
      },
      // {
      //   path: 'weatherIndex',
      //   component: () => import('@/views/weatherShow/weatherIndex'),
      //   name: 'weatherIndex',
      //   meta: { title: '全国实况降水图', icon: 'example', noCache: false,},
      //   children:[
      //     {
      //       path: 'forecastRain',
      //       component: () => import('@/views/weatherShow/forecastRain'),
      //       name: 'forecastRain',
      //       meta: { title: '全国降水预报图', icon: 'example', noCache: false,}
      //     },
      //   ],
      // },
      // {
      //   path: 'weatherIndex',
      //   component: () => import('@/views/weatherShow/weatherIndex'),
      //   name: 'weatherIndex',
      //   meta: { title: '全国实况降水图', icon: 'example', noCache: false,},
      //   children:[
      //     {
      //       path: 'forecastTmpeHigh',
      //       component: () => import('@/views/weatherShow/forecastTmpeHight'),
      //       name: 'forecastTmpeHigh',
      //       meta: { title: '全国最高气温预报图', icon: 'example', noCache: false,}
      //     },
      //   ],
      // },
      // {
      //   path: 'weatherIndex',
      //   component: () => import('@/views/weatherShow/weatherIndex'),
      //   name: 'weatherIndex',
      //   meta: { title: '全国实况降水图', icon: 'example', noCache: false,},
      //   children:[
      //     {
      //       path: 'forecastTmpeLow',
      //       component: () => import('@/views/weatherShow/forecastTmpeLow'),
      //       name: 'forecastTmpeLow',
      //       meta: { title: '全国最低气温预报图', icon: 'example', noCache: false,}
      //     },
      //   ],
      // }
    ]
  },
  {
    path: '/weatherAnalysisMenu',
    component: Layout,
    name:'weatherAnalysisMenu',
    meta: { title: '基本天气分析', icon: 'example'},
    hidden:true,
    children: [
      {
        path: 'weatherAnalysis',
        component: () => import('@/views/weatherAnalysis/index'),
        name: 'weatherAnalysis',
        children:[
          {
            path: 'stationCMO',
            component: () => import('@/views/weatherAnalysis/stationCMO'),
            name: 'stationCMO',
            meta: { title: '中央气象台', icon: 'example', noCache: false,}
          },
        ]
      },
      {
        path: 'weatherAnalysis',
        component: () => import('@/views/weatherAnalysis/index'),
        name: 'weatherAnalysis',
        children:[
          {
            path: 'stationCEMWF',
            component: () => import('@/views/weatherAnalysis/stationCEMWF'),
            name: 'stationCEMWF',
            meta: { title: 'CEMWF', icon: 'example', noCache: false,}
          },
        ]
      },
      {
        path: 'weatherAnalysis',
        component: () => import('@/views/weatherAnalysis/index'),
        name: 'weatherAnalysis',
        children:[
          {
            path: 'stationGFS',
            component: () => import('@/views/weatherAnalysis/stationGFS'),
            name: 'stationGFS',
            meta: { title: 'GFS', icon: 'example', noCache: false,}
          },
        ]
      },
    ]
  },
  {
    path: '/forecastMenu',
    component: Layout,
    name:'forecastMenu',
    hidden:true,
    meta: { title: '天气预报', icon: 'example'},
    children: [
      {
        path: 'forecast',
        component: () => import('@/views/forecast/index'),
        name: 'forecast',
        children:[
          {
            path: 'weatherGB',
            component: () => import('@/views/forecast/weatherGB'),
            name: 'weatherGB',
            meta: { title: '天气公报', icon: 'example', noCache: false,}
          },
        ]
      },
      {
        path: 'forecast',
        component: () => import('@/views/forecast/index'),
        name: 'forecast',
        children:[
          {
            path: 'everyDayHint',
            component: () => import('@/views/forecast/everyDayHint'),
            name: 'everyDayHint',
            meta: { title: '每日天气提示', icon: 'example', noCache: false,}
          },
        ]
      }
    ]
  },
  {
    path: '/map',
    component: Layout,
    name:'map',
    hidden:true,
    children: [
      {
        path: 'index',
        component:OnlyShowMap,
        name: 'index',
        meta: { title: 'map', icon: 'map', map:'full'  }
      },
    ]
  },
  { path: '*', redirect: '/404' ,hidden: true }
]

export default new Router({
  routes:commonRouter
})