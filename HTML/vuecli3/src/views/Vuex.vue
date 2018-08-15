<template>
    <div>
        <!--<h1>{{xx}}</h1>-->
        <!--<h2>{{count}}</h2>-->

        <h1>str字符串长度:{{len}}</h1>
        <h1>{{msg}}</h1>
        <h2>countData:{{countData}}</h2>
        <!--<h2>加100:{{$store.getters.count100}}</h2>-->
        <h2>{{count100}}</h2>

        <!--直接修改state-->
        <!--<button @click="$store.state.countData++">+</button>-->
        <!--<button @click="$store.state.countData&#45;&#45;">-</button>-->

        <!--调用mutations-->
        <!--<button @click="$store.commit('add',2)">+</button>  &lt;!&ndash;//调用mutations传参&ndash;&gt;-->

        <!--调用action-->
        <button @click="addNum(2)">+</button>

        <button @click="$store.commit('sub')">-</button>

    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'

    export default {
        name: "Vuex",
        data(){
          return{
              str:'asddfghgjghj'
          }
        },

        // 三种方法获取store内state数据
        //1
        // computed:{
        //     count(){
        //         return this.$store.state.countData;
        //     },
        // }

        //2
        // computed:mapState({
        //     count:state=>{
        //         return state.countData;
        //     },
        //     xx: state=>state.msg
        // })

        //3
        // computed:mapState(['countData','msg'])

        methods:{
            ...mapActions(['addNum']),
            ...mapMutations(['add','sub'])
        },


        computed:{
            len(){
                return this.str.length;
            },
            ...mapState(['countData','msg']),  //对象展开运算符
            ...mapGetters(['count100'])
        }



    }
</script>

<style scoped>

</style>