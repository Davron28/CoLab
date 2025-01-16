<template>
  <div class="main__product">
    <div class="container">
        <h2 class="main__product-title">{{ $t('mainProduct.title') }}</h2>
        <p class="main__product-text">{{ $t('mainProduct.text') }}</p>
        <div class="main__product-block">
            <div class="main__product-item">
                <img src="@/assets/img/clean-gases.png" alt="">
                <h3 class="main__product-block_title">{{ $t('mainProduct.titleTwo') }}</h3>
                <p class="main__product-block_text">{{ $t('mainProduct.textTwo') }}</p>
                <router-link to="/clean" class="main__product-block_link">{{ $t('mainProduct.more') }}</router-link>
            </div>
            <div class="main__product-item">
                <img src="@/assets/img/оборудование.webp" alt="">
                <h3 class="main__product-block_title">{{ $t('mainProduct.titleThree') }}</h3>
                <p class="main__product-block_text">{{ $t('mainProduct.textThree') }}</p>
                <router-link to="/clean" class="main__product-block_link">{{ $t('mainProduct.more') }}</router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>