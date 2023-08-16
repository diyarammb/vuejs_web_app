<template>
  <section :class="`team__area ${style_2?'pt-110 pb-110':'pt-115'}`">
    <div class="container">
      <div v-if="!el_style" class="row align-items-end">
        <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-7">
          <div class="section__title-wrapper mb-60">
            <h3 class="section__title">
              One
              <span class="section__title-highlight"
                >Team
                <svg width="220" height="27" viewBox="0 0 220 27" fill="none">
                  <path
                    d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z"
                    fill="currentColor"
                  />
                </svg> </span
              >, <br />
              Many Talents
            </h3>
          </div>
        </div>
        <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-5">
          <div class="team__join mb-70 text-sm-end">
            <nuxt-link href="/team" class="tp-link-btn-2">
              Join Our Team
              <span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7H13"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 1L13 7L7 13"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-if="el_style" class="row">
        <div class="col-xl-12">
            <div class="tp-section-wrapper-3 mb-50 text-center">
              <span class="tp-section-subtitle-3">Our Team</span>
              <h3 class="tp-section-title-3">Team Slider Style</h3>
            </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div
            class="team__slider wow fadeInUp"
            data-sal="slide-up" data-sal-delay="130" data-sal-duration="1200"
          >
            <swiper
              :slidesPerView="4"
              :spaceBetween="30"
              class="team__slider-active swiper-container"
              :loop="false"
              :modules="modules"
              :pagination="{
                el: '.team-slider-dot',
                clickable: true,
              }"
              :breakpoints="{
                1200: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                },
              }"
            >
              <swiper-slide
                v-for="(item, i) in teamData.filter((team) => team.home)"
                :key="i"
              >
                <SingleTeam :item="item"/>
              </swiper-slide>
            </swiper>
            <div class="team-slider-dot tp-swiper-dot text-center mt-50"></div>
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
// internal
import teamData from "~~/mixins/teamData";
import SingleTeam from "./single-team/SingleTeam.vue";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [teamData,SalScrollAnimationMixin],
  props:{
    style_2:{
      type:Boolean,
      default:false
    },
    el_style:{
      type:Boolean,
      default:false
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    SingleTeam
},
  setup() {
    return {
      modules: [Pagination, Navigation, EffectFade],
    };
  },
};
</script>
