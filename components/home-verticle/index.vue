<template>
  <section class="slider__area p-relative">
    <Swiper
      class="slider__active-11 slider__height-11 swiper-container"
      :direction="'vertical'"
      :slidesPerView="1"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :spaceBetween="0"
      :modules="modules"
      :effect="'fade'"
      :loop="false"
      :mousewheel="true"
      :pagination="{
        el: '.slider-pagination-11',
        clickable: true,
      }"
    >
      <!-- slider one -->
      <SwiperSlide
        class="slider__item-11 d-flex align-items-end p-relative green-bg-6"
      >
        <vertical-slider-item-one />
      </SwiperSlide>

      <!-- slider two -->
      <SwiperSlide
        class="slider__item-11 d-flex align-items-center p-relative slider__item-11-dark is-dark gradient-bg-dark"
      >
        <vertical-slider-item-two />
      </SwiperSlide>

      <!-- slider three -->
      <SwiperSlide
        class="slider__item-11 d-flex align-items-center p-relative is-pink"
      >
        <vertical-slider-item-three />
      </SwiperSlide>

      <!-- slider four -->
      <SwiperSlide
        class="slider__item-11 d-flex align-items-center p-relative align-items-sm-end is-khaki"
      >
        <vertical-slider-item-four />
      </SwiperSlide>

      <!-- slider five -->
      <SwiperSlide
        class="slider__item-11 d-flex align-items-center p-relative is-white"
      >
        <vertical-slider-item-five />
      </SwiperSlide>

      <!-- swiper dot -->
      <div
        :class="`tp-swiper-dot slider-pagination-11 swiper-pagination-clickable swiper-pagination-bullets 
      ${utils.activeIndex === 1 && 'header__white-slider slider-pagination-11-white'}`"
      ></div>
    </Swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Pagination, EffectFade } from "swiper";
// internal
import { useUtilsStore } from "~~/store/utils";
import VerticalSliderItemOne from "./VerticalSliderItemOne.vue";
import VerticalSliderItemTwo from "./VerticalSliderItemTwo.vue";
import VerticalSliderItemThree from "./VerticalSliderItemThree.vue";
import VerticalSliderItemFour from "./VerticalSliderItemFour.vue";
import VerticalSliderItemFive from "./VerticalSliderItemFive.vue";


export default {
  props: {
    isActive: Boolean,
  },
  components: {
    Swiper,
    SwiperSlide,
    VerticalSliderItemOne,
    VerticalSliderItemTwo,
    VerticalSliderItemThree,
    VerticalSliderItemFour,
    VerticalSliderItemFive,
  },
  setup() {
    const utils = useUtilsStore();
    const onSwiper = (swiper) => { 
      // console.log(swiper);
    };
    const onSlideChange = (swiper) => {
      utils.setIsActiveIndex(swiper.activeIndex);
    };
    return {
      onSwiper,
      onSlideChange,
      utils,
      modules: [Mousewheel, Pagination, EffectFade],
    };
  },
};
</script>
