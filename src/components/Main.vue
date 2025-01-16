<template>
  <main class="main">
    <MainAbout/>
    <MainCommunication/>
    <MainProduct/>
    <MainSlider/>
  </main>
</template>

<script>
import MainAbout from '@/components/MainAbout.vue'
import MainCommunication from '@/components/MainCommunication.vue'
import MainProduct from '@/components/MainProduct.vue'
import MainSlider from '@/components/MainSlider.vue'
export default {
    components: {
        MainAbout,
        MainCommunication,
        MainProduct,
        MainSlider,
    }
}
</script>

<style>

</style>