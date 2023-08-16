<template>
  <div
    :class="`tab-pane fade ${active ? 'show active' : ''}`"
    :id="id"
    role="tabpanel"
    :aria-labelledby="`${id}-tab`"
  >
    <div class="features__list-thumb-wrapper">
      <img
        class="features__list-thumb-1"
        src="~/assets/img/features/7/features-img-1.png"
        alt="features__list-thumb"
      />
      <img
        class="features__list-thumb-2"
        src="~/assets/img/features/7/features-img-2.png"
        alt="features__list-thumb"
      />
      <img
        class="features__list-thumb-3"
        src="~/assets/img/features/7/features-img-3.png"
        alt="features__list-thumb"
      />

      <img
        class="features__shape-7"
        src="~/assets/img/features/7/features-shape-1.png"
        alt="features__shape"
      />
    </div>
  </div>
</template>

<script>
export default {
  props:{
    active:Boolean,
    id:String,
  }
};
</script>
