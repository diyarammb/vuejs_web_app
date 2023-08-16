<template>
  <section class="counter__area counter__overlay-10">
    <div class="container">
      <div class="counter__inner-10">
        <div class="counter__inner-10-shape include-bg"
        :style="{ backgroundImage: `url(${bg})` }">
        </div>
        <div class="row">
          <div v-for="(item,i) in counter_data" :key="i" class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div class="counter__item-10 text-center mb-30" data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000">
              <div class="counter__content-10">
                <h4><span class="counter">{{item.num}}</span>{{item.text}}</h4>
                <p>{{item.title}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bg from '~/assets/img/counter/10/counter-shape-1.png';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      bg,
      counter_data: [
        {
          delay: ".3s",
          num: 623,
          text: "k",
          title: "People lived in our city",
        },
        {
          delay: ".5s",
          num: 1820,
          text: "+",
          title: "Square kilometers region covers",
        },
        {
          delay: ".7s",
          num: 24,
          text: "%",
          title: "Private & domestic garden land",
        },
      ]
    }
  }
}
</script>
