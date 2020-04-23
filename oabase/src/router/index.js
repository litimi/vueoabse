import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/index.vue'
import Home from '../views/Home/index.vue'
import Department from '../views/Department'
import ItemManagement from '../views/Department/ItemManagement/index.vue'
import Member from '../views/Department/Member/index.vue'
import Accounting from '../views/Accounting/index.vue'
import Goods from '../views/Goods/index.vue'
import Project from '../views/Project/index.vue'
import systemSet from '../views/systemSet'
import Jurisdiction from '../views/systemSet/Jurisdiction/index.vue'
import User from '../views/systemSet/User/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '主页',
    component: Home,
    meta:{
      isLogin: true,
      title: '首页'
    }
  },
  {
    path: '/Login',
    name: '登陆',
    component: Login,
    meta:{
      isLogin:false
    }
  },
  {
    path: '/Department',
    name: '部门管理',
    component: Department,
    redirect: '/Department/ItemManagement',
    children: [
      {
        path: 'ItemManagement',
        name: '部门管理',
        component: ItemManagement,
        meta:{
          isLogin: true,
          title: '部门管理'
        }
      },
      {
        path: 'Member',
        name: '成员管理',
        component: Member,
        meta:{
          isLogin: true,
          title: '成员管理'
        }
      },
    ],
    meta:{
      isLogin: true,
      title: '部门管理'
    }
  },
  {
    path: '/Accounting',
    name: '财务管理',
    component: Accounting,
    meta:{
      isLogin: true,
      title: '财务管理'
    }
  },
  {
    path: '/Goods',
    name: '物品管理',
    component: Goods,
    meta:{
      isLogin: true,
      title: '物品管理'
    }
  },
  {
    path: '/Project',
    name: '项目管理',
    component: Project,
    meta:{
      isLogin: true,
      title: '项目管理'
    }
  },
  {
    path: '/systemSet',
    name: '系统管理',
    component: systemSet,
    redirect: '/systemSet/User',
    children: [
      {
        path: 'User',
        name: '用户管理',
        component: User,
        meta:{
          isLogin: true,
          title: '用户管理'
        }
      },
      {
        path: 'Jurisdiction',
        name: '权限管理',
        component: Jurisdiction,
        meta:{
          isLogin: true,
          title: '权限管理'
        }
      },
    ],
    meta:{
      isLogin: true,
      title: '系统管理'
    }
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
