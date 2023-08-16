<style>
.cd1 {
  background-color: rgb(241, 237, 237) !important;
}
hr {
        position: relative; 
        border: none;
        height: 5px;
        background: #ff7100;
        margin-bottom: 50px;
    }
    p{
      color: #000 !important;
    }
</style>

<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <services-breadcrumb-two />

    <div class="container-fluid gx-0">
      <div class="row gx-0">
        <div class="row">
          <p class="text-center p-5">
            In today's rapidly evolving business landscape, having the right
            software solutions tailored to your enterprise's unique needs is
            crucial for staying ahead of the competition. At Etechflow, we
            specialize in providing comprehensive enterprise software
            development services, including API development and cloud-based
            solutions, that empower businesses to streamline operations, enhance
            productivity, and drive sustainable growth. Here's how our expertise
            in enterprise software development can benefit your organization
          </p>
        </div>
      </div>
    </div>
    <!-- starting -->
    <!-- 1 -->
    <div class="col-xxl-12">
      <div class="card-group">
        <div class="card cd1">
          <div class="card-body">
            <h3 class="text-start text-dark mt-4">
              Custom Software Solutions
              <hr width="150px" style="color: rgb(230, 74, 12); font-size: 10px" />
            </h3>
            <p class="text-start text-dark mt-4">
              We understand that off-the-shelf software may not fully meet the
              specific requirements of your enterprise. Our experienced team of
              developers works closely with you to understand your business
              processes, challenges, and goals. We then design and develop
              custom software solutions that align perfectly with your unique
              needs, providing you with a competitive edge in the market.
            </p>
          </div>
        </div>
        <div class="card bg-white">
          <div class="card-body">
            <!-- <h5 class="card-title text-white">Design</h5> -->
          </div>
          <img
            class="card-img-top"
            src="~/assets/img/ser1.png"
            alt="Services"
            height="350px"
          />
        </div>
      </div>
    </div>
    <!-- 2 -->
    <div class="col-xxl-12">
      <div class="card-group">
        <div class="card bg-white">
          <div class="card-body">
            <!-- <h5 class="card-title text-white">Design</h5> -->
          </div>
          <img
            class="card-img-top"
            src="~/assets/img/ser2.png"
            alt="Services"
            height="350px"
          />
        </div>
        <div class="card cd1">
          <div class="card-body">
            <h3 class="text-start text-dark mt-4">
              API Development and Integration
              <hr width="150px"  />
            </h3>
            <p class="text-start  mt-4">
              We excel in developing robust and scalable APIs (Application
              Programming Interfaces) that enable seamless integration between
              different software systems and applications within your
              enterprise. Whether it's integrating third-party services,
              connecting internal systems, or building APIs for external
              partners, we ensure smooth communication and data exchange,
              unlocking new possibilities for collaboration and efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 3 -->
    <div class="col-xxl-12">
      <div class="card-group">
        <div class="card cd1">
          <div class="card-body">
            <h3 class="text-start text-dark mt-4">
              Scalable and Future-Ready Architecture
              <hr width="150px"  />
            </h3>
            <p class="text-start  mt-4">
              Our software development approach focuses on building scalable and
              future-ready solutions that can grow and adapt alongside your
              enterprise. We leverage cutting-edge technologies and industry
              best practices to develop robust software architectures that can
              handle increasing data volumes, user demands, and evolving
              business requirements.
            </p>
          </div>
        </div>
        <div class="card bg-white">
          <div class="card-body"></div>
          <img
            class="card-img-top"
            src="~/assets/img/ser3.png"
            alt="Services"
            height="350px"
          />
        </div>
      </div>
    </div>

    <!-- ending  -->

    <!-- start second section -->
    <div class="row mt-4" style="background-color: #673c8b">
      <div class="col-md-2">
        <h3 class="text-white m-4 text-end">GOT A PLAN</h3>
      </div>
      <div class="col-md-7">
        <p class="text-white m-4 text-start">
          Let us see what it is about and how we can make it ideal.
        </p>
      </div>
      <div class="col-md-3">
        <button class="m-4 text-white btnd">CONTACT US</button>
      </div>
    </div>

    <!-- related works -->
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-xxl-8 col-xl-8 col-lg-10">
          <div class="breadcrumb__content text-center p-relative z-index-1">
            <u><h3 class="">Related Works</h3></u>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <img
            class="card-img-top"
            src="~/assets/img/ser1.png"
            alt="Services"
          />
        </div>
        <div class="col-md-4">
          <img
            class="card-img-top"
            src="~/assets/img/ser3.png"
            alt="Services"
          />
        </div>
        <div class="col-md-4">
          <img
            class="card-img-top"
            src="~/assets/img/ser1.png"
            alt="Services"
          />
        </div>
      </div>
    </div>
    <!-- 2 banner -->
    <di class="row mt-4"></di>
    <div class="row mt-4" style="background-color: #e48509">
      <div class="col-md-3">
        <h3 class="text-white m-4 text-end">LIKE WHAT YOU SEE?</h3>
      </div>
      <div class="col-md-6">
        <p class="text-white m-4 text-start">
          Let’s get your name on the list!
        </p>
      </div>
      <div class="col-md-3">
        <button class="m-4 text-white btnd1">GET A FREE QUOTE</button>
      </div>
    </div>

    <!-- end s sections -->

    <footer-six :style_2="true" />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ServicesBreadcrumbTwo from "~~/components/breadcrumb/ServicesBreadcrumbTwo.vue";
import ServicesAreaTwo from "~~/components/services/ServicesAreaTwo.vue";
import FooterSix from "~~/layouts/footers/FooterSix.vue";
import BackToTop from "~~/layouts/footers/component/BackToTop.vue";

export default {
  components: {
    HeaderOne,
    ServicesBreadcrumbTwo,
    ServicesAreaTwo,
    FooterSix,
    BackToTop,
  },
  setup() {
    useHead({
      title: "mobiel app development",
    });
  },
};
</script>
