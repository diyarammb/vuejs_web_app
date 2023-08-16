<template>
  <section
    :class="`brand__area ${spacing ? 'pb-120' : ''} ${
      el_style ? 'pt-110 pb-120' : ''
    }`"
  >
    <div class="container-fluid g-0">
      <div v-if="!style_2 && !el_style" class="row gx-0">
        <div class="col-xxl-12">
          <div class="brand__info text-center">
            <p><strong>Technology</strong> We Use  </p>
          </div>
        </div>
      </div>
      <div v-if="el_style" class="row gx-0">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">Modern & Clean Design</span>
            <h3 class="tp-section-title-3">Brand Rounded Slider</h3>
          </div>
        </div>
      </div>
      <div class="row gx-0 gy-2">
        <div class="col-xxl-12">
          <div :class="`brand__slider-5 ${square ? square : ''}`">
            <div class="brand__slider-5">
              <swiper
                class="brand__slider-active-5"
                :freeMode="true"
                :loop="true"
                :autoplay="{
                  delay: 1,
                  pauseOnMouseEnter:true,
                }"
                :slidesPerView="1"
                :centeredSlides="true"
                :centeredSlidesBounds="true"
                :speed="4000"
                :modules="modules"
                :shortSwipes="false"
                :longSwipes="false"
                :allowTouchMove="false"
                :grabCursor="false"
                :breakpoints="{
                  '0': {
                    slidesPerView: 1,
                  },
                  '576': {
                    slidesPerView: 2,
                  },
                  '768': {
                    slidesPerView: 4,
                  },
                  '991': {
                    slidesPerView: 5,
                  },
                  '1200': {
                    slidesPerView: 7,
                  },
                }"
              >
              <swiper-slide v-for="(brand, i) in brand_1_data" :key="i">
                  <div class="brand__item-5">
                    <img :src="brand.brand" alt="brand" />
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import {Autoplay} from 'swiper';
// internal
import brand_1 from "~/assets/img/brand/3/one.png";
import brand_2 from "~/assets/img/brand/3/one.png";
import brand_3 from "~/assets/img/brand/3/one.png";
import brand_4 from "~/assets/img/brand/3/two.svg";
import brand_5 from "~/assets/img/brand/5/brand-5.png";
import brand_6 from "~/assets/img/brand/5/brand-6.png";
import brand_7 from "~/assets/img/brand/5/brand-7.png";
import brand_8 from "~/assets/img/brand/5/brand-8.png";

export default {
  components: { Swiper, SwiperSlide },
  props: {
    spacing: {
      type: Boolean,
      default: false,
    },
    style_2: {
      type: Boolean,
      default: false,
    },
    el_style: {
      type: Boolean,
      default: false,
    },
    square: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      brand_1_data: [
        { brand: brand_1 },
        { brand: brand_2 },
        { brand: brand_3 },
        { brand: brand_4 },
        { brand: brand_5 },
        { brand: brand_6 },
        { brand: brand_7 },
        { brand: brand_2 },
        { brand: brand_4 },
        { brand: brand_6 },
        { brand: brand_1 },
      ],
      brand_2_data: [
        { brand: brand_1 },
        { brand: brand_3 },
        { brand: brand_6 },
        { brand: brand_5 },
        { brand: brand_8 },
        { brand: brand_2 },
        { brand: brand_7 },
        { brand: brand_2 },
        { brand: brand_5 },
        { brand: brand_1 },
        { brand: brand_6 },
      ],
    };
  },
  setup() {

    return {
      modules: [Autoplay],
    };
  },
  mounted() {},
};
</script>
