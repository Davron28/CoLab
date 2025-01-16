<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__block">
        <div class="footer__block-logo">
          <a href="/" class="footer__logo"
            ><img src="@/assets/img/logo-2.png" alt=""
          /></a>
          <p class="footer__block-text">{{ $t("footer.reserved") }}</p>
        </div>
        <ul class="footer__block-list">
          <li><router-link to="/" class="footer__block-link" exact-active-class="active-link-footer">{{ $t("footer.company") }}</router-link></li>
          <li>
            <router-link to="/clean" class="footer__block-link" exact-active-class="active-link-footer">{{ $t("footer.clean") }}</router-link>
          </li>
          <li><router-link to="/gases"  class="footer__block-link" exact-active-class="active-link-footer">{{ $t("footer.gases") }}</router-link></li>
          <li><router-link to="/info"  class="footer__block-link" exact-active-class="active-link-footer">{{ $t("footer.info") }}</router-link></li>
        </ul>
        <div class="footer__block-contacts">
          <a href="mailto:info@labsnab.uz" class="footer__block-contact icon__email-two"
            >  info@labsnab.uz</a
          >
          <a href="tel:998901111137" class="footer__block-contact icon__call-two"
            > + 998 90 111 11 37</a
          >
          <p class="footer__block-address">{{ $t("footer.address") }}</p>
        </div>
        <div class="footer__block-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374.7188762223737!2d69.29916229600413!3d41.292523159434396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5378cd2263b%3A0xf9abb86f99c5323f!2z0KTQsNGA0LPQvtC90LAg0JnRg9C70LggMTMsINCi0LDRiNC60LXQvdGCLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1726462693896!5m2!1sru!2s" width="203" height="167" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>