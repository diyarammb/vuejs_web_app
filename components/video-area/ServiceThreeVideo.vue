<template>
  <section class="video__area p-relative z-index-1 video__bg video__pt-183 video__pb-223">
    <div class="video__bg-shape include-bg" 
      :style="{ backgroundImage: `url(${bg})` }">
    </div>
    <div class="video__shape">
      <img class="video__shape-1" src="~/assets/img/video/video-dot-1.png" alt="">
      <img class="video__shape-2" src="~/assets/img/video/video-dot-2.png" alt="">
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10">
          <div class="video__content-2 text-center">
            <div class="video__play-2">
              <a @click.prevent="handleVideoPopup" href="#"
                class="popup-video video__play-btn video__play-btn-2 tp-pulse-border">
                <span class="video-play-bg"></span>
                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 10.2L0.200001 19.8995V0.500546L17 10.2Z" fill="currentColor" />
                </svg>
              </a>
            </div>
            <span>We are here for you.</span>
            <h3 class="video__title-2">Service we offer is specifically designed to meet your needs.</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- video modal start -->
  <video-modal
    ref="video_modal"
    video-url="https://www.youtube.com/embed/7e90gBu4pas"
  />
  <!-- video modal end -->
</template>

<script>
import bg from '~/assets/img/video/video-bg-2.png';
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
