<template>
  <section class="about__area pt-110 pb-120 p-relative">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">Minimal & Clean Design</span>
            <h3 class="tp-section-title-3">List Icon Box</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <el-list-icon-box-item />
        <el-list-icon-box-item />
        <el-list-icon-box-item />
        <el-list-icon-box-item />
      </div>
    </div>
  </section>
</template>

<script>
import ElListIconBoxItem from "./ElListIconBoxItem.vue";
export default {
  components: { ElListIconBoxItem },
};
</script>
