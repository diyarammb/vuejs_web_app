<template>
  <div>
    <header-one :header_solid="true" :commonOffcanvas="true" />
    <blog-breadcrumb title="Our Blog" subtitle="Blog"  />
    <blog-post-box-area/>
    <Footer/>
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import Footer from '~~/layouts/footers/Footer.vue';
import BlogBreadcrumb from '~~/components/breadcrumb/BlogBreadcrumb.vue';
import BlogPostBoxArea from '~~/components/blogs/BlogPostBoxArea.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: { HeaderOne, Footer, BlogBreadcrumb, BlogPostBoxArea, BackToTop},
  setup() {
    useHead({
      title: "Blog - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
