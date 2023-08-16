<template>
  <footer>
    <div class="footer__area footer__style-4" data-bg-color="footer-bg-white">
      <div class="footer__top">
          <div class="container">
            <div class="row">
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-6">
                  <div class="footer__widget footer__widget-11 mb-50 footer-col-11-1">
                      <div class="footer__logo">
                        <nuxt-link href="/">
                            <img src="~/assets/img/logo/logo-black.svg" alt="">
                        </nuxt-link>
                      </div>

                      <div class="footer__widget-content">
                        <div class="footer__info">
                            <p>The home and elements needed to create beautiful products.</p>
                            <div class="footer__social footer__social-11">
                              <social/>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6">
                  <div class="footer__widget mb-50 footer-col-11-2">
                      <h3 class="footer__widget-title">Company</h3>

                      <div class="footer__widget-content">
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Store Locations</a></li>
                            <li><a href="#">Our Blog</a></li>
                            <li><a href="#">Reviews</a></li>
                        </ul>
                      </div>
                  </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div class="footer__widget mb-50 footer-col-11-3">
                      <h3 class="footer__widget-title">Shop</h3>

                      <div class="footer__widget-content">
                        <ul>
                            <li><a href="#">Game & Video</a></li>
                            <li><a href="#">Phone &Tablets</a></li>
                            <li><a href="#">Computers & Laptop</a></li>
                            <li><a href="#">Sport Watches</a></li>
                            <li><a href="#">Discounts</a></li>
                        </ul>
                      </div>
                  </div>
                </div>
                <div class="col-xxl-1 col-xl-1 col-lg-3 col-md-3 col-sm-6">
                  <div class="footer__widget mb-50 footer-col-11-4">
                      <h3 class="footer__widget-title">Support</h3>

                      <div class="footer__widget-content">
                        <ul>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Reviews</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Returns</a></li>
                        </ul>
                      </div>
                  </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-6">
                  <div class="footer__widget mb-50 footer-col-11-5">
                      <h3 class="footer__widget-title">Talk To Us</h3>

                      <div class="footer__widget-content">
                        <p class="footer__text">Find a location nearest you. See <a href="#">Our Stores</a></p>
                        <div class="footer__contact">
                            <div class="footer__contact-call">
                              <span><a href="tel:624-423-26-72">+624 423 26 72</a></span>
                            </div>
                            <div class="footer__contact-mail">
                              <span><a href="mailto:support@harry.com">support@harry.com</a></span>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
      <div class="footer__bottom">
          <div class="container">
            <div class="footer__bottom-inner">
                <div class="row">
                  <div class="col-sm-6">
                      <div class="footer__copyright">
                        <p>© {{new Date().getFullYear()}} <nuxt-link href="/">Harry</nuxt-link> 
                          All Rights Reserved.
                        </p>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="footer__payment text-sm-end">
                        <img src="~/assets/img/footer/footer-payment.png" alt="">
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
import Social from '~~/components/social/Social.vue';

  export default {
  components: { Social },
    
  }
</script>
