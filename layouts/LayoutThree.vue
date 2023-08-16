<template>
  <div>
    <header-three />

    <main>
      <slot></slot>
    </main>
    <footer-three/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderThree from "./headers/HeaderThree.vue";
import FooterThree from "./footers/FooterThree.vue";
import BackToTop from "./footers/component/BackToTop.vue";

export default {
  components: {
    HeaderThree,
    FooterThree,
    BackToTop,
  },
};
</script>
