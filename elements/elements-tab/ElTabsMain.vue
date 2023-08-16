<template>
  <common-breadcrumb title="Have a look to our tab style" subtitle="Elements" />
  <personal-port-feature />
  <photographer-services :el_style="true" />
  <start-up-feature-list :el_style="true"/>
  <politician-vision/>
  <common-faq padd="100" padd_2="120"/>
</template>

<script>
import CommonBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";
import PersonalPortFeature from "~~/components/features/PersonalPortFeature.vue";
import PhotographerServices from "~~/components/services/PhotographerServices.vue";
import StartUpFeatureList from "~~/components/features/StartUpFeatureList";
import PoliticianVision from '~~/components/vision/PoliticianVision.vue';
import CommonFaq from '~~/components/faqs/CommonFaq.vue';

export default {
  components: {
    CommonBreadcrumb,
    PersonalPortFeature,
    PhotographerServices,
    StartUpFeatureList,
    PoliticianVision,
    CommonFaq,
  },
};
</script>
