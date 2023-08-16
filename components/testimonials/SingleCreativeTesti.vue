<template>
  <div :class="`testimonial__item-6 transition-3 ${style_2?'mb-60':'mb-75'}`">
    <div class="testimonial__rating testimonial__rating-6">
      <a v-for="r in item.ratings" :key="r" href="#">
        <i class="fa-solid fa-star"></i>
      </a>
    </div>
    <div class="testimonial__content-6">
      <p>
        {{ item.desc }}
      </p>
    </div>
    <div class="testimonial__avater-6 d-flex align-items-center">
      <div class="testimonial__avater-thumb-6">
        <img :src="item.user" alt="user" />
      </div>
      <div class="testimonial__avater-info-6">
        <h3 class="testimonial__avater-title-6">
          {{ item.name }}
        </h3>
        <span class="testimonial__avater-designation-6">
          {{ item.designation }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    item: {},
    style_2: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
