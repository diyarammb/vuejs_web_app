<template>
  <form id="contact-form" @submit.prevent="handleSubmit">
    <div class="row">
      <div class="col-lg-6">
        <div class="contact__input-9">
          <input
            name="name"
            type="text"
            v-model="formValue.name"
            placeholder="Your name*"
          />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="contact__input-9">
          <input
            name="email"
            type="email"
            v-model="formValue.email"
            placeholder="Your email address*"
          />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="contact__input-9">
          <input
            name="phone"
            type="text"
            v-model="formValue.phone"
            placeholder="Mobile number"
          />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="contact__input-9">
          <input
            name="subject"
            type="text"
            v-model="formValue.subject"
            placeholder="Subject"
          />
        </div>
      </div>
      <div class="col-lg-12">
        <div class="contact__input-9">
          <textarea
            v-model="formValue.msg"
            name="message"
            placeholder="How can we help you?"
          ></textarea>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="contact__btn-9">
          <button type="submit" class="tp-btn-6 w-100">SEND MESSAGE</button>
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
        subject: "",
        msg: "",
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
