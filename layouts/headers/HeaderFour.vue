<style>
.tp-btn-orange:hover {
  background-color: orangered!important;
}
</style>

<template>
  <header>
    <div :class="`header__area header-box-plr-5-245 header__padding-5 header__style-5 header__sticky header-sticky-blur ${isSticky ? 'header-sticky' : ''}`"
      id="header-sticky">
      <div class="header__gradient-bg"></div>
      <div class="header__top-5">
        <div class="mega-menu-wrapper p-relative">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-6">
                <div class="logo">
                  <nuxt-link href="/">
                    <img src="~/assets/img/logo/logo-black.svg" alt="logo" style="width:30px;">&nbsp;&nbsp; <strong>eTechFlow</strong>
                  </nuxt-link>
                </div>
              </div>
              <div class="col-xl-6 col-lg-7 d-none d-lg-block">
                <div class="main-menu main-menu-5 main-menu-ff-space">
                  <nav id="mobile-menu">
                    <!-- menus start -->
                    <menus />
                    <!-- menus end -->
                  </nav>
                </div>
              </div>
              <div class="col-xl-4 col-lg-2 col-md-6 col-6">
                <div class="header__right-5 d-flex align-items-center justify-content-end">
                  <div class="header__call d-none d-xl-flex align-items-center">
                    <div class="header__call-icon">
                      <span>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M24.964 20.596C24.964 21.028 24.868 21.472 24.664 21.904C24.46 22.336 24.196 22.744 23.848 23.128C23.26 23.776 22.612 24.244 21.88 24.544C21.16 24.844 20.38 25 19.54 25C18.316 25 17.008 24.712 15.628 24.124C14.248 23.536 12.868 22.744 11.5 21.748C10.12 20.74 8.812 19.624 7.564 18.388C6.328 17.14 5.212 15.832 4.216 14.464C3.232 13.096 2.44 11.728 1.864 10.372C1.288 9.004 1 7.696 1 6.448C1 5.632 1.144 4.852 1.432 4.132C1.72 3.4 2.176 2.728 2.812 2.128C3.58 1.372 4.42 1 5.308 1C5.644 1 5.98 1.072 6.28 1.216C6.592 1.36 6.868 1.576 7.084 1.888L9.868 5.812C10.084 6.112 10.24 6.388 10.348 6.652C10.456 6.904 10.516 7.156 10.516 7.384C10.516 7.672 10.432 7.96 10.264 8.236C10.108 8.512 9.88 8.8 9.592 9.088L8.68 10.036C8.548 10.168 8.488 10.324 8.488 10.516C8.488 10.612 8.5 10.696 8.524 10.792C8.56 10.888 8.596 10.96 8.62 11.032C8.836 11.428 9.208 11.944 9.736 12.568C10.276 13.192 10.852 13.828 11.476 14.464C12.124 15.1 12.748 15.688 13.384 16.228C14.008 16.756 14.524 17.116 14.932 17.332C14.992 17.356 15.064 17.392 15.148 17.428C15.244 17.464 15.34 17.476 15.448 17.476C15.652 17.476 15.808 17.404 15.94 17.272L16.852 16.372C17.152 16.072 17.44 15.844 17.716 15.7C17.992 15.532 18.268 15.448 18.568 15.448C18.796 15.448 19.036 15.496 19.3 15.604C19.564 15.712 19.84 15.868 20.14 16.072L24.112 18.892C24.424 19.108 24.64 19.36 24.772 19.66C24.892 19.96 24.964 20.26 24.964 20.596Z"
                            stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" />
                          <path
                            d="M20.7996 9.4C20.7996 8.68 20.2356 7.576 19.3956 6.676C18.6276 5.848 17.6076 5.2 16.5996 5.2"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M24.9996 9.4C24.9996 4.756 21.2436 1 16.5996 1" stroke="currentColor"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </div>
                    <div class="header__call-content">
                      <p>Consultation</p>
                      <h4><a href="tel:964-742-44-763">+964 742 44 763</a></h4>
                    </div>
                  </div>
                  <div class="header__btn-5 d-none d-xl-block ml-20">
                    <nuxt-link href="/contact" class="tp-btn-orange" style="background-color: #673c8b; ">Get a Free Quote</nuxt-link>
                  </div>
                  <div class="header__hamburger header__hamburger-5 ml-50 d-xl-none">
                    <button @click="handleOpenSidebar" type="button"
                      class="hamburger-btn hamburger-btn-blue hamburger-btn-black offcanvas-open-btn">
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
  <offcanvas-four ref="off_canvas"/>
  <!-- off canvas end -->
</template>

<script>
import menus from './menus.vue';
import OffcanvasFour from '~~/components/common/off-canvas/OffcanvasFour.vue';

export default {
  components: { menus, OffcanvasFour },
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
