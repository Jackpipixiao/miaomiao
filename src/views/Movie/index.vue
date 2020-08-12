<template>
    <div>
        <headerBar title="喵喵电影"></headerBar>
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