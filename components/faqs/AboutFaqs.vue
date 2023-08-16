<template>
  <section class="faq__area p-relative">
    <div class="faq__video" :style="{ backgroundImage: `url(${bg})` }">
      <div class="faq__video-btn">
        <a
          href="#"
          @click.prevent="handleVideoPopup"
          class="tp-pulse-border popup-video"
        >
          <svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 11L0 21.3923V0.607696L18 11Z" fill="currentColor" />
          </svg>
        </a>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-end">
        <div class="col-xxl-7 col-xl-7 col-lg-7">
          <div
            class="faq__wrapper-2 faq__gradient-border faq__style-2 tp-accordion pl-160"
          >
            <div class="faq__title-wrapper">
              <span class="faq__title-pre"
                >{{el_style ? 'Minimal Design':'Get in touch with us to see how'}}</span
              >
              <h3 class="faq__title">
                {{el_style ? 'Accordion with image':'Provide smart and flexible digital services'}}
              </h3>
            </div>
            <div class="accordion" id="about-faqaccordion">
              <single-faq
                v-for="(item, i) in faq_items"
                :key="i"
                :item="item"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- video modal start -->
  <video-modal
    ref="video_modal"
    video-url="https://www.youtube.com/embed/_RpLvsA1SNM"
  />
  <!-- video modal end -->
</template>

<script>
import SingleFaq from "./SingleFaq.vue";
import bg from "~/assets/img/faq/faq-img.jpg";
import VideoModal from "../common/modals/VideoModal.vue";

export default {
  components: { SingleFaq, VideoModal },
  props:{
    el_style:{
      type:Boolean,
      default:false,
    }
  },
  data() {
    return {
      bg,
      faq_items: [
        {
          id: "about-one",
          title: "Can I cancel my account at any time?",
          show: true,
          desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
          parent: "about-faqaccordion",
        },
        {
          id: "about-two",
          title: "What happens after the license expires?",
          desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
          parent: "about-faqaccordion",
        },
        {
          id: "about-three",
          title: "Does Harry have any documentations?",
          desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
          parent: "about-faqaccordion",
        },
      ],
    };
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    },
  },
};
</script>
