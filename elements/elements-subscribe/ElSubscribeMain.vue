<template>
  <common-breadcrumb
    title="Have a look to our newsletter"
    subtitle="Elements"
  />
  <el-subs-style-one />
  <div class="tp-separator tp-separator-white"></div>
  <el-subs-style-two />
  <div class="tp-separator tp-separator-white"></div>
  <el-subs-style-three />
</template>

<script>
import CommonBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";
import ElSubsStyleOne from "./ElSubsStyleOne.vue";
import ElSubsStyleThree from "./ElSubsStyleThree.vue";
import ElSubsStyleTwo from "./ElSubsStyleTwo.vue";

export default {
  components: {
    CommonBreadcrumb,
    ElSubsStyleOne,
    ElSubsStyleTwo,
    ElSubsStyleThree,
  },
};
</script>
