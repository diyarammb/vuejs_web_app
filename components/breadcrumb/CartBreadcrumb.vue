<template>
  <section class="breadcrumb__area grey-bg p-relative include-bg pt-100 pb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-8 col-xl-8 col-lg-10">
          <div class="breadcrumb__content text-center p-relative z-index-1">
            <h3 class="breadcrumb__title">{{title}}</h3>
            <div class="breadcrumb__list">
              <span><a href="#">Home</a></span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span>{{subtitle}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props:{
    title:String,
    subtitle:String,
  }
};
</script>
