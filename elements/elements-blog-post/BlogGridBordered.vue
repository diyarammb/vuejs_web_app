<template>
  <div class="blog__area pt-110 pb-90">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">Minimal & Clean Design</span>
            <h3 class="tp-section-title-3">Blog Grid Bordered</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(item, i) in blogData.filter((b) => b.blog_grid).slice(0, 3)"
          :key="i"
          class="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
        >
          <single-blog-grid-item :item="item" :masonry="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blogData from "~~/mixins/blogData";
import SingleBlogGridItem from "~~/components/blogs/single-blog/SingleBlogGridItem.vue";

export default {
  components: { SingleBlogGridItem },
  mixins: [blogData],
};
</script>