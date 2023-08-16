<template>
  <div>
    <header-seven />

    <main>
      <slot></slot>
    </main>
    <footer-seven/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderSeven from './headers/HeaderSeven.vue';
import FooterSeven from './footers/FooterSeven.vue';
import BackToTop from "./footers/component/BackToTop.vue";

export default {
  components: {
    HeaderSeven,
    FooterSeven,
    BackToTop,
  },
};
</script>
