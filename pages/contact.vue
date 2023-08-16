<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <contact-area/>
    <footer-six :style_2="true"/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ContactArea from '~~/components/contact/ContactArea.vue';
import FooterSix from '~~/layouts/footers/FooterSix.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    ContactArea,
    FooterSix,
    BackToTop,
  },
  setup() {
    useHead({
      title: "Contact - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
