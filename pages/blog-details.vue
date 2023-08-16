<template>
  <div>
    <header-one :header_solid="true" :commonOffcanvas="true" />
    <blog-details-breadcrumb/>
    <blog-details-area/>
    <Footer />
    <back-to-top/>
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import BlogDetailsBreadcrumb from '~~/components/breadcrumb/BlogDetailsBreadcrumb.vue';
import BlogDetailsArea from '~~/components/blog-details/BlogDetailsArea.vue';
import Footer from "~~/layouts/footers/Footer.vue";
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: { HeaderOne, Footer, BackToTop, BlogDetailsBreadcrumb, BlogDetailsArea },
  setup() {
    useHead({
      title: "Blog Details - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
