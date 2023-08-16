<template>
     <div class="pricing__top-7 p-relative text-center">
        <div v-if="best" class="pricing__popular-2">
          <span>Best Choice</span>
        </div>
      <div class="pricing__tag-7">
        <span>{{tag}}</span>
      </div>
      <div class="pricing__title-wrapper-7">
        <h3 class="pricing__title-7">${{price}}</h3>
        <p>
          Free forever,! <br /> No credit card required.
        </p>
      </div>
    </div>
</template>

<script>
  export default {
    props:{
      best:{
        type:Boolean,
        default:false,
      },
      tag:String,
      price:String,
    }
  }
</script>

