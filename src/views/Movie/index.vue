<template>
  <div>
    <headerBar title="喵喵电影"></headerBar>
    <div class="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name" active-class="active">
          <span>大连</span>
          <i class="iconfont icon-down"></i>
        </router-link>
        <router-link tag="div" to="/movie/nowplaying" class="hot_now" active-class="active">正在热映</router-link>
        <router-link tag="div" to="/movie/comingson" class="hot_com" active-class="active">即将上映</router-link>
        <router-link tag="div" to="/movie/search" class="search_entry" active-class="active">
          <i class="iconfont icon-search"></i>
        </router-link>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>
<script>
import headerBar from "@/components/HeaderBar";
import tabbar from "../../components/TabBar";
export default {
  name: "Movie",
  components: {
    headerBar,
    tabbar,
  },
};
</script>
<style scoped>
.content .movie_menu {
  display: flex;
  justify-content: space-between;
  line-height: 40px;
}
.content .movie_menu .city_name {
  margin-left: 20px;
  text-align: center;
}
.content .movie_menu .active {
    color: red;
  border-bottom: 2px solid red;
}
.content .movie_menu .search_entry {
  line-height: 40px;
  margin-right: 20px;
  align-items: center;
}
.content .movie_menu .search_entry i {
  font-size: 24px;
  line-height: 40px;
}
</style>