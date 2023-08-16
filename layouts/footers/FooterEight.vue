<template>
  <footer>
    <div class="footer__area" data-bg-color="footer-bg-grey">
      <div class="footer__top footer__top-9">
        <div class="container">
          <div class="footer__top-9-inner">
            <div class="row align-items-center">
              <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-4">
                <div class="footer__widget footer__widget-9">
                  <div class="footer__logo">
                    <nuxt-link href="/">
                      <img src="~/assets/img/logo/logo-black.svg" alt="logo" />
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div class="col-xxl-9 col-xl-9 col-lg-6 col-md-8">
                <div class="footer__widget footer__widget-9">
                  <div class="footer__widget-content">
                    <ul id="footer-list-inline-3">
                      <li><nuxt-link href="/home-portfolio">Home</nuxt-link></li>
                      <li><nuxt-link href="/services">Services</nuxt-link></li>
                      <li><nuxt-link href="/portfolio">Portfolio</nuxt-link></li>
                      <li><nuxt-link href="/about">About</nuxt-link></li>
                      <li><nuxt-link href="/contact">Contact</nuxt-link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom-9">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-6">
              <div class="footer__copyright-9">
                <p>
                  Copyright © {{ new Date().getFullYear() }} by
                  <nuxt-link href="/">Harry</nuxt-link> All Rights Reserved.
                </p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="footer__social-9 text-sm-end">
                <social />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Social from "~~/components/social/Social.vue";
export default {
  components: { Social },
};
</script>
