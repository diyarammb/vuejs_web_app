<template>
  <section class="elements__carousel-area pt-110">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">Modern & Clean Design</span>
            <h3 class="tp-section-title-3">Carousel Grid With Controls</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="elements__carousel p-relative">
            <Carousel
              ref="detailsSlider"
              :items-to-show="3"
              :wrap-around="true"
              :snapAlign="'center'"
              :breakpoints="{
                992: {
                  itemsToShow: 3,
                },
                700: {
                  itemsToShow: 2,
                },
                0: {
                  itemsToShow: 1,
                },
              }"
              class="elements__carousel-active"
            >
              <Slide
                v-for="(img, i) in slider_data"
                :key="i"
                class="elements__carousel-item w-img"
              >
                <img :src="img" alt="slider img" />
              </Slide>

              <template #addons>
                <pagination />
              </template>
            </Carousel>
            <div class="elements-arrow">
              <button
               @click="handlePrev"
                type="button"
                class="elements-button-prev slick-prev slick-arrow"
              >
                <i class="fa-solid fa-angle-left"></i>
              </button>
              <button
               @click="handleNext"
                type="button"
                class="elements-button-next slick-next slick-arrow"
              >
                <i class="fa-solid fa-angle-right"></i>
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
import { Carousel, Slide, Pagination } from "vue3-carousel";
// internal
import port_1 from "~/assets/img/portfolio/5/portfolio-1.jpg";
import port_2 from "~/assets/img/portfolio/5/portfolio-2.jpg";
import port_3 from "~/assets/img/portfolio/5/portfolio-3.jpg";
import port_4 from "~/assets/img/portfolio/5/portfolio-4.jpg";
import port_5 from "~/assets/img/portfolio/5/portfolio-5.jpg";
import port_6 from "~/assets/img/portfolio/5/portfolio-6.jpg";

export default {
  components: { Carousel, Slide, Pagination },
  data() {
    return {
      slider_data: [port_1, port_2, port_3, port_4, port_5, port_6],
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
