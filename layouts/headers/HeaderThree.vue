<template>
  <header>
    <div class="header__area">
      <div
        :class="`header__bottom header__padding-2 header-box-plr-55 header__sticky ${
          isSticky ? 'header-sticky' : ''
        }`"
        id="header-sticky"
      >
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8">
              <div class="logo logo-2">
                <nuxt-link href="/">
                  <img src="~/assets/img/logo/logo-black.svg" alt="logo" />
                </nuxt-link>
              </div>
            </div>
            <div class="col-xxl-7 col-xl-8 col-lg-8 d-none d-lg-block">
              <div class="main-menu pl-55 main-menu-ff-space">
                <nav id="mobile-menu-2" class="d-none">
                  <!-- menus start -->
                  <menus />
                  <!-- menus end -->
                </nav>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4">
              <div
                class="header__bottom-right d-flex justify-content-end align-items-center pl-30"
              >
                <div class="header__intro">
                  <p>Intro</p>
                </div>
                <div class="header__hamburger header__hamburger-2">
                  <button
                    type="button"
                    @click="handleOpenSidebar"
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
  </header>

  <!-- off canvas start -->
  <off-canvas-three ref="off_canvas"/>
  <!-- off canvas end -->
</template>

<script>
import OffCanvasThree from '~~/components/common/off-canvas/OffCanvasThree.vue';
import menus from "./menus.vue";

export default {
  components: { menus, OffCanvasThree },
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
