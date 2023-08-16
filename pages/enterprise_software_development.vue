<style>
.cd1 {
  background-color: rgb(241, 237, 237) !important;
}
.card{
  background-color: white;
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
              <h2 class="text-white text-center">
                Unleash the Full Potential of Native Mobile Apps with Etechflow
              </h2>
              <p class="text-white">
                Etechflow: Your Native App Development Partner
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
            In today's digital landscape, native mobile apps provide the perfect
            avenue for businesses to engage with their customers and deliver
            unparalleled user experiences. At Etechflow, we specialize in native
            app development, leveraging the power of platform-specific
            technologies to create robust and high-performance mobile
            applications. Here's why partnering with us for native app
            development is the right choice for your business:
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
              Platform Expertise
              <hr
                width="200px"
                style="color: rgb(230, 74, 12); font-size: 10px"
              />
            </h3>
            <p class="text-start text-dark mt-4">
              Our team of skilled developers has in-depth knowledge and
              expertise in native app development for various platforms,
              including iOS and Android. We stay up-to-date with the latest
              platform advancements and guidelines to ensure your app meets the
              highest standards and takes advantage of the platform's native
              capabilities.
            </p>
          </div>
        </div>
        <div class="card box box1">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/platform_expertise.png"
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
            src="~/assets/ServiceIcon/seamless_user_experience.png"
            alt="Services"
          />
        </div>
        <div class="card cd1">
          <div class="card-body">
            <h3 class="text-start text-dark mt-4">
              Seamless User Experience
              <hr width="150px" />
            </h3>
            <p class="text-start mt-4">
              Native apps are known for delivering a seamless and intuitive user
              experience. By leveraging platform-specific design patterns and
              interaction elements, we create native apps that feel familiar to
              users and align with their expectations. This results in higher
              user satisfaction, increased engagement, and improved conversion
              rates..
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
              Optimized Performance
              <hr
                width="150px"
                style="color: rgb(230, 74, 12); font-size: 10px"
              />
            </h3>
            <p class="text-start text-dark mt-4">
              Native apps are optimized for their respective platforms, offering
              superior performance compared to hybrid or web-based apps. We
              harness the power of platform-specific APIs, hardware
              acceleration, and advanced optimization techniques to ensure your
              app runs smoothly, responds quickly, and provides a fluid user
              interface.
            </p>
          </div>
        </div>
        <div class="card box ">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/optimized_performance.png"
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
            src="~/assets/ServiceIcon/access-to-native-features.png"
            alt="Services"
          />
        </div>
        <div class="card cd1">
          <div class="card-body">
            <h3 class="text-start text-dark mt-4">
              Access to Native Features
              <hr width="150px" />
            </h3>
            <p class="text-start mt-4">
              Native app development allows us to tap into a wealth of native
              features and functionalities offered by the platforms. Whether
              it's utilizing device sensors, accessing camera and microphone
              capabilities, or leveraging push notifications, we integrate these
              features seamlessly into your app to enhance its functionality and
              user engagement.
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
              Offline Functionality
              <hr
                width="150px"
                style="color: rgb(230, 74, 12); font-size: 10px"
              />
            </h3>
            <p class="text-start text-dark mt-4">
              Native apps can provide offline functionality, allowing users to
              access certain features or content even without an internet
              connection. We incorporate offline capabilities into your app,
              ensuring that users can continue to interact with your app and
              access important information, even in low or no connectivity
              scenarios.
            </p>
          </div>
        </div>
        <div class="card box box1">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/offline_functionality.png"
            alt="Services"
          />
        </div>
      </div>
    </div>

    <!-- 6-->
    <div class="col-xxl-12">
      <div class="card-group">
        <div class="card box">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/app_store_optimization.png"
            alt="Services"
          />
        </div>
        <div class="card cd1">
          <div class="card-body">
            <h3 class="text-start text-dark mt-4">
              App Store Optimization (ASO)
              <hr width="150px" />
            </h3>
            <p class="text-start mt-4">
              We understand the importance of visibility and discoverability in
              the app stores. With our expertise in app store optimization
              (ASO), we optimize your app's metadata, keywords, and visuals to
              increase its visibility and attract more organic downloads. This
              helps your app gain traction and reach a wider audience.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 7 -->
    <div class="col-xxl-12">
      <div class="card-group">
        <div class="card cd1">
          <div class="card-body">
            <h3 class="text-start text-dark mt-4">
              Robust Security Measures
              <hr
                width="150px"
                style="color: rgb(230, 74, 12); font-size: 10px"
              />
            </h3>
            <p class="text-start text-dark mt-4">
              We prioritize the security of your app and users' data. We
              implement industry-standard security measures, including secure
              data storage, encrypted communication protocols, and secure
              authentication mechanisms, to protect your app from potential
              threats and ensure user trust.
            </p>
          </div>
        </div>
        <div class="card box box1">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/robust_security_measures.png"
            alt="Services"
          />
        </div>
      </div>
    </div>

    <!-- 8-->
    <div class="col-xxl-12">
      <div class="card-group">
        <div class="card box">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/continuous_support_and_maintenance.png"
            alt="Services"
          />
        </div>
        <div class="card cd1">
          <div class="card-body">
            <h3 class="text-start text-dark mt-4">
              Continuous Support and Maintenance
              <hr width="150px" />
            </h3>
            <p class="text-start mt-4">
              Our partnership doesn't end with app development. We provide
              ongoing support and maintenance services to ensure your app
              remains updated, compatible with new platform versions, and free
              from any issues. We monitor app performance, apply necessary
              updates, and address any technical concerns to keep your app
              running smoothly. Partner with Etechflow for native app
              development and unlock the full potential of your mobile presence.
              Let us help you create a powerful, engaging, and platform-specific
              app that delights your users and drives business growth.
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
      title: "Native Mobile App Development",
    });
  },

  data() {
    return { bg };
  },
};
</script>
