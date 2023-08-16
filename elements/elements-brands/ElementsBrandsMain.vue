<template>
  <common-breadcrumb title="Have a look to our brand styles" subtitle="Elements" />
  <brand-style-one/>
  <brand-style-two/>
  <photographer-brands :el_style="true"/>
  <agency-brands :el_style="true"/>
  <creative-brands :el_style="true"/>
  <agency-brands :el_style="true" square="brand__style-square"/>
</template>

<script>
import AgencyBrands from '~~/components/brands/AgencyBrands.vue';
import CreativeBrands from '~~/components/brands/CreativeBrands.vue';
import PhotographerBrands from '~~/components/brands/PhotographerBrands.vue';
import CommonBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";
import BrandStyleOne from './BrandStyleOne.vue';
import BrandStyleTwo from './BrandStyleTwo.vue';

export default {
  components: {
    CommonBreadcrumb,
    BrandStyleOne,
    BrandStyleTwo,
    PhotographerBrands,
    AgencyBrands,
    CreativeBrands,
  },
};
</script>
