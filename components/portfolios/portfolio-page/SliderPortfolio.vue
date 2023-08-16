<template>
  <section class="portfolio__horizontal p-relative">
    <div class="portfolio__horizontal-slider">
      <swiper
        class="portfolio__horizontal-active swiper-container"
        :slidesPerView="1"
        :spaceBetween="0"
        :loop="true"
        :mousewheel="true"
        :modules="modules"
        :pagination="{
          el: '.portfolio-horizontal-dot',
          clickable: true,
          renderBullet: renderFraction,
        }"
        :navigation="{
          nextEl: '.portfolio-horizontal-button-next',
          prevEl: '.portfolio-horizontal-button-prev',
        }"
      >
        <swiper-slide
          v-for="(item, i) in slider_port_data"
          :key="i"
          class="portfolio__horizontal-item"
        >
          <slider-single-port :item="item" :videoPopup="handleVideoPopup" />
        </swiper-slide>
      </swiper>
      <div class="portfolio-horizontal-dot d-none d-sm-flex"></div>
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
// external
import { Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
// internal
import slider_bg_1 from "~/assets/img/portfolio/horizontal/portfolio-slider-1.jpg";
import slider_bg_2 from "~/assets/img/portfolio/horizontal/portfolio-slider-2.jpg";
import slider_bg_3 from "~/assets/img/portfolio/horizontal/portfolio-slider-3.jpg";
import slider_bg_4 from "~/assets/img/portfolio/horizontal/portfolio-slider-4.jpg";
import SliderSinglePort from './SliderSinglePort.vue';
import VideoModal from '~~/components/common/modals/VideoModal.vue';

export default {
  components:{Swiper,SwiperSlide,SliderSinglePort, VideoModal},
  data() {
    return {
      slider_port_data: [
        {
          category: "Branding",
          date: "January 14, 2022",
          title: "Classic Custom <br/> Book Cover Prints",
          subtitle:
            "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.",
          bg: slider_bg_1,
          video_id:'x7MgSKrNmn8',
        },
        {
          category: "Branding",
          date: "February 16, 2022",
          title: "Our Best Cover <br/> Designs & Concepts",
          subtitle:
            "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.",
          bg: slider_bg_2,
          video_id:'x7MgSKrNmn8',
        },
        {
          category: "Branding",
          date: "March 12, 2022",
          title: "Easily make your <br/> own mockup design",
          subtitle:
            "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.",
          bg: slider_bg_3,
          video_id:'x7MgSKrNmn8',
        },
        {
          category: "Branding",
          date: "April 12, 2022",
          title: "Unique Bowls <br/> From the South Pacific.",
          subtitle:
            "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.",
          bg: slider_bg_4,
          video_id:'x7MgSKrNmn8',
        },
      ],
    };
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    },
  },
  setup () {
    const renderFraction = (index,cls) => {
      return `<span class="${cls}">
                <button>${index < 9 ? "0" : ""}${index + 1}</button>
            </span>`;
    };
    return {
      renderFraction,
      modules:[Mousewheel,Navigation,Pagination]
    }
  }
};
</script>
