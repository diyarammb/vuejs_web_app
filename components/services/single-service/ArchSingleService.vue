<template>
  <div
    class="services__item-8 animate-border-2 d-lg-flex align-items-start transition-3 mb-30"
    data-sal="slide-down" data-sal-delay="130" data-sal-duration="1000"
  >
    <span class="services-border-2"></span>
    <div class="services__shape">
      <img
        class="services__shape-11"
        src="~/assets/img/services/8/services-shape-1.png"
        alt="services__shape"
      />
    </div>
    <div class="services__icon-8 mr-30">
      <span>
        <img :src="item.icon" alt="icon" />
      </span>
    </div>
    <div class="services__content-8">
      <h3 class="services__title-8">
        <nuxt-link href="/service-details">{{ item.title }}</nuxt-link>
      </h3>
      <p>{{ item.subtitle }}</p>

      <div class="services__project-no">
        <span>{{ item.project }} Project</span>
      </div>
    </div>
  </div>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props:{
    item:{
      type:Object,
      default:{}
    }
  }
};
</script>
