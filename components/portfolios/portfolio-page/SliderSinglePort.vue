<template>
  <div
    class="portfolio__horizontal-thumb include-bg"
    :style="{ backgroundImage: `url(${item.bg})` }"
  ></div>
  <div class="portfolio__horizontal-inner">
    <div class="portfolio__horizontal-social">
      <span>Follow Us</span>
      <a href="#">Fb.</a>
      <a href="#">Be.</a>
      <a href="#">Yt.</a>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xxl-9 col-xl-10">
          <div
            class="portfolio__horizontal-wrapper d-md-flex align-items-start"
          >
            <div class="portfolio__horizontal-video">
              <a href="#" @click.prevent="handlePopup" class="popup-video">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 11L0 21.3923V0.607696L18 11Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
            <div class="portfolio__horizontal-content">
              <div class="portfolio__horizontal-meta">
                <span>
                  <a href="#">{{ item.category }}</a>
                </span>
                <span>
                  <a href="#">{{ item.date }}</a>
                </span>
              </div>
              <h3 class="portfolio__horizontal-title">
                <nuxt-link href="/portfolio-details">
                  <span v-html="item.title"></span>
                </nuxt-link>
              </h3>
              <p>
                {{ item.subtitle }}
              </p>

              <div class="portfolio__horizontal-btn">
                <nuxt-link
                  href="/portfolio-details"
                  class="tp-btn-border tp-link-btn"
                >
                  Show Project
                  <span>
                    <svg
                      width="26"
                      height="9"
                      viewBox="0 0 26 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.6934 1L25 4.20003L21.6934 7.4"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M0.999999 4.19897H25"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <svg
                      width="26"
                      height="9"
                      viewBox="0 0 26 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.6934 1L25 4.20003L21.6934 7.4"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M0.999999 4.19897H25"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>


export default {
  components: { },
  props: {
    item: {},
    videoPopup:Function,
  },
  methods:{
    handlePopup () {
      this.videoPopup();
    }
  }
};
</script>
