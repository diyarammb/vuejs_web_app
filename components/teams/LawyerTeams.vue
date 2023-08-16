<template>
  <section class="team__area pt-120 pb-80">
    <div class="container">
      <div v-if="el_style" class="row">
        <div class="col-xl-12">
            <div class="tp-section-wrapper-3 mb-50 text-center">
              <span class="tp-section-subtitle-3">Our Team</span>
              <h3 class="tp-section-title-3">Team Overlay Style</h3>
            </div>
        </div>
      </div>
      <div v-if="!el_style" class="row align-items-end">
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-7">
          <div class="section__title-wrapper-4 mb-60">
            <span class="section__title-pre-4">Team member</span>
            <h3 class="section__title-4">Meet our most talented attorneys</h3>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-5">
          <div class="team__more-4 mb-70 text-md-end">
            <nuxt-link href="/team" class="tp-btn-border-brown"
              >See all Attorneys
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="item in teamData.filter((team) => team.home_lawyer)"
          :key="item.id"
          class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6"
        >
          <LawyerSingleTeam :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import teamData from "~~/mixins/teamData";
import LawyerSingleTeam from "./single-team/LawyerSingleTeam.vue";

export default {
  props:{
    el_style:{
      type:Boolean,
      default:false
    }
  },
  mixins: [teamData],
  components: { LawyerSingleTeam },
};
</script>
