import Vue from 'vue'
import Router from 'vue-router'
import tabPages from '../components/tabPages'
import book from '@/components/book'
import registe from '@/components/registe'
Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/Login',
      name: 'Login',
      component: resolve => require(['../components/Login.vue'], resolve)
    },
    {
      path: '/registe',
      name: 'registe',
      component: resolve => require(['../components/registe.vue'], resolve)
    },
    {
      path: '/findpassword',
      name: 'findpassword',
      component: resolve => require(['../components/findpassword.vue'], resolve)
    },
    {
      path: '/adminmain',
      name: 'Adminmain',
      component: resolve => require(['../pages/Adminmain.vue'], resolve)
    },
    {
      path: '/admin',
      name: 'Admin',
      component: resolve => require(['../pages/Admin.vue'], resolve)
    },
    {
      path: '/adminsellerpage',
      name: 'Adminsellerpage',
      component: resolve => require(['../pages/AdminSellerPage.vue'], resolve)
    },
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['../Pages/Home.vue'], resolve),
      children:[
        {
          path: '/cartmain',
          name: 'cartmain',
          component: resolve => require(['../components/CartMain.vue'], resolve)
        },
        
        {
          path: '/PersonalInfor',
          name: 'PersonalInfor',
          component: resolve => require(['../components/PersonalInfor.vue'], resolve)
        },
        {
          path: '/sellermain',
          name: 'sellermain',
          component: resolve => require(['../components/SellerMain.vue'], resolve)
        },
        
        {
          path: '/addBookDetails',
          name: 'addBookDetails',
          component: resolve => require(['../components/AddBookDetails.vue'], resolve)
        },
        {
          path: '/tabpages',
          name: 'tabpages',
          component: resolve => require(['../components/tabPages.vue'], resolve)
        }, 
        {
          path: '/book/:bookID/:salerId',
          name: 'book',
          component: resolve => require(['../components/book.vue'], resolve)
        },
        {
          path: '/result/:keyword',
          name: 'result',
          component: resolve => require(['../components/result.vue'], resolve)
        },
        {
          path: '/Pay',
          name: 'Pay',
          component: resolve => require(['../components/Pay.vue'], resolve)
        },
        {
          path: '/PaySuccess',
          name: 'PaySuccess',
          component: resolve => require(['../components/PaySuccess.vue'], resolve)
        },
        {
          path: '/BuyerOrder',
          name: 'BuyerOrder',
          component: resolve => require(['../components/BuyerOrder.vue'], resolve)
        },
        {
          path: '/SalerOrder',
          name: 'SalerOrder',
          component: resolve => require(['../components/SalerOrder.vue'], resolve)
        },{
          path: '/PersonalInfor',
          name: 'PersonalInfor',
          component: resolve => require(['../components/PersonalInfor.vue'], resolve)
        }
        ,{
          path: '/mainpage',
          name: '/mainpage',
          component: resolve => require(['../components/mainpage.vue'], resolve)
        } 
      ]
    
      
    },
    
    
  ]
  // routes: [
  //   {
  //     path: '/home',
  //     component: Home
  //   },
  //   {
  //     path: '/sellerpage',
  //     component: resolve => require(['../pages/SellerPage.vue'], resolve)
  //   },
  //   // 1、写入购物车组件
  //   {
  //     path: '/seller',
  //     component: Seller
  //   }
  // ]
})
