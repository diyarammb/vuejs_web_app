<template>
  <div class="fix">
    <HeaderTwo />

    <main>
      <slot></slot>
    </main>
    <footer-two/>
    <BackToTop/>
  </div>
</template>

<script>
import HeaderTwo from "./headers/HeaderTwo.vue";
import FooterTwo from "./footers/FooterTwo.vue";
import BackToTop from "./footers/component/BackToTop.vue";

export default {
  components: {
    HeaderTwo,
    FooterTwo,
    BackToTop,
  },
};
</script>
