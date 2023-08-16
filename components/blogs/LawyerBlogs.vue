<template>
  <section
    :class="`blog__area fix pb-70 ${
      style_2 ? 'blog__style-2 pt-90' : 'pt-100'
    }`"
  >
    <div class="container">
      <div v-if="!style_2" class="row align-items-center">
        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-7 col-sm-8">
          <div class="section__title-wrapper-4 mb-60">
            <span class="section__title-pre-4">OUR archive</span>
            <h3 class="section__title-4">Our latest news and update.</h3>
          </div>
        </div>
        <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-5 col-sm-4">
          <div class="blog__nav text-sm-end d-none d-sm-block">
            <button class="blog-slider-button-prev">
              <i class="fa-light fa-angle-left"></i>
            </button>
            <button class="blog-slider-button-next">
              <i class="fa-light fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div v-if="style_2" class="row align-items-center">
        <div class="col-xxl-8 col-xl-8 col-lg-5 col-md-7 col-sm-8">
          <div class="tp-section-title-wrapper-4 mb-60">
            <span class="tp-section-subtitle-2 is-uppercase subtitle-mb-2"
              >OUR archive</span
            >
            <h3 class="tp-section-title-2">Moira baxter’s blog posts</h3>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-7 col-md-5 col-sm-4">
          <div class="blog__nav text-sm-end d-none d-sm-block">
            <button class="blog-slider-button-prev">
              <i class="fa-light fa-angle-left"></i>
            </button>
            <button class="blog-slider-button-next">
              <i class="fa-light fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="blog__slider">
            <Swiper
              :slidesPerView="3"
              class="blog__slider-active swiper-container"
              :spaceBetween="30"
              :loop="true"
              :centeredSlides="true"
              :modules="modules"
              :autoplay="{
                delay: 3000,
              }"
              :pagination="{
                el: '.blog-slider-4',
              }"
              :navigation="{
                nextEl: '.blog-slider-button-next',
                prevEl: '.blog-slider-button-prev',
              }"
              :breakpoints="{
                1400: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                992: {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                768: {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                576: {
                  slidesPerView: 1,
                  centeredSlides: false,
                },
                0: {
                  slidesPerView: 1,
                  centeredSlides: false,
                },
              }"
            >
              <SwiperSlide
                v-for="blog in blogData.filter((item) => item.home_lawyer)"
                :key="blog.id"
                class="blog__item-4"
              >
                <LawyerSingleBlog :blog="blog" />
              </SwiperSlide>
            </Swiper>
            <div
              class="blog-slider-4 tp-swiper-dot text-center d-sm-none"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
// internal
import blogData from "~~/mixins/blogData";
import LawyerSingleBlog from "./single-blog/LawyerSingleBlog.vue";

export default {
  mixins: [blogData],
  props: {
    style_2: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    LawyerSingleBlog,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
