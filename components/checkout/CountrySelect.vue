<template>
  <nice-select
    :options="[
      { value: 'Bangladesh', text: 'Bangladesh' },
      { value: 'Algeria', text: 'Algeria' },
      { value: 'Afghanistan', text: 'Afghanistan' },
      { value: 'Ghana', text: 'Ghana' },
      { value: 'Albania', text: 'Albania' },
      { value: 'Bahrain', text: 'Bahrain' },
      { value: 'Colombia', text: 'Colombia' },
      { value: 'Dominican Republic', text: 'Dominican Republic' },
    ]"
    :default-current="0"
    name="Bangladesh"
    @onChange="changeHandler"
  />
</template>

<script>
import NiceSelect from "../select/NiceSelect.vue";

export default {
  components: { NiceSelect },
  methods: {
    changeHandler(e) {
      console.log(e);
    },
  },
};
</script>
