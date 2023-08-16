<template>
  <div :class="`offcanvas__area offcanvas__area-1 ${isOffCanvasOpen?'offcanvas-opened':''}`">
      <div class="offcanvas__wrapper">
        <div class="offcanvas__shape">
            <img class="offcanvas__shape-1" src="~/assets/img/shape/offcanvas-shape-1.png" alt="shape">
        </div>
        <div class="offcanvas__close">
            <button @click="closeOffcanvas" class="offcanvas__close-btn offcanvas-close-btn">
              <i class="fa-regular fa-xmark"></i>
            </button>
        </div>
        <div class="offcanvas__content">
            <div class="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
              <div class="offcanvas__logo logo">
                  <nuxt-link href="/">
                   <img src="~/assets/img/logo/logo-black.svg" alt="logo">
                  </nuxt-link>
              </div>
            </div>
            <div class="mobile-menu-3 fix mb-40 menu-counter mean-container d-lg-none">
              <div class="mean-bar">
                <!-- MobileMenus start -->
                <mobile-menus />
                <!-- MobileMenus end -->
              </div>
            </div>
            <div class="offcanvas__menu offcanvas__menu-ff-space d-none d-lg-block">
              <nav>
                  <ul>
                    <li><nuxt-link href="/">Home</nuxt-link></li>
                    <li><nuxt-link href="/about">About</nuxt-link></li>
                    <li><nuxt-link href="/services">Service</nuxt-link></li>
                    <li><nuxt-link href="/blog">Blog</nuxt-link></li>
                    <li><nuxt-link href="/about">Pages</nuxt-link></li>
                    <li><nuxt-link href="/contact">Contact</nuxt-link></li>
                  </ul>
              </nav>
            </div>
            <div class="offcanvas__btn">
              <a href="#" class="tp-btn-offcanvas">Getting Started <i class="fa-regular fa-chevron-right"></i></a>
            </div>
            <div class="offcanvas__social">
              <h3 class="offcanvas__social-title">Follow :</h3>
              <social/>
            </div>
            <div class="offcanvas__contact">
              <p class="offcanvas__contact-call"><a href="tel:+964-742-44-763">+964 742 44 763</a></p>
              <p class="offcanvas__contact-mail"><a href="mailto:info@harry.com">info@harry.com</a></p>
            </div>
        </div>
      </div>
   </div>
  <!-- body overlay start -->
  <div @click="closeOffcanvas" :class="`body-overlay ${isOffCanvasOpen ? 'opened' : ''}`"></div>
  <!-- body overlay end -->
</template>

<script>
import Social from '~~/components/social/Social.vue';
import MobileMenus from './MobileMenus.vue';

  export default {
  components: { MobileMenus, Social },
  data(){
    return {
      isOffCanvasOpen:false,
    }
  },
  methods:{
    openOffcanvas(){
      this.isOffCanvasOpen = true
    },
    closeOffcanvas(){
      this.isOffCanvasOpen = false
    }
  },
  }
</script>

