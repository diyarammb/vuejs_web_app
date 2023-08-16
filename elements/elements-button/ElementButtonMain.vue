<template>
  <common-breadcrumb title="Have a look to our button styles" subtitle="Elements" />
  <solid-background-style />
  <solid-border-style />
  <link-button-style />
</template>

<script>
import CommonBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";
import LinkButtonStyle from "./LinkButtonStyle.vue";
import SolidBackgroundStyle from "./SolidBackgroundStyle.vue";
import SolidBorderStyle from "./SolidBorderStyle.vue";
export default {
  components: {
    CommonBreadcrumb,
    SolidBackgroundStyle,
    SolidBorderStyle,
    LinkButtonStyle,
  },
};
</script>
