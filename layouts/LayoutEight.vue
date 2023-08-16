<template>
  <div>
    <header-eight />

    <main>
      <slot></slot>
    </main>
    <footer-eight/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderEight from './headers/HeaderEight.vue';
import FooterEight from './footers/FooterEight.vue';
import BackToTop from "./footers/component/BackToTop.vue";

export default {
  components: {
    // HeaderEight,
    FooterEight,
    BackToTop,
  },
};
</script>
