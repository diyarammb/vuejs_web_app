<template>
  <section class="about__area pt-120 pb-120 p-relative">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="about__video-wrapper">
            <div class="about__video-thumb">
              <img src="~/assets/img/about/6/about-1.jpg" alt="about img" />
              <div class="about__play">
                <a
                  href="#"
                  @click.prevent="handleVideoPopup"
                  class="about__play-btn popup-video tp-pulse-border"
                >
                  <span class="video-play-bg"></span>
                  <img src="~/assets/img/about/6/about-play-icon.png" alt="icon" />
                </a>
              </div>
            </div>
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
import VideoModal from "~~/components/common/modals/VideoModal.vue";

export default {
  components: { VideoModal },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    },
  },
};
</script>
