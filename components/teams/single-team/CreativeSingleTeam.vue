<template>
  <div
    class="team__item-6 mb-80 transition-3"
    data-sal="slide-right" data-sal-delay="150" data-sal-duration="1000"
  >
    <div class="team__thumb-6 w-img fix">
      <nuxt-link href="/team-details">
        <img :src="team.img" alt="team img" />
      </nuxt-link>
    </div>
    <div class="team__content-6 transition-3">
      <div class="team__content-6-bg"></div>
      <h3 class="team__title-6">
        <nuxt-link href="/team-details">{{ team.name }}</nuxt-link>
      </h3>
      <span class="team__designation-6">{{ team.title }}</span>
    </div>
  </div>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props: {
    team: {},
  },
};
</script>
