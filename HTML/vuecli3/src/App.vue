<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/mine">Mine</router-link> |
      <!--<router-link to="/mine/test1">子路由1</router-link> |-->
      <!--<router-link to="/mine/test2">子路由2</router-link> |-->
      <router-link to="/home">重定向</router-link> |
      <router-link to="/home/wangwu/20">重定向参数</router-link> |
      <router-link to="/othername">别名</router-link> |
      <router-link to="/movie">电影列表</router-link>

    </div>
    <transition name="fade">
        <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

  .fade-enter{
    transform: translate(-100%);
  }
  .fade-enter-active{
    transition: transform .5s linear;
  }
  .fade-enter-to{
    transform: translate(0%);
  }
  /*.fade-leave{*/
    /*opacity: 1;*/
  /*}*/
  /*.fade-leave-active{*/
    /*transition:opacity 1s linear;*/
  /*}*/
  /*.fade-leave-to{*/
    /*opacity: 0;*/
  /*}*/

</style>
