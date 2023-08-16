<template>
  <div class="brand__area grey-bg-7 pt-70 pb-70">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="brand__slider">
            <Swiper
              :slidesPerView="6"
              :spaceBetween="0"
              class="brand__slider-active-2 swiper-container"
              :loop="true"
              :breakpoints="{
                '1200': {
                  slidesPerView: 6,
                },
                '992': {
                  slidesPerView: 3,
                },
                '768': {
                  slidesPerView: 3,
                },
                '576': {
                  slidesPerView: 2,
                },
                '0': {
                  slidesPerView: 2,
                },
              }"
            >
              <SwiperSlide
                v-for="(brand, i) in brand_data"
                :key="i"
                class="brand__item-2"
              >
                <img :src="brand.brand" alt="brand" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
// images
import brand_1 from "~/assets/img/brand/2/brand-1.png";
import brand_2 from "~/assets/img/brand/2/brand-2.png";
import brand_3 from "~/assets/img/brand/2/brand-3.png";
import brand_4 from "~/assets/img/brand/2/brand-4.png";
import brand_5 from "~/assets/img/brand/2/brand-5.png";
import brand_6 from "~/assets/img/brand/2/brand-6.png";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      brand_data: [
        { brand: brand_1 },
        { brand: brand_2 },
        { brand: brand_3 },
        { brand: brand_4 },
        { brand: brand_5 },
        { brand: brand_6 },
        { brand: brand_4 },
      ],
    };
  },
};
</script>
