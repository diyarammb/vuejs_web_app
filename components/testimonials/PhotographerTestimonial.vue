<template>
  <section
    :class="`testimonial__area p-relative z-index-1 black-bg-5 ${
      el_style ? 'pt-120 pb-90' : 'pt-60 pb-90'
    }`"
  >
    <div class="testimoinal__shape">
      <img
        class="testimonial__shape-1"
        src="~/assets/img/testimonial/3/testimonial-shape-1.png"
        alt="testimonial__shape"
      />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-lg-6">
          <div class="tesimonial__wrapper-3">
            <div class="section__title-wrapper-3 mb-50">
              <span class="section__title-pre-3">06 . testimonial</span>
              <h3 class="section__title-3 has-gradient">
                Client <span>Testimonials</span>
              </h3>
            </div>
            <div class="testimonial__btn-3 mb-95">
              <nuxt-link href="/contact-2" class="tp-btn-border-4">Contact me</nuxt-link>
            </div>

            <div
              :class="`testimonial__item-3 ${testimonial_data[0].spacing} wow fadeInUp`"
              data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
            >
              <div
                class="testimonial__avater-3 mb-35 d-sm-flex align-items-center"
              >
                <div class="testimonial__avater-thumb-3">
                  <img :src="testimonial_data[0].user" alt="user" />
                </div>
                <div class="tesimonial__avater-info-3">
                  <h4 class="testimonial__avater-title-3">
                    {{ testimonial_data[0].name }}
                  </h4>
                  <span class="testimonial__avater-designation-3">
                    {{ testimonial_data[0].designation }}
                  </span>
                </div>
              </div>
              <div class="testimonial__content-3">
                <h4>{{ testimonial_data[0].title }}</h4>
                <p>{{ testimonial_data[0].desc }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-lg-6">
          <div class="testimonial__item-wrapper-3">
            <div
              v-for="item in testimonial_data.slice(1, 3)"
              :key="item.id"
              :class="`testimonial__item-3 ${item.spacing} wow fadeInUp`"
              data-sal="slide-up" :data-sal-delay="item.delay" data-sal-duration="1000"
            >
              <div
                class="testimonial__avater-3 mb-35 d-sm-flex align-items-center"
              >
                <div class="testimonial__avater-thumb-3">
                  <img :src="item.user" alt="user" />
                </div>
                <div class="tesimonial__avater-info-3">
                  <h4 class="testimonial__avater-title-3">
                    {{ item.name }}
                  </h4>
                  <span class="testimonial__avater-designation-3">
                    {{ item.designation }}
                  </span>
                </div>
              </div>
              <div class="testimonial__content-3">
                <h4>{{ item.title }}</h4>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import user_1 from "~/assets/img/users/user-10.jpg";
import user_2 from "~/assets/img/users/user-9.jpg";
import user_3 from "~/assets/img/users/user-8.jpg";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props:{
    el_style:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      testimonial_data: [
        {
          id: 1,
          spacing: "",
          delay: "130",
          user: user_1,
          name: "Douglas Lyphe",
          designation: "Director at Kickstarter.",
          title: "“Working with Photo X was amazing”",
          desc: "Lorem ipsum dolor sit amet consectetu adipiscing drakom consectetur fermentum a eget amet amet pellentesque dolor rhoncus quis aenean turpis iaculis",
        },
        {
          id: 2,
          spacing: "mb-30",
          delay: "150",
          user: user_2,
          name: "Karen Hills",
          designation: "Fashion Designer",
          title: "“The services is awesome”",
          desc: "Lorem ipsum dolor sit amet consectetu adipiscing drakom consectetur fermentum a eget amet amet pellentesque dolor rhoncus quis aenean turpis iaculis",
        },
        {
          id: 3,
          spacing: "",
          delay: "170",
          user: user_3,
          name: "Jake Weary",
          designation: "Fashion Designer",
          title: "“Im very happy to work with them”",
          desc: "Lorem ipsum dolor sit amet consectetu adipiscing drakom consectetur fermentum a eget amet amet pellentesque dolor rhoncus quis aenean turpis iaculis",
        },
      ],
    };
  },
};
</script>
