<template>
  <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
    <div
      class="services__item transition-3 mb-30 fix wow fadeInUp"
      data-sal="slide-up" :data-sal-delay="delay" data-sal-duration="1000"
    >
      <div class="services__shape">
        <img
          class="services__shape-1"
          src="~/assets/img/services/shape/services-shape-1.png"
          alt=""
        />
        <img
          class="services__shape-2"
          src="~/assets/img/services/shape/services-shape-2.png"
          alt=""
        />
      </div>
      <div class="services__item-inner">
        <div class="services__icon">
          <span v-html="icon">
           
          </span>
        </div>
        <div class="services__content">
          <h3 class="services__title">
            <nuxt-link href="/service-details">{{ title }}</nuxt-link>
          </h3>
          <p>
            {{ desc }}
          </p>

          <div class="services__btn">
            <nuxt-link href="/service-details" class="tp-btn-border"
              >Explore Section <i class="fa-regular fa-angle-right"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props:{
    icon:String,
    title:String,
    desc:String,
    delay:String,
  }
};
</script>
