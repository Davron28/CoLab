<template>
  <swiper
    :modules="modules"
    :slides-per-view="3"
    navigation
    :loop="loop"
    :space-between="50"
    :breakpoints="{
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1260: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }"
  >
    <swiper-slide v-for="client in clients" :key="client.id">
      <div class="carousel__item">
        <div class="main__slider-slide">
          <div class="main__slider-slide_top">
            <img class="main__slider-slide_img" :src="client.img" alt="" />
            <h2 class="main__slider-slide_title">{{ client.title }}</h2>
          </div>
          <p class="main__slider-slide_text">{{ client.text }}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "@/assets/style/navigation.scss";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    clients: {
      typeof: Array,
      require: true,
    },
  },
  data() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    };
  },
};
</script>

<style>
</style>