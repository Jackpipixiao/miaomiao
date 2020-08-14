<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  mounted() {
    new Swiper(".filmswiper", {
      autoplay: {
        delay: 2000,
        //用户操作swiper之后，是否禁止autoplay。默认为true：停止，目前改为不停止
        disableOnInteraction: false,
      },
      loop: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }, 
    });
  },
};
</script>
<style scoped>
/* 可以通过swiper里的类修改默认样式，目前修改的是小圆点的位置 */
.swiper-pagination{
  text-align: right;
}
</style>
