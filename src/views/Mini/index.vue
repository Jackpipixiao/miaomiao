<template>
  <div>
      <headerBar title="我的电影"></headerBar>
    <tabbar></tabbar>
  </div>
</template>
<script>
import tabbar from '@/components/TabBar'
import headerBar from '@/components/HeaderBar'
export default {
    name:'Mini',
    components: {
        tabbar,headerBar
    }
}
</script>