<template>
  <section class="team__area team__border p-relative black-bg-12 pt-110 pb-100">
    <div
      class="team__bg-8"
      :style="{ backgroundImage: `url(${bg})` }"
    ></div>
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-8 text-center mb-70">
            <span class="section__title-pre-8">Meet Our Team</span>
            <h3 class="section__title-8">
              Professional &
              <span class="section__title-highlight-8"
                >Friendly
                <svg
                  width="246"
                  height="26"
                  viewBox="0 0 246 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="wow"
                    d="M3 23C56.25 15.2537 162.375 -17.8439 243 23"
                    stroke="#FF5A1B"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(team, i) in teamData.filter((item) => item.home_architecture)"
          :key="i"
          class="col-xxl-3 col-xl-3 col-lg-3 col-md-6"
        >
          <div
            class="team__item-8 text-center black-bg-14 mb-30"
            data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
          >
            <div class="team__thumb-8 mb-45">
              <nuxt-link href="/team-details">
                <img :src="team.img" alt="" />
              </nuxt-link>
            </div>
            <div class="team__content-8">
              <h3 class="team__title-8">
                <nuxt-link href="/team-details">{{ team.name }}</nuxt-link>
              </h3>
              <span class="team__designation-8">{{ team.title }}</span>

              <div
                class="team__social-8 d-flex flex-wrap align-items-center justify-content-center"
              >
                <a
                  v-for="(l, i) in team.social_links"
                  :key="i"
                  :href="l.link"
                  :target="l.target"
                >
                  <i :class="l.icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import teamData from "~~/mixins/teamData";
import bg from '~/assets/img/team/8/team-bg-1.png';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [teamData,SalScrollAnimationMixin],
  data(){
    return {bg}
  }
};
</script>
