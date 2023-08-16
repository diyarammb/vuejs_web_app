<template>
  <div :class="`offcanvas__area offcanvas__area-5 ${isOffCanvasOpen?'offcanvas-opened':''}`">
      <div class="offcanvas__wrapper offcanvas__wrapper-5">
        <div class="offcanvas__shape">
            <img class="offcanvas__shape-3" src="~/assets/img/shape/offcanvas-shape-3.png" alt="">
        </div>
        <div class="offcanvas__close">
            <button @click="closeOffcanvas" class="offcanvas__close-btn offcanvas__close-btn-5 offcanvas-close-btn">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
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
            <div class="mobile-menu fix mb-40 menu-counter mean-container d-lg-none">
              <div class="mean-bar">
                <!-- MobileMenus start -->
                <mobile-menus />
                <!-- MobileMenus end -->
              </div>
            </div>
            <div class="offcanvas__menu offcanvas__menu-5 offcanvas__menu-ff-inter d-none d-lg-block">
              <nav>
                  <ul>
                    <li><nuxt-link href="/home-agency">Home</nuxt-link></li>
                    <li><nuxt-link href="/about">About</nuxt-link></li>
                    <li><nuxt-link href="/services">Service</nuxt-link></li>
                    <li><nuxt-link href="/blog-grid">Blog</nuxt-link></li>
                    <li><nuxt-link href="/portfolio">Portfoilo</nuxt-link></li>
                    <li><nuxt-link href="/contact">Contact</nuxt-link></li>
                  </ul>
              </nav>
            </div>
            <div class="offcanvas__btn-5 mb-60">
              <nuxt-link href="/register" class="tp-btn-offcanvas-blue">Register Now</nuxt-link>
            </div>
            <div class="offcanvas__instagram mb-55">
              <div class="offcanvas__instagram-top">
                  <h4 class="offcanvas__instagram-title">
                    Instagram
                    <svg width="80" height="10" viewBox="0 0 80 10" fill="none">
                        <path d="M72.8579 5.56176C67.8371 4.53235 62.809 3.74659 57.7309 3.13993C62.3224 3.29995 66.914 3.3931 71.5008 3.37877C71.8275 3.37877 72.0947 3.10888 72.0947 2.78167C72.0923 2.45206 71.8252 2.18456 71.496 2.18456C57.8764 2.22755 29.6494 1.30083 16.0584 0.615354C12.4329 0.431446 8.88606 0.26901 5.26054 0.173473C4.33507 0.149589 3.40724 0.101835 2.48178 0.0683969C1.99997 0.0516779 0.754868 -0.010428 0.58075 0.00151414C0.0870056 0.0325636 0.0130844 0.46247 0.00592804 0.529346C-0.0131531 0.686981 -0.0012207 0.92347 0.275459 1.1026C0.29454 1.11693 0.401855 1.1838 0.642761 1.21246C14.1097 2.81748 42.2676 2.61444 55.7512 4.11197C61.4232 4.74491 67.0261 5.58568 72.617 6.73212C74.5705 7.13099 75.6844 7.38415 77.2444 7.79974C74.6731 8.47566 72.0374 8.85064 69.3755 9.05127C69.3755 9.05127 72.8579 9.99055 75.496 9.4286C78.1341 8.86665 78.1937 8.80763 79.5151 8.37533C79.8204 8.2774 79.9134 8.08635 79.9516 7.98365C80.035 7.76869 80.0255 7.53223 79.8037 7.31488C79.7441 7.25756 79.6296 7.17634 79.4507 7.11902C79.2169 7.04497 78.7327 6.96857 78.5157 6.90886C76.369 6.31653 75.2169 6.04422 72.8579 5.56176Z" fill="currentColor"/>
                    </svg>                        
                  </h4>
              </div>
              <div class="offcanvas__instagram-wrapper">
                  <div class="row gx-2 gy-2">
                    <div v-for="(item,i) in instagram_images" :key="i" class="col-4">
                        <div class="offcanvas__instagram-thumb w-img">
                          <a :href="item.link" target="_blank" class="popup-image">
                            <img :src="item.img" alt="instagram img">
                          </a>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
            <div class="offcanvas__social-5 mb-20">
              <h3 class="offcanvas__social-title-5">Follow :</h3>
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
import insta_img_1 from "~/assets/img/instagram/offcanvas/instagram-1.png";
import insta_img_2 from "~/assets/img/instagram/offcanvas/instagram-2.png";
import insta_img_3 from "~/assets/img/instagram/offcanvas/instagram-3.png";
import insta_img_4 from "~/assets/img/instagram/offcanvas/instagram-4.png";
import insta_img_5 from "~/assets/img/instagram/offcanvas/instagram-5.png";
import insta_img_6 from "~/assets/img/instagram/offcanvas/instagram-6.png";

  export default {
  components: { MobileMenus, Social },
  data(){
    return {
      isOffCanvasOpen:false,
      instagram_images:[
        {link:'https://www.instagram.com/',img:insta_img_1},
        {link:'https://www.instagram.com/',img:insta_img_2},
        {link:'https://www.instagram.com/',img:insta_img_3},
        {link:'https://www.instagram.com/',img:insta_img_4},
        {link:'https://www.instagram.com/',img:insta_img_5},
        {link:'https://www.instagram.com/',img:insta_img_6},
      ]
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
>
