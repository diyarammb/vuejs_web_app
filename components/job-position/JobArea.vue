<template>
  <section :class="`job__area pb-140 ${style_2?'':'pt-35'}`">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-wrapper-4 mb-50">
            <h3 class="tp-section-title-4">
              <img src="~/assets/img/icon/section-title-bag.png" alt="" />
              Open Job Positions
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="job__item-wrapper">
            <job-item
              delay="130"
              title="UX & UI Designer"
              time="Full-Time"
              location="Hawthorne, CA, United states"
              tag="Design"
              date="10 Jun, 2022"
              vacancy="2"
            />

            <job-item
              delay="150"
              title="Javascript Developer"
              time="Full-Time"
              location="Hawthorne, CA, United states"
              tag="Developer"
              date="15 Jul, 2022"
              vacancy="5"
            />

            <job-item
              delay="170"
              title="Sales lead, Human Spaceflight"
              time="Full-Time"
              location="Hawthorne, CA, United states"
              tag="Sales"
              date="20 Aug, 2022"
              vacancy="1"
            />

            <job-item
              delay="190"
              title="WordPress Developer"
              time="Full-Time"
              location="Hawthorne, CA, United states"
              tag="Developer"
              date="01 Jan, 2022"
              vacancy="4"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import JobItem from "./JobItem.vue";

export default {
  props:{
    style_2: {
      type: Boolean,
      default: false,
   },
  },
  components: { JobItem },
};
</script>
