<template>
  <div>
    <header-six />

    <main>
      <slot></slot>
    </main>
    <footer-six/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderSix from "./headers/HeaderSix.vue";
import FooterSix from './footers/FooterSix.vue';
import BackToTop from "./footers/component/BackToTop.vue";

export default {
  components: {
    HeaderSix,
    FooterSix,
    BackToTop,
  },
};
</script>
