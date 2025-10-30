<template>
    <h1>这里是{{msg}}</h1>
    <slot></slot>
</template>
<script>
export default{
        name:'vue2',
        data(){
            return{
                msg:'vue2页面',
            }
        }
    }

</script>

<style>
</style>