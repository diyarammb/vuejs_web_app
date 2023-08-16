<template>
  <div class="contact__location-item">
    <div class="row align-items-center">
      <div class="col-lg-9 col-md-8 col-sm-7">
        <div class="contact__location-content d-lg-flex align-items-center">
          <h3 class="contact__location-title">{{title}}</h3>

          <div
            class="contact__location-info d-sm-flex flex-wrap align-items-center"
          >
            <div class="contact__location-icon mr-45">
              <img :src="icon" alt="icon" />
            </div>
            <div class="contact__location-content">
              <p>
                <a href="mailto:contact.location@website.com">{{location}}</a>
              </p>
              <p><a href="tel:686-324-6838">{{tel}}</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-5">
        <div class="contact__location-btn text-sm-end">
          <a
            href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723"
            target="_blank"
            class="tp-btn-border"
            >
            view location
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title:String,
    icon:String,
    location:String,
    tel:String,
  }
};
</script>
