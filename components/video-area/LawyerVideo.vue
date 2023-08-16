<template>
  <section
    :class="`video__area pt-145 pb-125 include-bg ${el_style?'mb-120':''}`"
    data-overlay="dark"
    data-overlay-opacity="6"
    :style="{ backgroundImage: `url(${video_bg})` }"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-10 col-xl-10">
          <div class="video__content text-center">
            <div class="video__play">
              <a
                @click.prevent="handleVideoPopup"
                href="#"
                class="video__play-btn tp-pulse-border popup-video"
              >
                <span class="video-play-bg"></span>
                <img src="~/assets/img/video/video-icon-play.png" alt="" />
              </a>
            </div>
            <h3 class="video__title">The area where we practice Our lawyer</h3>
            <div class="video__btn">
              <nuxt-link href="/contact" class="tp-btn-transparent">
                Ask for Constitution
                <i class="fa-regular fa-arrow-right-long"></i>
              </nuxt-link>
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
import video_bg from "~/assets/img/video/video-bg.jpg";
import VideoModal from "../common/modals/VideoModal.vue";

export default {
  props:{
    el_style:{
      type:Boolean,
      default:false
    }
  },
  components: { VideoModal },
  data() {
    return {
      video_bg,
    };
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    },
  },
};
</script>
