<template>
    <div>
        <h2>显示msg {{msg}}</h2>
        <!--<h2>显示msg {{$store.state.countData}}</h2>-->
    </div>
    
</template>

<script>
    export default {
        name: "ComponentB",
        props:['msg']
    }
</script>

<style scoped>

</style>