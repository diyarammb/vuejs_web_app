<template>
  <section
    :class="`testimonial__area ${el_style?'pt-120 pb-120':'pt-120 pb-60'}`"
    data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
  >
    <div class="container">
      <div class="testimonial__inner p-relative pt-70 purple-bg">
        <div class="testimonial__shape">
          <img
            class="testimonial__shape-quote"
            src="~/assets/img/testimonial/testimonial-quote-icon.png"
            alt="shape"
          />
        </div>
        <div class="row justify-content-center">
          <div class="col-xxl-10 col-xl-9 col-lg-10 col-11">
            <div class="testimonial__wrapper">
              <div class="section__title-wrapper text-center">
                <span class="section__title-pre section__title-pre-1-2"
                  >Some of Our Customer's Words</span
                >
                <h3 class="section__title section__title-1-2">
                  <span class="section__title-highlight">
                    Customers
                    <svg
                      width="220"
                      height="27"
                      viewBox="0 0 220 27"
                      fill="none"
                    >
                      <path
                        d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  love the ease and simplicity
                </h3>
              </div>

              <div class="testimonial__slider pb-50">
                <Swiper
                  :slidesPerView="1"
                  :spaceBetween="30"
                  class="testimonial__slider-active pt-45 pb-40 swiper-container"
                  :loop="true"
                  :modules="modules"
                  :pagination="{
                    el: '.testimonial-slider-dot',
                    clickable: true,
                  }"
                  :breakpoints="{
                    1200: {
                      slidesPerView: 1,
                    },
                    992: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                    },
                    576: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    },
                  }"
                >
                  <SwiperSlide v-for="(item, i) in testimonial_items" :key="i">
                    <div class="testimonial__item">
                      <div class="row align-items-center">
                        <div class="col-xxl-4 col-xl-4 col-lg-4">
                          <div
                            class="testimonial__avater d-flex align-items-center"
                          >
                            <div class="testimonial__avater-thumb mr-15">
                              <img :src="item.user" alt="user" />
                            </div>
                            <div class="testimonial__avater-info">
                              <h3 class="testimonial__avater-title">
                                {{ item.title }}
                              </h3>
                              <span class="testimonial__avater-designation">
                                {{ item.designation }}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-8 col-xl-8 col-lg-8">
                          <div class="testimonial__content">
                            <p>{{ item.desc }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div class="testimonial-slider-dot tp-swiper-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!el_style" class="container">
      <div class="brand__inner purple-bg">
        <div class="row justify-content-center">
          <div class="col-xxl-10 col-xl-9 col-xl-10 col-11">
            <div class="brand__area">
              <div
                class="brand__thumb-wrapper d-sm-flex align-items-center text-center text-sm-start"
              >
                <h3 class="brand__title">Global Experts:</h3>
                <BrandSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, EffectFade } from "swiper";
// users img
import user_1 from "~/assets/img/users/user-1.jpg";
import user_2 from "~/assets/img/users/user-2.jpg";
import user_3 from "~/assets/img/users/user-3.jpg";
import user_4 from "~/assets/img/users/user-4.jpg";
// BrandSlider
import BrandSlider from "../brands/BrandSlider.vue";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props:{
    el_style:{
      type:Boolean,
      default:false
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    BrandSlider,
  },
  data() {
    return {
      testimonial_items: [
        {
          id: 1,
          user: user_1,
          title: "Cody Fisher",
          designation: "Starbucks",
          desc: "Eos voluptas consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at vero iure rem quia dolore aut voluptas commodi est aliquid repellat.",
        },
        {
          id: 2,
          user: user_2,
          title: "Naim Ahmed",
          designation: "ThemePure",
          desc: "Quia dolore eos voluptas  rem  aut voluptas commodi est aliquid consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at vero iure repellat.",
        },
        {
          id: 3,
          user: user_3,
          title: "Steven Paul",
          designation: "Mcdoal",
          desc: "Qui exercitationem nisi aut dolor os voluptas consequuntur est assumenda quae aut omnis unde. Iure at vero iure rem quia dolore aut voluptas commodi est aliquid repellat.",
        },
        {
          id: 4,
          user: user_4,
          title: "Quali Mac",
          designation: "Suddly",
          desc: "vero iure rem quia dolore voluptas consequuntur est assumenda quae aut omnis unde. Qui exercitationem nisi aut dolor iure at  aut voluptas commodi est aliquid repellat.",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Pagination, Navigation, EffectFade],
    };
  },
};
</script>
