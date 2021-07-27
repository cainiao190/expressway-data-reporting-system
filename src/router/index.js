import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import GetPassword from '../views/GetPassword.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/regist",
    name: "regist",
    component: Regist
  },
  {
    path: '/getPassword',
    name: "getPassword",
    component: GetPassword
  }
]

const router = new VueRouter({
  routes
})

export default router