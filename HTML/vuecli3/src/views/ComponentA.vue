<template>
    <div>
        <h1>我是一个ComponentA组件</h1>
        <component-b :msg="count"></component-b>
        <component-c @fadd="Add"></component-c>
        {{count}}
    </div>
    
</template>

<script>
    import ComponentB from '@/views/ComponentB.vue';
    import ComponentC from '@/views/ComponentC.vue';

    export default {
        name: "ComponentA",
        data(){
          return{
              count:0
          }
        },
        components:{
            ComponentB,
            ComponentC,
        },
        methods:{
            Add(){
               this.count++;
            }
        }
    }
</script>

<style scoped>

</style>