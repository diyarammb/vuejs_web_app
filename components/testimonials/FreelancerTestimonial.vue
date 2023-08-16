<template>
  <section :class="`testimonial__area p-relative z-index-1 ${el_style?'pt-120 pb-140':''}`">
    <div v-if="!el_style" class="testimonial__bg"></div>
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-2 text-center mb-60">
            <span class="section__title-pre-2">TESTIMONIALS</span>
            <h3 class="section__title-2">What My Clients Say</h3>
          </div>
        </div>
      </div>
      <div
        class="testimonial__inner-2 z-index-1 p-relative wow fadeInUp"
        data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000"
        data-bg-color="theme-2"
        :style="{ backgroundImage: `url(${bg})` }"
      >
        <div class="row justify-content-center">
          <div class="col-xxl-8 col-xl-8 col-lg-10 col-md-11">
            <div class="testimonial__slider-2">
              <div class="row justify-content-center">
                <div
                  class="col-xxl-5 col-xl-5 col-lg-7 col-md-8 col-sm-8 col-8"
                >
                  <Carousel
                    id="thumbnails"
                    :autoplay="8000"
                    :items-to-show="3"
                    :wrap-around="true"
                    v-model="currentSlide"
                    ref="carousel"
                    class="testimonial__slider-nav"
                  >
                    <Slide v-for="(item, i) in slider_thumb_nav" :key="i">
                      <div
                        class="testimonial__slider-thumb-nav"
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
                              stroke-width="1"
                            ></circle>
                            <circle
                              cx="58"
                              cy="58"
                              r="56.5"
                              stroke-width="3"
                              stroke-linecap="round"
                              style="stroke-dashoffset: -356px;stroke-dasharray: 0px, 366px;"
                            ></circle>
                          </svg>
                        </div>
                        <img :src="item.user" alt="user" />
                      </div>
                    </Slide>
                  </Carousel>
                </div>
              </div>

              <Carousel
                ref="slider_1"
                id="gallery"
                class="testimonial__slider-active-2"
                :items-to-show="1"
                :wrap-around="true"
                v-model="currentSlide"
              >
                <Slide
                  v-for="(item, i) in testimonial_data"
                  :key="i"
                  class="testimonial__item-2"
                >
                  <div class="testimonial__content-2">
                    <p>{{ item.desc }}</p>

                    <div class="testimonial__avater-info-2">
                      <h3 class="testimonial__avater-title-2">
                        {{ item.name }}
                      </h3>
                      <span class="testimonial__avater-designation-2">
                        {{item.designation}}
                      </span>
                    </div>
                  </div>
                </Slide>
              </Carousel>
            </div>
          </div>
        </div>
        <div class="testimonial__slider-arrow-2">
          <button
          @click="handlePrev"
            type="button"
            class="slick-prev testimonial-2-button-prev slick-arrow"
          >
            <i class="fa-solid fa-arrow-left"></i></button
          >
          <button
          @click="handleNext"
            type="button"
            class="slick-next testimonial-2-button-next slick-arrow"
          >
            <i class="fa-solid fa-arrow-right"></i>
          </button>
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
import user_4 from "~/assets/img/users/user-4.jpg";
import user_5 from "~/assets/img/users/user-5.jpg";
import user_6 from "~/assets/img/users/user-6.jpg";
// bg
import bg from "~/assets/img/testimonial/2/testimonial-shape-1.png";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props:{
    el_style:{
      type:Boolean,
      default:false
    }
  },
  components: { Carousel, Slide },
  data() {
    return {
      currentSlide: 1,
      // bg
      bg,
      // slider_thumb_nav
      slider_thumb_nav: [
        { id: 0, user: user_1 },
        { id: 1, user: user_2 },
        { id: 2, user: user_3 },
        { id: 3, user: user_4 },
        { id: 4, user: user_5 },
        { id: 5, user: user_6 },
      ],
      //  testimonial_data
      testimonial_data: [
        {
          id: 1,
          desc: "“ There are many variations passages Lorem Ipsum available but the majority suffered alteration in some form by injected humour randomised look embarrassing hidden in middle text ”",
          name: "Fleece Harrygold",
          designation: "Project Manager",
        },
        {
          id: 2,
          desc: "“ Ipsum available but the majority suffered alteration in some form by injected humour randomised look embarrassing hidden in middle text There are many variations passages Lorem  ”",
          name: "Naim Ahmed",
          designation: "Developer",
        },
        {
          id: 3,
          desc: "“ Suffered alteration in some form by injected humour randomised There are many variations passages Lorem Ipsum available but the majority look embarrassing hidden in middle text ”",
          name: "Stiven Smith",
          designation: "Themepure Member",
        },
        {
          id: 4,
          desc: "“  Humour randomised look embarrassing There are many variations passages Lorem Ipsum available but the majority suffered alteration in some form by injected hidden in middle text ”",
          name: "Gomz Itsa",
          designation: "Designer",
        },
        {
          id: 5,
          desc: "“ Injected humour randomised look embarrassing There are many variations passages Lorem Ipsum available but the majority suffered alteration in some form by  hidden in middle text ”",
          name: "Unika Kala",
          designation: "UI/UX Designer",
        },
        {
          id: 6,
          desc: "“ Lorem Ipsum available but the majority suffered there are many variations passages alteration in some form by injected humour randomised look embarrassing hidden in middle text ”",
          name: "Helen Klintong",
          designation: "SEO Expert",
        },
      ],
    };
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
    handlePrev(){
      this.$refs.slider_1?.prev();
    },
    handleNext(){
      this.$refs.slider_1?.next();
    },
  },
};
</script>
