<template>
  <header>
    <div class="header__area">
      <div
        :class="`header__bottom-6 header__padding-6 header-box-plr-245 header__sticky header__sticky-white ${
          isSticky ? 'header-sticky' : ''
        }`"
        id="header-sticky"
      >
        <div class="container-fluid">
          <div class="mega-menu-wrapper p-relative">
            <div class="row align-items-center">
              <div class="col-xxl-3 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8">
                <div class="logo">
                  <nuxt-link href="/">
                    <img src="~/assets/img/logo/logo-black.svg" alt="logo" />
                  </nuxt-link>
                </div>
              </div>
              <div class="col-xxl-7 col-xl-8 col-lg-7 d-none d-lg-block">
                <div class="main-menu main-menu-6">
                  <nav id="mobile-menu">
                    <!-- menus start -->
                    <menus />
                    <!-- menus end -->
                  </nav>
                </div>
              </div>
              <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-8 col-sm-7 col-4">
                <div
                  class="header__bottom-right-6 d-flex justify-content-end align-items-center pl-30"
                >
                  <div class="header__btn-6 d-none d-sm-block">
                    <nuxt-link href="/contact" class="tp-btn-blue-2 tp-link-btn-3">
                      Contact Us
                      <span>
                        <i class="fa-regular fa-arrow-right"></i>
                      </span>
                    </nuxt-link>
                  </div>
                  <div class="header__hamburger ml-50 d-lg-none">
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
