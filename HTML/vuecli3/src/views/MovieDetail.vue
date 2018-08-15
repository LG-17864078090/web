<template>
    <div>
        <h2>电影详情页</h2>
        <!--{{$route.params.movieId}}-->
        {{msg}}
    </div>

</template>
<script>
    export default {
        data(){
            return{
                msg:this.$route.params.movieId
            }
        }
    }

</script>
<style>

</style>