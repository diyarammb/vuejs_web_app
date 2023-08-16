<template>
  <section
    :class="`${el_style ? 'blog__area pt-110 pb-90' : 'blog__masonary pb-120'}`"
  >
    <div v-if="el_style" class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3"
              >Minimal &amp; Clean Design</span
            >
            <h3 class="tp-section-title-3">Blog Masonary</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid gx-xl-5 gx-3">
      <div class="container-fluid">
        <masonry-wall
          :items="blogData.filter((b) => b.blog_masonry)"
          :column-width="330"
          :gap="25"
        >
          <template #default="{ item }">
            <single-blog-grid-item :item="item" :masonry="true" />
          </template>
        </masonry-wall>
      </div>
    </div>
  </section>
</template>

<script>
import blogData from "~~/mixins/blogData";
import SingleBlogGridItem from "./single-blog/SingleBlogGridItem.vue";

export default {
  props: {
    el_style: {
      type: Boolean,
      default: false,
    },
  },
  components: { SingleBlogGridItem },
  mixins: [blogData],
};
</script>
