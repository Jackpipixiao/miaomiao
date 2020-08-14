<template>
  <footer>
    <ul>
    <router-link to="/movie" tag="li" activeClass="mystyle">
      <i class="iconfont icon-activity"></i>
      <p>电影院</p>
    </router-link>
    <router-link to="/cinema" tag="li" activeClass="mystyle">
      <i class="iconfont icon-home"></i>
      <p>电影</p>
    </router-link>
    <router-link to="/mini" tag="li" activeClass="mystyle">
      <i class="iconfont icon-ren"></i>
      <p>我的</p>
    </router-link>
    </ul>
  </footer>
</template>
<script>
export default {
  name: 'TabBar'
}
</script>
<style lang="scss" scoped>
footer{
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
}
ul{
  display: flex;
  background-color: #fff;
  li{
    flex: 1;
    text-align: center;
    height: 50px;
    border: 1px solid #eee;
    font-size: 14px;
    i{
      font-size: 20px;
    }
  }
}
.mystyle{
  color:red
}
</style>
