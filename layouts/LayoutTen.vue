<template>
  <div>
    <header-ten />

    <main>
      <slot></slot>
    </main>

    <back-to-top/>
  </div>
</template>

<script>
import HeaderTen from "./headers/HeaderTen.vue";
import BackToTop from "./footers/component/BackToTop.vue";

export default {
  components: {
    HeaderTen,
    BackToTop,
  },
};
</script>
