<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <classic-style />
    <Footer/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ClassicStyle from "~~/components/portfolios/portfolio-page/ClassicStyle.vue";
import Footer from "~~/layouts/footers/Footer.vue";
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: { HeaderOne, ClassicStyle,Footer, BackToTop },
  setup() {
    useHead({
      title: "Portfolio ",
    });
  },
};
</script>
