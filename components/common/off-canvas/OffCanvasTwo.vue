<template>
  <div :class="`offcanvas__area offcanvas__area-4 ${isOffCanvasOpen?'offcanvas-opened':''}`">
      <div class="offcanvas__wrapper">
        <div class="offcanvas__close">
            <button @click="closeOffcanvas" class="offcanvas__close-btn offcanvas__close-btn-4 offcanvas-close-btn">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
        </div>
        <div class="offcanvas__content">
            <div class="offcanvas__top mb-10 d-flex justify-content-between align-items-center">
              <div class="offcanvas__logo logo">
                  <nuxt-link href="/">
                  <img src="~/assets/img/logo/logo-white-solid.svg" alt="logo">
                  </nuxt-link>
              </div>
            </div>
            <div class="offcanvas__inner mb-80 d-none d-lg-block">
              <h4>We help to create visual strategies.</h4>
              <p>We want to hear from you. Let us know how we can help.</p>
              <img src="~/assets/img/shape/offcanvas-img-1.png" alt="">
            </div>

            <div class="mobile-menu fix mb-40 menu-counter mean-container d-lg-none">
              <div class="mean-bar">
                <!-- MobileMenus start -->
                <mobile-menus />
                <!-- MobileMenus end -->
              </div>
            </div>

            <div class="offcanvas__inner-btn mb-80">
              <a href="#" class="tp-btn-offcanvas-white w-100">Say Hello!</a>
            </div>
            
            
            <div class="offcanvas__contact mb-40">
              <p class="offcanvas__contact-call"><a href="tel:+964-742-44-763">+964 742 44 763</a></p>
              <p class="offcanvas__contact-mail"><a href="mailto:info@harry.com">info@harry.com</a></p>
            </div>
            

            <div class="offcanvas__social-4">
              <social/>
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
