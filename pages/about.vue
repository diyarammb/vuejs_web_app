<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" /> 
    <about-text-area />
    <personal-port-services :style_2="true" />
    <about-gallery />
    <personal-port-awards :style_2="true" />
    <about-faqs />
    <home-teams :style_2="true" />
    <agency-brands :spacing="true" :style_2="true" />
    <about-cta/>
    <footer-six :style_2="true"/>
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue"; 
import AboutTextArea from "~~/components/abouts/about-page-com/AboutTextArea.vue";
import PersonalPortServices from "~~/components/services/PersonalPortServices.vue";
import AboutGallery from "~~/components/abouts/about-page-com/AboutGallery.vue";
import PersonalPortAwards from "~~/components/awards/PersonalPortAwards.vue";
import AboutFaqs from "~~/components/faqs/AboutFaqs.vue";
import HomeTeams from "~~/components/teams/HomeTeams.vue";
import AgencyBrands from '~~/components/brands/AgencyBrands.vue';
import AboutCta from '~~/components/cta/AboutCta.vue';
import FooterSix from '~~/layouts/footers/FooterSix.vue';
import BackToTop from "~~/layouts/footers/component/BackToTop.vue";

export default {
  components: {
    HeaderOne,
    BackToTop, 
    AboutTextArea,
    PersonalPortServices,
    AboutGallery,
    PersonalPortAwards,
    AboutFaqs,
    HomeTeams,
    AgencyBrands,
    AboutCta,
    FooterSix,
  },
  setup() {
    useHead({
      title: "About - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
