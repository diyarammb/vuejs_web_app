<style>
.tx {
  text-align: center !important;
}
</style>
<template>
  <section
    class="breadcrumb__area breadcrumb__style-5 p-relative include-bg pt-170 pb-110 blue-bg"
  >
    <div
      class="breadcrumb__bg bg-luminosity include-bg"
      :style="{ backgroundImage: `url(${bg})` }"
    ></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-8 col-xl-8 col-lg-10">
          <div class="breadcrumb__content text-center p-relative z-index-1">
            <h2 class="text-white text-center">
              Empower Your Enterprise with Custom Software Development
              and API Integration Solutions
            </h2>
			<p class="text-white">Unlock the Full Potential of Your Business with ETechFlow’s Enterprise Software Development Services</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bg from "~/assets/img/servicehd.png";

export default {
  data() {
    return { bg };
  },
};
</script>
