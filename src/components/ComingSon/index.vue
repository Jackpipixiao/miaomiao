<template>
  <div class="movie_body">
      <ul>
        <li v-for="item in com_list" :key="item.id" @click="buy">
          <div class="pic_show">
            <img :src="item.img" />
          </div>
          <div class="info_list">
            <h2>{{item.shortName}}</h2>
            <p>
              <span class="person">{{item.grassCount}}</span> 人想看
            </p>
            <p>{{item.listTitle}}</p>
            <p>{{item.desc}}</p>
          </div>
          <div class="btn_pre">预订</div>
        </li>
      </ul>
  </div>
</template>
<script>
import axios from "axios";
import { Indicator, Toast } from "mint-ui";

export default {
  name: "ComingSon",
  data() {
    return {
      com_list: [],
    };
  },
  mounted() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle",
    });
    axios.get("/hotel/mustTry?city=nanjing").then((res) => {
      this.com_list = res.data.data;
      Indicator.close();
    });
  },
  methods: {
    buy() {
      Toast({
        message: "预定成功",
        iconClass: "iconfont icon-check",
      });
    },
    loadMore() {
      console.log("moddre");
      setTimeout(() => {
        this.$refs.scroll.finishPullUp();
      }, 2000);
    },
    contentScroll(option) {
      console.log(option);
    },
    toTop() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
  },
};
</script>
<style scoped>
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
.movie_body .btn_mall,
.movie_body .btn_pre {
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