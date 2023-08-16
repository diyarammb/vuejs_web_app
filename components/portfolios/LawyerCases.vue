<template>
  <section class="case__area pt-110" id="cases">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xxl-7 col-xl-8 col-lg-8 col-md-7">
          <div class="section__title-wrapper-4 pr-5 mb-60">
            <span class="section__title-pre-4">Case Results</span>
            <h3 class="section__title-4">
              We are a professional law firm located in Berlin.
            </h3>
          </div>
        </div>
        <div class="col-xxl-5 col-xl-4 col-lg-4 col-md-5">
          <div class="case__more text-md-end mb-70">
            <nuxt-link href="/portfolio" class="tp-btn-border-brown">
              Browse Case Results
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="item in case_data" :key="item.id" class="col-xxl-6 col-lg-6">
          <div
            class="case__item mb-50"
            data-sal="slide-up" :data-sal-delay="item.delay" data-sal-duration="1000"
          >
            <div class="case__thumb w-img fix">
              <img :src="item.bg" alt="" />
            </div>
            <div class="case__content transition-3">
              <div class="case__price">
                <span>{{item.price}}</span>
              </div>
              <h3 class="case__title">
                <nuxt-link href="/portfolio-details">
                  {{item.title}}
                </nuxt-link>
              </h3>
              <p>
                {{item.text}}
              </p>

              <div class="case__btn">
                <nuxt-link href="/portfolio-details" class="tp-btn-border-brown-sm">
                  Read More 
                  <i class="fa-regular fa-arrow-right-long"></i>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import case_1 from '~/assets/img/case/case-1.jpg';
import case_2 from '~/assets/img/case/case-2.jpg';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      case_data: [
        {
          id: 1,
          bg: case_1,
          price: "247.00",
          title: "Personal Injury Claims and Gun What You Need to Know",
          text: "If you are looking for a random city or town name to spark a location for a book, game, or a script millions.",
          delay: "130",
        },
        {
          id: 2,
          bg: case_2,
          price: "176.00",
          title: "Do Injured Workers Have to Be Treated the Same?",
          text: "If you are looking for a random city or town name to spark a location for a book, game, or a script millions.",
          delay: "150",
        },
      ],
    };
  },
};
</script>
