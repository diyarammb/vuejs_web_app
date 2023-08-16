<template>
  <div>
    <header-four />

    <main>
      <slot></slot>
    </main>
    <footer-four/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderFour from "./headers/HeaderFour.vue";
import FooterFour from "./footers/FooterFour.vue";
import BackToTop from "./footers/component/BackToTop.vue";

export default {
  components: {
    HeaderFour,
    FooterFour,
    BackToTop,
  },
};
</script>
