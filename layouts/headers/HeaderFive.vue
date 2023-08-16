<template>
  <header>
    <div class="header__area">
      <div
        :class="`header__bottom header__bottom-3 header__border-3 header-box-plr-245 header__sticky 
        header__sticky-black ${isSticky ? 'header-sticky' : ''}`"
        id="header-sticky">
        <div class="container-fluid">
          <div class="mega-menu-wrapper p-relative">
            <div class="row align-items-center">
              <div class="col-xxl-3 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8">
                <div class="logo">
                  <nuxt-link href="/">
                    <img src="~/assets/img/logo/logo.svg" alt="logo" style="width: 30px;">
                  </nuxt-link>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-8 col-lg-8 d-none d-lg-block">
                <div class="main-menu main-menu-2 main-menu-3 main-menu-ff-space">
                  <nav id="mobile-menu">
                    <!-- menus start -->
                    <menus />
                    <!-- menus end -->
                  </nav>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4">
                <div class="header__bottom-right d-flex justify-content-end align-items-center pl-30">
                  <div class="header__social d-none d-xl-block">
                    <ul>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i class="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i class="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="header__btn d-none d-lg-block">
                    <nuxt-link href="/contact" class="tp-header-btn">contact</nuxt-link>
                  </div>
                  <div class="header__hamburger ml-50 d-lg-none">
                    <button @click="handleOpenSidebar" type="button" class="hamburger-btn offcanvas-open-btn">
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- off canvas start -->
  <off-canvas-five ref="off_canvas"/>
  <!-- off canvas end -->
</template>

<script>
import menus from './menus.vue';
import OffCanvasFive from '~~/components/common/off-canvas/OffCanvasFive.vue';

export default {
  components: { menus, OffCanvasFive },
  data() {
    return {
      isSticky: false,
    }
  },
  methods: {
    handleSticky() {
      if (window.scrollY > 80) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
    handleOpenSidebar(){
      this.$refs.off_canvas.openOffcanvas();
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleSticky);
  },
}
</script>
