<template>
  <section class="skill__area grey-bg-7 pt-145 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-2 text-center mb-65">
            <span class="section__title-pre-2"> Skill & Experiences </span>
            <h3 class="section__title-2">Skill & Experiences</h3>
            <p>
              At vero eos censes aut reiciendis voluptatibus maiores alias
              consequatur.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-5 col-xl-5 col-lg-5">
          <div class="skill__item-wrapper">
            <div
              v-for="(skill, i) in skill_data"
              :key="i"
              class="skill__item d-flex align-items-center"
            >
              <div
                v-for="(item, i) in skill.skill_items"
                :key="i"
                class="skill__single text-center mb-20 mr-20"
              >
                <div class="skill__icon">
                  <img :src="item.icon" alt="icon" />
                </div>
                <div class="skill__content">
                  <h4>
                    <span class="counter">
                      {{item.num}}</span>{{item.text}}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-7 col-xl-7 col-lg-7">
          <career-items :career_data="career_data" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//skill images
import skill_icon_1 from "~/assets/img/skill/skill-icon-1.png";
import skill_icon_2 from "~/assets/img/skill/skill-icon-2.png";
import skill_icon_3 from "~/assets/img/skill/skill-icon-3.png";
import skill_icon_4 from "~/assets/img/skill/skill-icon-4.png";
import skill_icon_5 from "~/assets/img/skill/skill-icon-5.png";
import skill_icon_6 from "~/assets/img/skill/skill-icon-6.png";
import skill_icon_7 from "~/assets/img/skill/skill-icon-7.png";
// company icon
import company_icon_1 from "~/assets/img/skill/company/company-icon-1.png";
import company_icon_2 from "~/assets/img/skill/company/company-icon-2.png";
import company_icon_3 from "~/assets/img/skill/company/company-icon-3.png";
import company_icon_4 from "~/assets/img/skill/company/company-icon-4.png";
// SingleCarrerItem
import CareerItems from './CareerItems.vue';

export default {
  components: { CareerItems },
  data() {
    return {
      skill_data: [
        {
          skill_items: [
            { icon: skill_icon_1, num: 98, text: "%" },
            { icon: skill_icon_2, num: 86, text: "%" },
          ],
        },
        {
          skill_items: [
            { icon: skill_icon_3, num: 92, text: "%" },
            { icon: skill_icon_4, num: 73, text: "%" },
            { icon: skill_icon_5, num: 65, text: "%" },
          ],
        },
        {
          skill_items: [
            { icon: skill_icon_6, num: 50, text: "%" },
            { icon: skill_icon_7, num: 67, text: "%" },
          ],
        },
      ],
      career_data: [
        {
          delay: "130",
          icon: company_icon_1,
          title: "Amazon inc",
          designation: "Senior Product Designer",
          year: "April 2016 - March 2020",
        },
        {
          delay: "150",
          icon: company_icon_2,
          title: "Google",
          designation: "UI/UX Web Designer",
          year: "January 2018 - March 2019",
        },
        {
          delay: "170",
          icon: company_icon_3,
          title: "Apple",
          designation: "Internship Graphic designer",
          year: "April 2012 - March 2016",
        },
        {
          delay: "190",
          icon: company_icon_4,
          title: "Dribble",
          designation: "Ui Designer",
          year: "April 2008 - March 2012",
        },
      ],
    };
  },
};
</script>
