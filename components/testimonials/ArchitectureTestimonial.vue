<template>
  <section class="testimonial__area black-bg-12 pt-145 pb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-12">
          <div
            class="testimonial__wrapper-8 z-index-1 p-relative pl-200 pr-200"
          >
            <div class="testimonial__shape">
              <img
                class="testimonial__shape-8"
                src="~/assets/img/testimonial/8/testimonial-bg-1.png"
                alt=""
              />
            </div>
            <div
              class="testimonial__slider p-relative"
              data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
            >
              <div class="testimonial__slider-active-8 swiper-container">
                <Carousel
                  ref="slider_1"
                  id="gallery"
                  :items-to-show="1"
                  :wrap-around="true"
                  v-model="currentSlide"
                >
                  <Slide
                    v-for="(item, i) in testimonial_items"
                    :key="i"
                    class="testimonial__item-8"
                  >
                    <div class="testimonial__content-8 text-center">
                      <div class="testimonial__shape-quote-8">
                        <img
                          src="~/assets/img/testimonial/8/testimonial-quote-1.png"
                          alt=""
                        />
                      </div>
                      <p>
                        {{ item.desc }}
                      </p>
                      <div class="testimonial__avater-info-8">
                        <h3 class="testimonial__avater-title-8">
                          {{ item.name }}
                        </h3>
                        <span class="testimonial__avater-designation-8">
                          {{ item.designation }}
                        </span>
                      </div>
                    </div>
                  </Slide>
                </Carousel>
              </div>
              <!-- testimonial_thumbs -->
              <Carousel
                id="thumbnails"
                :items-to-show="3"
                :wrap-around="true"
                v-model="currentSlide"
                ref="carousel"
                class="testimonial__slider-8-thumb"
              >
                <Slide
                  v-for="(item, i) in testimonial_thumbs"
                  :key="i"
                  class="testimonial__avater-8 text-center"
                >
                  <div
                    @click="slideTo(item.id)"
                    class="testimonial__avater-thumb-8"
                  >
                    <img :src="item.thumb" alt="thumb" />
                  </div>
                </Slide>
              </Carousel>
              <div
                class="testimonial-slider-dot-8 tp-swiper-dot tp-swiper-dot-2 text-center d-md-none"
              ></div>
            </div>
            <div class="testimonial__slider-arrow-8 d-none d-md-block">
              <button @click="handlePrev" class="testimonial-8-button-prev">
                <i class="fa-regular fa-chevron-left"></i>
              </button>
              <button @click="handleNext" class="testimonial-8-button-next">
                <i class="fa-regular fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";
// external
import { Carousel, Slide } from "vue3-carousel";
// internal
import user_1 from "~/assets/img/users/user-1.jpg";
import user_2 from "~/assets/img/users/user-5.jpg";
import user_3 from "~/assets/img/users/user-3.jpg";
import user_4 from "~/assets/img/users/user-4.jpg";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";


export default defineComponent({
  components: { Carousel, Slide },
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      currentSlide: 1,
      testimonial_items: [
        {
          id: 1,
          desc: "“Thank you guys for your excellent efforts and commitment in assisting us in our project! I would like to express my thanks for the work you have done!”",
          name: "Cody Fisher",
          designation: "Fonder of Incredible",
        },
        {
          id: 2,
          desc: "“There are many variations passages Lorem Ipsum available the   majority suffered alteration in some form by injected humour look embarrassing in middle”",
          name: "Cody Fisher",
          designation: "Fonder of Incredible",
        },
        {
          id: 3,
          desc: "“Eos voluptas consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at vero iure rem quia dolore est aliquid repellat.”",
          name: "Cody Fisher",
          designation: "Fonder of Incredible",
        },
        {
          id: 4,
          desc: "“Quia dolore eosaut voluptas commodi est aliquid consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at vero iure repellat.”",
          name: "Cody Fisher",
          designation: "Fonder of Incredible",
        },
      ],
      testimonial_thumbs: [
        { id: 0, thumb: user_1 },
        { id: 1, thumb: user_2 },
        { id: 2, thumb: user_3 },
        { id: 3, thumb: user_4 },
      ],
    };
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
    handlePrev() {
      this.$refs.slider_1?.prev();
    },
    handleNext() {
      this.$refs.slider_1?.next();
    },
  },
});
</script>

<style scoped>
.carousel__track {
  transform-style: preserve-3d;
}
.testimonial__slider-8-thumb .carousel__slide--active {
  opacity: 1;
  transform: scale(1.42);
}
</style>
