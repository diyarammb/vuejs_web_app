<template>
  <div
    class="blog__item-2 white-bg transition-3 mb-30"
    data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
  >
    <div class="blog__thumb-2 p-relative w-img fix">
      <nuxt-link href="/blog-details">
        <img :src="blog.img" alt="blog img" />
      </nuxt-link>
      <div class="blog__meta-2">
        <h4>
          {{ blog.date.split(" ")[0] }}
          <span>{{ blog.date.split(" ")[1] }}</span>
        </h4>
      </div>
    </div>
    <div class="blog__content-2">
      <div class="blog__tag-2">
        <a href="#">{{ blog.tag }}</a>
      </div>
      <h3 class="blog__title-2">
        <nuxt-link href="/blog-details">{{ blog.title }}</nuxt-link>
      </h3>
      <p>{{ blog.sm_text }}</p>

      <div class="blog__btn">
        <nuxt-link href="/blog-details" class="tp-btn-border-green-2">read more</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props:{
    blog:{}
  }
};
</script>
