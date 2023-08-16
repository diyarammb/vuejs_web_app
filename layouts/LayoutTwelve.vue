<template>
  <div>
    <header-twelve />

    <main>
      <slot></slot>
    </main>
    <footer-eleven/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderTwelve from './headers/HeaderTwelve.vue';
import FooterEleven from './footers/FooterEleven.vue';
import BackToTop from './footers/component/BackToTop.vue';

export default {
  components: {
    HeaderTwelve,
    FooterEleven,
    BackToTop,
  },
};
</script>
