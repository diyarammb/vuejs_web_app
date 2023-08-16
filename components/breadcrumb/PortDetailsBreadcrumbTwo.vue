<template>
  <section class="breadcrumb__area breadcrumb__style-4 breadcrumb__spacing include-bg grey-bg-4"
  :style="{ backgroundImage: `url(${bg})` }">
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-xl-7 col-lg-9">
          <div class="breadcrumb__content p-relative z-index-1">
            <div class="breadcrumb__video mb-30">
              <a @click.prevent="handleVideoPopup" href="#" class="breadcrumb__video-btn popup-video">
                <svg width="14" height="18" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 11L0 21.3923V0.607696L18 11Z" fill="currentColor" />
                </svg>
              </a>
            </div>
            <div class="breadcrumb__list">
              <span><a href="#">Home</a></span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span><a href="#">Business</a></span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span>Investment Trend Monitor: Top Trends in 2022 </span>
            </div>
            <h3 class="breadcrumb__title">Keep it Minimal, yet Expressive</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

    <!-- video modal start -->
    <video-modal
    ref="video_modal"
    video-url="https://www.youtube.com/embed/K0D4uPmKkqY"
  />
  <!-- video modal end -->
</template>

<script>
import bg from '~/assets/img/portfolio/breadcrumb/portfolio-breadcrumb-2.jpg';
import VideoModal from '../common/modals/VideoModal.vue';

export default {
  components: { VideoModal },
  data () {
    return {bg}
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    },
  },
}
</script>
