<template>
    <div class="movie">
        <ul>
            <li v-for="movie in movieList" class="movieList">
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
        </ul>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        name: "movie",
        data(){
            return{
                movieList:[]
            }
        },
        created(){
            Axios.get('/movie.json')
                .then((res)=>{
                    this.movieList = res.data.subjects;
                    console.log(this.movieList);
            })
        }
    }
</script>

<style scoped>
    .movie{
        color: black;
    }
    .movie .movieList{
        padding: 10px;
        display: flex;
        border-bottom: 1px solid #cccccc;
    }
    .movie .movieList .movie-img{
        flex-grow: 1;
        width: 0;

    }
    .movie .movieList .movie-desc{
        flex-grow: 3;
        width: 0;
        margin-left: 20px;
    }
    .movie .movieList .movie-desc h3,p{
        white-space:nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
    }

    .movie .movieList .movie-desc .score{
        color: orange;
    }


</style>