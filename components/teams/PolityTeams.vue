<template>
  <section :class="`team__area ${el_style?'pt-110':''} pb-100`">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-10 text-center mb-45">
            <span class="section__title-pre-10">Our team member</span>
            <h3 class="section__title-10">Our expert volunteer</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="team__slider-10">
            <div class="team__slider-active-10 swiper-container">
              <swiper
                :modules="modules"
                :loop="false"
                :slides-per-view="4"
                :slides-per-group="1"
                :space-between="30"
                :loop-fill-group-with-blank="true"
                :pagination="{
                  el: '.team-slider-dot-10',
                  clickable: true,
                }"
                :breakpoints="{
                  1200: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 3,
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
                  v-for="(item, i) in teamData.filter(
                    (team) => team.home_politician
                  )"
                  :key="i"
                  class="team__item-10"
                  data-sal="slide-up" data-sal-delay="140" data-sal-duration="1000"
                >
                  <div class="team__thumb-10 p-relative m-img">
                    <nuxt-link href="/team-details">
                      <img :src="item.img" alt="" />
                    </nuxt-link>

                    <div class="team__contact-overlay">
                      <div class="team__contact-top">
                        <span>
                          <svg
                            width="52"
                            height="53"
                            viewBox="0 0 52 53"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M42.1757 38.0741L43.1507 45.9738C43.4006 48.0488 41.1757 49.4987 39.4008 48.4237L28.926 42.1989C27.776 42.1989 26.6511 42.124 25.5511 41.974C27.4011 39.7991 28.501 37.049 28.501 34.0741C28.501 26.9743 22.3512 21.2246 14.7514 21.2246C11.8514 21.2246 9.17653 22.0495 6.95158 23.4994C6.87658 22.8744 6.85156 22.2494 6.85156 21.5995C6.85156 10.2247 16.7263 1 28.926 1C41.1257 1 51.0005 10.2247 51.0005 21.5995C51.0005 28.3493 47.5255 34.3242 42.1757 38.0741Z"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M28.4993 34.0732C28.4993 37.0481 27.3994 39.7981 25.5494 41.9731C23.0745 44.973 19.1495 46.8979 14.7497 46.8979L8.22482 50.7727C7.12484 51.4477 5.72487 50.5228 5.87487 49.2478L6.49985 44.323C3.14994 41.9981 1 38.2731 1 34.0732C1 29.6733 3.34995 25.7984 6.94986 23.4985C9.17481 22.0485 11.8497 21.2236 14.7497 21.2236C22.3495 21.2236 28.4993 26.9734 28.4993 34.0732Z"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <p>Get touch with me</p>
                      </div>
                      <div class="team__contact-wrapper">
                        <p class="team-tel">
                          <a href="tel:088-3579-523-45">+088 3579 523 45</a>
                        </p>
                        <p>
                          <a href="mailto:harry@citygov.com"
                            >harry@citygov.com</a
                          >
                        </p>
                      </div>
                      <div
                        class="team__social-10 d-flex justify-content-center"
                      >
                        <a
                          v-for="(l, i) in item.social_links"
                          :key="i"
                          :href="l.link"
                          :target="l.target"
                        >
                          <i :class="l.icon"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="team__content-10 text-center">
                    <h3 class="team__title-10">
                      <nuxt-link href="/team-details">Jason Response</nuxt-link>
                    </h3>
                    <span class="team__designation-10">Party Leader</span>
                  </div>
                </swiper-slide>
                <div
                  class="tp-swiper-dot tp-swiper-dot-2 team-slider-dot-10 text-center mt-50"
                ></div>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
// internal
import teamData from "~~/mixins/teamData";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props:{
    el_style:{
      type:Boolean,
      default:false
    }
  },
  mixins: [teamData],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
