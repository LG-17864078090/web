<template>
    <div class="movie-detail">
        <div class="detail-img">
            <img :src="movieDetail.images.small" alt="">
        </div>
        <h3>{{movieDetail.title}}</h3>
        <p class="id">id:{{movieDetail.id}}</p>
        <p class="director">导演:{{movieDetail.directors[0].name}}</p>
        <p>简介&nbsp;&nbsp;&nbsp;{{movieDetail.summary}}</p>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        name: "MovieDetail",
        data(){
            return{
                movieDetail:{},
                show:true
            }
        },
        mounted(){
            var movieId = this.$route.params.id;
            Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/'+movieId)
                .then((res)=>{
                    this.movieDetail = res.data;
                    this.show=true;
                })
        }
    }
</script>

<style scoped>
    .movie-detail{
        background: rgba(0,0,0,0.4);

    }
    .detail-img img{
        width: 100%;
        height: 6rem;
        background: rgba(0,0,0,0.4);
    }
    .movie-detail h3{
        text-align: center;
        color: blue;
    }
    .movie-detail .id,.director{
        text-align: center;
    }
</style>