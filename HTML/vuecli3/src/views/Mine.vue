<template>
    <div>
        <h1>这个是我的页面</h1>
        <router-link to="/mine/test1">子路由1</router-link> |
        <router-link to="/mine/test2">子路由2</router-link> <br/>

        <router-link :to="{name:'test3',params:{name:'zhangsan',age:13}}">对象传参</router-link> |
        <router-link to="/mine/test4/lisi/12">URL传参</router-link>
        <router-view/>

    </div>
</template>
<script>
    export default{

    }

</script>
<style lang="scss">
    a {
        display: inline-block;
        margin: 10px 5px;
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }

</style>