<template>
  <div
    class="blog__item-5 mb-30"
    data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
  >
    <div class="row align-items-center">
      <div class="col-xl-5 col-lg-12">
        <div class="blog__thumb-5">
          <nuxt-link href="/blog-details">
            <img :src="blog.img" alt="" />
          </nuxt-link>
        </div>
      </div>
      <div class="col-xl-7 col-lg-12">
        <div class="blog__content-5">
          <div class="blog__tag-5">
            <a href="#">{{ blog.tag }}</a>
          </div>
          <h3 class="blog__title-5">
            <nuxt-link href="/blog-details">
              <span v-html="blog.title"></span>
            </nuxt-link>
          </h3>
          <div class="blog__meta-5">
            <span><i class="fa-regular fa-clock"></i>{{ blog.date }}</span>
            <span><i class="fa-regular fa-comment"></i>
              {{ blog.comment }} Comment</span>
          </div>
          <p>
            {{ blog.sm_text }}
          </p>

          <div class="blog__btn-5">
            <nuxt-link href="/blog-details" class="tp-link-btn-circle">
              Read More
              <span>
                <i class="fa-regular fa-arrow-right"></i>
                <i class="fa-regular fa-arrow-right"></i>
              </span>
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
  props: {
    blog: {
      type:Object,
      default:{},
      required:true,
    },
  },
};
</script>
