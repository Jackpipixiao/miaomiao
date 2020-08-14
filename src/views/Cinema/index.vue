<template>
  <div>
    <headerBar title="喵喵影院"></headerBar>
    <div id="content">
      <div class="cinema_menu">
        <div class="city_switch">
          全城
          <i class="iconfont icon-down"></i>
        </div>
        <div class="brand_switch">
          品牌
          <i class="iconfont icon-down"></i>
        </div>
        <div class="feature_switch">
          特色
          <i class="iconfont icon-down"></i>
        </div>
      </div>
      <cilist></cilist>
    </div>
    <tabbar></tabbar>
  </div>
</template>
<script>
import tabbar from "@/components/TabBar";
import headerBar from "@/components/HeaderBar";
import cilist from "@/components/CiList";
export default {
  name: "Cinema",
  components: {
    tabbar,
    headerBar,
    cilist,
  },
};
</script>
<style scoped>
#content .cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
</style>