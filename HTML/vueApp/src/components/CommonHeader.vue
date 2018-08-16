<template>
    <div class="header" :style="{background:backgroundColor}">
        <span class="header-home">首页</span>
        <h2 class="header-title">{{title}}</h2>
        <!---->
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default {
        name: "CommonHeader",
        computed:{
            ...mapState(['backgroundColor','title'])
        },
    }
</script>

<style scoped lang="scss">
    .header{
        position: fixed;
        top: 0;
        width: 100%;
        height: 1rem;
        background:rgb(33, 150, 243);
        line-height: 1rem;
        color: white;
        &-title{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        &-home{
            margin-left: 8px;
            font-size: 16px;
        }


    }


</style>