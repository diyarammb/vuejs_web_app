<template>
  <div
    :class="`tab-pane fade ${active ? 'show active' : ''}`"
    :id="id"
    role="tabpanel"
    :aria-labelledby="`${id}-tab`"
  >
    <div class="accordion" :id="`${id}_accordion`">
      <single-faq
        v-for="(item, i) in faq_items"
        :key="i"
        :item="{ ...item, parent: `${id}_accordion` }"
      />
    </div>
  </div>
</template>

<script>
import SingleFaq from "../SingleFaq.vue";

export default {
  components: { SingleFaq },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    id: String,
    faq_items: Array,
  },
};
</script>
