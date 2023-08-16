<template>
  <section class="counter__area counter__border pb-110">
    <div class="container">
      <div class="counter__inner black-bg fix">
        <div class="counter__shape">
          <img
            class="counter__shape-1"
            data-sal="slide-down"
            data-sal-delay="130"
            data-sal-duration="1000"
            src="~/assets/img/counter/counter-shape-1.png"
            alt=""
          />
          <img
            class="counter__shape-2"
            data-sal="slide-down"
            data-sal-delay="170"
            data-sal-duration="1000"
            src="~/assets/img/counter/counter-shape-2.png"
            alt=""
          />
          <img
            class="counter__shape-3"
            data-sal="slide-up"
            data-sal-delay="170"
            data-sal-duration="1000"
            src="~/assets/img/counter/counter-shape-3.png"
            alt=""
          />
          <img
            class="counter__shape-4"
            data-sal="slide-up"
            data-sal-delay="120"
            data-sal-duration="1000"
            src="~/assets/img/counter/counter-shape-4.png"
            alt=""
          />

          <img
            class="counter__shape-5"
            data-sal="slide-left"
            data-sal-duration="1000"
            src="~/assets/img/counter/counter-shape-circle-1.png"
            alt=""
          />
          <img
            class="counter__shape-6"
            data-sal="slide-right"
            data-sal-duration="1000"
            src="~/assets/img/counter/counter-shape-circle-2.png"
            alt=""
          />

          <img
            class="counter__shape-7 wow fadeInUp"
            data-sal="slide-up"
            data-sal-duration="1000"
            src="~/assets/img/counter/counter-shape-line-1.png"
            alt=""
          />
          <img
            class="counter__shape-8"
            data-sal="slide-up"
            data-sal-delay="130"
            data-sal-duration="1000"
            src="~/assets/img/counter/counter-shape-line-2.png"
            alt=""
          />
          <img
            class="counter__shape-9"
            data-sal="slide-up"
            data-sal-delay="170"
            data-sal-duration="1000"
            src="~/assets/img/counter/counter-shape-line-3.png"
            alt=""
          />
        </div>
        <div class="row justify-content-center">
          <div v-for="(item,i) in counterData" :key="i" class="col-xxl-4 col-xl-4 col-lg-4">
            <div class="counter__item">
              <div class="counter__content">
                <p>{{item.title}}</p>
                <h3 class="counter__title">
                  +<span class="counter">{{item.number}}</span>{{item.text }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SalScrollAnimationMixin from '~/mixins/SalScrollAnimationMixin';

export default {
  mixins:[SalScrollAnimationMixin],
  data() {
    return {
      startCounter: false,
      counterData: [
        { title: "Cups of Coffee", number: 914, text: "K" },
        { title: "Happy Clients", number: 123, text: "K" },
        { title: "Review", number: 76, text: "K" },
      ],
    };
  },
  methods: {

  }
};
</script>
