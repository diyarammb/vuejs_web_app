<template>
  <section class="contact__form-area pt-120 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="contact__form-2">
            <h3 class="contact__form-2-title">Send a message</h3>
            <contact-form :style_2="el_style ? true : false" />
            <p class="ajax-response"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from "~~/components/forms/ContactForm.vue";
export default {
  props:{
    el_style:{
      type:Boolean,
      default:false,
    }
  },
  components: { ContactForm },
};
</script>
