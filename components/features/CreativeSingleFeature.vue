<template>
  <div
    :class="`features__item ${item.color} transition-3 mb-30`"
    data-sal="slide-up" :data-sal-delay="item.delay" data-sal-duration="1000"
  >
    <div class="features__icon">
      <span v-html="item.icon"> </span>
    </div>
    <div class="features__content">
      <h3 class="features__title">{{ item.title }}</h3>

      <p>{{ item.subtitle }}</p>

      <div class="features__btn">
        <nuxt-link href="/service-details">
          <svg
            width="45"
            height="44"
            viewBox="0 0 45 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.999 22.1553H1.57262"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M33.6991 32.451L43.998 22.002L33.549 11.703"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </nuxt-link>
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
