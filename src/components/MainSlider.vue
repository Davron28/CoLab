<template>
  <div class="main__slider">
    <div class="container">
      <h2 class="main__slider-title">{{ $t("mainSlider.title") }}</h2>
      <p class="main__slider-text">
        {{ $t("mainSlider.text") }}
      </p>
      <div class="slider">
        <CarouselItem :clients="clients" />
      </div>
    </div>
  </div>
  <MainCommunication />
</template>

<script>
import CarouselItem from "@/components/CarouselItem.vue";
import MainCommunication from "@/components/MainCommunication.vue";
export default {
  components: {
    CarouselItem,
    MainCommunication
  },
  data() {
    return {
      clients: [
        {
          id: 1,
          title: this.$t('mainSlider.slideOne.title'),
          text: this.$t('mainSlider.slideOne.text'),
          img: require("@/assets/img/client-1.png"),
        },
        {
          id: 2,
          title: this.$t('mainSlider.slideTwo.title'),
          text: this.$t('mainSlider.slideTwo.text'),
          img: require("@/assets/img/client-2.png"),
        },
        {
          id: 3,
          title: this.$t('mainSlider.slideThree.title'),
          text: this.$t('mainSlider.slideThree.text'),
          img: require("@/assets/img/client-3.png"),
        },
        {
          id: 4,
          title: this.$t('mainSlider.slideFour.title'),
          text: this.$t('mainSlider.slideFour.text'),
          img: require("@/assets/img/client-4.png"),
        },
        {
          id: 5,
          title: this.$t('mainSlider.slideFive.title'),
          text: this.$t('mainSlider.slideFive.text'),
          img: require("@/assets/img/client-5.png"),
        },
        {
          id: 6,
          title: this.$t('mainSlider.slideSix.title'),
          text: this.$t('mainSlider.slideSix.text'),
          img: require("@/assets/img/client-6.png"),
        },
        {
          id: 7,
          title: this.$t('mainSlider.slideSeven.title'),
          text: this.$t('mainSlider.slideSeven.text'),
          img: require("@/assets/img/client-7.png"),
        },
      ],
    };
  },
};
</script>

<style>
</style>