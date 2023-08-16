<template>
  <div class="accordion-item">
    <h2 class="accordion-header" :id="`heading${item.id}`">
      <button
        :class="`accordion-button ${item.show ? '' : 'collapsed'}`"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#collapse${item.id}`"
        :aria-expanded="`${item.show ? 'true' : 'false'}`"
        :aria-controls="`collapse${item.id}`"
      >
        {{ item.title }}
        <span class="accordion-btn"></span>
      </button>
    </h2>
    <div
      :id="`collapse${item.id}`"
      :class="`accordion-collapse collapse ${item.show ? 'show' : ''}`"
      :aria-labelledby="`heading${item.id}`"
      :data-bs-parent="`#${item.parent}`"
    >
      <div class="accordion-body">
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    item:{
      type:Object,
      required:true,
    }
  }
};
</script>
