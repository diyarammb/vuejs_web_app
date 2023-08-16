<template>
  <contact-top-area
    title="CONTACT US"
    subtitle="Get in touch with us for more information"
  />
  <!-- contact form two area start -->
  <section class="contact__form-area">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="contact__form-2 contact__style-2 contact__translate">
            <h3 class="contact__form-2-title">Send a message</h3>
            <!-- form start -->
            <contact-form :style_2="true" />
            <!-- form end -->
            <p class="ajax-response"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- contact form two area end -->

  <!-- contact location box start -->
  <section class="contact__loacation-box-area pt-120 pb-90">
    <div class="container">
      <div class="row">
        <div v-for="(item, i) in box_items" :key="i" class="col-lg-4 col-md-6">
          <div class="contact__location-box text-center white-bg mb-30">
            <div class="contact__location-box-icon">
              <img :src="item.icon" alt="icon" />
            </div>
            <div class="contact__location-box-content">
              <h3 class="contact__location-box-title">{{ item.title }}</h3>

              <div class="contact__location-box-info">
                <p>
                  <a href="mailto:location@website.com">{{ item.location }}</a>
                </p>
                <p>
                  <a href="tel:686-324-6838">{{ item.tel }}</a>
                </p>
              </div>
              <div class="contact__location-box-btn">
                <a
                  href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723"
                  target="_blank"
                  class="tp-btn-border"
                  >
                  View Location
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- contact location box end -->
</template>

<script>
// internal
import ContactForm from "../forms/ContactForm.vue";
import ContactTopArea from "./ContactTopArea.vue";
import location_icon_1 from "~/assets/img/contact/contact-location-1.png";
import location_icon_2 from "~/assets/img/contact/contact-location-2.png";
import location_icon_3 from "~/assets/img/contact/contact-location-3.png";

export default {
  components: { ContactTopArea, ContactForm },
  data() {
    return {
      box_items: [
        {
          title: "Australia Office",
          icon: location_icon_1,
          location: "contact.location@website.com",
          tel: "686-324-6838",
        },
        {
          title: "San Francisco Office",
          icon: location_icon_2,
          location: "contact.location@website.com",
          tel: "888-324-6838",
        },
        {
          title: "Egpyt Office",
          icon: location_icon_3,
          location: "contact.location@website.com",
          tel: "996-324-6838",
        },
      ],
    };
  },
};
</script>
