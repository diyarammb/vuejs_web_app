<template>
  <section class="elements__carousel-area pt-110 pb-110">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">Modern & Clean Design</span>
            <h3 class="tp-section-title-3">Carousel With Controls</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6">
          <div class="elements__carousel elements__carousel-img p-relative fix">
            <Carousel
              ref="detailsSlider"
              :items-to-show="1"
              :wrap-around="true"
              :snapAlign="'center'"
              class="elements__carousel-img-active"
            >
              <Slide
                v-for="(img, i) in carousel_images"
                :key="i"
                class="elements__carousel-item w-img"
              >
                <img :src="img" alt="slider img" />
              </Slide>
            </Carousel>

            <div class="elements-img-arrow">
              <button
                @click="handlePrev"
                type="button"
                class="elements-img-button-prev slick-prev slick-arrow"
              >
                <i class="fa-solid fa-angle-left"></i>
              </button>
              <button
                @click="handleNext"
                type="button"
                class="elements-img-button-next slick-next slick-arrow"
              >
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div
            class="elements__carousel elements__carousel-img-dot p-relative fix"
          >
            <Carousel
              :items-to-show="1"
              :wrap-around="true"
              :snapAlign="'center'"
              class="elements__carousel-img-dot-active"
            >
              <Slide
                v-for="(img, i) in carousel_images"
                :key="i"
                class="elements__carousel-item w-img"
              >
                <img :src="img" alt="slider img" />
              </Slide>

              <template #addons>
                <pagination />
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Carousel, Slide, Pagination } from "vue3-carousel";
// internal
import slider_img_1 from "~/assets/img/portfolio/metro/portfolio-metro-1.jpg";
import slider_img_2 from "~/assets/img/portfolio/metro/portfolio-metro-2.jpg";
import slider_img_3 from "~/assets/img/portfolio/metro/portfolio-metro-3.jpg";
import slider_img_4 from "~/assets/img/portfolio/metro/portfolio-metro-4.jpg";
import slider_img_5 from "~/assets/img/portfolio/metro/portfolio-metro-5.jpg";

export default {
  components: { Carousel, Slide, Pagination },
  data() {
    return {
      carousel_images: [
        slider_img_1,
        slider_img_2,
        slider_img_3,
        slider_img_4,
        slider_img_5,
      ],
    };
  },
  methods: {
    handlePrev() {
      this.$refs.detailsSlider?.prev();
    },
    handleNext() {
      this.$refs.detailsSlider?.next();
    },
  },
};
</script>
