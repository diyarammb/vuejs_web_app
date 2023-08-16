<template>
  <section class="award__area pt-130 pb-95 black-bg-13">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-8 text-center mb-60">
            <span class="section__title-pre-8">International Awards</span>
            <h3 class="section__title-8">
              <span class="section__title-highlight-8">Awards
                <svg width="246" height="26" viewBox="0 0 246 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="wow" d="M3 23C56.25 15.2537 162.375 -17.8439 243 23" stroke="#FF5A1B" stroke-width="6"
                    stroke-linecap="round" />
                </svg>
              </span>
              & Achievements
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">

          <div v-for="(item, i) in award_data" :key="i" class="award__item-8 transition-3" 
          data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000">
            <div class="row align-items-center">
              <div class="col-xl-2 col-lg-2 col-md-2">
                <div class="award__year text-md-center pb-30 pl-10">
                  <span>{{ item.year }}</span>
                </div>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-2">
                <div class="award__icon-8 pl-15">
                  <span>
                    <img :src="item.icon" alt="">
                  </span>
                </div>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-5">
                <div class="award__content-8">
                  <h3 class="award__title-8">{{ item.title }}</h3>
                  <p>{{ item.subtitle }}</p>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3">
                <div class="award__btn-8 text-md-center">
                  <nuxt-link href="/portfolio-details-list" class="tp-link-btn-3">
                    See Projects
                    <span>
                      <i class="fa-regular fa-chevron-right"></i>
                    </span>
                  </nuxt-link>
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
import award_icon_1 from '~/assets/img/award/8/award-1.png';
import award_icon_2 from '~/assets/img/award/8/award-2.png';
import award_icon_3 from '~/assets/img/award/8/award-3.png';
import award_icon_4 from '~/assets/img/award/8/award-4.png';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      award_data: [
        { year: '2022', icon: award_icon_1, title: 'Red dot design Award', subtitle: 'Daniel Villa, Romania' },
        { year: '2021', icon: award_icon_2, title: 'AAG winner 2021', subtitle: 'Canbin wood in Forest' },
        { year: '2020', icon: award_icon_3, title: 'BUILD architecture Awards', subtitle: 'Architect Thiago Alcantara' },
        { year: '2018', icon: award_icon_4, title: 'Art of year 2018', subtitle: 'Daniel Villa, Romania' },
      ]
    }
  }
}
</script>

