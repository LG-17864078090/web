<template>
<div>
    <ul>
        <MovieItem v-for="movie in movieList" :movie="movie" @click.native="getDetail(movie)"></MovieItem>
    </ul>
    <div class="loading" v-show="isLodging">
        <img src="../../assets/image/loading.gif" alt="">
    </div>
    <div class="end" v-show="isEnd">
        已经到底了！！!
    </div>
</div>

</template>

<script>
    import Axios from 'axios';
    import MovieItem from '@/views/movie/MovieItem.vue';
    export default {
        name: "movie",
        data(){
            return{
                movieList:[],
                isLodging:false,
                isEnd:false
            }
        },
        components:{
            MovieItem,
        },
        methods:{
            getData(){
                Axios.get('/movie.json')
                    .then((res)=>{
                        var tempArr = res.data.subjects.slice(this.movieList.length,this.movieList.length+5);
                        this.movieList = [...this.movieList,...tempArr];
                        this.isLodging = false;
                        if(tempArr<5){
                            this.isEnd = true;
                        }
                    })
            },
            getDetail(movie){
                this.$router.push('/movie/movieDetail/'+movie.id);
            }
        },
        created(){
            this.getData();
            window.onscroll = ()=>{
                var scrollTop = document.documentElement.scrollTop;
                var scrollHeight = document.documentElement.scrollHeight;
                var clientHeight = document.documentElement.clientHeight;
                if(scrollTop + clientHeight == scrollHeight && !this.isEnd){
                    this.isLodging = true;
                    var timer = setTimeout(()=>{
                        this.getData();
                    },1000)
                }

            }

        }
    }
</script>

<style scoped>
    .loading{
        text-align: center;
    }
    .end{
        text-align: center;
    }



</style>