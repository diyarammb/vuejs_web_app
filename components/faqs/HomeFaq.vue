<template>
  <section class="faq__area pb-120">
    <div class="container">
      <div class="faq__inner p-relative">
        <div class="faq__text d-none d-lg-block">
          <h3 data-text="faq">faq</h3>
        </div>
        <div class="row justify-content-end">
          <div class="col-xxl-9 col-xl-9 col-lg-9">
            <div class="faq__wrapper tp-accordion pt-65">
              <div class="accordion" id="faqaccordion">
                  <single-faq v-for="(item,i) in faq_items" :key="i" :item="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import commonFaq from '~~/mixins/commonFaq';
import SingleFaq from './SingleFaq.vue';

export default {
  props: {
    parent_id:String,
  },
  components:{
    SingleFaq,
  },
  mixins:[commonFaq]
};
</script>
