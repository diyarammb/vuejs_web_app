<template>
  <section class="counter__area counter__border-8 black-bg-12 pt-125 pb-80">
    <div class="container">
      <div class="row">
        <div
          v-for="(item, i) in counter_data"
          :key="i"
          class="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
        >
          <div
            class="counter__item-8 mb-40"
            data-sal="slide-up"
            data-sal-delay="130"
            data-sal-duration="1000"
          >
            <div class="counter__content-8 d-flex align-items-center">
              <h4>
                <span class="counter">{{ item.num }}</span>
                {{ item.text }}
              </h4>
              <p v-html="item.title"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      counter_data: [
        {
          delay: ".3s",
          num: 99,
          text: "%",
          title: "Satisfaction <br /> Clients",
        },
        {
          delay: ".5s",
          num: 246,
          text: "",
          title: "Employees On <br /> Worldwide",
        },
        {
          delay: ".7s",
          num: 1824,
          text: "",
          title: "Project Completed <br /> On 40 Countries",
        },
      ],
    };
  },
};
</script>
