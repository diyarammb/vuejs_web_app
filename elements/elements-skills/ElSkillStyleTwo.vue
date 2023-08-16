<template>
  <section class="skill__area pt-110 pb-85">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">Minimal & Clean Design</span>
            <h3 class="tp-section-title-3">Skill Without Title</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="skill__bar">
            <div class="skill__bar-item">
              <skill-progress-item percentage="65" />
            </div>
            <div class="skill__bar-item is-blue">
              <skill-progress-item percentage="90" />
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="skill__bar">
            <div class="skill__bar-item is-brown">
              <skill-progress-item percentage="70" />
            </div>
            <div class="skill__bar-item is-pink">
              <skill-progress-item percentage="85" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillProgressItem from "./SkillProgressItem.vue";

export default {
  components: { SkillProgressItem },
};
</script>
