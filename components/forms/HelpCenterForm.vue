<template>
  <form id="contact-form" @click.prevent="submit">
    <div class="contact__input-3 contact__input-2">
      <input name="name" type="text" placeholder="Full Name *" />
    </div>
    <div class="contact__input-3 contact__input-2">
      <input name="email" type="email" placeholder="Your Email *" />
    </div>
    <div class="contact__input-3 contact__input-2">
      <nice-select
        :options="[
          { value: 'Choose Your Topic', text: 'Choose Your Topic' },
          { value: 'Topic one', text: 'Topic one' },
          { value: 'Topic two', text: 'Topic two' },
          { value: 'Topic three', text: 'Topic three' },
          { value: 'Topic four', text: 'Topic four' },
        ]"
        :default-current="0"
        name="Choose Your Topic"
        @onChange="changeHandler"
      />
    </div>
    <div class="contact__input-3 contact__input-2">
      <textarea name="message" placeholder="Enter Message here..."></textarea>
    </div>
    <div class="contact__btn-3 mt-10">
      <button type="submit" class="tp-btn">Send Message</button>
    </div>
  </form>
</template>

<script>
import NiceSelect from "../select/NiceSelect.vue";

export default {
  components: { NiceSelect },
  methods: {
    changeHandler(e) {
      console.log(e);
    },
    submit () {
      console.log('submit')
    }
  },
};
</script>
