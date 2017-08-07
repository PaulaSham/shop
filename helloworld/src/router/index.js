import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import IndexPage from '@/pages/index'
//import DetailPage from '@/pages/detail'
import Clothes from '@/pages/clothes'
import Dress from '@/pages/detail/dress'
import OrderList from '@/pages/orderList'
Vue.use(Router)

export default new Router({
//mode:'history',
  routes: [
//  {
//    path: '/',
//    name: 'Hello',
//    component: Hello
//  },
     {
         path:'/',
         component:IndexPage
     },
     {
     	  path:'/orderList',
     	  component:OrderList,
     },
     {
			path: '/clothes',
			component: Clothes
		 },
		 {
			path: '/dress',
			component: Dress
		 }
//		{
//			path: '/detail',
//			component: DetailPage,
//			redirect: '/detail/analysis',
//			children: [
//				{
//					path: 'analysis',
//					component: DetailAnaPage
//				},
//				{
//					path: 'count',
//					component: DetailCouPage
//				},
//				{
//					path: 'forecast',
//					component: DetailForPage
//				},
//				{
//					path: 'publish',
//					component: DetailPubPage
//				}
//		 ]
//		}
	]
})
