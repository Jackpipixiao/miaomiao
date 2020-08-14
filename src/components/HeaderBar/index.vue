<template>
    <header id="header">
        <h2>{{title}}</h2>
    </header>
</template>
<script>
export default {
    name:'HeaderBar',
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
    line-height: 40px;
    width: 100%;
    background-color: red;
    color: #fff
}
#header h2{
    text-align: center;
}
</style>