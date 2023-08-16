<template>
  <div class="portfolio__slider-9 has-scrollbar p-relative">
    <Swiper
      class="portfolio__slider-active-9 swiper-container"
      :slidesPerView="4"
      :spaceBetween="30"
      :modules="modules"
      :loop="false"
      :navigation="{
        nextEl: '.portfolio-button-next-9',
        prevEl: '.portfolio-button-prev-9',
      }"
      :scrollbar="{
        el: '.tp-scrollbar',
        clickable: true,
      }"
      :breakpoints="{
        1601: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      }"
    >
      <SwiperSlide
        v-for="item in portfolio_data"
        :key="item.id"
        class="portfolio__item-9 w-img"
        data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
      >
        <div
          class="portfolio__thumb-9"
          :style="{ backgroundImage: `url(${item.img})` }"
        ></div>
        <div class="portfolio__content-9">
          <div class="portfolio__tag-9">
            <span>
              <a href="#">{{ item.tag }}</a>
            </span>
          </div>
          <h3 class="portfolio__title-9">
            <nuxt-link href="/portfolio-details">{{ item.title }}</nuxt-link>
          </h3>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="portfolio__nav-9 d-none d-sm-block">
      <button type="button" class="portfolio-button-prev-9">
        <i class="fa-regular fa-chevron-left"></i>
      </button>
      <button type="button" class="portfolio-button-next-9">
        <i class="fa-regular fa-chevron-right"></i>
      </button>
    </div>
    <div class="tp-scrollbar mt-70 mb-50 grey-bg-12"></div>
  </div>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Scrollbar } from "swiper";

// internal
import portfolio_img_1 from "~/assets/img/portfolio/9/portfolio-1.jpg";
import portfolio_img_2 from "~/assets/img/portfolio/9/portfolio-2.jpg";
import portfolio_img_3 from "~/assets/img/portfolio/9/portfolio-3.jpg";
import portfolio_img_4 from "~/assets/img/portfolio/9/portfolio-4.jpg";
import portfolio_img_5 from "~/assets/img/portfolio/9/portfolio-5.jpg";
import portfolio_img_6 from "~/assets/img/portfolio/9/portfolio-6.jpg";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      portfolio_data: [
        {
          id: 1,
          img: portfolio_img_1,
          tag: "BRANDING",
          title: "We build great things",
        },
        {
          id: 2,
          img: portfolio_img_2,
          tag: "BRANDING",
          title: "We build great things",
        },
        {
          id: 3,
          img: portfolio_img_3,
          tag: "BRANDING",
          title: "We build great things",
        },
        {
          id: 4,
          img: portfolio_img_4,
          tag: "BRANDING",
          title: "We build great things",
        },
        {
          id: 5,
          img: portfolio_img_5,
          tag: "BRANDING",
          title: "We build great things",
        },
        {
          id: 6,
          img: portfolio_img_6,
          tag: "BRANDING",
          title: "We build great things",
        },
        {
          id: 7,
          img: portfolio_img_3,
          tag: "BRANDING",
          title: "We build great things",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Navigation, Scrollbar],
    };
  },
};
</script>
