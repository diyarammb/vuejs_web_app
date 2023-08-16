<template>
  <common-breadcrumb
    title="Have a look to our pricing table"
    subtitle="Elements"
  />
  <agency-pricing/>
  <photography-pricing :el_style="true"/>
  <start-up-pricing :hide_shape="true" :el_style="true"/>
  <div class="tp-separator"></div>
  <start-up-pricing :hide_shape="true" :style_2="true"/>
</template>

<script>
import CommonBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";
import AgencyPricing from '~~/components/pricing/AgencyPricing.vue';
import PhotographyPricing from '~~/components/pricing/PhotographyPricing.vue';
import StartUpPricing from '~/components/pricing/StartUpPricing';

export default {
  components: { CommonBreadcrumb, AgencyPricing, PhotographyPricing,StartUpPricing },
};
</script>
