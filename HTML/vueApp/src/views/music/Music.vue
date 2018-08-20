<template>
   <div class="music">
       <aplayer :music="musicList[0]" :showLrc="true" :list="musicList" theme="deepPink" v-if="isShow">

       </aplayer>
   </div>
</template>

<script>
    import Axios from 'axios';
    import Aplayer from 'vue-aplayer'
    export default {
        name: "Music",
        data(){
            return{
                musicList:[],
                isShow:false
            }
        },
        components:{
            Aplayer,
        },
        created(){
            Axios.get('/data/musicdata.json')
                .then((res)=>{
                    res.data.musicData.forEach((elem)=>{
                        var obj = {};
                        obj.title = elem.title;
                        obj.src = elem.src;
                        obj.artist = elem.author;
                        obj.pic = elem.musicImgSrc;
                        obj.lrc = 'http://localhost:8080/'+elem.lrc;
                        this.musicList.push(obj);
                    });
                    this.isShow=true;
                })
        }
    }
</script>

<style scoped>

</style>