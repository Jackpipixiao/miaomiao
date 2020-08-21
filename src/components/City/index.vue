<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot clearfix">
        <h2>热门城市</h2>
        <ul>
          <li>上海</li>
          <li>北京</li>
          <li>广州</li>
          <li>杭州</li>
          <li>深圳</li>
          <li>南京</li>
        </ul>
      </div>
      <mt-index-list>
        <mt-index-section v-for="item in city_list" :key="item.title" :index="item.title">
          <mt-cell v-for="i in item.lists" :key="i" :title="i"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Indicator } from "mint-ui";
export default {
  name: "City",
  data() {
    return {
      city_list: [],
    };
  },
  mounted() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle",
    });
    //把后台数据存储到本地，避免每次刷新向后台发出请求
    //mounted生命周期加载时存储到本地
    var storage = localStorage.getItem("city_list");
    if (storage) {
      this.city_list = JSON.parse(this.city_list);
      console.log(this.city_list);
    } else {
      //拿到mock引入的本地json，实现indexlist功能
      axios.get("/city.php").then((res) => {
        Indicator.close();
        var status = res.statusText;
        if (status == "OK") {
          console.log(res);
          this.city_list = res.data.city;
          // ajax拿到后台数据将json字符串数据存到city_list中,因为拿数据时只能接受字符串
          window.localStorage.setItem(
            "city_list ",
            JSON.stringify(this.city_list)
          );
        }
      });
    }
  },
};
</script>
<style scoped>
.city_body {
  margin-top: 45px;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.city_body .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
.city_body .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}

.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}

.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
  line-height: 30px;
}
.city_body .city_index {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
}
.clearfix::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>