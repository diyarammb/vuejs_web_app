<template>
  <footer>
    <div class="footer__area" data-bg-color="footer-bg-green">
      <div class="footer__top footer__top-4">
        <div class="container">
          <div class="row">
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget footer__widget-4 mb-50 footer-col-4-1">
                <div class="footer__logo">
                  <nuxt-link href="/">
                    <img src="~/assets/img/logo/logo.svg" alt="">
                  </nuxt-link>
                </div>

                <div class="footer__widget-content">
                  <div class="footer__info">
                    <p>How you use the city or town name is up to you. All results may be freely used in any work.</p>

                    <div class="footer__social-4">
                      <h5>Follow :</h5>
                      <social/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget footer__widget-4 mb-50 footer-col-4-2">
                <h3 class="footer__widget-title">Quick Link</h3>

                <div class="footer__widget-content">
                  <ul>
                    <li><nuxt-link href="/home-lawyer">Home</nuxt-link></li>
                    <li><nuxt-link href="/about">About</nuxt-link></li>
                    <li><nuxt-link href="/services">Service</nuxt-link></li>
                    <li><nuxt-link href="/portfolio-2">Portfolio</nuxt-link></li>
                    <li><nuxt-link href="/blog-grid">News</nuxt-link></li>
                    <li><nuxt-link href="/team">Our Team</nuxt-link></li>
                    <li><nuxt-link href="/contact">Contact</nuxt-link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget footer__widget-4 mb-50 footer-col-4-3">
                <h3 class="footer__widget-title">Service Areas</h3>

                <div class="footer__widget-content">
                  <ul>
                    <li><nuxt-link href="/services-3">Family law</nuxt-link></li>
                    <li><nuxt-link href="/services-3">Corporate law</nuxt-link></li>
                    <li><nuxt-link href="/services-3">Bank and Financial</nuxt-link></li>
                    <li><nuxt-link href="/services-3">Real Estate law</nuxt-link></li>
                    <li><nuxt-link href="/services-3">Criminal law</nuxt-link></li>
                    <li><nuxt-link href="/services-3">Juvenile Crimes</nuxt-link></li>
                    <li><nuxt-link href="/services-3">Industry Law</nuxt-link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget footer__widget-4 mb-50 footer-col-4-4">
                <h3 class="footer__widget-title">Trending Post</h3>

                <div class="footer__widget-content">
                  <div class="footer__blog">
                    <div class="footer__blog-item-2">
                      <div class="footer__blog-content-2">
                        <div class="footer__blog-tag">
                          <a href="#">Car Accident</a>
                        </div>
                        <h3 class="footer__blog-title-4">
                          <nuxt-link href="/blog-details">
                            Privacy is a fundamental right that is increasingly under
                            attack.
                          </nuxt-link>
                        </h3>
                        <div class="footer__blog-meta-4">
                          <span>July 14, 2022</span>
                        </div>
                      </div>
                    </div>
                    <div class="footer__blog-item-2">
                      <div class="footer__blog-content-2">
                        <div class="footer__blog-tag">
                          <a href="#">Family law</a>
                        </div>
                        <h3 class="footer__blog-title-4">
                          <nuxt-link href="/blog-details">
                            Advantage you extra have world's clinically extra grab rare
                            warm.
                          </nuxt-link>
                        </h3>
                        <div class="footer__blog-meta-4">
                          <span>July 14, 2022</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom-4">
        <div class="container">
          <div class="footer__bottom-inner-4">
            <div class="row">
              <div class="col-sm-6">
                <div class="footer__copyright-4">
                  <p><nuxt-link href="/">© {{new Date().getFullYear()}} Harry</nuxt-link> 
                    All Rights Reserved.
                  </p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="footer__link-4 text-sm-end">
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
import Social from '~~/components/social/Social.vue'
export default {
  components: { Social },
  }
</script>

