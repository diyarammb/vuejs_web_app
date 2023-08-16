<template>
  <div :class="`career__wrapper ${style_2?style_2:''} pl-60`">
    <h4 v-if="style_2" class="career__title">Experience</h4>
    <div
      v-for="(info, i) in career_data"
      :key="i"
      class="career__item transition-3 white-bg d-sm-flex align-items-center justify-content-between"
      data-sal="slide-up" :data-sal-delay="info.delay" data-sal-duration="1000"
    >
      <div class="career__info d-sm-flex align-items-center">
        <div class="career__logo mr-20">
          <span>
            <img :src="info.icon" alt="icon" />
          </span>
        </div>
        <div class="career__info-content">
          <h3 class="career__info-title">{{ info.title }}</h3>
          <span class="career__info-designation">
            {{ info.designation }}
          </span>
        </div>
      </div>
      <div class="career__year text-sm-end">
        <div class="career__btn">
          <a href="portfolio" class="career-link-btn">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L11 1"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 1H11V11"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <div class="career__year-info">
          <p>{{ info.year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props: {
    career_data: {
      type:Array,
      default:[],
    },
    style_2:String,
  },
};
</script>
