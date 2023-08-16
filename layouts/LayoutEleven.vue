<template>
  <div>
    <header-eleven />

    <main>
      <slot></slot>
    </main>

    <footer-ten/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderEleven from "./headers/HeaderEleven.vue";
import BackToTop from "./footers/component/BackToTop.vue";
import FooterTen from "./footers/FooterTen.vue";

export default {
  components: {
    HeaderEleven,
    FooterTen,
    BackToTop,
  },
};
</script>
