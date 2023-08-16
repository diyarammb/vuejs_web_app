<template>
  <div
    class="portfolio__metro-item tp-load-item pt-40 pb-40 p-relative z-index-1 mb-30"
  >
    <div
      class="portfolio__metro-thumb"
      :style="{ backgroundImage: `url(${item.img})` }"
    >
      <div v-if="item.video" class="portfolio__grid-video">
        <a
          href="#"
          @click.prevent="handleVideoPopup"
          class="portfolio-play-btn popup-video"
        >
          <svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 11L0 21.3923V0.607696L18 11Z" fill="currentColor" />
          </svg>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
        <div class="portfolio__metro-content">
          <div class="portfolio__metro-category">
            <span>
              <a href="#">{{ item.category }}</a>
            </span>
          </div>
          <h3 class="portfolio__metro-title">
            <nuxt-link href="/portfolio-details">{{ item.title }}</nuxt-link>
          </h3>
          <p>{{ item.subtitle }}</p>

          <div class="portfolio__metro-btn">
            <nuxt-link href="/portfolio-details" class="tp-btn-border">
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
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- video modal start -->
  <video-modal
    ref="video_modal"
    :video-url="`https://www.youtube.com/embed/${item.video_id}`"
  />
  <!-- video modal end -->
</template>

<script>
import VideoModal from "~~/components/common/modals/VideoModal.vue";

export default {
  components: { VideoModal },
  props: {
    item: {},
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    },
  },
};
</script>
