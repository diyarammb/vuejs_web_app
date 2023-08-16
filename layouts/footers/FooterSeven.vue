<template>
  <footer>
    <div
      class="footer__area p-relative z-index-1"
      data-bg-color="footer-bg-black-2"
    >
      <div
        class="footer__bg"
        :style="{ backgroundImage: `url(${shape_bg})` }">
      </div>
      <div class="footer__top-6">
        <div class="container">
          <div class="row">
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget-6 mb-50 footer-col-6-1">
                <div class="footer__logo">
                  <nuxt-link href="/">
                    <img src="~/assets/img/logo/logo.svg" alt="" />
                  </nuxt-link>
                </div>

                <div class="footer__widget-content">
                  <div class="footer__info">
                    <p>
                      Qui magni autem id omnis assumenda ut maxime Quis sed
                      voluptatum modi, omnis tenetur est.
                    </p>

                    <nuxt-link href="/job" class="tp-link-btn-2 tp-link-btn-white">
                      We are Hiring
                      <span>
                        <i class="fa-regular fa-arrow-right"></i>
                      </span>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget-6 mb-50 footer-col-6-2">
                <h3 class="footer__widget-title-6">Quick Link</h3>

                <div class="footer__widget-content">
                  <ul>
                    <li><nuxt-link href="/about">About Us</nuxt-link></li>
                    <li><nuxt-link href="/terms">Terms of Use</nuxt-link></li>
                    <li><nuxt-link href="/services">Our Services</nuxt-link></li>
                    <li><nuxt-link href="/help">Changelog</nuxt-link></li>
                    <li><nuxt-link href="/policy">Privacy policy</nuxt-link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget-6 mb-50 footer-col-6-3">
                <h3 class="footer__widget-title-6">Support Desk</h3>

                <div class="footer__widget-content">
                  <ul>
                    <li><nuxt-link href="/home-creative">Digital Solution</nuxt-link></li>
                    <li><nuxt-link href="/home-creative">Marketing</nuxt-link></li>
                    <li><nuxt-link href="/home-creative">Finance Support</nuxt-link></li>
                    <li><nuxt-link href="/home-creative">Insurance</nuxt-link></li>
                    <li><nuxt-link href="/home-creative">Technology</nuxt-link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget-6 mb-50 footer-col-6-4">
                <h3 class="footer__widget-title-6">Contact Us</h3>

                <div class="footer__widget-content">
                  <div class="footer__info">
                    <div class="footer__info-item-6 d-flex align-items-start">
                      <div class="footer__info-icon-6 mr-20">
                        <span>
                          <svg
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.1121 10.1466C9.53315 10.1466 10.6851 9.02879 10.6851 7.64994C10.6851 6.2711 9.53315 5.15332 8.1121 5.15332C6.69105 5.15332 5.53906 6.2711 5.53906 7.64994C5.53906 9.02879 6.69105 10.1466 8.1121 10.1466Z"
                              stroke="white"
                              stroke-width="1.5"
                            />
                            <path
                              d="M1.2002 6.1933C2.82484 -0.736432 13.4057 -0.72843 15.022 6.2013C15.9704 10.2663 13.3644 13.7072 11.08 15.8357C9.42239 17.3881 6.79986 17.3881 5.13398 15.8357C2.85783 13.7072 0.251802 10.2583 1.2002 6.1933Z"
                              stroke="white"
                              stroke-width="1.5"
                            />
                          </svg>
                        </span>
                      </div>
                      <div class="footer__info-text-6">
                        <a
                          target="_blank"
                          href="https://www.google.com/maps/place/Orville+St,+La+Presa,+CA+91977,+USA/@32.7092048,-117.0082772,17z/data=!3m1!4b1!4m5!3m4!1s0x80d9508a9aec8cd1:0x72d1ac1c9527b705!8m2!3d32.7092003!4d-117.0060885"
                          >711-2880 Nulla St.
                        </a>
                      </div>
                    </div>
                    <div class="footer__info-item-6 d-flex align-items-start">
                      <div class="footer__info-icon-6 mr-20">
                        <span>
                          <svg
                            width="16"
                            height="14"
                            viewBox="0 0 16 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.5 12.9H4.5C2.4 12.9 1 11.85 1 9.4V4.5C1 2.05 2.4 1 4.5 1H11.5C13.6 1 15 2.05 15 4.5V9.4C15 11.85 13.6 12.9 11.5 12.9Z"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11.5 4.85059L9.309 6.60059C8.588 7.17459 7.405 7.17459 6.684 6.60059L4.5 4.85059"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div class="footer__info-text-6">
                        <a href="mailto:example@gmail.com">example@gmail.com</a>
                      </div>
                    </div>
                    <div class="footer__info-item-6 d-flex align-items-start">
                      <div class="footer__info-icon-6 mr-20">
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.979 12.431C14.979 12.683 14.923 12.942 14.804 13.194C14.685 13.446 14.531 13.684 14.328 13.908C13.985 14.286 13.607 14.559 13.18 14.734C12.76 14.909 12.305 15 11.815 15C11.101 15 10.338 14.832 9.533 14.489C8.728 14.146 7.923 13.684 7.125 13.103C6.32 12.515 5.557 11.864 4.829 11.143C4.108 10.415 3.457 9.652 2.876 8.854C2.302 8.056 1.84 7.258 1.504 6.467C1.168 5.669 1 4.906 1 4.178C1 3.702 1.084 3.247 1.252 2.827C1.42 2.4 1.686 2.008 2.057 1.658C2.505 1.217 2.995 1 3.513 1C3.709 1 3.905 1.042 4.08 1.126C4.262 1.21 4.423 1.336 4.549 1.518L6.173 3.807C6.299 3.982 6.39 4.143 6.453 4.297C6.516 4.444 6.551 4.591 6.551 4.724C6.551 4.892 6.502 5.06 6.404 5.221C6.313 5.382 6.18 5.55 6.012 5.718L5.48 6.271C5.403 6.348 5.368 6.439 5.368 6.551C5.368 6.607 5.375 6.656 5.389 6.712C5.41 6.768 5.431 6.81 5.445 6.852C5.571 7.083 5.788 7.384 6.096 7.748C6.411 8.112 6.747 8.483 7.111 8.854C7.489 9.225 7.853 9.568 8.224 9.883C8.588 10.191 8.889 10.401 9.127 10.527C9.162 10.541 9.204 10.562 9.253 10.583C9.309 10.604 9.365 10.611 9.428 10.611C9.547 10.611 9.638 10.569 9.715 10.492L10.247 9.967C10.422 9.792 10.59 9.659 10.751 9.575C10.912 9.477 11.073 9.428 11.248 9.428C11.381 9.428 11.521 9.456 11.675 9.519C11.829 9.582 11.99 9.673 12.165 9.792L14.482 11.437C14.664 11.563 14.79 11.71 14.867 11.885C14.937 12.06 14.979 12.235 14.979 12.431Z"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M12.5497 5.89986C12.5497 5.47986 12.2207 4.83586 11.7307 4.31086C11.2827 3.82786 10.6877 3.44986 10.0997 3.44986"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M14.9997 5.9C14.9997 3.191 12.8087 1 10.0997 1"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div class="footer__info-text-6">
                        <a href="tel:012-345-6789">+964 742 44 763</a>
                      </div>
                    </div>
                  </div>
                  <div class="footer__social-6">
                    <social />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="container">
          <div class="footer__bottom-inner-6">
            <div class="row">
              <div class="col-sm-6">
                <div class="footer__copyright-6">
                  <p>
                    <nuxt-link href="/">© {{ new Date().getFullYear() }} Harry</nuxt-link> 
                    All Rights Reserved.
                  </p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="footer__link-6 text-sm-end">
                  <nuxt-link href="/policy">Privacy Policy</nuxt-link>
                  <nuxt-link href="/terms">Terms of Use</nuxt-link>
                  <nuxt-link href="/policy">Cookie Policy</nuxt-link>
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
import shape_bg from "~/assets/img/footer/footer-shape-2.jpg";

export default {
  components: { Social },
  data() {
    return {
      shape_bg,
    };
  },
};
</script>
