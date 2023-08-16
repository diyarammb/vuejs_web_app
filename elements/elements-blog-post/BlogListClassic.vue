<template>
  <div class="blog__area pt-110 pb-90 grey-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">Minimal & Clean Design</span>
            <h3 class="tp-section-title-3">Blog List Classic</h3>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-8">
          <single-blog-list-item
            v-for="(item, i) in blogData.filter((b) => b.blog_grid).slice(0, 2)"
            :key="i"
            :item="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleBlogListItem from "~~/components/blogs/single-blog/SingleBlogListItem.vue";
import blogData from "~~/mixins/blogData";

export default {
  components: { SingleBlogListItem },
  mixins: [blogData],
};
</script>
