<template>
  <div
    class="blog__item-6 wow fadeInUp scene"
    data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
  >
    <div class="blog__thumb-6">
      <nuxt-link href="/blog-details">
        <img
          class="layer"
          :src="blog.img"
          alt="blog__thumb"
        />
      </nuxt-link>
    </div>
    <div class="row">
      <div class="col-md-2 col-sm-6">
        <div class="blog__tag-6">
          <a href="#">
            <span v-html="blog.icon"></span>
            {{blog.tag}}
          </a>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <h3 class="blog__title-6">
          <nuxt-link href="/blog-details">
            <span v-html="blog.title"></span>
          </nuxt-link>
        </h3>
      </div>
      <div class="col-md-6 col-sm-6">
        <div class="blog__content-6">
          <p>
            {{blog.sm_text}}
          </p>

          <div class="blog__meta-6">
            <span>
              <a href="#"><i class="fa-regular fa-user"></i>{{blog.author_name}}</a>
            </span>
            <span>
              <i class="fa-regular fa-clock"></i>{{blog.date}}
            </span>
          </div>
        </div>
      </div>
      <div class="col-md-1 col-sm-6">
        <div class="blog__play text-lg-end mt-25">
          <a
           @click.prevent="handleVideoPopup"
            href="#"
            class="blog__play-btn popup-video"
            >
            <i class="fas fa-play"></i>
          </a>
        </div>
      </div>
    </div>
    <!-- video modal start -->
    <video-modal ref="video_modal" :video-url="`https://www.youtube.com/embed/${blog.video_id}`" />
      <!-- video modal end -->
  </div>
</template>

<script>
import VideoModal from '~~/components/common/modals/VideoModal.vue';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  components: { VideoModal },
  props: {
    blog: {
      type:Object,
      default:{},
      required:true,
    },
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    },
  },
};
</script>
