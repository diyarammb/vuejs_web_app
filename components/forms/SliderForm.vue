<template>
  <form @submit.prevent="handleSubmit">
    <div class="slider__form-wrapper flex-wrap">
      <div class="slider__form-input">
        <input v-model="formValue.name" type="text" placeholder="Your Name" />
      </div>
      <div class="slider__form-input">
        <input v-model="formValue.email" type="text" placeholder="Your Email" />
      </div>
      <div class="slider__form-input has-select">
        <NiceSelect
          :options="[
            { value: 'Select Event', text: 'Select Event' },
            { value: 'Wedding', text: 'Wedding' },
            { value: 'Photography', text: 'Photography' },
            { value: 'Consulting', text: 'Consulting' },
          ]"
          :default-current="0"
          name="Select Event"
          @onChange="changeHandler"
        />
      </div>
      <div class="slider__form-input">
        <button type="submit" class="slider-form-btn tp-link-btn-3">
          Join the event <i class="fa-regular fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import NiceSelect from "../select/NiceSelect.vue";
export default {
  components: {
    NiceSelect,
  },
  data() {
    return {
      formValue: {
        name: "",
        email: "",
        country: "",
      },
    };
  },
  methods: {
    changeHandler(item) {
      this.formValue.country = item.value;
    },
    handleSubmit() {
      console.log(this.formValue);
      this.formValue = {};
    },
  },
};
</script>
