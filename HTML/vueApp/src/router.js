import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/movie/MovieHome.vue';
import Music from './views/music/Music.vue';
import Ebook from './views/ebook/Ebook.vue';
import Photo from './views/photo/Photo.vue';
import MovieDetail from './views/movie/MovieDetail.vue';
import MovieHome from './views/movie/MovieHome.vue';



Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path:'/',
          redirect:'/movie/movie-home',
          component:Movie
      },
      {
        path:'/movie',
        component:Movie,
          children:[{
              path:'/movieDetail/:id',
              name:'moviedetail',
              component:MovieDetail
          },{
              path:'movie-home/',
              name:'moviehome',
              component:MovieHome
          }]
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
          component:Photo
      },
  ],
});
