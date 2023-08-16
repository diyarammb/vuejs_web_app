<template>
  <div class="services__details-faq faq__style-3 mt-60">
    <h3 class="services__details-faq-title">Any questions find here.</h3>
    <div class="faq__tab-content tp-accordion">
      <div class="accordion" id="general_accordion">
        <single-faq v-for="(item, i) in faq_items" :key="i" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleFaq from "./SingleFaq.vue";

export default {
  components: { SingleFaq },
  data() {
    return {
      faq_items: [
        {
          id: "One",
          title: "Can I cancel my account at any time?",
          show: true,
          desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
          parent: "general_accordion",
        },
        {
          id: "Two",
          title: "What happens after the license expires?",
          desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
          parent: "general_accordion",
        },
        {
          id: "Three",
          title: "Does Harry have any documentations?",
          desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
          parent: "general_accordion",
        },
        {
          id: "four",
          title: "How long do I get support & updates?",
          desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
          parent: "general_accordion",
        },
      ],
    };
  },
};
</script>
