<template>
  <div class="instagram__slider black-bg-5 pb-30 box-plr-15">
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-xxl-12"
          data-sal="slide-down"
          data-sal-delay="130"
          data-sal-duration="1000"
        >
          <slider-instagram />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderInstagram from "./SliderInstagram.vue";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  components: { SliderInstagram },
};
</script>
