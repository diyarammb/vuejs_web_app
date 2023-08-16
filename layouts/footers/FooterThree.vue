<template>
  <footer>
    <div class="footer__area">
      <div class="footer__top-2 p-relative">
        <div class="footer__shape">
          <img class="footer__shape-1" src="~/assets/img/shape/footer-shape-1.png" alt="shape">
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-2 col-md-12 col-sm-6">
              <div class="footer__widget footer-col-2-1">
                <div class="footer__logo">
                  <nuxt-link href="/">
                    <img src="~/assets/img/logo/logo-black.svg" alt="logo">
                  </nuxt-link>
                </div>

              </div>
            </div>
            <div class="col-lg-4 col-md-5 col-sm-6">
              <div class="footer__widget footer-col-2-2">
                <ul id="footer-list-inline">
                  <li><nuxt-link href="/home-freelancer">Home</nuxt-link></li>
                  <li><nuxt-link href="/portfolio-masonry">Projects</nuxt-link></li>
                  <li><nuxt-link href="/contact">Contact</nuxt-link></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-5 col-sm-8">
              <div class="footer__widget footer-col-2-3">
                <ul id="footer-list-inline-2">
                  <li><nuxt-link href="/policy">Privacy Policy</nuxt-link></li>
                  <li><nuxt-link href="/help">Help Center</nuxt-link></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-4">
              <div class="footer__widget footer-col-2-4">
                <div class="footer__hello">
                  <nuxt-link href="/contact-2">Say Ciao! 👋</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="container">
          <div class="footer__bottom-inner-2">
            <div class="row align-items-center">
              <div class="col-sm-6">
                <div class="footer__copyright-2">
                  <p>Copyright © {{ new Date().getFullYear() }} by 
                    <nuxt-link href="/">HARRY</nuxt-link>. All Rights
                    Reserved.</p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="footer__social-2 text-sm-end">
                  <social />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Social from '~~/components/social/Social.vue';

export default {
  components: { Social },
}
</script>