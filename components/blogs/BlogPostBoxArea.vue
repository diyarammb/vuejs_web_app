<template>
  <section class="postbox__area grey-bg-4 pt-120 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xxl-8 col-lg-8">
          <div class="postbox__wrapper">
            <single-blog-post-box
              v-for="(item, i) in blogData.filter((b) => b.blog_post_box)"
              :key="i"
              :item="item"
            />
            <div class="tp-pagination tp-pagination-style-2 mt-20">
              <blog-pagination/>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-lg-4">
          <!-- sidebar start -->
          <blog-sidebar />
          <!-- sidebar end -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external

// internal
import blogData from "~~/mixins/blogData";
import BlogPagination from '../common/pagination/BlogPagination.vue';
import BlogSidebar from "../common/sidebar/BlogSidebar.vue";
import SingleBlogPostBox from "./single-blog/SingleBlogPostBox.vue";

export default {
  components: { BlogSidebar, SingleBlogPostBox, BlogPagination },
  mixins: [blogData],
};
</script>
