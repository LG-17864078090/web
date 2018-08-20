<template>
    <div class="photoList">
        <div class="small-img" v-for="(photo,index) in photoList" @click="getPhotoId(index)">
            <img :src="photo.src" alt="">
        </div>
    </div>

</template>

<script>
    import Axios from 'axios';
    export default {
        name: "photoList",
        data(){
            return{
                src:'',
                photoList:[],
            }
        },
        methods:{
            getPhotoId(index){
                this.$router.push('/photo/photo-detail/'+ index)
            }
        },
        created(){
            Axios.get('/data/photodata.json')
                .then((res)=>{
                    this.photoList = res.data.photoData;
                })
        }
    }


</script>

<style scoped>
    .small-img{
        width: 50%;
        float: left;
    }


</style>