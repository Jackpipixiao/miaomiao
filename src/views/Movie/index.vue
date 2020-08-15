<template>
  <div>
    <headerBar title="喵喵电影"></headerBar>
    <div id="content">
      <div class="movie_menu" :class="isFixed?'fiexd':''">
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
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
  data(){
    return{
      isFixed:false
    }
  },
  mounted(){
    window.onscroll=this.handleScroll
  },
  beforeDestroy(){
    window.onscroll=null
  },
  methods:{
    handleScroll(){
      if(document.documentElement.scrollTop>='200'){
        this.isFixed=true
      }else{
        this.isFixed=false
      }
    }
  }
};
</script>
<style scoped>
.fiexd{
  position: fixed;
  top: 0;
  left: 0;
  height: 40px;
  width: 100%;
  font-weight: 700;
  background-color: #eee;
  z-index: 99;
}
#content .movie_menu {
  display: flex;
  justify-content: space-around;
  line-height: 40px;
}
#content .movie_menu .city_name {
  text-align: center;
}
#content .movie_menu .active {
  color: red;
  border-bottom: 2px solid red;
}
#content .movie_menu .search_entry {
  line-height: 40px;
  align-items: center;
}
#content .movie_menu .search_entry i {
  font-size: 24px;
  line-height: 40px;
}
</style>