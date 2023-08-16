<template>
  <form id="contact-form" @submit.prevent="handleSubmit">
    <div class="row">
      <div class="col-md-6">
        <div class="contact__input-11">
          <input name="name" v-model="formValue.name" type="text" placeholder="Enter your name" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="contact__input-11">
          <input name="email" v-model="formValue.email" type="email" placeholder="Enter your email" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="contact__input-11">
          <input name="phone" v-model="formValue.phone" type="text" placeholder="Mobile no" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="contact__input-11">
          <input name="company" v-model="formValue.company" type="text" placeholder="Company" />
        </div>
      </div>
      <div class="col-md-12">
        <div class="contact__input-11">
          <textarea name="message" v-model="formValue.msg" placeholder="Your message"></textarea>
        </div>
      </div>
      <div class="col-md-12">
        <div class="contact__btn-11">
          <button type="submit" class="tp-btn-10">Send Message</button>
        </div>
      </div>
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
        phone: "",
        company: "",
        msg: '',
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
