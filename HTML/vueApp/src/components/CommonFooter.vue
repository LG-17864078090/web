<template>
    <ul class="footer" :style="{background:backgroundColor}">
        <li v-for="menu in menuList" >
            <router-link :to="menu.path" @click.native="changeMenu(menu)">{{menu.name}}</router-link>
        </li>
    </ul>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default {
        name: "CommonFooter",
        props:['menuList'],
        computed:{
            ...mapState(['backgroundColor'])
        },

        methods:{
            ...mapActions(['changeMenu'])
        },
    }
</script>

<style scoped lang="scss">
    .footer{
        position: fixed;
        bottom: 0;
        height: 1rem;
        line-height: 1rem;
        width: 100%;
        background: rgb(33, 150, 243);
        display: flex;
    }
    li{
        flex-grow: 1;
        text-align: center;
        a{
            color: #cccccc;
            outline: none;
            font-size: 18px;
            &.router-link-active{
                color: white;
            }
        }
    }



</style>