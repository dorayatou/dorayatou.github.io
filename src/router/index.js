// 路由规则配置
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
// import User from '../views/User.vue';

const User = {
  template: '<div>User</div>'
};
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/user/:id',
      name: 'user',
      component: User
    }
  ]
});