<template>
  <section class="login__area pt-110 pb-110">
    <div class="container">
        <div class="login__inner p-relative z-index-1">
        <login-shapes/>
          <div class="row justify-content-center">
              <div class="col-xl-6 col-lg-8 col-md-10">
                <div class="login__wrapper">
                    <div class="login__top mb-30 text-center">
                      <h3 class="login__title">Forgot Password?</h3>
                      <p>Enter your email address to request password reset.</p>
                    </div>
                    <div class="login__form">
                      <!-- form start -->
                      <forgot-form/>
                      <!-- form end -->
                      <div class="login__register-now">
                          <p>Remember your password? <nuxt-link href="/login">Login</nuxt-link></p>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import ForgotForm from '../forms/ForgotForm.vue';
import LoginShapes from './LoginShapes.vue';

  export default {
  components: { LoginShapes, ForgotForm },
    
  }
</script>
