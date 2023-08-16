<template>
  <div :class="`offcanvas__area offcanvas__area-3 ${isOffCanvasOpen?'offcanvas-opened':''}`">
      <div class="offcanvas__shape">
        <img class="offcanvas__shape-2" src="~/assets/img/shape/offcanvas-shape-2.png" alt="shape">
      </div>
      <div class="offcanvas__wrapper offcanvas__wrapper-3">
        <div class="offcanvas__close">
            <button @click="closeOffcanvas" class="offcanvas__close-btn-3 offcanvas-close-btn">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                      <path d="M21 1L1 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M1 1L21 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
              </svg>
            </button>
        </div>
        <div class="offcanvas__content">
            <div class="offcanvas__top mb-10 d-flex justify-content-between align-items-center">
              <div class="offcanvas__logo logo">
                  <nuxt-link href="/">
                   <img src="~/assets/img/logo/logo.svg" alt="logo" style="width:30px;">
                  </nuxt-link>
              </div>
            </div>
            <div class="mobile-menu fix mb-40 menu-counter mean-container d-lg-none">
              <div class="mean-bar">
                <!-- MobileMenus start -->
                <mobile-menus />
                <!-- MobileMenus end -->
              </div>
            </div>
            <div class="offcanvas__menu offcanvas__menu-3 offcanvas__menu-ff-space d-none d-lg-block">
              <p>Portfolio</p>
              <nav>
                  <ul>
                    <li><nuxt-link href="/portfolio">Photojournalism</nuxt-link></li>
                    <li><nuxt-link href="/portfolio-2">Fashion </nuxt-link></li>
                    <li><nuxt-link href="/portfolio-masonry">Still Life</nuxt-link></li>
                    <li><nuxt-link href="/portfolio">Architectural </nuxt-link></li>
                  </ul>
              </nav>
            </div>
            <div class="offcanvas__btn-3">
              <nuxt-link href="/services" class="tp-btn-offcanvas-pink">
                See All Features 
                <i class="fa-regular fa-chevron-right"></i>
              </nuxt-link>
            </div>
            
            <div class="offcanvas__info mb-50">
              <div class="offcanvas__info-item">
                  <h4 class="offcanvas__info-item-title">Information</h4>
                  <p><a href="tel:964-742-44-763">+964 742 44 763</a></p>
                  <p><a href="mailto:support@harry.com">support@harry.com</a></p>
              </div>
              <div class="offcanvas__info-item">
                  <h4 class="offcanvas__info-item-title">Address</h4>
                  <p><a href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723" target="_blank">32 East Trusel Court North Tonawanda, NY 14120</a></p>
              </div>
            </div>
            
            <div class="offcanvas__social-3">
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
