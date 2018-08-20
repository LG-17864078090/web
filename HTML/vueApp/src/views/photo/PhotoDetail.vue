<template>
    <router-link to="/photo">
        <v-touch class="photo-detail"  @swipeleft="left" @swiperight="right">
            <img :src="'/img/'+($store.state.index*1+1)+'.jpg'" alt="">
        </v-touch>
    </router-link>
</template>

<script>
    export default {
        name: "PhotoDetail",
        methods:{
            left(){
                if(this.$store.state.index<24){
                    this.$store.state.index++;
                }

            },
            right(){
                if(this.$store.state.index>0)
                this.$store.state.index--;
            }

        },
        mounted(){
           this.$store.state.index =  this.$route.params.index;
        }
    }
</script>

<style scoped>
    .photo-detail{


    }
</style>