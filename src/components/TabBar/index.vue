<template>
  <footer>
    <ul>
    <router-link to="/movie" tag="li" activeClass="mystyle">
      <i></i>
      <p>电影院</p>
    </router-link>
    <router-link to="/cinema" tag="li" activeClass="mystyle">
      <i></i>
      <p>电影</p>
    </router-link>
    <router-link to="/mini" tag="li" activeClass="mystyle">
      <i></i>
      <p>我的</p>
    </router-link>
    </ul>
  </footer>
</template>
<script>
export default {
  name: 'tabBar'
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
  li{
    flex: 1;
    text-align: center;
    line-height: 50px;
    border: 1px solid #eee;
  }
}
.mystyle{
  color:orange
}
</style>
