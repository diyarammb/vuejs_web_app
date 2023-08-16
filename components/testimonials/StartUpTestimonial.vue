<template>
  <section class="testimonial__area   pt-110 pb-95 fix">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-9">
          <div class="section__title-wrapper-7 text-center mb-60">
            <span class="section__title-pre-7" style="color:#673c8b;">Client Feedback</span>
            <h3 class="section__title-7">
              Trusted by global
              <span class="section__title-7-highlight">
                companies.
                <svg width="240" height="22" viewBox="0 0 240 22" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </h3>

            <p>
              Install any demo or template with a single click. You can mix and
              <br />
              match all the demos.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="testimonial__slider-7">
            
            <ClientOnly>
              <Swiper
              :slidesPerView="3"
              :spaceBetween="30"
              class="testimonial__active-7 swiper-container"
              :loop="false"
              :pagination="{
                el: '.testimonial-slider-dot-7',
                clickable: true,
              }"
              :modules="modules"
              :breakpoints="{
                1200: {
                  slidesPerView: 3,
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
              <SwiperSlide
                v-for="(item, i) in testimonial_data"
                :key="i"
                class="testimonial__item-7 mb-80 transition-3 white-bg"
              >
                <div>
                  <div class="testimonial__rating testimonial__rating-7">
                    <a v-for="(r, i) in item.ratings" :key="i" href="#">
                      <i class="fa-solid fa-star"></i>
                    </a>
                  </div>
                  <div class="testimonial__content-7">
                    <h3 class="testimonial__heading">{{ item.title }}</h3>
                    <p>{{ item.subtitle }}</p>
                  </div>
                  <div class="testimonial__avater-6 d-flex align-items-center">
                    <div class="testimonial__avater-thumb-7">
                      <img :src="item.user" alt="user" />
                    </div>
                    <div class="testimonial__avater-info-7">
                      <h3 class="testimonial__avater-title-7">
                        {{ item.name }}
                      </h3>
                      <span class="testimonial__avater-designation-7">
                        {{ item.designation }}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            </ClientOnly>

            <div
              class="testimonial-slider-dot-7 tp-swiper-dot text-center mt--30 p-relative z-index-1"
            ></div>
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
import user_1 from "~/assets/img/users/user-1.jpg";
import user_2 from "~/assets/img/users/user-2.jpg";
import user_3 from "~/assets/img/users/user-3.jpg";
import user_4 from "~/assets/img/users/user-4.jpg";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      testimonial_data: [
        {
          ratings: [1, 2, 3, 4, 5],
          title: "“Seriously amazing!”",
          subtitle:
            "Everything from start to finish was easy peasy. very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!",
          user: user_1,
          name: "Sarah Smith",
          designation: "Lead Developer, Google",
        },
        {
          ratings: [1, 2, 3, 4, 5],
          title: "“This office almost relaxing”",
          subtitle:
            "Everything from start to finish was easy peasy. very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!",
          user: user_2,
          name: "Eleanor Pena",
          designation: "COO, Globex Corporation",
        },
        {
          ratings: [1, 2, 3, 4, 5],
          title: "Awesome Support",
          subtitle:
            "Everything from start to finish was easy peasy. very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!",
          user: user_3,
          name: "Carla Wildner",
          designation: "Design at Mailchimp",
        },
        {
          ratings: [1, 2, 3, 4, 5],
          title: "“Seriously amazing!”",
          subtitle:
            "Everything from start to finish was easy peasy. very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!",
          user: user_4,
          name: "Naim Ahmed",
          designation: "Developer at Theme_Pure",
        },
        {
          ratings: [1, 2, 3, 4, 5],
          title: "Awesome Support",
          subtitle:
            "Everything from start to finish was easy peasy. very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!",
          user: user_3,
          name: "Carla Wildner",
          designation: "Design at Mailchimp",
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
