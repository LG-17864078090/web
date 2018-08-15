<template>
    <div>
        <ul>
            <li v-for="movie in movieList" @click="showDetail(movie)">
                <!--<router-link :to="'/movieDetail/'+movie.id">-->
                    片名:{{movie.name}},评分{{movie.score}}
                <!--</router-link>-->

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Movie",
        data(){
            return{
                movieList:[
                    {
                        id:1,
                        name:'movie1',
                        score:8.1
                    },{
                        id:2,
                        name:'movie2',
                        score:7.4
                    },{
                        id:3,
                        name:'movie3',
                        score:6.8
                    }
                ]
            }
        },
        methods:{
            showDetail(movie){
                this.$router.push('/movieDetail/'+(movie.id));//定义跳转到该路径
            }
        }
    }
</script>

<style scoped>

</style>