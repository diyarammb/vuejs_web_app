<template>
  <section class="skill__area pt-110 pb-85">
    <div class="container">
        <div class="row">
          <div class="col-xxl-12">
              <div class="tp-section-wrapper-3 mb-60 text-center">
                <span class="tp-section-subtitle-3">Minimal & Clean Design</span>
                <h3 class="tp-section-title-3">Skill Classic Style</h3>
              </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6 col-lg-6">
              <div class="skill__bar skill__style-3">
                <div class="skill__bar-item ">
                    <div class="skill__bar-top d-sm-flex align-items-center justify-content-between">
                      <h4  class="skill__bar-title"> 
                          <span>
                            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 4.75V12.25C13 15.25 12.25 16 9.25 16H4.75C1.75 16 1 15.25 1 12.25V4.75C1 1.75 1.75 1 4.75 1H9.25C12.25 1 13 1.75 13 4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.5 4.48218H5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.99844 12.9678C7.64047 12.9678 8.16094 12.4474 8.16094 11.8053C8.16094 11.1633 7.64047 10.6428 6.99844 10.6428C6.35641 10.6428 5.83594 11.1633 5.83594 11.8053C5.83594 12.4474 6.35641 12.9678 6.99844 12.9678Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                                                             
                          </span> Mobile App Design
                      </h4>
                      <span class="skill__bar-count">65%</span>
                    </div>
                    <skill-progress-item percentage="65" />
                </div>
                <div class="skill__bar-item is-pink">
                    <div class="skill__bar-top d-sm-flex align-items-center justify-content-between">
                      <h4  class="skill__bar-title"> 
                          <span>
                            <i class="fa-light fa-globe"></i>                                                                            
                          </span> Website Design 
                      </h4>
                      <span class="skill__bar-count">70%</span>
                    </div>
                    <skill-progress-item percentage="70" />
                </div>
              </div>
          </div>
          <div class="col-xl-6 col-lg-6">
              <div class="skill__bar skill__style-3">
                <div class="skill__bar-item is-blue">
                    <div class="skill__bar-top d-sm-flex align-items-center justify-content-between">
                      <h4  class="skill__bar-title"> 
                          <span>
                            <i class="fa-regular fa-video"></i>                                                                             
                          </span> Video Editing
                      </h4>
                      <span class="skill__bar-count">55%</span>
                    </div>
                    <skill-progress-item percentage="55" />
                </div>
                <div class="skill__bar-item is-brown">
                    <div class="skill__bar-top d-sm-flex align-items-center justify-content-between">
                      <h4  class="skill__bar-title"> 
                          <span>
                            <i class="fa-light fa-sparkles"></i>                                                                            
                          </span> SEO Expart 
                      </h4>
                      <span class="skill__bar-count">90%</span>
                    </div>
                    <skill-progress-item percentage="90" />
                </div>
              </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import SkillProgressItem from './SkillProgressItem.vue';

  export default {
  components: { SkillProgressItem },
    
  }
</script>