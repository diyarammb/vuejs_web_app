<template>
  <Swiper
    :slidesPerView="6"
    :spaceBetween="12"
    class="instagram__slider-active swiper-container"
    :loop="false"
    :breakpoints="{
      1400: {
        slidesPerView: 6,
      },
      1200: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    }"
  >
    <SwiperSlide
      v-for="(item, i) in instagram_items"
      :key="i"
      class="instagram__item w-img"
    >
      <img :src="item.img" alt="image" />
      <div class="instagram__btn">
        <a
          :href="item.link"
          target="_blank"
          rel="noreferrer"
          class="tp-instagram-btn popup-image"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
// internal
import inst_1 from "~/assets/img/instagram/instagram-1.jpg";
import inst_2 from "~/assets/img/instagram/instagram-2.jpg";
import inst_3 from "~/assets/img/instagram/instagram-3.jpg";
import inst_4 from "~/assets/img/instagram/instagram-4.jpg";
import inst_5 from "~/assets/img/instagram/instagram-5.jpg";
import inst_6 from "~/assets/img/instagram/instagram-6.jpg";
import inst_7 from "~/assets/img/instagram/instagram-7.jpg";
import inst_8 from "~/assets/img/instagram/instagram-8.jpg";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      instagram_items: [
        { img: inst_1, link: "https://www.instagram.com/" },
        { img: inst_2, link: "https://www.instagram.com/" },
        { img: inst_3, link: "https://www.instagram.com/" },
        { img: inst_4, link: "https://www.instagram.com/" },
        { img: inst_5, link: "https://www.instagram.com/" },
        { img: inst_6, link: "https://www.instagram.com/" },
        { img: inst_7, link: "https://www.instagram.com/" },
        { img: inst_8, link: "https://www.instagram.com/" },
        { img: inst_2, link: "https://www.instagram.com/" },
      ],
    };
  },
};
</script>
