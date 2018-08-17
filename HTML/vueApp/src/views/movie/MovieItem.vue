<template>
    <li class="movieList">
        <div class="movie-img">
            <img :src="movie.images.small" alt="">
        </div>
        <div class="movie-desc">
            <h3>{{movie.title}}</h3>
            <p>评分: <span class="score">{{movie.rating.average}}</span></p>
            <p>主演: <span v-for="actor in movie.casts">{{actor.name}} &nbsp;</span></p>
            <p>分类: <span v-for="label in movie.genres">{{label}} &nbsp;</span></p>
        </div>
    </li>
</template>

<script>
    export default {
        props:['movie']
    }
</script>

<style scoped>
    .movieList{
        padding: 10px;
        display: flex;
        border-bottom: 1px solid #cccccc;
    }
    .movieList .movie-img{
        flex-grow: 1;
        width: 0;

    }
    .movieList .movie-desc{
        flex-grow: 3;
        width: 0;
        margin-left: 20px;
    }
    .movieList .movie-desc h3,p{
        white-space:nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
    }
    .movieList .movie-desc .score{
        color: orange;
    }


</style>