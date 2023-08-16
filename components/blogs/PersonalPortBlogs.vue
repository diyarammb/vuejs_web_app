<template>
  <section class="blog__area grey-bg-12 pt-115 pb-90 p-relative z-index-1">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
          <div class="section__title-wrapper-9 mb-65">
            <span class="section__title-pre-9">Latest blog posts</span>
            <h3 class="section__title-9">What’s new? My blog and news.</h3>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
          <div class="blog__more-9 mb-85 text-md-end">
            <nuxt-link href="/blog-grid" class="tp-btn-5">VIEW ALL POST</nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(item, i) in blogData.filter((blog) => blog.home_portfolio)"
          :key="i"
          class="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
        >
          <personal-port-single-blog :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import blogData from "~~/mixins/blogData";
import PersonalPortSingleBlog from './single-blog/PersonalPortSingleBlog.vue';

export default {
  components: { PersonalPortSingleBlog },
  mixins: [blogData],
};
</script>
