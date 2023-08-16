<template>
  <form @submit.prevent="handleSubmit">
    <div class="login__input-wrapper">
      <div class="login__input-item">
        <div class="login__input">
          <input type="email" placeholder="Email" />
          <span>
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 14.6H5C2.6 14.6 1 13.4 1 10.6V5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 5.40002L10.496 7.40002C9.672 8.05602 8.32 8.05602 7.496 7.40002L5 5.40002"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
    <div class="login__btn">
      <a href="#" class="tp-btn w-100">Send Request</a>
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    handleSubmit() {
      console.log("submitted");
    },
  },
};
</script>
