<template>
   
    <div class="testimonial__shape">
      <img
        class="testimonial__shape-3"
        src="~/assets/img/testimonial/5/shape/testimonial-shape-1.png"
        alt="shape"
      />
      <img
        class="testimonial__shape-4"
        src="~/assets/img/testimonial/5/shape/testimonial-shape-2.png"
        alt="shape"
      />
      <img
        class="testimonial__shape-5"
        src="~/assets/img/testimonial/5/shape/testimonial-shape-3.png"
        alt="shape"
      />
      <img
        class="testimonial__shape-6"
        src="~/assets/img/testimonial/5/shape/testimonial-shape-4.png"
        alt="shape"
      />
      <img
        class="testimonial__shape-7"
        src="~/assets/img/testimonial/5/shape/testimonial-shape-5.png"
        alt="shape"
      />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-10">
          <div class="section__title-wrapper-5 mb-10">
            <span class="section__title-pre-5">success Stories</span>
            <h3 class="section__title-5">Why customers love working with us</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div
            class="testimonial__slider-5"
            data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
          >
            <Swiper
              :slidesPerView="3"
              class="testimonial__slider-active-5 pt-50 pb-50"
              :spaceBetween="30"
              :loop="true"
              :modules="modules"
              :navigation="{
                nextEl: '.testimonial-5-button-next',
                prevEl: '.testimonial-5-button-prev',
              }"
              :breakpoints="{
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
              <SwiperSlide v-for="(item, i) in testimonial_data" :key="i">
                <div class="testimonial__item-5">
                  <img
                    class="testimonial__shape-2"
                    src="~/assets/img/testimonial/5/testimonial-quote.png"
                    alt="quote"
                  />
                  <div class="testimonial__avater-thumb-5">
                    <img :src="item.user" alt="" />
                  </div>
                  <div class="testimonial__content-5">
                    <p>{{ item.desc }}</p>
                  </div>
                  <div class="testimonial__avater-info-5">
                    <h3 class="testimonial__avater-title-5">{{ item.name }}</h3>
                    <span class="testimonial__avater-designation-5">{{
                      item.title
                    }}</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div class="testimonial__nav-wrapper">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <div class="testimonial__rating-5 d-flex align-items-center">
              <div class="testimonial__rating-logo mr-15">
                <img
                  src="~/assets/img/testimonial/5/testimonial-rating-logo.png"
                  alt="rating-logo"
                />
              </div>
              <div class="testimonial__rating-content">
                <div class="testimonial__rating testimonial__rating-5">
                  <a href="#">
                    <i class="fa-solid fa-star"></i>
                  </a>
                  <a href="#">
                    <i class="fa-solid fa-star"></i>
                  </a>
                  <a href="#">
                    <i class="fa-solid fa-star"></i>
                  </a>
                  <a href="#">
                    <i class="fa-solid fa-star"></i>
                  </a>
                  <a href="#">
                    <i class="fa-solid fa-star"></i>
                  </a>
                </div>
                <p>4.8 Rating on Google</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div
              class="testimonial__nav-5 testimonial-slider-5-arrow text-sm-end"
            >
              <button
                type="button"
                class="testimonial-5-button-prev slick-prev slick-arrow"
              >
                <i class="fa-solid fa-angle-left"></i>
              </button>
              <button
                type="button"
                class="testimonial-5-button-next slick-next slick-arrow"
              >
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- </section> -->
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
// users
import user_1 from "~/assets/img/users/user-1.jpg";
import user_2 from "~/assets/img/users/user-2.jpg";
import user_3 from "~/assets/img/users/user-3.jpg";
import user_4 from "~/assets/img/users/user-4.jpg";
import user_5 from "~/assets/img/users/user-5.jpg";
import user_6 from "~/assets/img/users/user-6.jpg";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      testimonial_data: [
        {
          user: user_1,
          desc: "“If you're seeking a digital agency that breathes life into your brand with creativity and innovation, look no further than eTechFlow. .”",
          name: "Elena Grigoras",
          title: "Co-founder at Mainblades",
        },
        {
          user: user_2,
          desc: "“eTechFlow Digital Agency is a powerhouse of creativity that unlocks the full potential of your brand. Their ability to think outside the box and deliver unique and imaginative solutions is truly awe-inspiring. ”",
          name: "Fatiha Laauich",
          title: "Strategic Marketing",
        },
        {
          user: user_3,
          desc: "“eTechFlow's team of creative geniuses possesses an uncanny ability to think beyond convention. They challenge the status quo and embrace unconventional approaches to deliver truly remarkable results.  ”",
          name: "Jake Weary",
          title: "Head of Technology",
        },
        {
          user: user_4,
          desc: "“eTechFlow Digital Agency delivers unmatched creativity, innovation, and exceptional results. Highly recommended for all your digital needs!”",
          name: "Hery Marky",
          title: "Head of Technology",
        },
        {
          user: user_5,
          desc: "“eTechFlow Digital Agency: Unleashing Creative Brilliance and Driving Remarkable Results. A top choice for digital success!”",
          name: "Wilis Megh",
          title: "Head of Technology",
        },
        {
          user: user_6,
          desc: "“eTechFlow Digital Agency: Where Creativity Thrives, Success Blossoms. A powerhouse of innovation for unparalleled digital achievements.”",
          name: "Steaven Smit",
          title: "Head of Technology",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
