<template>
    <div class="main__about">
        <div class="container">
            <div class="main__about-top">
                <h2 class="main__about-title">{{ $t("mainAbout.companyTitle") }}</h2>
                <p class="main__about-text">{{ $t("mainAbout.companyInfo") }}</p>
            </div>
            <div class="main__about-bottom">
                <div class="main__about-item">
                    <img src="@/assets/img/about-1.png" alt="">
                    <h3 class="main__about-item_title">{{ $t("mainAbout.companyTitleOne") }}</h3>
                    <p class="main__about-item_text">{{ $t("mainAbout.companyTextOne") }}</p>
                </div>
                <div class="main__about-item">
                    <img src="@/assets/img/about-2.png" alt="">
                    <h3 class="main__about-item_title">{{ $t("mainAbout.companyTitleTwo") }}</h3>
                    <p class="main__about-item_text">{{ $t("mainAbout.companyTextTwo") }}</p>
                </div>
                <div class="main__about-item">
                    <img src="@/assets/img/about-1.png" alt="">
                    <h3 class="main__about-item_title">{{ $t("mainAbout.companyTitleThree") }}</h3>
                    <p class="main__about-item_text">{{ $t("mainAbout.companyTextThree") }}</p>
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