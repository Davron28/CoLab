<template>
  <div class="preloader" v-if="isLoading">
    <div class="preloader__element">
      <img src="@/assets/img/preloader.svg" alt="" class="preloader-image" />
      <div class="ellipse-1 ellipse"></div>
      <div class="ellipse-2 ellipse"></div>
      <div class="ellipse-3 ellipse"></div>
      <div class="ellipse-4 ellipse"></div>
      <div class="ellipse-5 ellipse"></div>
      <div class="ellipse-6 ellipse"></div>
      <div class="ellipse-7 ellipse"></div>
      <div class="ellipse-8 ellipse"></div>
      <div class="ellipse-9 ellipse"></div>
      <div class="ellipse-10 ellipse"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 4000);
  },
};
</script>

<style>
</style>