<template>
  <span class="tp_mousemove">
    <img :class="cls" :data-depth="dataDepth" :src="imgSrc" alt="img" />
  </span>
</template>

<script>
import mouseMove from "~/helpers/mouseMoveAnimation";
export default {
  props: {
    cls: String,
    imgSrc: String,
    dataDepth: String,
  },
  mounted() {
    mouseMove();
  },
};
</script>
