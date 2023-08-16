<template>
  <section class="testimonial__area pt-110 pb-115 grey-bg-15 fix">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xxl-7 col-xl-9 col-lg-9 col-md-9">
          <div class="tp-section-wrapper-2 mb-55">
            <span class="tp-section-subtitle-2"
              >Some of Our Customer's Words</span
            >
            <h3 class="tp-section-title-2">
              Customers love the ease and simplicity
            </h3>
          </div>
        </div>
        <div class="col-xxl-5 col-xl-3 col-lg-3 col-md-3">
          <div class="testimonial__slider-arrow-15 text-md-end mb-65">
            <button class="testimonial-15-button-prev">
              <i class="fa-regular fa-chevron-left"></i>
            </button>
            <button class="testimonial-15-button-next">
              <i class="fa-regular fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div
            class="testimonial__slider-15 testimonial__style-3"
            data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
          >
            <Swiper
              class="testimonial__slider-active-15 swiper-container"
              :slidesPerView="4"
              :spaceBetween="20"
              :loop="true"
              :modules="modules"
              :breakpoints="{
                1200: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                },
              }"
              :navigation="{
                nextEl: '.testimonial-15-button-next',
                prevEl: '.testimonial-15-button-prev',
              }"
            >
              <SwiperSlide v-for="item in testimonial_data" :key="item.id">
                <div class="testimonial__item-6 transition-3 mb-60">
                  <div class="testimonial__rating testimonial__rating-6">
                    <a v-for="r in item.ratings" :key="r" href="#">
                      <i class="fa-solid fa-star"></i>
                    </a>
                  </div>
                  <div class="testimonial__content-6">
                    <p>
                      {{ item.desc }}
                    </p>
                  </div>
                  <div class="testimonial__avater-6 d-flex align-items-center">
                    <div class="testimonial__avater-thumb-6">
                      <img :src="item.user" alt="user" />
                    </div>
                    <div class="testimonial__avater-info-6">
                      <h3 class="testimonial__avater-title-6">
                        {{ item.name }}
                      </h3>
                      <span class="testimonial__avater-designation-6">
                        {{ item.designation }}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-xl-4 col-lg-4">
          <div class="brand__slider-7">
            <span>TRUSTED BY GLOBAL BRANDS:</span>
          </div>
        </div>
        <div class="col-xl-8 col-lg-8">
          <div class="brand__slider-7">
            <swiper
              :slidesPerView="5"
              :spaceBetween="0"
              :loop="true"
              :breakpoints="{
                1200: {
                  slidesPerView: 5,
                },
                992: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                576: {
                  slidesPerView: 3,
                },
                0: {
                  slidesPerView: 2,
                },
              }"
              class="brand__slider-active-7 swiper-container"
            >
              <swiper-slide
                v-for="(brand, i) in brands"
                :key="i"
                class="brand__item-7 text-center"
              >
                <img :src="brand" alt="brand" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
// internal
import user_1 from "~/assets/img/users/user-1.jpg";
import user_2 from "~/assets/img/users/user-2.jpg";
import user_3 from "~/assets/img/users/user-3.jpg";
import user_4 from "~/assets/img/users/user-4.jpg";
import brand_1 from "~/assets/img/brand/7/brand-1.png";
import brand_2 from "~/assets/img/brand/7/brand-2.png";
import brand_3 from "~/assets/img/brand/7/brand-3.png";
import brand_4 from "~/assets/img/brand/7/brand-4.png";
import brand_5 from "~/assets/img/brand/7/brand-5.png";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  components: { Swiper, SwiperSlide },
  data() {
    return {
      brands: [brand_1, brand_2, brand_3, brand_4, brand_5,brand_2],
      testimonial_data: [
        {
          id: 1,
          ratings: [1, 2, 3, 4, 5],
          desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
          user: user_1,
          name: "Rodney Artichoke",
          designation: "Manager",
        },
        {
          id: 2,
          ratings: [1, 2, 3, 4, 5],
          desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
          user: user_2,
          name: "Lurch Schpellchek",
          designation: "Developer",
        },
        {
          id: 3,
          ratings: [1, 2, 3, 4],
          desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
          user: user_3,
          name: "Pelican Steve",
          designation: "UI Designer",
        },
        {
          id: 4,
          ratings: [1, 2, 3, 4, 5],
          desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
          user: user_4,
          name: "Nathaneal Down",
          designation: "Supporter",
        },
        {
          id: 5,
          ratings: [1, 2, 3, 4, 5],
          desc: "Non architecto aperiam ea omnis are quisquam et laudantium alias aetwst quia illum vel cumque.",
          user: user_2,
          name: "Lurch Schpellchek",
          designation: "Developer",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
