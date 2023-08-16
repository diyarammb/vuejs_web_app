<template>
  <div>
    <Header />

    <main>
      <slot></slot>
    </main>
    <Footer/>
    <BackToTop/>
  </div>
</template>

<script>
import Header from "./headers/HeaderNine.vue";
import Footer from "./footers/FooterNine.vue";
import BackToTop from "./footers/component/BackToTop.vue";

export default {
  components: {
    Header,
    BackToTop,
    Footer,
  },
};
</script>
