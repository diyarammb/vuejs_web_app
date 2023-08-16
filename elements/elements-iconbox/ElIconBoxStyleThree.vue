<template>
  <section class="features__area p-relative z-index-1 pb-90 pt-110">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">Minimal & Clean Design</span>
            <h3 class="tp-section-title-3">Icon Box Style 3</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="item in feature_data"
          :key="item.id"
          class="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
        >
          <div
            class="features__item-7 text-center mb-30 white-bg transition-3"
            data-sal="slide-up" :data-sal-delay="item.delay" data-sal-duration="1000"
          >
            <div class="features__icon-7">
              <span>
                <img :src="item.icon" alt="icon" />
              </span>
            </div>
            <div class="features__content-7">
              <h3 class="features__title-7">{{ item.title }}</h3>
              <p>
                {{ item.subtitle }}
              </p>
              <div class="features__btn-7">
                <nuxt-link href="/service-details" class="tp-link-btn-3">
                  Read More
                  <span>
                    <i class="fa-regular fa-arrow-right"></i>
                  </span>
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
// internal
import icon_1 from "~/assets/img/features/7/features-icon-1.png";
import icon_2 from "~/assets/img/features/7/features-icon-2.png";
import icon_3 from "~/assets/img/features/7/features-icon-3.png";
import SalScrollAnimationMixin from '~/mixins/SalScrollAnimationMixin';

export default {
  mixins:[SalScrollAnimationMixin],
  data() {
    return {
      feature_data: [
        {
          id: 1,
          delay: "130",
          icon: icon_1,
          title: "Manage Expenses",
          subtitle:
            "Build an online store that rank higher & sell more and integrates easily.",
        },
        {
          id: 2,
          delay: "150",
          icon: icon_2,
          title: "Responsive any device",
          subtitle:
            "Build an online store that rank higher & sell more and integrates easily.",
        },
        {
          id: 3,
          delay: "170",
          icon: icon_3,
          title: "World-class support",
          subtitle:
            "Build an online store that rank higher & sell more and integrates easily.",
        },
      ],
    };
  },
};
</script>
