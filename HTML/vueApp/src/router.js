import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/movie/Movie.vue';
import Music from './views/music/Music.vue';
import Ebook from './views/ebook/Ebook.vue';
import Photo from './views/photo/Photo.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path:'',
          component:Movie
      },
      {
        path:'/movie',
        component:Movie
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
      }

  ],
});
