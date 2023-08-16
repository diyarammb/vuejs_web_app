<template>
  <section :class="`portfolio__area fix pb-${spacing}`">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12">
          <div class="portfolio__details-slider-2 p-relative pl-50 pr-50">
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
              class="portfolio__details-slider-active-2"
            >
              <Slide
                v-for="(img, i) in images"
                :key="i"
                class="portfolio__details-slider-item-2 w-img"
              >
                <img :src="img" alt="slider img" />
              </Slide>
            </Carousel>

            <div
              class="portfolio__details-arrow portfolio-details-slider-arrow-2 d-none d-md-block"
            >
              <button
                type="button"
                @click="handlePrev"
                class="portfolio-details-2-button-prev slick-prev slick-arrow"
              >
                <i class="fa-regular fa-arrow-left"></i></button
              ><button
                type="button"
                @click="handleNext"
                class="portfolio-details-2-button-next slick-next slick-arrow"
              >
                <i class="fa-regular fa-arrow-right"></i>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
// internal
import img_1 from "~/assets/img/portfolio/details/slider/portfolio-details-slider-1.jpg";
import img_2 from "~/assets/img/portfolio/details/slider/portfolio-details-slider-2.jpg";
import img_3 from "~/assets/img/portfolio/details/slider/portfolio-details-slider-3.jpg";

export default {
  components: { Carousel, Slide, Pagination, Navigation },
  props: {
    spacing: {
      type: String,
      default: "120",
    },
  },
  data() {
    return {
      images: [img_1, img_2, img_3, img_2, img_1],
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
  setup() {
    return {
      // modules: [Pagination,Navigation],
    };
  },
};
</script>
