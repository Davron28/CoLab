<template>
  <Navbar />
  <header class="header">
    <div class="header__content">
      <img src="@/assets/img/header-content-left.svg" alt="" class="header__content-left_bg">
      <div class="container header__content-box">
        <div class="header__content-left">
          <h1 class="header__content-title">
            {{ $t("headerContent.title") }}
          </h1>
          <p class="header__content-text">
            {{ $t("headerContent.info") }}
          </p>
          <div class="header__content-block">
            <div class="header__content-block_item">
              <h2 class="header__content-year">5+</h2>
              <p class="header__content-year_descr">
                {{ $t("headerContent.fiveYear") }}
              </p>
            </div>
            <div class="header__content-block_item">
              <h2 class="header__content-clients">100+</h2>
              <p class="header__content-clients_descr">
                {{ $t("headerContent.clients") }}
              </p>
            </div>
          </div>
          <a href="/clean" class="header__content-btn icon__right">{{
            $t("headerContent.more")
          }}</a>
        </div>
        <div class="header__content-right">
          <img src="@/assets/img/header-content.png" alt="" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
</style>