<template>
  <header>
    <div class="header__area">
      <div
        :class="`header__bottom-7 header__transparent header__padding-6 header__sticky header__sticky-white ${
          isSticky ? 'header-sticky' : ''
        }`"
        id="header-sticky"
      >
        <div class="container">
          <div class="mega-menu-wrapper p-relative">
            <div class="row align-items-center">
              <div class="col-xxl-2 col-xl-2 col-lg-6 col-md-4 col-sm-5 col-8">
                <div class="logo">
                  <nuxt-link href="/">
                    <img src="~/assets/img/logo/logo-black.svg" alt="logo" />
                  </nuxt-link>
                </div>
              </div>
              <div class="col-xxl-7 col-xl-7 col-lg-8 d-none d-xl-block">
                <div class="main-menu main-menu-7">
                  <nav id="mobile-menu-3">
                    <!-- menus start -->
                    <menus />
                    <!-- menus end -->
                  </nav>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-8 col-sm-7 col-4">
                <div
                  class="header__bottom-right-6 d-flex justify-content-end align-items-center pl-30"
                >
                  <div class="header__btn-7 d-flex align-items-center">
                    <nuxt-link
                      href="/login"
                      class="tp-header-btn-2 d-none d-md-inline-block"
                      >
                      <i class="fi fi-rs-user"></i> 
                      Login
                    </nuxt-link>
                    <nuxt-link
                      href="/contact"
                      class="tp-btnr tp-btn-shine-effect d-none d-sm-inline-block ml-30">
                      Les't Talk
                    </nuxt-link>
                  </div>
                  <div class="header__hamburger ml-50 d-xl-none">
                    <button
                      @click="handleOpenSidebar"
                      type="button"
                      class="hamburger-btn hamburger-btn-black offcanvas-open-btn"
                    >
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
  <off-canvas-six ref="off_canvas"/>
  <!-- off canvas end -->
</template>

<script>
import menus from "./menus.vue";
import OffCanvasSix from '~~/components/common/off-canvas/OffCanvasSix.vue';

export default {
  components: { menus, OffCanvasSix },
  data() {
    return {
      isSticky: false,
    };
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
};
</script>
