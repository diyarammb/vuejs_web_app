<template>
  <common-breadcrumb
    title="Have a look to our video styles"
    subtitle="Elements"
  />
  <el-video-style-one/>
  <lawyer-video :el_style="true"/>
  <architecture-video :el_style="true"/>
</template>

<script>
import CommonBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";
import ArchitectureVideo from '~~/components/video-area/ArchitectureVideo.vue';
import LawyerVideo from '~~/components/video-area/LawyerVideo.vue';
import ElVideoStyleOne from './ElVideoStyleOne.vue';
export default {
  components: { CommonBreadcrumb, ElVideoStyleOne, LawyerVideo, ArchitectureVideo },
};
</script>
