<template>
  <div class="container main__communication-none">
    <div class="main__communication">
        <h2 class="main__communication-title">{{ $t("mainCommunication.title") }}</h2>
        <div class="main__communication-right">
            <h2 class="main__communication-right_title">{{ $t("mainCommunication.titleTwo") }}</h2>
            <p class="main__communication-right_text">{{ $t("mainCommunication.text") }}</p>
            <form class="main__communication-right_form">
                <div class="main__communication-right_block">
                  <input type="email" class="main__communication-right_input" placeholder="Email">
                  <span class="icon__one"></span>
                </div>
                <div class="main__communication-right_block">
                  <input type="text" class="main__communication-right_input" :placeholder="$t('mainCommunication.phone')">
                  <span class="icon__two"></span>
                </div>
                <button class="main__communication-right_btn">{{ $t('mainCommunication.send') }}</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>