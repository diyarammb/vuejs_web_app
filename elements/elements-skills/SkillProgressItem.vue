<template>
  <div class="skill__bar-progress">
    <div class="progress">
      <div
        class="progress-bar"
        data-sal="slide-right"
        :data-sal-delay="delay"
        data-sal-duration="1000"
        role="progressbar"
        :style="{width:`${percentage}%`}"
        :data-width="`${percentage}%`"
        :aria-valuenow="percentage"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span>{{percentage}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import SalScrollAnimationMixin from '~/mixins/SalScrollAnimationMixin';

export default {
  mixins:[SalScrollAnimationMixin],
  props:{
    delay:{
      type:String,
      default:'180'
    },
    percentage:{
      type:String,
      required:true,
    },
  }
};
</script>
