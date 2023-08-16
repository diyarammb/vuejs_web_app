<template>
  <div>
    <header-twelve :style_2="true" />
    <shop-breadcrumb/>
    <shop-area :right_side="true"/>
    <shop-cta/>
    <footer-six :style_2="true" />
    <back-to-top />
  </div>
</template>

<script>
import HeaderTwelve from '~~/layouts/headers/HeaderTwelve.vue';
import ShopBreadcrumb from '~~/components/breadcrumb/ShopBreadcrumb.vue';
import ShopArea from '~~/components/shop/ShopArea.vue';
import ShopCta from '~~/components/cta/ShopCta.vue';
import FooterSix from "~~/layouts/footers/FooterSix.vue";
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderTwelve,
    ShopBreadcrumb,
    ShopArea,
    ShopCta,
    FooterSix,
    BackToTop,
  },
  setup() {
    useHead({
      title: "Shop Right Sidebar - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
