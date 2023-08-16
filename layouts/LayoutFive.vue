<template>
  <div class="fix">
    <header-five />

    <main>
      <slot></slot>
    </main>
    <footer-five/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderFive from "./headers/HeaderFive.vue";
import FooterFive from './footers/FooterFive.vue';
import BackToTop from "./footers/component/BackToTop.vue";

export default {
  components: {
    HeaderFive,
    FooterFive,
    BackToTop,
  },
};
</script>
