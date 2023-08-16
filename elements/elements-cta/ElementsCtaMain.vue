<template>
  <common-breadcrumb title="Have a look to our Call To Action" subtitle="Elements" />
  <freelancer-cta/>
  <agency-cta :el_style="true" />
  <services-subscribe :el_style="true"/>
  <start-up-cta/>
  <about-cta :el_style="true"/>
  <start-up-cta :style_2="true"/>
  <creative-cta-two :el_style="true"/>
  <shop-cta/>
</template>

<script>
import CommonBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";
import AboutCta from '~~/components/cta/AboutCta.vue';
import AgencyCta from '~~/components/cta/AgencyCta.vue';
import CreativeCtaTwo from '~~/components/cta/CreativeCtaTwo.vue';
import FreelancerCta from '~~/components/cta/FreelancerCta.vue';
import ShopCta from '~~/components/cta/ShopCta.vue';
import StartUpCta from '~~/components/cta/StartUpCta.vue';
import ServicesSubscribe from '~~/components/subscribe/ServicesSubscribe.vue';

export default {
  components: {
    CommonBreadcrumb,
    FreelancerCta,
    AgencyCta,
    ServicesSubscribe,
    StartUpCta,
    AboutCta,
    CreativeCtaTwo,
    ShopCta,
  },
};
</script>
