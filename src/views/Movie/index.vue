<template>
    <div>
        <headerBar title="喵喵电影"></headerBar>
        <div class="content">
            <div class="movie_menu">
                <div class="city_name">
                    <span>大连</span><i class="iconfont icon-down"></i>
                </div>
                <div class="hot_swtich">
                    <div class="hot_item">正在热映</div>
                    <div class="hot_item">即将上映</div>
                </div>
                <div class="search_entry">
                    <i class="iconfont icon-search"></i>
                </div>
            </div>
        </div>
        <tabbar></tabbar>
    </div>
</template>
<script>
import headerBar from '@/components/HeaderBar'
import tabbar from '../../components/TabBar'
export default {
    name:'Movie',
    components: {
        headerBar,tabbar
    }
}
</script>
<style lang="scss">

</style>