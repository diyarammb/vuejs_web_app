<template>
  <section :class="`video__area video__overlay box-plr-145 black-bg-13 ${el_style?'mb-120':''}`">
    <div class="container-fluid">
      <div class="video__inner-8 pt-185 pb-155 include-bg"
      :style="{ backgroundImage: `url(${video_bg})` }" 
      data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000">
        <div class="row justify-content-center">
          <div class="col-xxl-7 col-xl-8 col-lg-10">
            <div class="video__content-8 text-center">
              <div class="video__play-8 mb-20">
                <a @click.prevent="handleVideoPopup" href="#"
                  class="popup-video video__play-btn video__play-btn-8 tp-pulse-border">
                  <span class="video-play-bg"></span>
                  <img src="~/assets/img/video/video-icon-play.png" alt="">
                </a>
              </div>
              <div class="section__title-wrapper-8 text-center">
                <h3 class="section__title-8">We are the leader in the
                  <span class="section__title-highlight-8">architectural
                    <svg width="306" height="33" viewBox="0 0 306 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path class="wow" d="M3 29.6258C69.5625 19.3132 202.219 -24.7493 303 29.6258" stroke="#FF5A1B"
                        stroke-width="6" stroke-linecap="round" />
                    </svg>
                  </span>
                </h3>
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
    video-url="https://www.youtube.com/embed/EW4ZYb3mCZk"
  />
  <!-- video modal end -->
</template>

<script>
import video_bg from '~/assets/img/video/8/video-bg-1.jpg';
import VideoModal from '../common/modals/VideoModal.vue';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props:{
    el_style:{
      type:Boolean,
      default:false
    }
  },
  components: { VideoModal },
  data(){
    return {
      video_bg,
    }
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    },
  },
}
</script>
