<template>
  <footer>
    <div
      :class="`footer__area ${style_2 ? 'footer__style-2' : ''}`"
      :data-bg-color="`${style_2 ? 'footer-bg-blue' : 'footer-bg-dark'}`"
    >
      <div class="footer__top footer__top-3">
        <div class="footer__shape">
          <img
            class="footer__shape-3"
            src="~/assets/img/footer/footer-shape-1.png"
            alt="shape"
          />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-8">
              <div class="footer__widget footer__widget-3 mb-50 footer-col-3-1">
                <div class="footer__logo">
                  <nuxt-link href="/">
                    <img src="~/assets/img/logo/logo.svg" alt="logo" />
                  </nuxt-link>
                </div>

                <div class="footer__widget-content">
                  <div class="footer__subscribe">
                    <h3 class="footer__subscribe-title">
                      Let’s talk about your project.
                    </h3>
                    <form @submit.prevent="handleSubmit">
                      <div class="footer__subscribe-box-3">
                        <div class="footer__subscribe-input-3">
                          <input
                          v-model="formValue"
                            type="email"
                            placeholder="Join my newsletter..."
                          />
                          <svg
                            width="16"
                            height="14"
                            viewBox="0 0 16 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.5 12.9H4.5C2.4 12.9 1 11.85 1 9.4V4.5C1 2.05 2.4 1 4.5 1H11.5C13.6 1 15 2.05 15 4.5V9.4C15 11.85 13.6 12.9 11.5 12.9Z"
                              stroke="#FFFFFF"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11.5 4.85059L9.309 6.60059C8.588 7.17459 7.405 7.17459 6.684 6.60059L4.5 4.85059"
                              stroke="#FFFFFF"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <button class="footer-sub-btn-3" type="submit">
                          <i class="fa-regular fa-arrow-up-right"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div class="footer__widget footer__widget-3 mb-50 footer-col-3-2">
                <h3 class="footer__widget-title">Navigation</h3>

                <div class="footer__widget-content">
                  <ul>
                    <li><nuxt-link href="/home-photographer">Home</nuxt-link></li>
                    <li><nuxt-link href="/about">About</nuxt-link></li>
                    <li><nuxt-link href="/portfolio-2">Portfolio</nuxt-link></li>
                    <li><nuxt-link href="/services">Services</nuxt-link></li>
                    <li><nuxt-link href="/pricing">Pricing</nuxt-link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget footer__widget-3 mb-50 footer-col-3-3">
                <h3 class="footer__widget-title">Pages</h3>

                <div class="footer__widget-content">
                  <ul>
                    <li><nuxt-link href="/blog-grid">Blog</nuxt-link></li>
                    <li><nuxt-link href="/portfolio-2">Projects</nuxt-link></li>
                    <li><nuxt-link href="/faq">Faqs</nuxt-link></li>
                    <li><nuxt-link href="/contact-2">Contact</nuxt-link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
              <div class="footer__widget footer__widget-3 mb-50 footer-col-3-4">
                <h3 class="footer__widget-title">Recent Post</h3>

                <div v-if="!style_2" class="footer__widget-content">
                  <div class="footer__blog">
                    <div class="footer__blog-item d-flex align-items-center">
                      <div class="footer__blog-thumb">
                        <nuxt-link href="/blog-details">
                          <img
                            src="~/assets/img/blog/footer-sm/footer-sm-1.jpg"
                            alt=""
                          />
                        </nuxt-link>
                      </div>
                      <div class="footer__blog-content">
                        <h3 class="footer__blog-title">
                          <nuxt-link href="/blog-details">Designers Who Changed the Web</nuxt-link>
                        </h3>
                        <div class="footer__blog-meta">
                          <span>July 26, 2022</span>
                        </div>
                      </div>
                    </div>
                    <div class="footer__blog-item d-flex align-items-center">
                      <div class="footer__blog-thumb">
                        <nuxt-link href="/blog-details">
                          <img
                            src="~/assets/img/blog/footer-sm/footer-sm-2.jpg"
                            alt=""
                          />
                        </nuxt-link>
                      </div>
                      <div class="footer__blog-content">
                        <h3 class="footer__blog-title">
                          <nuxt-link href="/blog-details">
                            The History <br /> Of Photographer.
                          </nuxt-link>
                        </h3>
                        <div class="footer__blog-meta">
                          <span>April 14, 2022</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="style_2" class="footer__widget-content">
                  <div class="footer__contact">
                    <div class="footer__contact-call">
                      <span>
                        <a href="tel:624-423-26-72">
                          <i class="fa-solid fa-phone"></i> +624 423 26 72
                        </a>
                      </span>
                    </div>
                    <div class="footer__contact-mail">
                      <span>
                        <a href="mailto:support@harry.com">
                          support@harry.com
                        </a>
                      </span>
                    </div>
                  </div>
                  <div class="footer__social">
                    <social />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!style_2" class="footer__bottom-3">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-6">
              <div class="footer__copyright-3">
                <p>
                  Copyright © {{ new Date().getFullYear() }} by
                  <nuxt-link href="/">Harry.</nuxt-link> All Rights Reserved.
                </p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="footer__social-3 text-sm-end">
                <social />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="style_2" class="footer__bottom">
        <div class="container">
          <div class="footer__bottom-inner">
            <div class="row">
              <div class="col-sm-6">
                <div class="footer__copyright">
                  <p>
                    <nuxt-link href="/">© {{ new Date().getFullYear() }} Harry</nuxt-link> 
                    All Rights Reserved.
                  </p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="footer__link text-sm-end">
                  <nuxt-link href="/policy">Privacy Policy</nuxt-link>
                  <nuxt-link href="/terms">Terms of Use</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Social from "~~/components/social/Social.vue";

export default {
  components: { Social },
  props: {
    style_2: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return {
      formValue:''
    }
  },
  methods:{
    handleSubmit(){
      console.log(this.formValue);
    }
  }
};
</script>
