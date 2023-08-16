<template>
  <section class="history__area pt-30 pb-140">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="section__title-wrapper-4 mb-60">
            <span class="section__title-pre-4">Out History</span>
            <h3 class="section__title-4">We are top lawyers and history</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="history__thumb-wrapper d-sm-flex pr-70">
            <div class="history__thumb">
              <img src="~/assets/img/history/history-1.jpg" alt="">
            </div>
            <div class="history__thumb-right-wrapper">
              <div class="history__thumb-right p-relative include-bg"
               :style="{ backgroundImage: `url(${thumb_bg})` }">
                76+
              </div>
              <div class="history-thumb-text">
                <p>Winning Awards</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="history__list pl-65 pr-90">
            <div v-for="(item,i) in history_lists" :key="i" class="history__list-item d-flex align-items-start">
              <div class="history__year" data-sal="slide-right" data-sal-delay="130" data-sal-duration="1000">
                <h5 class="history__year-title">{{item.year}}</h5>
              </div>
              <div class="history__list-content">
                <div class="history__list-dot">
                  <span></span>
                </div>
                <div class="history__list-content-inner" data-sal="slide-left" data-sal-delay="130" data-sal-duration="1000">
                  <h4 class="history__list-title">{{item.title}}</h4>
                  <p>{{item.text}}</p>
                  <div class="history__list-meta">
                    <span>{{item.meta}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import thumb_bg from '~/assets/img/history/history-2.jpg';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      thumb_bg,
      history_lists: [
        {
          delay: ".3s",
          year: "2007 - 2012",
          title: "Together We Build",
          text: "In quasi vitae non alias nulla qui dolores dolor non tempora tenetur.",
          meta: "Family Law",
        },
        {
          delay: ".5s",
          year: "2012 - 2016",
          title: "Completed 1000 Cases",
          text: "In quasi vitae non alias nulla qui dolores dolor non tempora tenetur.",
          meta: "Criminal Law",
        },
        {
          delay: ".7s",
          year: "2016 - 2018",
          title: "We Are Number One",
          text: "In quasi vitae non alias nulla qui dolores dolor non tempora tenetur.",
          meta: "Business Law",
        },
        {
          delay: ".9",
          year: "2018 - 2022",
          title: "Intellectual Property",
          text: "In quasi vitae non alias nulla qui dolores dolor non tempora tenetur.",
          meta: "Car Accident",
        },
      ]
    }
  }
}
</script>

