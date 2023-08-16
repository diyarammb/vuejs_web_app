<template>
  <common-breadcrumb title="Have a look to our blog post" subtitle="Elements" />
  <blog-standard-post />
  <blog-grid-post />
  <blog-grid-bordered />
  <blog-list-classic/>
  <blog-masonry-area :el_style="true"/>
</template>

<script>
import BlogMasonryArea from '~~/components/blogs/BlogMasonryArea.vue';
import CommonBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";
import BlogGridBordered from "./BlogGridBordered.vue";
import BlogGridPost from "./BlogGridPost.vue";
import BlogListClassic from './BlogListClassic.vue';
import BlogStandardPost from "./BlogStandardPost.vue";

export default {
  components: {
    CommonBreadcrumb,
    BlogStandardPost,
    BlogGridPost,
    BlogGridBordered,
    BlogListClassic,
    BlogMasonryArea,
  },
};
</script>
