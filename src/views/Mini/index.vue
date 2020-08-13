<template>
  <div>
      <headerBar title="我的电影"></headerBar>
      <login></login>
    <tabbar></tabbar>
  </div>
</template>
<script>
import tabbar from '@/components/TabBar'
import headerBar from '@/components/HeaderBar'
import login from '@/components/Login'
export default {
    name:'Mini',
    components: {
        tabbar,headerBar,login
    }
}
</script> 
<style scoped>
</style>>
