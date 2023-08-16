<template>
  <section class="testimonial__area p-relative z-index-1 pt-120 fix pb-125">
    <div class="testimonial__shape">
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
      <div class="row justify-content-center">
        <div class="col-xxl-6">
          <div class="tp-section-wrapper-3 mb-50 text-center">
            <span class="tp-section-subtitle-3">success Stories</span>
            <h3 class="tp-section-title-3">
              Why customers <br />
              love working with us
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div
            class="testimonial__slider-5 testimonial__style-2 p-relative"
            data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
          >
            <div class="testimonial__gradient-bg-2 fix">
              <img
                class="testimonial__shape-11"
                src="~/assets/img/testimonial/testimonial-shape.png"
                alt=""
              />
            </div>

            <Carousel
              :settings="settings"
              :breakpoints="breakpoints"
              :wrap-around="true"
              :autoplay="5000"
              class="testimonial__slider-active-5 pt-50 pb-50"
            >
              <Slide
                v-for="(item, i) in testimonial_data"
                :key="i"
              >
              <div class="testimonial__item-5">
                <img
                  class="testimonial__shape-2"
                  src="~/assets/img/testimonial/5/testimonial-quote.png"
                  alt="quote"
                />
                <div class="testimonial__avater-thumb-5">
                  <img :src="item.user" alt="user img" />
                </div>
                <div class="testimonial__content-5">
                  <p>
                    {{item.desc}}
                  </p>
                </div>
                <div class="testimonial__avater-info-5">
                  <h3 class="testimonial__avater-title-5">{{item.name}}</h3>
                  <span class="testimonial__avater-designation-5">{{item.title}}</span>
                </div>
              </div>
              </Slide>
            </Carousel>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Carousel, Slide } from "vue3-carousel";
// internal
import user_1 from "~/assets/img/users/user-1.jpg";
import user_2 from "~/assets/img/users/user-2.jpg";
import user_3 from "~/assets/img/users/user-3.jpg";
import user_4 from "~/assets/img/users/user-4.jpg";
import user_5 from "~/assets/img/users/user-5.jpg";
import user_6 from "~/assets/img/users/user-6.jpg";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  components: { Carousel, Slide },
  data() {
    return {
      settings: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 992px and up
        992: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 768px and up
        768: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        // 0 and up
        0: {
          itemsToShow: 1,
          snapAlign: "start",
        },
      },
      testimonial_data: [
        {
          user: user_1,
          desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
          name: "Elena Grigoras",
          title: "Co-founder at Mainblades",
        },
        {
          user: user_2,
          desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
          name: "Fatiha Laauich",
          title: "Strategic Marketing",
        },
        {
          user: user_3,
          desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
          name: "Jake Weary",
          title: "Head of Technology",
        },
        {
          user: user_4,
          desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
          name: "Hery Marky",
          title: "Head of Technology",
        },
        {
          user: user_5,
          desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
          name: "Wilis Megh",
          title: "Head of Technology",
        },
        {
          user: user_6,
          desc: "“Thanks for all your efforts and teamwork over the last several months! I really appreciate your dedication to ensuring a successful launch!”",
          name: "Steaven Smit",
          title: "Head of Technology",
        },
      ],
    };
  },
};
</script>
