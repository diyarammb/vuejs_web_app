<template>
  <div>
    <header-one :header_solid="true" :commonOffcanvas="true" />
    <slider-breadcrumb />
    <blog-list-area/>
    <Footer />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import SliderBreadcrumb from "~~/components/breadcrumb/SliderBreadcrumb.vue";
import Footer from "~~/layouts/footers/Footer.vue";
import BlogListArea from '~~/components/blogs/BlogListArea.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: { HeaderOne, Footer, SliderBreadcrumb, BlogListArea, BackToTop },
  setup() {
    useHead({
      title: "Blog List Sidebar - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
