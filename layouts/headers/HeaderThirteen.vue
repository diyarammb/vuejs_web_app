<template>
  <header>
    <div class="header__area header__transparent">
      <div class="header__bottom-12">
        <div class="mega-menu-wrapper p-relative">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-8">
                <div class="logo">
                  <NuxtLink href="/">
                    <img class="logo-dark" src="~/assets/img/logo/logo-black-solid.svg" alt="logo" style="width:30px;">
                    <img src="~/assets/img/logo/logo.svg" alt="logo" style="width: 30px;">
                  </NuxtLink>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-5 col-lg-4 d-none d-lg-block">
                <div class="header__bottom-left-12 d-flex align-items-center">
                  <div class="header__info header__info-12 mr-20">
                    <ul>
                      <li>
                        <span>
                          <a href="mailto:contact@harry.com">Contact@harry.com</a>
                        </span>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-5 col-md-8 col-sm-7 col-4">
                <div class="header__bottom-right-8 d-flex justify-content-end align-items-center">
                  <div class="header__action-8 header__action-12">
                    <ul>
                      <li>
                        <button @click="handleOpenSidebar" type="button" class="hamburger-btn-8 offcanvas-open-btn">Menu</button>
                      </li>
                    </ul>
                  </div>
                  <div class="header__btn-12 ml-70 d-none d-sm-block">
                    <nuxt-link href="/contact" class="header-btn-12 d-flex align-items-center">
                      Let’s talk
                      <div class="header-btn-12-icon">
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M19 9.50001C19.0034 10.8199 18.695 12.1219 18.1 13.3C17.3944 14.7118 16.3097 15.8992 14.9674 16.7293C13.6251 17.5594 12.0782 17.9994 10.5 18C9.18012 18.0034 7.8781 17.6951 6.69999 17.1L1 19L2.9 13.3C2.30493 12.1219 1.99656 10.8199 2 9.50001C2.00061 7.92177 2.44061 6.37487 3.27072 5.03257C4.10082 3.69027 5.28825 2.60559 6.69999 1.90003C7.8781 1.30496 9.18012 0.996587 10.5 1.00003H11C13.0843 1.11502 15.053 1.99479 16.5291 3.47088C18.0052 4.94698 18.885 6.91567 19 9.00002V9.50001Z"
                              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M10.043 11C9.48297 11 9.04297 10.55 9.04297 10C9.04297 9.45 9.49297 9 10.043 9C10.593 9 11.043 9.45 11.043 10C11.043 10.55 10.603 11 10.043 11Z"
                              fill="currentColor" />
                            <path
                              d="M13.0938 11C12.5337 11 12.0938 10.55 12.0938 10C12.0938 9.45 12.5437 9 13.0938 9C13.6437 9 14.0938 9.45 14.0938 10C14.0938 10.55 13.6437 11 13.0938 11Z"
                              fill="currentColor" />
                            <path
                              d="M7 11C6.44 11 6 10.55 6 10C6 9.45 6.45 9 7 9C7.55 9 8 9.45 8 10C8 10.55 7.55 11 7 11Z"
                              fill="currentColor" />
                          </svg>
                        </span>
                      </div>
                    </nuxt-link>
                  </div>
                  <div class="header__hamburger ml-50 d-none">
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
  <off-canvas-six ref="off_canvas"/>
  <!-- off canvas end -->
</template>

<script>
import OffCanvasSix from '~~/components/common/off-canvas/OffCanvasSix.vue';

export default {
  components: { OffCanvasSix },
  methods: {
    handleOpenSidebar(){
      this.$refs.off_canvas.openOffcanvas();
    },
  },
}
</script>
