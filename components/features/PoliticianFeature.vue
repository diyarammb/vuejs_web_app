<template>
  <section class="features__area pb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-9 col-xl-10 col-lg-10">
          <div class="features__section-title-wrapper text-center mb-40">
            <h3 class="features__section-title">
              A Canada that is healthier and safer, greener and more
              competitive.
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="features__more-10 text-center">
            <nuxt-link href="/contact" class="tp-btn-7 tp-btn-7-sm">
              Join Our Movement
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="features__wrapper-10">
        <div class="row">
          <div
            v-for="(item, i) in service_items"
            :key="i"
            class="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
          >
            <div
              class="features__item-10 transition-3 mb-30"
              data-sal="slide-up" :data-sal-delay="item.delay" data-sal-duration="1000"
            >
              <div class="features__icon-10">
                <span>
                  <img :src="item.icon" alt="" />
                </span>
              </div>
              <div class="features__content-10">
                <span>{{ item.sm_title }}</span>
                <h3 class="features__title-10">{{ item.title }}</h3>
                <p>{{ item.desc }}</p>

                <div class="features__btn-10">
                  <nuxt-link href="/service-details" class="tp-btn-border-9">
                    Learn More <i class="fa-regular fa-angle-right"></i>
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
import polity_ser_icon_1 from "~/assets/img/features/10/features-1.png";
import polity_ser_icon_2 from "~/assets/img/features/10/features-2.png";
import polity_ser_icon_3 from "~/assets/img/features/10/features-3.png";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      service_items: [
        {
          delay: "130",
          icon: polity_ser_icon_1,
          sm_title: "Main Mission",
          title: "Core Principles",
          desc: "We are committed to restoring honesty, integrity, government. Explore our principles.",
        },
        {
          delay: "150",
          icon: polity_ser_icon_2,
          sm_title: "What We Do",
          title: "Political Program",
          desc: "We are committed to restoring honesty, integrity, government. Explore our principles.",
        },
        {
          delay: "170",
          icon: polity_ser_icon_3,
          sm_title: "Our Mission",
          title: "Our Members",
          desc: "We are committed to restoring honesty, integrity, government. Explore our principles.",
        },
      ],
    };
  },
};
</script>
