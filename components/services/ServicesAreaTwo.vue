<template>
  <section class="services__area pt-95 pb-90">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-4">
          <div class="services__widget">
            <div class="services__widget-item">
              <h3 class="services__widget-title">Our Services</h3>
              <div class="services__widget-content">
                <div class="services__widget-tab tp-tab">
                  <ul class="nav nav-tabs flex-column" id="servicesTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="responsive-tab" data-bs-toggle="tab"
                        data-bs-target="#responsive" type="button" role="tab" aria-controls="responsive"
                        aria-selected="true">Responsive Design
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="speed-tab" data-bs-toggle="tab" data-bs-target="#speed" type="button"
                        role="tab" aria-controls="speed" aria-selected="false">Speed Optimized
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="framework-tab" data-bs-toggle="tab" data-bs-target="#framework"
                        type="button" role="tab" aria-controls="framework" aria-selected="false">Innovative Framework
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="pixel-tab" data-bs-toggle="tab" data-bs-target="#pixel" type="button"
                        role="tab" aria-controls="pixel" aria-selected="false">Pixel Perfect
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </button>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-lg-8">
          <div class="services__tab-right">
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="responsive" role="tabpanel" aria-labelledby="responsive-tab">
                <div class="services__item-wrapper-14 pl-100">
                  <single-service-two-item :bg="bg_1" title="Responsive Design" />
                  <single-service-two-item :bg="bg_2" title="Speed Optimized" />
                  <single-service-two-item :bg="bg_3" title="Innovative Framework" />
                  <single-service-two-item :bg="bg_4" title="Pixel Perfect" />
                </div>
              </div>
              <div class="tab-pane fade" id="speed" role="tabpanel" aria-labelledby="speed-tab">
                <div class="services__item-wrapper-14 pl-100">
                  <single-service-two-item :bg="bg_1" title="Responsive Design" />
                  <single-service-two-item :bg="bg_2" title="Speed Optimized" />
                  <single-service-two-item :bg="bg_3" title="Innovative Framework" />
                  <single-service-two-item :bg="bg_4" title="Pixel Perfect" />
                </div>
              </div>
              <div class="tab-pane fade" id="framework" role="tabpanel" aria-labelledby="framework-tab">
                <div class="services__item-wrapper-14 pl-100">
                  <single-service-two-item :bg="bg_1" title="Responsive Design" />
                  <single-service-two-item :bg="bg_2" title="Speed Optimized" />
                  <single-service-two-item :bg="bg_3" title="Innovative Framework" />
                  <single-service-two-item :bg="bg_4" title="Pixel Perfect" />
                </div>
              </div>
              <div class="tab-pane fade" id="pixel" role="tabpanel" aria-labelledby="pixel-tab">
                <div class="services__item-wrapper-14 pl-100">
                  <single-service-two-item :bg="bg_1" title="Responsive Design" />
                  <single-service-two-item :bg="bg_2" title="Speed Optimized" />
                  <single-service-two-item :bg="bg_3" title="Innovative Framework" />
                  <single-service-two-item :bg="bg_4" title="Pixel Perfect" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
// internal
import bg_1 from "~/assets/img/services/overlay/services-overlay-1.jpg";
import bg_2 from "~/assets/img/services/overlay/services-overlay-2.jpg";
import bg_3 from "~/assets/img/services/overlay/services-overlay-3.jpg";
import bg_4 from "~/assets/img/services/overlay/services-overlay-4.jpg";
import SingleServiceTwoItem from './single-service/SingleServiceTwoItem.vue';

export default {
  components: { SingleServiceTwoItem },
  data () {
    return {bg_1,bg_2,bg_3,bg_4}
  }
}
</script>
