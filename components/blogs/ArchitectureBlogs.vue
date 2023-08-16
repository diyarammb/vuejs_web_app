<template>
  <section class="blog__area black-bg-12 pt-110 pb-100">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xxl-8 col-xl-8 col-lg-8">
          <div class="section__title-wrapper-8 mb-70">
            <span class="section__title-pre-8">Blog & Updates</span>
            <h3 class="section__title-8">
              Latest
              <span class="section__title-highlight-8"
                >Articles
                <svg
                  width="246"
                  height="26"
                  viewBox="0 0 246 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="wow"
                    d="M3 23C56.25 15.2537 162.375 -17.8439 243 23"
                    stroke="#FF5A1B"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
              & Tips
            </h3>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-4">
          <div class="blog__more-8 text-lg-end mb-80">
            <nuxt-link href="/blog-list-sidebar" class="tp-btn-border-7">
              View all Articles 
              <i class="fa-regular fa-chevron-right"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div
            class="blog__slider-8"
          >
            <Swiper
              class="blog__slider-active-8 swiper-container"
              :loop="true"
              :slidesPerView="2"
              :spaceBetween="0"
              :slidesPerGroup="2"
              :modules="modules"
              :pagination="{
                el: '.blog-slider-dot-8',
                clickable: true,
              }"
              :navigation="{
                nextEl: '.blog-8-button-next',
                prevEl: '.blog-8-button-prev',
              }"
              :breakpoints="{
                '992': {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                '768': {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                '576': {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                '0': {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
              }"
            >
              <SwiperSlide
                v-for="blog in blogData.filter(
                  (item) => item.home_architecture
                )"
                :key="blog.id"
                class="blog__item-8 transition-3 p-relative fix"
              >
                <div
                  class="blog__thumb-8 transition-3"
                  :style="{ backgroundImage: `url(${blog.img})` }"
                ></div>
                <div class="blog__tag-8">
                  <span>
                    <a href="#">{{ blog.tag }}</a>
                  </span>
                </div>
                <div class="blog__content-8">
                  <div class="blog__meta-8">
                    <span class="blog-category">
                      <a href="#">{{ blog.category }}</a>
                    </span>
                    <span>{{ blog.date }}</span>
                  </div>
                  <h3 class="blog__title-8">
                    <nuxt-link href="/blog-details" >
                      <span v-html="blog.title"></span>
                    </nuxt-link>
                  </h3>
                </div>
              </SwiperSlide>
            </Swiper>
            <div
              class="blog-slider-dot-8 mt-40 tp-swiper-dot tp-swiper-dot-2 text-center"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
// internal
import blogData from "~~/mixins/blogData";

export default {
  mixins: [blogData],
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
