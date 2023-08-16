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

.box img {
  width: 100%;
  height: 300px;
}

.box1 img {
  object-fit: cover;
}
p {
  color: #000 !important;
}

.tx {
  text-align: center !important;
}
</style>

<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />

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
              <h2 class="text-white text-center">FRONTEND DESIGN</h2>
              <p class="text-white">
                Crafting Engaging User Interfaces with Cutting-Edge Front-End
                Technologies
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
            At Etechflow, we specialize in front-end development, where we
            transform design concepts into visually stunning and interactive
            user interfaces. Our team of front-end experts utilizes the latest
            technologies and frameworks to create exceptional web experiences
            that captivate users and drive engagement.
          </p>
        </div>
        <!-- starting -->
        <!-- 1 -->
        <div class="col-xxl-12">
          <div class="card-group">
            <div class="card cd1">
              <div class="card-body">
                <h4 class="text-start text-dark mt-4">
                  Structuring the Foundation of Modern Web Applications
                  <hr
                    width="520px"
                    style="color: rgb(230, 74, 12); font-size: 10px"
                  />
                </h4>
                <p class="text-start text-dark">
                  Our front-end developers excel in crafting clean and semantic
                  HTML5 code that forms the foundation of modern web
                  applications. HTML5 allows us to structure content
                  effectively, ensuring compatibility across different devices
                  and platforms.
                </p>
              </div>
            </div>
            <div class="card bg-white box box1">
              <img
                class="card-img-top"
                src="~/assets/ServiceIcon/HTML5.png"
                alt="HTML"
              />
            </div>
          </div>
        </div>
        <!-- 2 -->
        <div class="col-xxl-12">
          <div class="card-group">
            <div class="card bg-white box box1">
              <img
                class="card-img-top"
                src="~/assets/ServiceIcon/CSS3.png"
                alt="Services"
              />
            </div>
            <div class="card cd1">
              <div class="card-body">
                <h4 class="text-start text-dark">
                  Bringing Style and Visual Appeal to Your Web Applications
                  <hr width="550px" />
                </h4>
                <p class="text-start mt-4">
                  With CSS3, we bring life and style to your web applications.
                  Our front-end experts utilize CSS3 to create visually stunning
                  and responsive designs, implementing custom styles,
                  animations, and layouts to enhance the user experience.
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
                <h3 class="text-start text-dark">
                  Enabling Dynamic and Interactive User Interfaces
                  <hr width="500px" />
                </h3>
                <p class="text-start mt-4">
                  JavaScript is a fundamental part of interactive web
                  development, and our front-end developers are proficient in
                  leveraging its power. We use JavaScript frameworks like React,
                  Angular, or Vue.js to build dynamic and engaging user
                  interfaces, enabling seamless interactivity and real-time
                  updates.
                </p>
              </div>
            </div>
            <div class="card bg-white box box1">
              <img
                class="card-img-top"
                src="~/assets/ServiceIcon/JavaScript.png"
                alt="Services"
              />
            </div>
          </div>
        </div>
        <!-- 4 -->
        <div class="col-xxl-12">
          <div class="card-group">
            <div class="card bg-white box box1">
              <img
                class="card-img-top"
                src="~/assets/ServiceIcon/responsive_design.png"
                alt="Services"
              />
            </div>
            <div class="card cd1">
              <div class="card-body">
                <h4 class="text-start text-dark">
                  Providing Consistency Across Devices
                  <hr width="350px" />
                </h4>
                <p class="text-start mt-4">
                  With CSS3, we bring life and style to your web applications.
                  Our front-end experts utilize CSS3 to create visually stunning
                  and responsive designs, implementing custom styles,
                  animations, and layouts to enhance the user experience.
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
      </div>
    </div>

    <footer-six :style_2="true" />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import FrontEnd from "~~/components/breadcrumb/FaqBreadcrumb.vue";
import ServicesAreaTwo from "~~/components/services/ServicesAreaTwo.vue";
import FooterSix from "~~/layouts/footers/FooterSix.vue";
import BackToTop from "~~/layouts/footers/component/BackToTop.vue";
import bg from "~/assets/img/servicehd.png";

export default {
  components: {
    HeaderOne,
    FrontEnd,
    ServicesAreaTwo,
    FooterSix,
    BackToTop,
  },

  setup() {
    useHead({
      title: "Services 2 - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },

  data() {
    return { bg };
  },
};
</script>
