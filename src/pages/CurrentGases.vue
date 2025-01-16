<template>
  <Navbar />
  <main class="main">
    <div class="container">
      <div class="main__gases-current">
        <h2 class="main__gases-current_title">{{ getGases.title }}</h2>
        <div class="main__gases-current_left">
          <img :src="getGases.img" alt="" />
        </div>
        <div class="main__gases-current_right">
          <p class="main__gases-current_text">
            {{ getGases.info }}
          </p>
        </div>
      </div>
      <router-link to="/gases" class="main__clean-current_back margin-bottom">{{
          $t("clean.back")
        }}</router-link>
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
  data() {
    return {
      gases: [
        {
          id: 1,
          img: require("@/assets/img/Хроматография.webp"),
          title: this.$t("gases.gasesOne.title"),
          text: this.$t("gases.gasesOne.text"),
          info: this.$t("gases.gasesOne.info")
        },
        {
          id: 2,
          img: require("@/assets/img/Спектрометрия.webp"),
          title: this.$t("gases.gasesTwo.title"),
          text: this.$t("gases.gasesTwo.text"),
          info: this.$t("gases.gasesTwo.info")
        },
        {
          id: 3,
          img: require("@/assets/img/gases-3.png"),
          title: this.$t("gases.gasesThree.title"),
          text: this.$t("gases.gasesThree.text"),
          info: this.$t("gases.gasesThree.info")
        },
      ],
      currentId: null,
    };
  },
  created() {
    this.currentId = this.$route.params.id;
  },
  computed: {
    getGases() {
      return this.gases.find((gases) => gases.id == this.currentId);
    },
  },
};
</script>

<style>
</style>