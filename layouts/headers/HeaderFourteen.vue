<template>
  <header>
    <div class="header__area header__simple header__transparent">
      <div class="header__bottom header__sticky">
        <div class="container">
          <div class="mega-menu-wrapper p-relative">
            <div class="row align-items-center">
              <div class="col-7">
                <div class="logo">
                  <NuxtLink href="/">
                    <img src="~/assets/img/logo/logo-black.svg" alt="logo" />
                  </NuxtLink>
                </div>
              </div>
              <div class="col-5">
                <div
                  class="header__bottom-right d-flex justify-content-end align-items-center pl-30"
                >
                  <div class="header__btn d-none d-md-block">
                    <nuxt-link href="/contact" class="tp-btn tp-btn-black">
                      Let’s talk
                      <span>
                        <svg
                          width="15"
                          height="12"
                          viewBox="0 0 15 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.4492 6.00007L1 6.00007"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.42969 1L13.4509 5.99958L8.42969 11"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
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
import OffCanvasSix from '~~/components/common/off-canvas/OffCanvasSix.vue';
export default {
  components: { OffCanvasSix },
  methods: {
    handleOpenSidebar(){
      this.$refs.off_canvas.openOffcanvas();
    },
  },
  };
</script>
