<template>
  <Navbar />
  <main class="main">
    <div class="main__info">
      <div class="container">
        <h2 class="main__info-title">{{ $t("info.title") }}</h2>
        <div class="main__info-block">
          <div class="main__info-item">
            <h2 class="main__info-block_title">
              {{ $t("info.itemOne.title") }}
            </h2>
            <p class="main__info-block_text">{{ $t("info.itemOne.text") }}</p>
          </div>
          <div class="main__info-item">
            <h2 class="main__info-block_title">
              {{ $t("info.itemTwo.title") }}
            </h2>
            <p class="main__info-block_text">{{ $t("info.itemTwo.text") }}</p>
          </div>
          <div class="main__info-item">
            <h2 class="main__info-block_title">
              {{ $t("info.itemThree.title") }}
            </h2>
            <p class="main__info-block_text">{{ $t("info.itemThree.text") }}</p>
          </div>
          <div class="main__info-item">
            <h2 class="main__info-block_title">
              {{ $t("info.itemFour.title") }}
            </h2>
            <p class="main__info-block_text">{{ $t("info.itemFour.text") }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
</style>