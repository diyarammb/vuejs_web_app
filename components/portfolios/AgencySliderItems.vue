<template>
  <div class="portfolio__slider-5 p-relative">
    <swiper
      :slidesPerView="4"
      :spaceBetween="15"
      :loop="true"
      :modules="modules"
      class="portfolio__slider-active-5 swiper-container"
      :navigation="{
        nextEl: '.portfolio-button-next-5',
        prevEl: '.portfolio-button-prev-5',
      }"
      :pagination="{
        el: '.portfolio-slider-dot-5',
        clickable: true,
      }"
      :breakpoints="{
        1600: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      }"
    >
      <swiper-slide v-for="(item, i) in portfolio_data" :key="item.id">
        <div
          class="portfolio__item-5 wow slideInDown"
          data-sal="slide-down" :data-sal-delay="item.delay" data-sal-duration="1000"
        >
          <div
            class="portfolio__thumb-5"
            :style="{ backgroundImage: `url(${item.img})` }"
          ></div>
          <div class="portfolio__content-5">
            <h3 class="portfolio__title-5">
              <nuxt-link href="/portfolio-details">{{ item.title }}</nuxt-link>
            </h3>
            <div class="portfolio__tag-5">
              <a href="#">{{ item.tag }}</a>
            </div>
          </div>
          <div class="portfolio__view-5">
            <a
              @click.prevent="handleImagePopup(i)"
              href="#"
              class="portfolio-plus-btn popup-image"
            >
              <i class="fa-solid fa-plus"></i>
            </a>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="portfolio__nav-5 d-none d-sm-block">
      <button type="button" class="portfolio-button-prev-5">
        <i class="fa-regular fa-arrow-left"></i>
      </button>
      <button type="button" class="portfolio-button-next-5">
        <i class="fa-regular fa-arrow-right"></i>
      </button>
    </div>
    <div class="portfolio-slider-dot-5 tp-swiper-dot d-sm-none"></div>
  </div>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import SalScrollAnimationMixin from '~/mixins/SalScrollAnimationMixin';

export default {
  mixins:[SalScrollAnimationMixin],
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    portfolio_data: {
      type: Array,
      default: [],
      required: true,
    },
    handleImagePopup: {
      type: Function,
      required: true,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
