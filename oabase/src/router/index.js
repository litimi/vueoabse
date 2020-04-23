import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/index.vue'
import Home from '../views/Home/index.vue'
import Department from '../views/Department'
import ItemManagement from '../views/Department/ItemManagement/index.vue'
import Member from '../views/Department/Member/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      isLogin: true
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta:{
      isLogin:false
    }
  },
  {
    path: '/Department',
    component: Department,
    redirect: '/Department/ItemManagement',
    children: [
      {
        path: 'ItemManagement',
        name: 'ItemManagement',
        component: ItemManagement,
        meta:{
          isLogin: true
        }
      },
      {
        path: 'Member',
        name: 'Member',
        component: Member,
        meta:{
          isLogin: true
        }
      },
    ]
  },
]

const router = new VueRouter({
  routes
})
// 路由守卫
router.beforeEach((to,from,next)=>{
  if(to.matched.some(res=>res.meta.isLogin)){//判断是否需要登录
    if (sessionStorage['token']) {
      next();
    }else{
      next({
        path:"/Login",
        query:{
          redirect:to.fullPath
        }
      });
    }

  }else{
    next()
  }
});

export default router
