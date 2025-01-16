<template setup>
  <div v-bind="$attrs">
    <Preloader v-if="isLoading"/>
    <Router-view v-else></Router-view>
  </div>
</template>

<script>
import Preloader from "@/components/Preloader.vue";
import { loadingState } from "@/main.js";

export default {
  inheritAttrs: false,
  components: {
    Preloader,
  },
  computed: {
    isLoading() {
      return loadingState.isLoading;
    },
  },
};
</script>

<style>
</style>