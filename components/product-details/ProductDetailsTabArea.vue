<template>
  <section class="product__details-tab-area pb-110">
    <div class="container">
        <div class="row">
          <div class="col-xl-12">
              <div class="product__details-tab-nav">
                <nav>
                    <div class="product__details-tab-nav-inner nav tp-tab-menu d-flex flex-sm-nowrap flex-wrap" id="nav-tab-info" role="tablist">
                      
                      <button @click="handleActiveMarker" ref="active" class="nav-link active" id="nav-desc-tab" data-bs-toggle="tab" data-bs-target="#nav-desc" type="button" role="tab" aria-controls="nav-desc" aria-selected="true">Description</button>

                      <button @click="handleActiveMarker" class="nav-link" id="nav-additional-tab" data-bs-toggle="tab" data-bs-target="#nav-additional" type="button" role="tab" aria-controls="nav-additional" aria-selected="false">Additional information</button>
                      
                      <button @click="handleActiveMarker" class="nav-link" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false">Reviews (02)</button>

                      <span id="marker" class="tp-tab-line d-none d-sm-inline-block"></span>
                    </div>
                </nav> 
              </div>
              <div class="product__details-tab-content">
                <div class="tab-content" id="nav-tabContent-info">
                    <div class="tab-pane fade show active" id="nav-desc" role="tabpanel" aria-labelledby="nav-desc-tab">
                      <!-- details-desc start -->
                      <details-desc/>
                      <!-- details-desc end -->
                    </div>
                    <div class="tab-pane fade" id="nav-additional" role="tabpanel" aria-labelledby="nav-additional-tab">
                      <!-- details-additional start -->
                      <details-additional/>
                      <!-- details-additional end -->
                    </div>
                    <div class="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
                      <!-- details review start -->
                      <details-review/>
                      <!-- details review end -->
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import DetailsAdditional from './DetailsAdditional.vue';
import DetailsDesc from './DetailsDesc.vue';
import DetailsReview from './DetailsReview.vue';

  export default {
  components: { DetailsDesc, DetailsAdditional, DetailsReview },
    methods: {
    handleActiveMarker(e) {
      const marker = document.getElementById("marker");
      if (e.target.classList.contains("active")) {
        marker.style.left = e.target.offsetLeft + "px";
        marker.style.width = e.target.offsetWidth + "px";
      }
    },
  },
  mounted() {
    const marker = document.getElementById("marker");
    if (this.$refs.active.classList.contains("active")) {
      marker.style.left = this.$refs.active.offsetLeft + "px";
      marker.style.width = this.$refs.active.offsetWidth + "px";
    }
  },
  }
</script>
