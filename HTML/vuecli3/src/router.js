import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Mine from './views/Mine.vue';
import Test1 from './views/Test1.vue';
import Test2 from './views/Test2.vue';
import Test3 from './views/Test3.vue';
import Test4 from './views/Test4.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          name: 'home',
          component: Home,
      },
      {
          path: '/about',
          name: 'about',
          alias:'/othername',  //别名
          component:About
      },
      {
          path: '/mine',
          component: Mine,
          children:[
              {
                path:'test1',
                component:Test1

              },{
                  path:'test2',
                  component:Test2
              },{
                  path:'test3',
                  name:'test3',
                  component:Test3
              },{
                  path:'test4/:name/:age',
                  component:Test4
              }
          ]
      },
      {
          path:'/home',
          redirect:'/'
      },
      {
          path:'/home/:name/:age',
          redirect:'/mine/test4/:name/:age'
      }
  ],
});
