import Todo from '../todo/Todo' // 当前还不能使用懒加载，会报错
import Login from '../login/Login'

const routes = [
  {
    path: '/Todo',
    component: Todo
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '*',
    redirect: '/Login'
  }
]

export default routes
