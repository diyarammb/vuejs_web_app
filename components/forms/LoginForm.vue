<template>
   <form @submit.prevent="handleSubmit">
      <div class="login__input-wrapper">
        <div class="login__input-item">
            <div class="login__input">
              <input v-model="formValue.email" type="text" placeholder="Email or Username">
              <span>
                  <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.5 17.6C15.5 14.504 12.3626 12 8.5 12C4.63737 12 1.5 14.504 1.5 17.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>                                          
              </span>
            </div>
        </div>
        <div class="login__input-item">
            <div class="login__input">
              <input v-model="formValue.password" type="password" placeholder="Password">
              <span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.20312 7.4V5.8C4.20312 3.152 5.00312 1 9.00312 1C13.0031 1 13.8031 3.152 13.8031 5.8V7.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 14.2C10.1046 14.2 11 13.3045 11 12.2C11 11.0954 10.1046 10.2 9 10.2C7.89543 10.2 7 11.0954 7 12.2C7 13.3045 7.89543 14.2 9 14.2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13 17H5C1.8 17 1 16.2 1 13V11.4C1 8.20002 1.8 7.40002 5 7.40002H13C16.2 7.40002 17 8.20002 17 11.4V13C17 16.2 16.2 17 13 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>                                                                                   
              </span>
            </div>
            <span>
              <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.4028 7.1025L6.60781 10.8975C6.12031 10.41 5.82031 9.7425 5.82031 9C5.82031 7.515 7.02031 6.315 8.50531 6.315C9.24781 6.315 9.91531 6.615 10.4028 7.1025Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.86 4.32748C11.5475 3.33748 10.0475 2.79749 8.495 2.79749C5.8475 2.79749 3.38 4.35748 1.6625 7.05748C0.9875 8.11498 0.9875 9.89248 1.6625 10.95C2.255 11.88 2.945 12.6825 3.695 13.3275" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.82031 14.6475C6.67531 15.0075 7.58281 15.2025 8.50531 15.2025C11.1528 15.2025 13.6203 13.6425 15.3378 10.9425C16.0128 9.88504 16.0128 8.10754 15.3378 7.05004C15.0903 6.66004 14.8203 6.29254 14.5428 5.94754" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.1306 9.52505C10.9356 10.5826 10.0731 11.4451 9.01562 11.6401" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.6025 10.8975L1 16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.0009 1.5L10.3984 7.1025" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>                                       
            </span>
        </div>
      </div>
      <div class="login__option mb-25 d-sm-flex justify-content-between">
        <div class="login__remember">
            <input v-model="formValue.isChecked" type="checkbox" id="tp-remember">
            <label for="tp-remember">Remember me</label>
        </div>
        <div class="login__forgot">
            <nuxt-link href="/forgot">forgot password?</nuxt-link>
        </div>
      </div>
      <div class="login__btn">
        <button type="submit" class="tp-btn w-100">Sign In</button>
      </div>
  </form>
</template>

<script>
    export default {
    data() {
    return {
      formValue: {
        email: "",
        password: "",
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
  }
</script>
