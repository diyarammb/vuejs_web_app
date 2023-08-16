<template>
   <footer>
      <div class="footer__area" data-bg-color="footer-bg-black-4">
         <div class="footer__top">
            <div class="container">
               <div class="row">
                  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <div class="footer__widget footer__widget-10 mb-50 footer-col-10-1">
                        <div class="footer__logo">
                           <nuxt-link href="/">
                              <img src="~/assets/img/logo/logo-red.svg" alt="">
                           </nuxt-link>
                        </div>

                        <div class="footer__widget-content">
                           <div class="footer__info">
                              <p>Lorem ipsum is simply dolor sit ametcn sectetur adipiscing elit. Phasellus vehic
                                 sagittis <br> euismod.</p>

                              <div class="footer__social-10">
                                 <social />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <div class="footer__widget footer__widget-10 mb-50 footer-col-10-2">
                        <h3 class="footer__widget-title">Contact Us</h3>

                        <div class="footer__widget-content">
                           <div class="footer__info footer__info-10">
                              <div class="footer__info-item-8 d-flex align-items-start">
                                 <div class="footer__info-icon-8 mr-20">
                                    <span>
                                       <svg width="22" height="20" viewBox="0 0 22 20" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                             d="M16 19H6C3 19 1 17.4118 1 13.7059V6.29412C1 2.58824 3 1 6 1H16C19 1 21 2.58824 21 6.29412V13.7059C21 17.4118 19 19 16 19Z"
                                             stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                                             stroke-linecap="round" stroke-linejoin="round" />
                                          <path opacity="0.4"
                                             d="M16 6.82422L12.87 9.47128C11.84 10.3395 10.15 10.3395 9.12 9.47128L6 6.82422"
                                             stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                                             stroke-linecap="round" stroke-linejoin="round" />
                                       </svg>
                                    </span>
                                 </div>
                                 <div class="footer__info-text-8">
                                    <h4>Email us:</h4>
                                    <a href="mailto:Contact@harry.com">Contact@harry.com</a>
                                 </div>
                              </div>
                              <div class="footer__info-item-8 d-flex align-items-start">
                                 <div class="footer__info-icon-8 mr-20">
                                    <span>
                                       <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                             d="M18.9721 15.6963C18.9721 16.0203 18.9001 16.3533 18.7471 16.6772C18.5941 17.0012 18.3962 17.3072 18.1352 17.5952C17.6942 18.0812 17.2082 18.4322 16.6592 18.6571C16.1193 18.8821 15.5343 18.9991 14.9043 18.9991C13.9864 18.9991 13.0054 18.7831 11.9705 18.3422C10.9355 17.9012 9.90057 17.3072 8.87462 16.5602C7.83967 15.8043 6.85871 14.9673 5.92276 14.0404C4.99581 13.1044 4.15885 12.1235 3.41188 11.0975C2.67392 10.0716 2.07995 9.04561 1.64797 8.02866C1.21599 7.00271 1 6.02176 1 5.0858C1 4.47383 1.10799 3.88886 1.32398 3.34889C1.53997 2.79991 1.88196 2.29594 2.35893 1.84596C2.93491 1.27899 3.56488 1 4.23084 1C4.48283 1 4.73482 1.054 4.95981 1.16199C5.1938 1.26999 5.40079 1.43198 5.56278 1.66597L7.65068 4.60882C7.81267 4.83381 7.92966 5.0408 8.01066 5.23879C8.09165 5.42778 8.13665 5.61677 8.13665 5.78777C8.13665 6.00376 8.07366 6.21975 7.94766 6.42674C7.83067 6.63372 7.65968 6.84971 7.44369 7.0657L6.75972 7.77667C6.66072 7.87566 6.61573 7.99266 6.61573 8.13665C6.61573 8.20865 6.62473 8.27165 6.64273 8.34364C6.66972 8.41564 6.69672 8.46964 6.71472 8.52363C6.87671 8.82062 7.1557 9.2076 7.55168 9.67558C7.95666 10.1436 8.38864 10.6205 8.85662 11.0975C9.34259 11.5745 9.81057 12.0155 10.2875 12.4204C10.7555 12.8164 11.1425 13.0864 11.4485 13.2484C11.4935 13.2664 11.5475 13.2934 11.6105 13.3204C11.6825 13.3474 11.7545 13.3564 11.8355 13.3564C11.9885 13.3564 12.1055 13.3024 12.2045 13.2034L12.8884 12.5284C13.1134 12.3034 13.3294 12.1325 13.5364 12.0245C13.7434 11.8985 13.9504 11.8355 14.1754 11.8355C14.3463 11.8355 14.5263 11.8715 14.7243 11.9525C14.9223 12.0335 15.1293 12.1505 15.3543 12.3034L18.3332 14.4183C18.5671 14.5803 18.7291 14.7693 18.8281 14.9943C18.9181 15.2193 18.9721 15.4443 18.9721 15.6963Z"
                                             stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" />
                                          <path opacity="0.4"
                                             d="M15.8491 7.30024C15.8491 6.76026 15.4261 5.9323 14.7961 5.25734C14.2201 4.63637 13.4552 4.15039 12.6992 4.15039"
                                             stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                             stroke-linejoin="round" />
                                          <path opacity="0.4" d="M19.0009 7.29969C19.0009 3.81686 16.184 1 12.7012 1"
                                             stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                             stroke-linejoin="round" />
                                       </svg>
                                    </span>
                                 </div>
                                 <div class="footer__info-text-8">
                                    <h4>Call us:</h4>
                                    <a href="tel:964-742-44-763">+964 742 44 763</a>
                                 </div>
                              </div>
                              <div class="footer__info-item-8 d-flex align-items-start">
                                 <div class="footer__info-icon-8 mr-20">
                                    <span>
                                       <svg width="21" height="23" viewBox="0 0 21 23" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path opacity="0.4"
                                             d="M10.3776 12.931C12.1761 12.931 13.6341 11.473 13.6341 9.67447C13.6341 7.87596 12.1761 6.41797 10.3776 6.41797C8.57908 6.41797 7.12109 7.87596 7.12109 9.67447C7.12109 11.473 8.57908 12.931 10.3776 12.931Z"
                                             stroke="currentColor" stroke-width="1.5" />
                                          <path
                                             d="M1.63033 7.77395C3.68652 -1.26494 17.0779 -1.2545 19.1236 7.78439C20.3239 13.0866 17.0257 17.5748 14.1345 20.3512C12.0365 22.376 8.7174 22.376 6.60903 20.3512C3.72827 17.5748 0.430016 13.0762 1.63033 7.77395Z"
                                             stroke="currentColor" stroke-width="1.5" />
                                       </svg>
                                    </span>
                                 </div>
                                 <div class="footer__info-text-8">
                                    <h4>Address:</h4>
                                    <a target="_blank"
                                       href="https://www.google.com/maps/place/Orville+St,+La+Presa,+CA+91977,+USA/@32.7092048,-117.0082772,17z/data=!3m1!4b1!4m5!3m4!1s0x80d9508a9aec8cd1:0x72d1ac1c9527b705!8m2!3d32.7092003!4d-117.0060885">4200,
                                       lorem street, <br> chicago, IL, 55</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <div class="footer__widget footer__widget-10 mb-50 footer-col-10-3">
                        <h3 class="footer__widget-title">Quick Link</h3>

                        <div class="footer__widget-content">
                           <ul>
                              <li><nuxt-link href="/about">History</nuxt-link></li>
                              <li><nuxt-link href="/team">Leadership</nuxt-link></li>
                              <li><nuxt-link href="/event-details">Events</nuxt-link></li>
                              <li><nuxt-link href="/home-politician">Donations</nuxt-link></li>
                              <li><nuxt-link href="/home-politician">Press & Media</nuxt-link></li>
                              <li><nuxt-link href="/terms">Teams</nuxt-link></li>
                              <li><nuxt-link href="/contact">Contact Us</nuxt-link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <div class="footer__widget footer__widget-10 mb-50 footer-col-10-4">
                        <h3 class="footer__widget-title">Photo Gallery</h3>

                        <div class="footer__widget-content">
                           <ul class="zoom-instagram-widget__items">
                              <li v-for="(image, i) in images" :key="i" class="zoom-instagram-widget__item">
                                 <a @click.prevent="handleImagePopup(i)" href="#" class="popup-image">
                                    <img :src="image" alt="image">
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="footer__bottom-10 footer__bottom-line">
            <div class="container">
               <div class="footer__bottom-inner-10">
                  <div class="row">
                     <div class="col-md-6">
                        <div class="footer__copyright-10">
                           <p>Copyright © {{ new Date().getFullYear() }} 
                              <nuxt-link href="/home-politician">Harry</nuxt-link>. All
                              Rights Reserved.</p>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="footer__link-10 text-md-end">
                           <nuxt-link href="/policy">Privacy</nuxt-link>
                           <nuxt-link href="/terms">Terms</nuxt-link>
                           <nuxt-link href="/about">About Us</nuxt-link>
                           <nuxt-link href="/help">Support</nuxt-link>
                           <nuxt-link href="/faq">FAQ</nuxt-link>
                           <nuxt-link href="/blog-grid">Blog</nuxt-link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>

   <!-- image popup start -->
   <image-popup ref="image_popup" :images="images" />
  <!-- image popup end -->
</template>

<script>
import Social from '~~/components/social/Social.vue';
import ImagePopup from '~~/components/common/modals/ImagePopup.vue';
import inst_img_1 from "~/assets/img/instagram/footer/insta-1.jpg";
import inst_img_2 from "~/assets/img/instagram/footer/insta-2.jpg";
import inst_img_3 from "~/assets/img/instagram/footer/insta-3.jpg";
import inst_img_4 from "~/assets/img/instagram/footer/insta-4.jpg";
import inst_img_5 from "~/assets/img/instagram/footer/insta-5.jpg";
import inst_img_6 from "~/assets/img/instagram/footer/insta-6.jpg";

export default {
   components: { Social, ImagePopup },
   data() {
      return {
         images: [
            inst_img_1,
            inst_img_2,
            inst_img_3,
            inst_img_4,
            inst_img_5,
            inst_img_6,
         ]
      }
   },
   methods:{
    handleImagePopup(index){
      this.$refs.image_popup.showImg(index);
    }
  },
}
</script>
