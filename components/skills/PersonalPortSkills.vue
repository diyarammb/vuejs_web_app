<template>
  <section class="skill__area pt-95 grey-bg-12 pb-125">
    <div class="container">
      <div class="row">
        <div class="col-xxl-5 col-xl-5 col-lg-5">
          <div class="skill__wrapper-9">
            <div class="section__title-wrapper-9 mb-55">
              <span class="section__title-pre-9">Experience</span>
              <h3 class="section__title-9">Skills & <br />Experience</h3>
            </div>
            <div class="skill__item-wrapper-9">
              <div class="row">
                <div
                  v-for="(item, i) in skill_data"
                  :key="i"
                  class="col-xxl-6 col-md-6 col-sm-6 col-6"
                >
                  <div class="skill__item-9">
                    <div class="skill__icon-9">
                      <span>
                        <img :src="item.icon" alt="icon" />
                      </span>
                    </div>
                    <div class="skill__content-9">
                      <h4>
                        {{ item.title }}
                        <span>
                          (<span class="counter">{{ item.num }}</span>
                          {{ item.text }})
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-7 col-xl-7 col-lg-7">
          <career-items style_2="career__style-2" :career_data="career_data" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// internal
import skill_1 from "~/assets/img/skill/9/skill-icon-1.png";
import skill_2 from "~/assets/img/skill/9/skill-icon-2.png";
import skill_3 from "~/assets/img/skill/9/skill-icon-3.png";
import skill_4 from "~/assets/img/skill/9/skill-icon-4.png";
import company_icon_1 from "~/assets/img/skill/company/9/company-icon-1.png";
import company_icon_2 from "~/assets/img/skill/company/9/company-icon-2.png";
import company_icon_3 from "~/assets/img/skill/company/9/company-icon-3.png";
import company_icon_4 from "~/assets/img/skill/company/9/company-icon-4.png";
import CareerItems from "./CareerItems.vue";

export default {
  components: { CareerItems },
  data() {
    return {
      skill_data: [
        { icon: skill_1, title: "Figma", num: 90, text: "%" },
        { icon: skill_2, title: "XD", num: 66, text: "%" },
        { icon: skill_3, title: "Photoshop", num: 80, text: "%" },
        { icon: skill_4, title: "Sketch", num: 86, text: "%" },
      ],
      career_data: [
        {
          delay: "130",
          icon: company_icon_1,
          title: "Product designer",
          designation: "Microsoft Edge",
          year: "April 2020 - Present",
        },
        {
          delay: "150",
          icon: company_icon_2,
          title: "UX/UX designer",
          designation: "Amazon Inc",
          year: "April 2016 - March 2020",
        },
        {
          delay: "170",
          icon: company_icon_3,
          title: "Product designer",
          designation: "Google",
          year: "April 2012 - March 2016",
        },
        {
          delay: "190",
          icon: company_icon_4,
          title: "UI Designer",
          designation: "Dribbble",
          year: "April 2008 - March 2012",
        },
      ],
    };
  },
};
</script>
