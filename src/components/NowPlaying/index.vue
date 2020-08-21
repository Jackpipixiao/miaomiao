<template>
  <div class="movie_body" ref="movie_body">
    <myswiper :key="data_list.length">
      <div class="swiper-slide" v-for="list in data_list" :key="list.id">
        <img :src="list.img" />
      </div>
    </myswiper>
    <ul>
      <li v-for="dada in data_list" :key="dada.id" @click="gou">
        <div class="pic_show">
          <img :src="dada.listImg" />
        </div>
        <div class="info_list">
          <h2>{{dada.shortName}}</h2>
          <p>
            观众评
            <span class="grade">{{dada.sort}}</span>
          </p>
          <p>{{dada.listTitle}}</p>
          <p>{{dada.desc}}</p>
        </div>
        <div class="btn_mall">抢购</div>
      </li>
    </ul>
  </div>
</template>
<script>
import myswiper from "@/components/Swiper";
import axios from "axios";
import { Indicator, Toast } from "mint-ui";

export default {
  name: "NowPlaying",
  data() {
    return {
      data_list: [],
      pulldown: true,
    };
  },
  components: { myswiper },
  mounted() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle",
    });
    var stor = window.localStorage.getItem("data_list");
    if (stor) {
      this.data_list = JSON.parse(this.data_list);
    } else {
      axios.get("/hotel/mustTry?city=nanjing").then((res) => {
        this.data_list = res.data.data;
        window.localStorage.setItem(
          "data_list",
          JSON.stringify(this.data_list)
        );
        //加载完成后加载功能关闭
        Indicator.close();
      });
    }
  },
  methods: {
    gou() {
      Toast({
        message: "抢购成功",
        iconClass: "iconfont icon-check",
      });
    },
  },
};
</script>
<style scoped>
.swiper-slide img {
  width: 100%;
  height: 250px;
}
.movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .city_name.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}

.movie_body {
  flex: 1;
  overflow: auto;
  height: 900px;
}
.movie_body ul {
  margin: 0 12px;
  overflow: hidden;
}
.movie_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 10px;
  cursor: pointer;
}
.movie_body .pic_show {
  width: 64px;
  height: 90px;
}
.movie_body .pic_show img {
  width: 100%;
  height: 80px;
}
.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.movie_body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.movie_body .btn_mall {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.movie_body .btn_pre {
  background-color: #3c9fe6;
}
</style>