<template>
  <section :class="`award__area pt-120 ${style_2?'pb-120':'pb-10'} white-bg`">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div :class="`section__title-wrapper-9 ${style_2?'text-center':''} mb-55`">
            <h3 class="section__title-9">Our Awards.</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="award__item-wrapper-9">
            <div
              v-for="item in award_data"
              :key="item.id"
              class="award__item-9 p-relative wow fadeInUp"
              data-sal="slide-up" :data-sal-delay="item.delay" data-sal-duration="1000"
            >
              <div class="row align-items-center">
                <div class="col-xl-3 col-lg-3 col-md-3">
                  <div class="award__topic">
                    <p>{{item.topic}}</p>
                  </div>
                </div>
                <div class="col-xl-7 col-lg-7 col-md-7">
                  <div class="award__content-9">
                    <h3 class="award__title-9">
                      <nuxt-link
                        href="/portfolio-details"
                        class="tp-img-reveal tp-img-reveal-item"
                        data-fx="1"
                        >
                        {{ item.title }}
                      </nuxt-link>
                    </h3>
                    <p>{{ item.subtitle }}</p>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2">
                  <div class="award__btn-9 text-md-end">
                    <nuxt-link href="/portfolio-details" class="career-link-btn">
                      <svg
                        width="22"
                        height="18"
                        viewBox="0 0 22 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7334 1L21 9.00007L12.7334 17"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M0.999999 8.99756H21"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// internal
import award_img_1 from "~/assets/img/award/9/award-1.jpg";
import award_img_2 from "~/assets/img/award/9/award-2.jpg";
import award_img_3 from "~/assets/img/award/9/award-3.jpg";
import award_img_4 from "~/assets/img/award/9/award-4.jpg";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props:{
    style_2:{
      type:Boolean,
      default:false,
    }
  },
  data() {
    return {
      award_data: [
        {
          id: "one",
          topic: "Art direction 2021",
          title: "Modern painting award jump",
          data_src: award_img_1,
          subtitle: "Runner Up - “ Decor of the week “",
          delay: ".3s",
        },
        {
          id: "two",
          topic: "Main Developer 2020",
          title: "People's choice: best design",
          data_src: award_img_2,
          subtitle: "Runner Up - “ Decor of the week “",
          delay: ".5s",
        },
        {
          id: "three",
          topic: "Art direction 2021",
          title: "Webby's, Site of the Year",
          data_src: award_img_3,
          subtitle: "Runner Up - “ Decor of the week “",
          delay: ".7s",
        },
        {
          id: "four",
          topic: "CSS Design 2018",
          title: "Awwwards site of the day",
          data_src: award_img_4,
          subtitle: "Runner Up - “ Decor of the week “",
          delay: ".7s",
        },
      ],
    };
  },
};
</script>
