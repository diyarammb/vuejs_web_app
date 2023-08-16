<template>
  <div class="blog__area pt-110 box-plr-55 pb-15">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">Minimal & Clean Design</span>
            <h3 class="tp-section-title-3">Blog Standard</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div
          v-for="(item, i) in blogData.filter(b => b.blog_post_box).slice(0, 2)"
          :key="i"
          class="col-lg-6"
        >
          <single-blog-post-box :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleBlogPostBox from "~~/components/blogs/single-blog/SingleBlogPostBox.vue";
import blogData from "~~/mixins/blogData";

export default {
  components: { SingleBlogPostBox },
  mixins: [blogData],
};
</script>
