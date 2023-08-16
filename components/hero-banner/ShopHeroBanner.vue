<template>
  <section class="slider__area">
    <swiper
      class="slider__active slider__active-13 swiper-container"
      :slidesPerView="1"
      :spaceBetween="0"
      :effect="'fade'"
      :modules="modules"
    >
      <swiper-slide
        v-for="item in slider_data"
        :key="item.id"
        class="slider__item-13 slider__height-13 grey-bg-17 d-flex align-items-end"
      >
        <div class="container">
          <div class="row align-self-end">
            <div class="col-xl-6 col-lg-6">
              <div class="slider__content-13">
                <span class="slider__title-pre-13" v-html="item.pre_title">
                </span>
                <h3 class="slider__title-13" v-html="item.title"></h3>

                <div class="slider__btn-13">
                  <nuxt-link href="/shop" class="tp-btn-border">
                    Shop Now
                    <span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.999969 7H13"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.99997 1L13 7L6.99997 13"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="slider__thumb-13 text-end mr-40">
                <span class="slider__thumb-13-circle-1"></span>
                <span class="slider__thumb-13-circle-2"></span>
                <img :src="item.img" alt="slider img" />
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade } from "swiper";
// internal
import slider_img from "~/assets/img/slider/13/slider-1.png";

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      slider_data: [
        {
          id: 1,
          pre_title: "Best Ear <br /> Headphones",
          title: "Find Best <br /> Matley Sound.",
          img: slider_img,
        },
        {
          id: 2,
          pre_title: "Best Ear <br /> Headphones",
          title: "Find Best <br /> Matley Sound.",
          img: slider_img,
        },
        {
          id: 3,
          pre_title: "Best Ear <br /> Headphones",
          title: "Find Best <br /> Matley Sound.",
          img: slider_img,
        },
        {
          id: 4,
          pre_title: "Best Ear <br /> Headphones",
          title: "Find Best <br /> Matley Sound.",
          img: slider_img,
        },
      ],
    };
  },
  setup() {
    return {
      modules: [EffectFade],
    };
  },
};
</script>
