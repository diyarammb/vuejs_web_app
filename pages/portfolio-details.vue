<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <classic-details/>
    <Footer/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ClassicDetails from '~~/components/portfolio-details/classic-details/ClassicDetails.vue';
import Footer from '~~/layouts/footers/Footer.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: { HeaderOne, ClassicDetails, Footer, BackToTop},
  setup() {
    useHead({
      title: "Brand",
    });
  },
};
</script>
