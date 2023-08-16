<style>
.cd1 {
  background-color: rgb(241, 237, 237) !important;
}
.card {
  background-color: white !important;
}
.box img {
  width: 100%;
  height: 300px;
}

.box1 img {
  object-fit: cover;
}
hr {
  position: relative;
  border: none;
  height: 5px;
  background: #ff7100;
  margin-bottom: 50px;
}
p {
  color: #000 !important;
}
</style>

<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <!-- <services-breadcrumb-two /> -->
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
              <h2 class="text-white text-center">UI/UX Design Services</h2>
              <p class="text-white">
                Crafting Seamless User Experiences that Captivate and Convert
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container-fluid gx-0">
      <div class="row gx-0">
        <div class="row">
          <p class="text-center p-5">
            At Etechflow, we specialize in delivering exceptional UI/UX design
            services that elevate digital experiences and drive customer
            engagement. Our talented team of designers combines creativity,
            technical expertise, and user-centered design principles to create
            intuitive and visually stunning interfaces. Here's how our UI/UX
            design services can benefit your business:
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
              User Research and Analysis
              <hr
                width="300px"
                style="color: rgb(230, 74, 12); font-size: 10px"
              />
            </h3>
            <p class="text-start text-dark mt-4">
              We start by gaining a deep understanding of your target audience,
              their needs, and their behaviors. Through extensive user research
              and analysis, we identify pain points, preferences, and
              opportunities to create a user experience that aligns with your
              business goals.
            </p>
          </div>
        </div>
        <div class="card box box1">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/user_research_and_analysis.png"
            alt="Services"
          />
        </div>
      </div>
    </div>
    <!-- 2 -->
    <div class="col-xxl-12">
      <div class="card-group">
        <div class="card box box1">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/wireframing_and_prototyping.png"
            alt="Services"
          />
        </div>
        <div class="card cd1">
          <div class="card-body">
            <h3 class="text-start text-dark mt-4">
              Wireframing and Prototyping
              <hr width="300px" />
            </h3>
            <p class="text-start mt-4">
              Our designers create detailed wireframes and interactive
              prototypes that illustrate the layout, functionality, and
              navigation of your digital product. This iterative process allows
              us to fine-tune the user experience and gather valuable feedback
              from stakeholders and end-users.
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
              Visual Design and Brand Integration
              <hr
                width="400px"
                style="color: rgb(230, 74, 12); font-size: 10px"
              />
            </h3>
            <p class="text-start text-dark mt-4">
              We believe in designing interfaces that not only look visually
              appealing but also reflect your brand identity. Our team
              seamlessly integrates your brand elements, colors, typography, and
              imagery into the UI design to ensure consistency and reinforce
              brand recognition.
            </p>
          </div>
        </div>
        <div class="card box box1">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/visual_design_and_brand_integration.png"
            alt="Services"
          />
        </div>
      </div>
    </div>

    <!-- 4 -->
    <div class="col-xxl-12">
      <div class="card-group">
        <div class="card box box1">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/responsive_and_mobile_first_design.png"
            alt="Services"
          />
        </div>
        <div class="card cd1">
          <div class="card-body">
            <h3 class="text-start text-dark mt-4">
              Responsive and Mobile-First Design

              <hr width="400px" />
            </h3>
            <p class="text-start mt-4">
              With the increasing use of mobile devices, it is crucial to
              provide a seamless experience across all screen sizes. We design
              responsive interfaces that adapt to different devices, ensuring a
              consistent and optimized experience for users, whether they are on
              desktop, tablet, or mobile.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 5 -->
    <div class="col-xxl-12">
      <div class="card-group">
        <div class="card cd1">
          <div class="card-body">
            <h3 class="text-start text-dark mt-4">
              Usability Testing and Optimization
              <hr
                width="500px"
                style="color: rgb(230, 74, 12); font-size: 10px"
              />
            </h3>
            <p class="text-start text-dark mt-4">
              We conduct thorough usability testing to identify any usability
              issues or areas of improvement. By gathering feedback from real
              users, we refine the user interface and address any pain points,
              resulting in an intuitive and frictionless experience for your
              customers.
            </p>
          </div>
        </div>
        <div class="card box box1">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/usability_testing_and_optimization.png"
            alt="Services"
          />
        </div>
      </div>
    </div>

    <!-- 6-->
    <div class="col-xxl-12">
      <div class="card-group">
        <div class="card box1 box ">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/continuous_collaboration_and_iteration.png"
            alt="Services"
          />
        </div>
        <div class="card cd1">
          <div class="card-body">
            <h3 class="text-start text-dark mt-4">
              Continuous Collaboration and Iteration
              <hr width="400px" />
            </h3>
            <p class="text-start mt-4">
              We believe in a collaborative design process, involving our
              clients throughout the journey. We value your feedback and
              insights and iteratively refine the design to ensure it aligns
              with your vision and meets your business objectives.
            </p>
          </div>
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
    <div class="row mt-4" style="background-color: navy">
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
import bg from "~/assets/img/servicehd.png";

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
      title: "Brand Identity",
    });
  },

  data() {
    return { bg };
  },
};
</script>
