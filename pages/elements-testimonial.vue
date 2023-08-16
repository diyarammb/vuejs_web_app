<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <el-testimonial-main/>
    <Footer />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ElTestimonialMain from '~~/elements/elements-testimonial/ElTestimonialMain.vue';
import BackToTop from "~~/layouts/footers/component/BackToTop.vue";
import Footer from "~~/layouts/footers/Footer.vue";

export default {
  components: {
    HeaderOne,
    ElTestimonialMain,
    Footer,
    BackToTop,
  },
  setup() {
    useHead({
      title:
        "Element Testimonial - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
