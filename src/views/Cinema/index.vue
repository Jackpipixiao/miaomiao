<template>
  <div>
      <headerBar title="我的影院"></headerBar>
      <cilist></cilist>
    <tabbar></tabbar>
  </div>
</template>
<script>
import tabbar from '@/components/TabBar'
import headerBar from '@/components/HeaderBar'
import cilist from '@/components/CiList'
export default {
    name:'Mini',
    components: {
        tabbar,headerBar,cilist
    }
}
</script>