<template>
  <section class="blog__area pb-95 grey-bg-7 pt-175">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-2 text-center mb-60">
            <span class="section__title-pre-2">Articles & News</span>
            <h3 class="section__title-2">Articles & News</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="blog in blogData.filter((item) => item.home_freelancer)"
          :key="blog.id"
          class="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
        >
          <freelance-single-blog :blog="blog" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import blogData from "~~/mixins/blogData";
import FreelanceSingleBlog from "./single-blog/FreelanceSingleBlog.vue";

export default {
  components: { FreelanceSingleBlog },
  mixins: [blogData],
};
</script>
