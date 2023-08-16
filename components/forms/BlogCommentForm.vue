<template>
  <form @submit.prevent="handleSubmit">
    <div class="row">
      <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
        <div class="postbox__comment-input">
          <input type="text" v-model="formValue.name" placeholder="Name*" />
        </div>
      </div>
      <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
        <div class="postbox__comment-input">
          <input type="email" v-model="formValue.email" placeholder="Email" />
        </div>
      </div>
      <div class="col-xxl-4 col-xl-4 col-lg-12">
        <div class="postbox__comment-input">
          <input type="text" v-model="formValue.website" placeholder="Website" />
        </div>
      </div>
      <div class="col-xxl-12">
        <div class="postbox__comment-input">
          <textarea v-model="formValue.comment" placeholder="Your Comment Here..."></textarea>
        </div>
      </div>
      <div class="col-xxl-12">
        <div class="postbox__comment-agree d-flex align-items-start mb-25">
          <input v-model="formValue.isChecked" class="e-check-input" type="checkbox" id="e-agree" />
          <label class="e-check-label" for="e-agree">
            Save my name, email, and website in this browser for the next time
            I comment.
          </label>
        </div>
      </div>
      <div class="col-xxl-12">
        <div class="postbox__comment-btn">
          <button type="submit" class="tp-btn">Submit Comment</button>
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
        website: "",
        comment: "",
        isChecked: false,
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