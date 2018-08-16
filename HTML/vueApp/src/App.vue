<template>
  <div id="app">
    <CommonHeader></CommonHeader>

      <router-view class="center"/>

    <CommonFooter :menuList="menuList"></CommonFooter>
  </div>
</template>
<script>

    import CommonHeader from '@/components/CommonHeader.vue';
    import CommonFooter from '@/components/CommonFooter.vue';
    export default {
        components:{
            CommonHeader,
            CommonFooter
        },
        data(){
            return{
               menuList:[{
                   name:'电影',
                   path:'/movie',
                   title:'Movie',
                   backgroundColor: 'rgb(33, 150, 243)',
               },{
                   name:'音乐',
                   path:'/music',
                   title:'Music',
                   backgroundColor: 'deepPink',
               },{
                   name:'书籍',
                   path:'/ebook',
                   title:'Book',
                   backgroundColor: ' #00b262',
               },{
                   name:'图片',
                   path:'/photo',
                   title:'Photo',
                   backgroundColor: 'fuchsia',
               }]
            }
        },
        created(){
            console.log();
            var menu = this.menuList.filter((elem)=>{
                return elem.path==this.$route.path;
            });
            this.$store.dispatch('changeMenu',menu[0])
        }
    }
</script>

<style lang="scss">
  .center{
    margin: 1rem 0;
  }
</style>
