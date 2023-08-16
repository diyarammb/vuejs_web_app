<template>
  <common-breadcrumb title="Have a look to our Teams" subtitle="Elements" />
  <home-teams :style_2="true" :el_style="true" />
  <div class="tp-separator"></div>
  <team-area :el_style="true" />
  <div class="tp-separator"></div>
  <lawyer-teams :el_style="true" />
  <div class="tp-separator"></div>
  <creative-team :el_style="true" />
  <architecture-teams />
  <polity-teams :el_style="true" />
</template>

<script>
import CommonBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";
import ArchitectureTeams from "~~/components/teams/ArchitectureTeams.vue";
import CreativeTeam from "~~/components/teams/CreativeTeam.vue";
import HomeTeams from "~~/components/teams/HomeTeams.vue";
import LawyerTeams from "~~/components/teams/LawyerTeams.vue";
import PolityTeams from "~~/components/teams/PolityTeams.vue";
import TeamArea from "~~/components/teams/TeamArea.vue";

export default {
  components: {
    CommonBreadcrumb,
    HomeTeams,
    TeamArea,
    LawyerTeams,
    CreativeTeam,
    ArchitectureTeams,
    PolityTeams,
  },
};
</script>
