<template>
  <form id="contact-form" @submit.prevent="handleSubmit">
    <div class="services__contact-input">
      <input name="name" v-model="formValue.name" type="text" placeholder="Your Name" />
    </div>
    <div class="services__contact-input">
      <input name="email" v-model="formValue.email" type="email" placeholder="Your Email Address" />
    </div>
    <div class="services__contact-input">
      <textarea name="message" v-model="formValue.msg" placeholder="Your message"></textarea>
    </div>
    <div class="services__contact-btn">
      <button type="submit" class="tp-btn w-100">Send Email</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formValue: {
        name: "",
        email: "",
        msg: false,
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.formValue);
      this.formValue = {};
    },
  },
};
</script>
