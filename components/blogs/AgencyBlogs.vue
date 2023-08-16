<template>
   
    <div class="blog__shape">
      <img
        class="blog__shape-1"
        src="~/assets/img/blog/5/shape/shape-1.png"
        alt="shape"
      />
      <img
        class="blog__shape-2"
        src="~/assets/img/blog/5/shape/shape-2.png"
        alt="shape"
      />
      <img
        class="blog__shape-3"
        src="~/assets/img/blog/5/shape/shape-3.png"
        alt="shape"
      />
      <img
        class="blog__shape-4"
        src="~/assets/img/blog/5/shape/shape-4.png"
        alt="shape"
      />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-5 mb-50 text-center">
            <span class="section__title-pre-5">Our Blogs</span>
            <h3 class="section__title-5">Read the latest news.</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(blog,i) in blogData.filter((item) => item.home_agency)"
          :key="i"
          class="col-xxl-6 col-xl-6 col-lg-6 col-md-6"
        >
          <agency-single-blog :blog="blog" />
        </div>
      </div>

      <div class="row">
        <div class="col-xxl-12">
          <div
            class="blog__more-5 mt-30 text-center"
            data-sal="slide-up" data-sal-delay="170" data-sal-duration="1000"
          >
            <nuxt-link href="/blog-grid" class="tp-btn-round">View our all News</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  <!-- </section> -->
</template>

<script>
import blogData from "~~/mixins/blogData";
import AgencySingleBlog from './single-blog/AgencySingleBlog.vue';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  components: { AgencySingleBlog },
  mixins: [blogData],
};
</script>
