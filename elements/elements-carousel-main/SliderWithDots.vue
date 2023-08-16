<template>
  <section class="portfolio__area pb-60 fix">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">Modern & Clean Design</span>
            <h3 class="tp-section-title-3">Carousel With Dots</h3>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-12">
          <div class="portfolio__details-slider p-relative pl-50 pr-50">
            <Carousel
              ref="detailsSlider"
              :items-to-show="1"
              :wrap-around="true"
              :snapAlign="'center'"
              :breakpoints="{
                992: {
                  itemsToShow: 1,
                },
                700: {
                  itemsToShow: 1,
                },
                0: {
                  itemsToShow: 1,
                },
              }"
              class="portfolio__details-slider-active"
            >
              <Slide
                v-for="(img, i) in images"
                :key="i"
                class="portfolio__details-slider-item"
              >
                <img :src="img" alt="slider img" />
              </Slide>

              <template #addons>
                <pagination />
              </template>
            </Carousel>

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
import { Carousel, Slide, Pagination } from "vue3-carousel";
// internal
import img_1 from "~/assets/img/portfolio/details/slider/portfolio-details-slider-1.jpg";
import img_2 from "~/assets/img/portfolio/details/slider/portfolio-details-slider-2.jpg";
import img_3 from "~/assets/img/portfolio/details/slider/portfolio-details-slider-3.jpg";

export default {
  components: { Carousel, Slide, Pagination },
  data() {
    return {
      images: [img_1, img_2, img_3, img_2, img_1],
    };
  },
};
</script>
