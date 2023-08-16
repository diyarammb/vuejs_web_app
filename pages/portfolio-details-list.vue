<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <section class="portfolio__area pb-65 pt-110 p-relative">
      <div class="container">
        <div class="row">
          <div class="col-xxl-9 col-xl-10">
            <div class="portfolio__details-wrapper">
              <div class="portfolio__details-content">
                <h2 class="">Realstate.com.au App Development</h2>
                <p>
                  Problem: The client was a real estate agency in Australia that
                  was looking to improve its online presence. The agency wanted
                  to create an app that would allow potential buyers to search
                  for properties, view listings, and contact agents directly.
                </p>
                <p>
                  Solution: Etechflow developed a mobile app for the real estate
                  agency that met all of their requirements. The app was
                  designed to be user-friendly and easy to navigate. It also
                  included a number of features that made it stand out from
                  other real estate apps, such as the ability to filter listings
                  by price, location, and property type.
                </p>
                <p>
                  Results: The app was a success. It was downloaded by over
                  10,000 users in the first six months after it was launched.
                  The app also helped the real estate agency to increase its
                  leads and sales.
                </p>
              </div>
              <div
                class="portfolio__details-meta flex-wrap d-flex align-items-center"
              >
                <div
                  class="portfolio__details-meta-item d-flex align-items-start"
                >
                  <div class="portfolio__details-meta-content">
                    <h5>Client:</h5>
                    <span>Nature Planner</span>
                  </div>
                </div>
                <div
                  class="portfolio__details-meta-item d-flex align-items-start"
                >
                  <div class="portfolio__details-meta-content">
                    <h5>Awards:</h5>
                    <span>First Place</span>
                  </div>
                </div>
                <div
                  class="portfolio__details-meta-item d-flex align-items-start"
                >
                  <div class="portfolio__details-meta-content">
                    <h5>Production:</h5>
                    <span>Design Lab</span>
                  </div>
                </div>
                <div
                  class="portfolio__details-meta-item d-flex align-items-start"
                >
                  <div class="portfolio__details-meta-content">
                    <h5>Category:</h5>
                    <span>Portfolio</span>
                  </div>
                </div>
                <div
                  class="portfolio__details-meta-item d-flex align-items-start"
                >
                  <div class="portfolio__details-meta-content">
                    <h5>Date:</h5>
                    <span>Ocober 3, 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="portfolio__area fix">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-xl-12">
            <div class="portfolio__details-slider pl-50 pr-50">
              <swiper
                :slidesPerView="3"
                :spaceBetween="30"
                :loop="false"
                :pagination="{
                  clickable: true,
                }"
                :modules="modules"
                class="portfolio__details-slider-active"
              >
                <swiper-slide
                  v-for="(img, i) in images"
                  :key="i"
                  class="portfolio__details-slider-item"
                >
                  <img :src="img" alt="slider img" />
                </swiper-slide>
              </swiper>
              <div
                class="portfolio-details-slider-dot tp-swiper-dot-2 text-center mt-45"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="portfolio__area pb-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-10">
            <div class="portfolio__image-box-wrapper">
              <div class="portfolio__image-box-item">
                <img
                  src="~/assets/Portfolio/Case/4th.jpg"
                  alt=""
                  width="100%"
                  height="600px" 
                />
              </div>
              <div class="portfolio__image-box-item mb-30 m-img">
                <img
                  src="~/assets/Portfolio/Case/5th.jpg"
                  alt=""
                  width="100%"
                  height="600px" 
                  style="margin-top: 30px;"
                />
              </div>
              <div class="portfolio__image-box-item mb-30 m-img">
                <img
                  src="~/assets/Portfolio/Case/6th.jpg"
                  alt=""
                  width="100%"
                  height="600px" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import Footer from "~~/layouts/footers/Footer.vue";
import BackToTop from "~~/layouts/footers/component/BackToTop.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import img_1 from "~/assets/Portfolio/Case/4th.jpg";
import img_2 from "~/assets/Portfolio/Case/5th.jpg";
import img_3 from "~/assets/Portfolio/Case/6th.jpg";

export default {
  components: { HeaderOne, Footer, BackToTop, Swiper, SwiperSlide },
  data() {
    return {
      images: [img_1, img_2, img_3, img_2, img_3],
    };
  },
  setup() {
    useHead({
      title: "Brand",
    });
    return {
      modules: [Pagination],
    };
  },
};
</script>
