<style>
.tp-btn:hover{
  background-color: purple!important;;
}

</style>
<template>
  <section class="testimonial__area pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-lg-5">
          <div
            class="testimonial__wrapper-14"
            data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
          >
            <div class="testimonial__info">
              <div class="section__title-wrapper-9 mb-10">
                <span class="section__title-pre section__title-pre-1-3" style="color:#673c8b;">Happy clients</span>
              </div>
              <h3
                class="testimonial__info-title has-background"
                :style="{ backgroundImage: `url(${text_bg})` }"
                style="color:#673c8b;"
              >
                220+
              </h3>
              <p>Customers that have Achieved Their Goals.</p>
              <div class="testimonial__info-btn">
                <nuxt-link href="/portfolio-2" class="tp-btn tp-link-btn-3" style="background-color:#673c8b;">
                  Explore Now
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
                      ></path>
                      <path
                        d="M7 1L13 7L7 13"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-7 col-lg-7">
          <div
            class="testimonial__slider-14 testimonial__style-black p-relative"
            data-sal="slide-up" data-sal-delay="160" data-sal-duration="1000"
          >
            <swiper
              :slidesPerView="1"
              :spaceBetween="0"
              :modules="modules"
              :loop="true"
              :pagination="{
                el: '.testimonial-slider-dot-14',
                clickable: true,
              }"
              class="testimonial__slider-active-14 swiper-container"
            >
              <swiper-slide
              v-for="(item,i) in testimonial_items"
              :key="i"
                class="testimonial__item-4 d-sm-flex align-items-center"
              >
                <div class="testimonial__avater-thumb-4">
                  <img :src="item.user" alt="user" />
                </div>
                <div class="testimonial__content-4">
                  <div class="testimonial__icon">
                    <span>
                      <svg
                        width="44"
                        height="38"
                        viewBox="0 0 44 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.5409 19.2088V38H0V33.1282C0 25.5189 0.553459 19.8584 1.66038 16.1465C2.85954 12.3419 5.94968 6.95971 10.9308 0L18.8176 4.45421C14.6667 11.5995 12.2683 16.5177 11.6226 19.2088H18.5409ZM43.7233 19.2088V38H25.1824V33.1282C25.1824 25.5189 25.7358 19.8584 26.8428 16.1465C28.0419 12.3419 31.1321 6.95971 36.1132 0L44 4.45421C39.8491 11.5995 37.4507 16.5177 36.805 19.2088H43.7233Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="testimonial__rating">
                    <a href="#" v-for="(r,i) in item.ratings" :key="i">
                      <i class="fa-solid fa-star" ></i>
                    </a>
                  </div>

                  <p>
                    {{ item.desc }}
                  </p>

                  <div class="testimonial__avater-info-4">
                    <h4 class="testimonial__avater-title-4">{{item.name}}</h4>
                    <span class="testimonial__avater-designation-4">
                      {{item.title}}
                    </span>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="testimonial-slider-dot-14 tp-swiper-dot" style="color: #673c8b!important;"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
// internal
import text_bg from "~/assets/img/testimonial/testimonial-text-bg.jpg";
import user_1 from "~/assets/img/users/user-9.jpg";
import user_2 from "~/assets/img/users/user-8.jpg";
import user_3 from "~/assets/img/users/user-7.jpg";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  components: { Swiper, SwiperSlide },
  data() {
    return {
      text_bg,
      testimonial_items: [
        {
          user: user_1,
          ratings: [1, 2, 3, 4, 5],
          desc: "The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you. All results may be freely used in any work.",
          name: "Joss Sticks",
          title: "CEO at Fast Ventures",
        },
        {
          user: user_2,
          ratings: [1, 2, 3, 4, 5],
          desc: "All results may be freely used in any work. The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you.",
          name: "Naim Ahmed",
          title: "Developer at ThemePure",
        },
        {
          user: user_3,
          ratings: [1, 2, 3, 4, 5],
          desc: "All results may be freely used in any work. The city and town name generator uses a database of over five million names across more than 150 countries. How you use the city or town name is up to you.",
          name: "Steven Smith",
          title: "MD at Stark Ltd.",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
