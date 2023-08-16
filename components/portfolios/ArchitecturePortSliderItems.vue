<template>
  <div class="portfolio__slider-8 p-relative fix">
    <div id="portfolio-bg-img" :class="active_bg">
      <div
        v-for="item in bg_images"
        :key="item.id"
        :class="`portfolio-bg portfolio-img-${item.id}`"
        :style="{ backgroundImage: `url(${item.bg})` }"
      ></div>
    </div>

    <Swiper
      :slidesPerView="4"
      :spaceBetween="0"
      class="portfolio__slider-active-8 swiper-container"
      :loop="true"
      :modules="modules"
      :navigation="{
        nextEl: '.portfolio-button-next-8',
        prevEl: '.portfolio-button-prev-8',
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
          spaceBetween: 0,
        },
      }"
    >
      <SwiperSlide
        v-for="(item, i) in slider_data"
        :key="i"
        @mouseenter="handleActiveBg(item.id)"
        :class="`portfolio__item-8 ${
          active_bg === `portfolio-img-${item.id}` ? 'active' : ''
        }`"
        rel="portfolio-img-1"
      >
        <div class="portfolio__content-8">
          <div class="portfolio__meta-8">
            <span>{{ item.year }}</span>
            <span>{{ item.meta }}</span>
          </div>
          <h3 class="portfolio__title-8">
            <nuxt-link href="/portfolio-details">{{ item.title }}</nuxt-link>
          </h3>
        </div>
      </SwiperSlide>
      <div class="portfolio__nav-8">
        <button type="button" class="portfolio-button-prev-8">
          <i class="fa-regular fa-chevron-left"></i>
        </button>
        <button type="button" class="portfolio-button-next-8">
          <i class="fa-regular fa-chevron-right"></i>
        </button>
      </div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
// internal
import bg_1 from "~/assets/img/portfolio/8/portfolio-1.jpg";
import bg_2 from "~/assets/img/portfolio/8/portfolio-2.jpg";
import bg_3 from "~/assets/img/portfolio/8/portfolio-3.jpg";
import bg_4 from "~/assets/img/portfolio/8/portfolio-4.jpg";
import bg_5 from "~/assets/img/portfolio/8/portfolio-5.jpg";
import bg_6 from "~/assets/img/portfolio/8/portfolio-6.jpg";

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      active_bg: "portfolio-img-2",
      bg_images: [
        { id: 1, bg: bg_1 },
        { id: 2, bg: bg_2 },
        { id: 3, bg: bg_3 },
        { id: 4, bg: bg_4 },
        { id: 5, bg: bg_5 },
        { id: 6, bg: bg_6 },
      ],
      slider_data: [
        {
          id: 1,
          year: 2022,
          meta: "Kiev, Ukraine",
          title: "Cubic Blockes Hotel",
        },
        {
          id: 2,
          year: 2022,
          meta: "Dawsbury, Hungery",
          title: "Spring Castle Hotel",
        },
        {
          id: 3,
          year: 2022,
          meta: "Drumchapel, New Town",
          title: "Tranquil Orb Resort",
        },
        {
          id: 4,
          year: 2022,
          meta: "Cape Town, China",
          title: "Pova Hotel & Spa",
        },
        {
          id: 5,
          year: 2022,
          meta: "Antertic, South Asia",
          title: "Nebula Resort",
        },
        {
          id: 6,
          year: 2022,
          meta: "City, America",
          title: "Sapphire Court Motel",
        },
      ],
    };
  },
  methods: {
    handleActiveBg(id) {
      this.active_bg = `portfolio-img-${id}`;
    },
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
