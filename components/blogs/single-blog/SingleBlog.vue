<template>
  <div
    class="blog__item white-bg transition-3 mb-30 wow fadeInUp"
    data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
  >
    <div class="row">
      <div class="col-xxl-5 col-xl-5">
        <div class="blog__thumb m-img fix">
          <div class="tp-thumb-overlay wow"></div>
          <nuxt-link href="/blog-details">
            <img :src="blog.img" alt="" />
          </nuxt-link>
        </div>
      </div>
      <div class="col-xxl-7 col-xl-7">
        <div class="blog__content">
          <div class="blog__tag">
            <a href="#">{{blog.tag}}</a>
          </div>
          <h3 class="blog__title">
            <nuxt-link href="/blog-details">{{blog.title}}</nuxt-link>
          </h3>
          <div class="blog__meta">
            <span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.5 3.59961V7.49961L10.1 8.79961"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{blog.date}}
            </span>
            <span> {{blog.read}} Read</span>
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
    blog: {},
  },
};
</script>
