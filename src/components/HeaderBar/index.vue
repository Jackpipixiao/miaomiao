<template>
    <header id="header">
        <h1>{{title}}</h1>
    </header>
</template>
<script>
export default {
    name:'headerBar',
    props: {
        title:{
            type:String,
            default:"喵喵电影"
        }
    }
}
</script>
<style lang="scss" scoped>
#header{
    height: 40px;
    width: 100%;
    background-color: red;
    color: #fff
}
#header h1{
    text-align: center;
}
</style>