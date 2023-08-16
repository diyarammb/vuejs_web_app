<template>
  <section class="portfolio__area fix">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-xl-12">
          <div class="portfolio__details-slider pl-50 pr-50">
             

            <swiper
              :slidesPerView="3"
              :spaceBetween="30"
              :loop="false"
              :pagination="{
                clickable:true,
              }"
              :modules="modules"
              class="portfolio__details-slider-active"
            >
              <swiper-slide
                v-for="(img, i) in images"
                :key="i"
                class="portfolio__details-slider-item"
              >
                <img :src="img" alt="slider img" />
              </swiper-slide>
            </swiper>
            <div
              class="portfolio-details-slider-dot tp-swiper-dot-2 text-center mt-45"
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
import { Pagination } from "swiper";
// import { Carousel, Slide,Pagination } from "vue3-carousel";
// import 'vue3-carousel/dist/carousel.css'
// internal
import img_1 from "~/assets/img/portfolio/UI/candy3.jpg";
import img_2 from "~/assets/img/portfolio/UI/candy2.jpg";
import img_3 from "~/assets/img/portfolio/UI/candy1.jpg";

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      images: [img_1, img_2, img_3, img_2,img_3,],
    };
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
