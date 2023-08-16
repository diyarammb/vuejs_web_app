
<style>
.imangev{
  width: 100%!important;
  height: 220px!important;
}

</style>
<template>
  <div
    class="portfolio__grid-item mb-40"
    data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
  >
    <div class="portfolio__grid-thumb w-img fix">
      <nuxt-link href="/#">
        <img :src="item.img" alt="thumb img"  class="imangev"/>
      </nuxt-link>
      <div v-if="!item.video" class="portfolio__grid-popup">
        <a
          @click.prevent="handleImagePopup(index)" 
          href="#"
          class="popup-image"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1667 8.33341H0.833333C0.377778 8.33341 0 7.95564 0 7.50008C0 7.04453 0.377778 6.66675 0.833333 6.66675H14.1667C14.6222 6.66675 15 7.04453 15 7.50008C15 7.95564 14.6222 8.33341 14.1667 8.33341Z"
              fill="currentColor"
            />
            <path
              d="M7.4974 15C7.04184 15 6.66406 14.6222 6.66406 14.1667V0.833333C6.66406 0.377778 7.04184 0 7.4974 0C7.95295 0 8.33073 0.377778 8.33073 0.833333V14.1667C8.33073 14.6222 7.95295 15 7.4974 15Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
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
     
  </div>

   <!-- video modal start -->
   <video-modal
    ref="video_modal"
    :video-url="`https://www.youtube.com/embed/${item.video_id}`"
  />
  <!-- video modal end -->
  <!-- image popup start -->
  <image-popup ref="image_popup" :images="images" />
  <!-- image popup end -->
</template>

<script>
import ImagePopup from '~~/components/common/modals/ImagePopup.vue';
import VideoModal from '~~/components/common/modals/VideoModal.vue';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  components: { VideoModal, ImagePopup },
  props:{
    item:{},
    images:Array,
    index:Number,
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    },
    handleImagePopup(indexNum){
      this.$refs.image_popup.showImg(indexNum);
    }
  },
};
</script>
