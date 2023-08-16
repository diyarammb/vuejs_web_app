<template>
  <section class="features__area p-relative z-index-1 pb-50 pt-125">
    <div class="features__shape">
      <img
        class="features__shape-6"
        src="~/assets/img/features/7/features-shape-2.png"
        alt="features__shape"
      />
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-7 col-xl-8 col-lg-9">
          <div class="section__title-wrapper-7 text-center mb-60">
            <span class="section__title-pre-7">Explore Features</span>
            <h3 class="section__title-7">
              Harry for every
              <span class="section__title-7-highlight">
                business
                <svg width="240" height="22" viewBox="0 0 240 22" fill="none">
                  <path
                    class="wow"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              you need.
            </h3>
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
      <div class="row justify-content-center">
        <div class="col-xxl-10 col-xl-10 col-lg-11">
          <div
            class="features__offer text-center mt-20"
            data-sal="slide-up" data-sal-delay="190" data-sal-duration="1000"
          >
            <span>NEW FEATURES</span>
            <p>
              If you want to join the effort and help with the plugin, please
              <nuxt-link href="/contact">Let Us Know</nuxt-link>.
            </p>
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
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
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
