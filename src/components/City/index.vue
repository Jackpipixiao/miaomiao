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
      <div class="city_sort">
        <div v-for="item in city_list" :key="item">
          <h2>{{item.title}}</h2>
          <ul>
            <li v-for="ltem in city_list" :key="ltem">{{ltem.lists}}</li>
          </ul>
        </div>
        <div></div>
      </div>
      <div class="city_index">
        <ul>
          <li>A</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "City",
  data() {
    return {
      city_list: [],
    };
  },
  mounted() {
    axios.get("../../../public/json/city.json").then((res) => {
      this.city_list = res.city;
    });
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