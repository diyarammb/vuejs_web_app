<template>
  <section :class="`testimonial__area ${el_style?'pt-120':''} pb-120`">
    <div class="container">
      <div
        class="testimonial__inner-10 p-relative include-bg"
        data-sal="slide-up" data-sal-delay="140" data-sal-duration="1000"
        :style="{ backgroundImage: `url(${bg})` }"
      >
        <div class="testimonial__shape">
          <img
            class="testimonial__shape-9"
            src="~/assets/img/testimonial/10/testimonial-shape-2.png"
            alt="testimonial__shape"
          />
          <img
            class="testimonial__shape-10"
            src="~/assets/img/testimonial/10/testimonial-shape-3.png"
            alt="testimonial__shape"
          />
        </div>
        <div class="row">
          <div class="col-xxl-12">
            <div class="testimonial__slider-10">
              <swiper
                class="testimonial__slider-active-10 swiper-container"
                :centeredSlides="true"
                :slidesPerView="1"
                :spaceBetween="0"
                :modules="modules"
                :loop="true"
                :pagination="{
                  el: '.testimonial-slider-dot-10',
                  clickable: true,
                }"
              >
                <swiper-slide
                  v-for="(item, i) in testimonial_data"
                  :key="i"
                  class="testimonial__item-10"
                >
                  <div class="testimonial__content-10 text-center">
                    <div class="testimonial__icon-10">
                      <span>
                        <i class="fa-brands fa-twitter"></i>
                      </span>
                    </div>
                    <p>{{item.desc}} <a :href="item.link">{{item.link_text}}</a></p>

                    <div class="testimonial__avater-10">
                      <div class="testimonial__avater-thumb-10"></div>
                      <div
                        class="testimonial__avater-info-10 d-sm-flex align-items-center justify-content-center"
                      >
                        <h3 class="testimonial__avater-title-10">{{item.name}}</h3>
                        <span class="testimonial__avater-designation-10">
                          {{item.title}}
                        </span>

                        <div class="testimonial__avater-date">
                          <span>{{item.date}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
              <div
                class="testimonial-slider-dot-10 tp-swiper-dot tp-swiper-dot-2 text-center mt-50"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
// internal
import bg from '~/assets/img/testimonial/10/testimonial-shape-1.png';
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props:{
    el_style:{
      type:Boolean,
      default:false
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
      bg,
      testimonial_data: [
        {
          desc: "The digital world is in your hands with deon, a theme we designed for all modern #technology and #software company…",
          link_text: "https://t.co/7v3HQbZqwZ",
          link: "#",
          name: "Jason Smith,",
          title: "President",
          date: "July 17, 2022",
        },
        {
          desc: "The digital world is in your hands with deon, a theme we designed for all modern #technology and #software company…",
          link_text: "https://t.co/7v3HQbZqwZ",
          link: "#",
          name: "Jason Smith,",
          title: "President",
          date: "July 18, 2022",
        },
        {
          desc: "The digital world is in your hands with deon, a theme we designed for all modern #technology and #software company…",
          link_text: "https://t.co/7v3HQbZqwZ",
          link: "#",
          name: "Jason Smith,",
          title: "President",
          date: "July 19, 2022",
        },
        {
          desc: "The digital world is in your hands with deon, a theme we designed for all modern #technology and #software company…",
          link_text: "https://t.co/7v3HQbZqwZ",
          link: "#",
          name: "Jason Smith,",
          title: "President",
          date: "July 20, 2022",
        },
      ],
    };
  },
};
</script>
