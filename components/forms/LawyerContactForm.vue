<template>
  <form id="contact-form" @submit.prevent="handleSubmit">
    <div class="row">
      <div class="col-md-6">
        <div class="contact__input">
          <input name="name" type="text" v-model="formValue.firstName" placeholder="First Name" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="contact__input">
          <input name="l_name" type="text" v-model="formValue.lastName" placeholder="Last Name" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="contact__input">
          <input name="email" type="email" v-model="formValue.email" placeholder="Email" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="contact__input">
          <input name="phone" type="text" v-model="formValue.phone" placeholder="Phone" />
        </div>
      </div>
      <div class="col-md-12">
        <div class="contact__input">
          <textarea name="message" v-model="formValue.message" placeholder="Case Details"></textarea>
        </div>
      </div>
      <div class="col-md-12">
        <div class="contact__btn">
          <button type="submit" class="tp-btn-brown">Send Message</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data(){
    return {
      formValue:{
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:'',
      }
    }
  },
  methods:{
    handleSubmit(){
      console.log(this.formValue);
      this.formValue = {}
    }
  }
};
</script>
