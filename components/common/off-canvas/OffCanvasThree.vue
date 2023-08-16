<template>
  <div :class="`offcanvas__area offcanvas__area-2 ${isOffCanvasOpen?'offcanvas-opened':''}`">
      <div class="offcanvas__wrapper">
        <div class="offcanvas__close">
            <button @click="closeOffcanvas" class="offcanvas__close-btn offcanvas__close-btn-2 offcanvas-close-btn">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 1L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 1L11 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
        </div>
        <div class="offcanvas__content">
            <div class="offcanvas__top mb-60 d-flex justify-content-between align-items-center">
              <div class="offcanvas__logo logo">
                  <nuxt-link href="/">
                  <img src="~/assets/img/logo/logo-black.svg" alt="logo">
                  </nuxt-link>
              </div>
            </div>
            <div class="mobile-menu-2 fix mb-40 menu-counter mean-container">
              <div class="mean-bar">
                <!-- MobileMenus start -->
                <mobile-menus />
                <!-- MobileMenus end -->
              </div>
            </div>
            <div class="offcanvas__menu offcanvas__menu-ff-oswald d-none">
              <nav>
                  <ul>
                    <li><nuxt-link href="/home-freelancer">Home</nuxt-link></li>
                    <li><nuxt-link href="/about">About</nuxt-link></li>
                    <li><nuxt-link href="/services">Service</nuxt-link></li>
                    <li><nuxt-link href="/blog">Blog</nuxt-link></li>
                    <li><nuxt-link href="/portfolio">Portfolio</nuxt-link></li>
                    <li><nuxt-link href="/contact">Contact</nuxt-link></li>
                  </ul>
              </nav>
            </div>
            <div class="offcanvas__btn-2">
              <nuxt-link href="/job" class="tp-btn-offcanvas-green">We Are Hiring</nuxt-link>
            </div>
            <div class="offcanvas__text">
              <p>Im a UX Designer, Over the past 10+ years I’ve created well-crafted mobile and web apps by connecting Business goals with user needs.</p>

              <div class="offcanvas__signature mb-40">
                  <img src="~/assets/img/shape/offcanvas-signature.png" alt="signature">
              </div>
            </div>
            
            <div class="offcanvas__link-btn mb-25">
              <nuxt-link href="/contact-2" class="tp-link-btn-circle">
                  <span>
                    <i class="fa-regular fa-arrow-right"></i>
                    <i class="fa-regular fa-arrow-right"></i>
                  </span>
                  Work <br> With Us
              </nuxt-link>
            </div>
            <div class="offcanvas__social">
              <h3 class="offcanvas__social-title">Follow :</h3>
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
