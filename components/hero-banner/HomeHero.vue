<template>
  <section class="slider__area p-relative">
    <Swiper
      class="slider__active swiper-container"
      :slidesPerView="1"
      :loop="true"
      :modules="modules"
      :effect="'fade'"
      :pagination="{
        el: '.main-slider-dot',
        clickable: true,
        renderBullet: renderBullet,
      }"
    >
      <SwiperSlide
        v-for="(item, i) in slider_data"
        :key="i"
        class="slider__item slider__height slider__overlay include-bg pt-100 pb-100 d-flex align-items-center"
      >
        <div
          class="slider__bg p-relative include-bg"
          :style="{ backgroundImage: `url(${item.bg})` }"
        ></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-12">
              <div class="slider__content text-center">
                <span class="slider__title-pre">
                  {{ item.pre_title }}
                </span>
                <h3 class="slider__title" v-html="item.title"></h3>
                <div class="slider__form">
                  <SliderForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <div class="main-slider-dot d-none d-lg-flex"></div>
    </Swiper>
    <div class="mouse-scroll">
      <a href="#tpabout" class="mouse-scroll-btn"></a>
    </div>
  </section>
</template>

<script>
// internal
import bg_1 from "~/assets/img/slider/slider-1.jpg";
import bg_2 from "~/assets/img/slider/slider-2.jpg";
import bg_3 from "~/assets/img/slider/slider-3.jpg";
import SliderForm from "~~/components/forms/SliderForm.vue";
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, EffectFade } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    SliderForm,
  },
  data() {
    return {
      bg_1,
      bg_2,
      bg_3,
      slider_data: [
        {
          id: 1,
          pre_title: "Hello! Consulting",
          title: "Workshops Business Consulting",
          bg: bg_1,
        },
        {
          id: 2,
          pre_title: "Hello! Consulting",
          title: "To This Template Than What You Can See",
          bg: bg_2,
        },
        {
          id: 3,
          pre_title: "Hello! Consulting",
          title: "Digital Age Adventure <br /> In Marketing",
          bg: bg_3,
        },
      ],
    };
  },
  methods: {
    renderBullet: function (index, className) {
      return `<span class=${className}>
              <button>${index < 9 ? "0" : ""}${index + 1}</button>
             </span>`;
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation, EffectFade],
    };
  },
};
</script>
