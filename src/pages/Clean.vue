<template>
  <Header />
  <main class="main">
    <div class="main__clean">
      <div class="container">
        <h2 class="main__clean-title">{{ $t("clean.title") }}</h2>
        <p class="main__clean-text">{{ $t("clean.text") }}</p>
        <div class="main__clean-block">
          <router-link :to="/clean/ + item.id" class="main__clean-item" v-for="item in clean" :key="item.id">
            <img :src="item.img" alt="" class="main__clean-img" />
            <h2 class="main__clean-block_title">{{ item.title }}</h2>
            <p class="main__clean-block_text">
              {{ item.text }}
              <br />
            </p>
            <br>
            <router-link
              :to="/clean/ + item.id"
              class="main__clean-link arrow-right"
              >{{ $t("clean.more") }}</router-link
            >
          </router-link>
        </div>
      </div>
    </div>
    <MainCommunication />
  </main>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import MainCommunication from "@/components/MainCommunication.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { MainCommunication, Footer, Header },
  data() {
    return {
      clean: [
        {
          id: 1,
          title: this.$t("clean.itemOne.title"),
          text: this.$t("clean.itemOne.text"),
          price: "от 1 000 000 сум",
          img: require("@/assets/img/Азот.png"),
        },
        {
          id: 2,
          title: this.$t("clean.itemTwo.title"),
          text: this.$t("clean.itemTwo.text"),
          price: "от 1 000 000 сум",
          img: require("@/assets/img/Азот.png"),
        },
        {
          id: 3,
          title: this.$t("clean.itemThree.title"),
          text: this.$t("clean.itemThree.text"),
          price: "от 1 000 000 сум",
          img: require("@/assets/img/Аргон.png"),
        },
        {
          id: 4,
          title: this.$t("clean.itemFour.title"),
          text: this.$t("clean.itemFour.text"),
          price: "от 1 800 000 сум",
          img: require("@/assets/img/Аргон.png"),
        },
        {
          id: 5,
          title: this.$t("clean.itemFive.title"),
          text: this.$t("clean.itemFive.text"),
          price: "от 1 800 000 сум",
          img: require("@/assets/img/Ацитилен.png"),
        },
        {
          id: 6,
          title: this.$t("clean.itemSix.title"),
          text: this.$t("clean.itemSix.text"),
          price: "от 3 500 000 сум",
          img: require("@/assets/img/Ацитилен.png"),
        },
        {
          id: 7,
          title: this.$t("clean.itemSeven.title"),
          text: this.$t("clean.itemSeven.text"),
          price: "от 3 500 000 сум",
          img: require("@/assets/img/Водород.png"),
        },
        {
          id: 8,
          title: this.$t("clean.itemEight.title"),
          text: this.$t("clean.itemEight.text"),
          price: "от 3 500 000 сум",
          img: require("@/assets/img/Водород.png"),
        },
        {
          id: 9,
          title: this.$t("clean.itemNine.title"),
          text: this.$t("clean.itemNine.text"),
          price: "от 3 500 000 сум",
          img: require("@/assets/img/Водород.png"),
        },
        {
          id: 10,
          title: this.$t("clean.itemTen.title"),
          text: this.$t("clean.itemTen.text"),
          price: "от 3 500 000 сум",
          img: require("@/assets/img/Воздух.png"),
        },
        {
          id: 11,
          title: this.$t("clean.itemEleven.title"),
          text: this.$t("clean.itemEleven.text"),
          price: "от 3 500 000 сум",
          img: require("@/assets/img/Гелий.png"),
        },
        {
          id: 12,
          title: this.$t("clean.itemTwelve.title"),
          text: this.$t("clean.itemTwelve.text"),
          price: "от 3 500 000 сум",
          img: require("@/assets/img/Гелий.png"),
        },
        {
          id: 13,
          title: this.$t("clean.itemThirteen.title"),
          text: this.$t("clean.itemThirteen.text"),
          price: "от 3 500 000 сум",
          img: require("@/assets/img/Гелий.png"),
        },
        {
          id: 14,
          title: this.$t("clean.itemFourteen.title"),
          text: this.$t("clean.itemFourteen.text"),
          price: "от 3 500 000 сум",
          img: require("@/assets/img/Закись.png"),
        },
        {
          id: 15,
          title: this.$t("clean.itemFifteen.title"),
          text: this.$t("clean.itemFifteen.text"),
          price: "от 3 500 000 сум",
          img: require("@/assets/img/Закись.png"),
        },
        {
          id: 16,
          title: this.$t("clean.itemSixteen.title"),
          text: this.$t("clean.itemSixteen.text"),
          price: "от 3 500 000 сум",
          img: require("@/assets/img/Метан.png"),
        },
        {
          id: 17,
          title: this.$t("clean.itemSeventeen.title"),
          text: this.$t("clean.itemSeventeen.text"),
          price: "от 3 500 000 сум",
          img: require("@/assets/img/Метан.png"),
        },
        {
          id: 18,
          title: this.$t("clean.itemEighteen.title"),
          text: this.$t("clean.itemEighteen.text"),
          price: "от 3 500 000 сум",
          img: require("@/assets/img/Кислород.png"),
        },
        {
          id: 19,
          title: this.$t("clean.itemNineteen.title"),
          text: this.$t("clean.itemNineteen.text"),
          price: "от 3 500 000 сум",
          img: require("@/assets/img/Углекислый.png"),
        },
      ],
    };
  },
};
</script>

<style>
</style>

