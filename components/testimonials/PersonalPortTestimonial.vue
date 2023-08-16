<template>
  <section class="testimonial__area pt-130 pb-135">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-9 is-center mb-60">
            <span class="section__title-pre-9">TESTIMONIAL</span>
            <h3 class="section__title-9">People talk about us</h3>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xxl-12">
          <div class="testimonial__slider-9 p-relative">
            <Carousel
              ref="slider_1"
              id="gallery"
              class="testimonial__slider-active-9"
              :items-to-show="1"
              :wrap-around="true"
              v-model="currentSlide"
            >
              <Slide
                v-for="(item, i) in testimonial_data"
                :key="i"
                class="testimonial__item-9"
              >
                <div class="testimonial__content-9 text-center">
                  <div class="testimonial__shape-quote-9">
                    <img
                      src="~/assets/img/testimonial/9/testimonial-quote-1.png"
                      alt="quote"
                    />
                  </div>
                  <h4 class="testimonial-heading">{{item.heading}}</h4>
                  <p v-html="item.desc"></p>
                  <div class="testimonial__avater-info-9">
                    <h3 class="testimonial__avater-title-9">{{item.name}}</h3>
                  </div>
                </div>
              </Slide>
            </Carousel>

            <div class="row justify-content-center">
              <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-8">
                <Carousel
                  id="thumbnails"
                  :autoplay="8000"
                  :items-to-show="3"
                  :wrap-around="true"
                  v-model="currentSlide"
                  ref="carousel"
                  class="testimonial__slider-nav-9 mt-35 mb-15 ml-25 mr-25"
                >
                  <Slide v-for="(item, i) in slider_thumb_nav" :key="i">
                    <div
                      class="testimonial__slider-9-thumb-nav"
                      @click="slideTo(item.id)"
                    >
                      <div class="tp-border-loader">
                        <svg
                          width="116"
                          height="116"
                          viewBox="0 0 116 116"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="58"
                            cy="58"
                            r="56.5"
                            stroke-width="0"
                          ></circle>
                          <circle
                            cx="58"
                            cy="58"
                            r="56.5"
                            stroke-width="3"
                            stroke-linecap="round"
                            style="stroke-dashoffset: -356px;stroke-dasharray: 0px, 366px;"
                          >
                        </circle>
                        </svg>
                      </div>
                      <img :src="item.user" alt="user" />
                    </div>
                  </Slide>
                </Carousel>
              </div>
            </div>

            <div class="testimonial__slider-arrow-9 d-none d-md-block">
              <button
               @click="handlePrev"
                type="button"
                class="slick-prev testimonial-9-button-prev slick-arrow"
              >
                <i class="fa-regular fa-arrow-left"></i><span>Preview</span>
              </button>

              <button
               @click="handleNext"
                type="button"
                class="slick-next testimonial-9-button-next slick-arrow"
              >
                <span>Next</span><i class="fa-regular fa-arrow-right"></i>
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
import { Carousel, Slide } from "vue3-carousel";
// user images
import user_1 from "~/assets/img/users/user-1.jpg";
import user_2 from "~/assets/img/users/user-2.jpg";
import user_3 from "~/assets/img/users/user-3.jpg";
import user_4 from "~/assets/img/users/user-14.jpg";
import user_5 from "~/assets/img/users/user-15.jpg";

export default {
  components: { Carousel, Slide },
  data() {
    return {
      currentSlide: 1,
      slider_thumb_nav: [
        {id:0, user: user_1 },
        {id:1, user: user_2 },
        {id:2, user: user_3 },
        {id:3, user: user_4 },
        {id:4, user: user_5 },
      ], 
      testimonial_data: [
        {
          id:1,
          heading: "Great Effort From Team",
          desc: "“ There are many variations passages Lorem Ipsum available the <br /> majority suffered alteration in some form by injected humour randomised look embarrassing in middle text ”",
          name: "Shahnewaz Sakil",
        },
        {
          id:2,
          heading: "Happy to deal with them",
          desc: "“ There are many variations passages Lorem Ipsum available the <br /> majority suffered alteration in some form by injected humour randomised look embarrassing in middle text ”",
          name: "Steven Smith",
        },
        {
          id:3,
          heading: "Awesome product features",
          desc: "“ There are many variations passages Lorem Ipsum available the <br /> majority suffered alteration in some form by injected humour randomised look embarrassing in middle text ”",
          name: "Jahanara Bibi",
        },
        {
          id:4,
          heading: "Their support is so cool",
          desc: "“ There are many variations passages Lorem Ipsum available the <br /> majority suffered alteration in some form by injected humour randomised look embarrassing in middle text ”",
          name: "Jinny Carter",
        },
        {
          id:5,
          heading: "Happy to deal with them",
          desc: "“ There are many variations passages Lorem Ipsum available the <br /> majority suffered alteration in some form by injected humour randomised look embarrassing in middle text ”",
          name: "Shanelle Blake",
        },
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
};
</script>
