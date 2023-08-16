<template>
  <common-breadcrumb
    title="Have a look to our progress bar"
    subtitle="Elements"
  />
  <el-skill-style-one />
  <div class="tp-separator"></div>
  <el-skill-style-two />
  <div class="tp-separator"></div>
  <el-skill-style-three />
</template>

<script>
import CommonBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";
import ElSkillStyleOne from "./ElSkillStyleOne.vue";
import ElSkillStyleThree from "./ElSkillStyleThree.vue";
import ElSkillStyleTwo from "./ElSkillStyleTwo.vue";
export default {
  components: {
    CommonBreadcrumb,
    ElSkillStyleOne,
    ElSkillStyleTwo,
    ElSkillStyleThree,
  },
};
</script>
