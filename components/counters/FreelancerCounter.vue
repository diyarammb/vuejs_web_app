<template>
  <div class="about__counter-wrapper mb-50">
    <div class="row gx-1 gy-1 gy-lg-0">
      <div
        v-for="(item, i) in counter_data"
        :key="i"
        class="col-xxl-4 col-lg-4 col-md-6"
      >
        <div
          class="about__counter-item d-flex justify-content-center align-items-center"
        >
          <div class="about__counter-text mr-15">
            <h3>
              <span class="counter">
                {{item.num}}
              </span>
              {{item.text}}
           </h3>
          </div>
          <div class="about__counter-content">
            <h3>{{item.title}}</h3>
            <p>{{item.subtitle}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter_data: [
        {
          num: 25,
          text: "+",
          title: "Years Experience",
          subtitle: "Over 47 projects",
        },
        {
          num: 12,
          text: "+",
          title: "Features & Awards",
          subtitle: "From design community",
        },
        {
          num: 96,
          text: "%",
          title: "Clients Rating",
          subtitle: "30+ testimonials",
        },
      ],
    };
  },
};
</script>
