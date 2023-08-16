<template>
  <header>
    <div class="header__area header__transparent">
      <div :class="`header__bottom-11 header__white ${utils.activeIndex === 1 ?'header__white-slider slider-pagination-11-white':''}`">
        <div class="mega-menu-wrapper p-relative">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-5 col-8">
                <div class="logo">
                  <nuxt-link href="/">
                    <img class="logo-dark" src="~/assets/img/logo/logo-black-solid.svg" alt="logo" style="width:30px;">
                    <img src="~/assets/img/logo/logo.svg" alt="logo" style="width: 30px;">
                  </nuxt-link>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-8 col-lg-8 d-none d-lg-block">
                <div class="main-menu main-menu-11 main-menu-ff-syne">
                  <nav id="mobile-menu">
                    <!-- menus start -->
                    <menus />
                    <!-- menus end -->
                  </nav>
                </div>
              </div>
              <div class="col-xxl-4 col-xl-2 col-lg-2 col-md-8 col-sm-7 col-4">
                <div class="header__bottom-right-8 d-flex justify-content-end align-items-center">
                  <div class="header__info-8 header__info-11 mr-90 d-none d-xxl-block">
                    <ul>
                      <li>
                        <span>
                          <a href="mailto:hello@harry.com">
                            <span>
                              <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M11.5 12.9H4.5C2.4 12.9 1 11.85 1 9.4V4.5C1 2.05 2.4 1 4.5 1H11.5C13.6 1 15 2.05 15 4.5V9.4C15 11.85 13.6 12.9 11.5 12.9Z"
                                  stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                  stroke-linejoin="round" />
                                <path
                                  d="M11.5 4.85059L9.309 6.60059C8.588 7.17459 7.405 7.17459 6.684 6.60059L4.5 4.85059"
                                  stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                  stroke-linejoin="round" />
                              </svg>
                            </span>
                            hello@harry.com
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="header__action-8 header__action-11 d-none d-xl-block">
                    <ul>
                      <li>
                        <a @click.prevent="handleSearch" href="#" class="search-open-btn">
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
                        <button @click="handleOpenSidebar" type="button" class="hamburger-btn hamburger-btn-text  offcanvas-open-btn"
                          data-menu-text="menu">
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div class="header__hamburger ml-50 d-xl-none">
                    <button @click="handleOpenSidebar" type="button" class="hamburger-btn hamburger-btn-text  offcanvas-open-btn"
                      data-menu-text="menu">
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

  <!-- search popup start -->
  <search-popup ref="SearchPopup" />
  <!-- search popup end -->
  <!-- off canvas start -->
  <off-canvas-five ref="off_canvas"/>
  <!-- off canvas end -->
</template>

<script>
import menus from "./menus.vue";
import OffCanvasFive from '~~/components/common/off-canvas/OffCanvasFive.vue';
import { useUtilsStore } from "~~/store/utils";
import SearchPopup from './component/SearchPopup.vue';

export default {
  components: { menus, OffCanvasFive, SearchPopup },
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
    },
    handleSearch() {
      this.$refs.SearchPopup.show();
    },
  },
  setup (){
    const utils = useUtilsStore();
    return {utils}
  },
  mounted() {
    window.addEventListener("scroll", this.handleSticky);
  },
};
</script>


