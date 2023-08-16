<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <section-title title="Privacy Policy" subtitle="Our Technology firm eTechFlow was established in 2021 and has offices in Pakistan and the United States. We are committed to providing state-of-the-art products and services that will benefit both individuals and organizations in the digital arena."/>
      <policy-area/>
    <footer-six :style_2="true"/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import SectionTitle from '~~/components/policy-terms/SectionTitle.vue';
import PolicyArea from '~~/components/policy-terms/PolicyArea.vue';
import FooterSix from '~~/layouts/footers/FooterSix.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    SectionTitle,
    PolicyArea,
    FooterSix,
    BackToTop,
  },
  setup() {
    useHead({
      title: "Policy - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
