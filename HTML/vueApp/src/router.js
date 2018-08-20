import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/movie/Movie.vue';
import MovieDetail from './views/movie/MovieDetail.vue';
import MovieHome from './views/movie/MovieHome.vue';
import Music from './views/music/Music.vue';
import Ebook from './views/ebook/Ebook.vue';
import Photo from './views/photo/Photo.vue';
import PhotoDetail from './views/photo/PhotoDetail.vue';
import PhotoList from './views/photo/PhotoList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path:'/',
          redirect:'/movie/moviehome',
      },
      {
        path:'/movie',
        name:'movie',
          redirect:'/movie/moviehome',

          component:Movie,
          children:[{
              path:'moviehome',
              name:'moviehome',
              component:MovieHome
          },{
              path:'moviedetail/:id',
              name:'movieDetail',
              component:MovieDetail
          },]
      },

      {
          path:'/music',
          component:Music
      },
      {
          path:'/ebook',
          component:Ebook
      },
      {
          path:'/photo',
          redirect:'/photo/photo-list'
      },
      {
          path:'/photo',
          component:Photo,
          children:[{
              path:'photo-detail/:index',
              component:PhotoDetail
          },{
              path:'photo-list',
              component:PhotoList
          }]
      },
  ],
});
