<template>
  <div
    class="blog__item-9 mb-30"
    data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
  >
    <div class="blog__thumb-9 w-img fix">
      <nuxt-link href="/blog-details">
        <img :src="item.img" alt="blog image" />
      </nuxt-link>
    </div>
    <div class="blog__content-9">
      <div class="blog__meta-9">
        <span>
          <a href="#">{{ item.date }}</a>
        </span>
        <span>
          <a href="#">{{ item.tag }}</a>
        </span>
      </div>
      <h3 class="blog__title-9">
        <nuxt-link href="/blog-details">
          <span v-html="item.title"></span>
        </nuxt-link>
      </h3>
    </div>
  </div>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props: {
    item: {
      type: Object,
      default: {},
      required: true,
    },
  },
};
</script>
