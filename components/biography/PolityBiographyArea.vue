<template>
  <section class="biography__area p-relative pb-110 fix">
    <!-- biography slider start -->
    <swiper
      :slidesPerView="1"
      :spaceBetween="0"
      :loop="true"
      :modules="modules"
      :thumbs="{ swiper: thumbsSwiper }"
      class="biography__slider-content-active"
    >
      <swiper-slide
        v-for="(item, i) in biography_items"
        :key="i"
        class="biography__item biography__height p-relative z-index-1"
      >
        <div
          class="biography__bg biography__bg-1"
          :style="{ backgroundImage: `url(${item.bg})` }"
        ></div>
        <div class="container">
          <div class="row">
            <div class="col-xxl-7 col-xl-8 col-lg-9">
              <div class="biography__content p-relative z-index-1">
                <div class="biography__meta">
                  <span>{{item.date}}</span>
                </div>
                <h3 class="biography__title">
                  {{item.title}}
                </h3>
                <p>
                  {{item.subtitle}}
                </p>

                <div class="biography__btn mb-50">
                  <a href="#" class="tp-btn-border-9 tp-link-btn-3">
                    Continue Reading
                    <span>
                      <i class="fa-regular fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- biography slider end -->

    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="biography__slider">
            <!-- testimonial_thumbs -->
            <swiper
              @swiper="setThumbsSwiper"
              :modules="modules"
              :space-between="0"
              :slides-per-view="6"
              :watch-slides-progress="true"
              :loop="true"
              :free-mode="false"
              :breakpoints="{
                1400: {
                  slidesPerView: 6,
                },
                992: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 4,
                },
                576: {
                  slidesPerView: 3,
                },
                0: {
                  slidesPerView: 2,
                },
              }"
              class="biography__slider-nav"
            >
              <swiper-slide
                v-for="(year, i) in biography_year"
                :key="i"
                class="biography__year"
              >
                <p>
                  <span
                    class="tp-biography-bg include-bg"
                    :style="{ backgroundImage: `url(${bio_bg})` }"
                  ></span>
                  <span
                    class="tp-biography-bg is-solid include-bg"
                    :style="{ backgroundImage: `url(${solid_bg})` }"
                  ></span>
                  {{ year }}
                </p>
              </swiper-slide>
            </swiper>
            <!-- testimonial_thumbs -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import { FreeMode, Thumbs, Controller, Pagination, Navigation } from "swiper";
// internal
import bio_bg_1 from "~/assets/img/biography/biography-1.jpg";
import bio_bg_2 from "~/assets/img/biography/biography-2.jpg";
import bio_bg_3 from "~/assets/img/biography/biography-3.jpg";
import bio_bg_4 from "~/assets/img/biography/biography-4.jpg";
import bio_bg_5 from "~/assets/img/biography/biography-5.jpg";
import bio_bg_6 from "~/assets/img/biography/biography-6.jpg";
import bio_bg_7 from "~/assets/img/biography/biography-7.jpg";
import bio_bg from "~/assets/img/biography/biography-transparent-bg.png";
import solid_bg from "~/assets/img/biography/biography-solid-bg.png";

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      bio_bg,
      solid_bg,
      biography_items: [
        {
          bg: bio_bg_1,
          date: "01 April 2014",
          title: "Stand with our campaign for working political",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
        },
        {
          bg: bio_bg_2,
          date: "22 June 2015",
          title: "Iranian Regime Thugs Fire on – Drive-By Killers",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
        },
        {
          bg: bio_bg_3,
          date: "04 Jan 2016",
          title: "The Irony of information: Enduring Solutions",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
        },
        {
          bg: bio_bg_4,
          date: "26 Sept 2017",
          title: "Combating information by Truth and Trust",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
        },
        {
          bg: bio_bg_5,
          date: "14 Aug 2018",
          title: "'Truth Decay' in Europe Is Real, Advance Slowed",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
        },
        {
          bg: bio_bg_6,
          date: "08 May 2019",
          title: "Supporting the People of Ukraine Through Cities",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
        },
        {
          bg: bio_bg_7,
          date: "21 July 2020",
          title: "Homelessness in L.A., Russia Morale:",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis",
        },
      ],
      biography_year: ["2014", "2015", "2016", "2017", "2018", "2019", "2020"],
    };
  },
  setup() {
    const thumbsSwiper = ref();
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return {
      modules: [Pagination, Navigation, FreeMode, Thumbs],
      setThumbsSwiper,
      thumbsSwiper,
    };
  },
};
</script>
