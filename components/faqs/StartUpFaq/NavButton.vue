<template>
  <button
      :class="`nav-link ${active ? 'active' : ''}`"
      :id="`nav-${id}-tab`"
      data-bs-toggle="tab"
      :data-bs-target="`#nav-${id}`"
      type="button"
      role="tab"
      :aria-controls="`nav-${id}`"
      :aria-selected="`${active ? 'true' : 'false'}`"
      tabIndex="-1"
    >
      <span v-html="icon"></span>
      {{title}}
    </button>
</template>

<script>
  export default {
    props:{
      active:{
        type:Boolean,
        default:false,
      },
      id:String,
      icon:String,
      title:String,
    }
  }
</script>
