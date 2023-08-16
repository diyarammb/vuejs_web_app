<template>
  <header>
    <div class="header__area">
      <div :class="`header__bottom-9 header__sticky ${isSticky ? 'header-sticky' : ''}`" id="header-sticky">
        <div class="container">
          <div class="mega-menu-wrapper p-relative">
            <div class="row align-items-center">
              <div class="col-xxl-3 col-xl-3 col-lg-2 col-md-4 col-sm-5 col-8">
                <div class="logo">
                  <NuxtLink to="/">
                    <img src="~/assets/img/logo/logo-green.svg" alt="logo">
                  </NuxtLink>
                </div>
              </div>
              <div class="col-xxl-7 col-xl-7 col-lg-8 d-none d-lg-block">
                <div class="main-menu main-menu-9 main-menu-ff-space">
                  <nav id="mobile-menu">
                    <!-- menus start -->
                    <menus />
                    <!-- menus end -->
                  </nav>
                </div>
              </div>
              <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4">
                <div class="header__bottom-right-8 d-flex justify-content-end align-items-center">
                  <div class="header__action-8 d-none d-xl-block">
                    <ul>
                      <li>
                        <a href="#" class="search-open-btn">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.6 16.2C12.7974 16.2 16.2 12.7974 16.2 8.6C16.2 4.40264 12.7974 1 8.6 1C4.40264 1 1 4.40264 1 8.6C1 12.7974 4.40264 16.2 8.6 16.2Z"
                              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.0004 17L15.4004 15.4" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <button @click="handleOpenSidebar" type="button"
                          class="hamburger-btn-8 hamburger-btn-8-black offcanvas-open-btn">Menu</button>
                      </li>
                    </ul>
                  </div>
                  <div class="header__hamburger ml-50 d-xl-none">
                    <button @click="handleOpenSidebar" type="button" class="hamburger-btn-8 hamburger-btn-8-black offcanvas-open-btn">Menu</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- off canvas full start -->
  <off-canvas-two ref="off_canvas"/>
  <!-- off canvas full end -->
</template>

<script>
import menus from './menus.vue';
import OffCanvasTwo from '~~/components/common/off-canvas/OffCanvasTwo.vue';

export default {
  components: { menus, OffCanvasTwo },
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
