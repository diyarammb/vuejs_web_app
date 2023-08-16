<template>
  <section class="product__category pt-100 pb-100">
    <div class="container">
      <div v-if="el_style" class="row">
        <div class="col-xxl-12">
            <div class="tp-section-wrapper-3 mb-60 text-center">
              <span class="tp-section-subtitle-3">Minimal & Clean Design</span>
              <h3 class="tp-section-title-3">Shop Category Slider</h3>
            </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="product__category-slider">
            <swiper
              class="product__category-slider-active swiper-container"
              :slidesPerView="4"
              :spaceBetween="30"
              :loop="false"
              :modules="modules"
              :scrollbar="{
                el: '.tp-scrollbar',
                clickable: true,
              }"
              :breakpoints="{
                1601: {
                  slidesPerView: 4,
                },
                1400: {
                  slidesPerView: 4,
                },
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
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                0: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
              }"
            >
              <swiper-slide
                v-for="(item, i) in products_category"
                :key="i"
                class="product__category-item mb-20 text-center"
              >
                <div class="product__category-thumb w-img">
                  <nuxt-link href="/shop">
                    <img
                      :src="item.img"
                      alt="product__category-thumb"
                    />
                  </nuxt-link>
                </div>
                <div class="product__category-content">
                  <h3 class="product__category-title">
                    <nuxt-link href="/shop">{{item.title}}</nuxt-link>
                  </h3>
                </div>
              </swiper-slide>
            </swiper>

            <div class="tp-scrollbar"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { Scrollbar } from "swiper";
// internal
import cate_1 from "~/assets/img/product/category/product-cat-1.jpg";
import cate_2 from "~/assets/img/product/category/product-cat-2.jpg";
import cate_3 from "~/assets/img/product/category/product-cat-3.jpg";
import cate_4 from "~/assets/img/product/category/product-cat-4.jpg";

export default {
  props:{
    el_style:{
      type:Boolean,
      default:false
    }
  },
  components: { Swiper, SwiperSlide },
  data() {
    return {
      products_category: [
        {
          img: cate_1,
          title: "Call Phone &Tablets",
        },
        {
          img: cate_2,
          title: "Game & Video",
        },
        {
          img: cate_3,
          title: "Sport Watches",
        },
        {
          img: cate_4,
          title: "Computers & Laptop",
        },
        {
          img: cate_3,
          title: "Call Phone &Tablets",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Scrollbar],
    };
  },
};
</script>
