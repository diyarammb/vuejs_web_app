<style>
.cd1 {
  background-color: rgb(241, 237, 237) !important;
}
.card {
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
              <h2 class="text-white text-center">Packaging Design Services</h2>
              <p class="text-white">
                Captivate Your Customers with Eye-Catching Packaging Designs
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
            At Etechflow, we understand the significance of packaging design in
            creating a lasting impression and influencing consumer buying
            decisions. Our packaging design services are focused on creating
            visually captivating and functional packaging solutions that align
            with your brand and product offerings. Here's how our expertise in
            packaging design can elevate your brand:
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
              Strategic Packaging Design
              <hr
                width="300px"
                style="color: rgb(230, 74, 12); font-size: 10px"
              />
            </h3>
            <p class="text-start text-dark mt-4">
              We approach packaging design strategically, considering your
              target audience, brand positioning, and product attributes. We
              collaborate with you to understand your brand story and goals,
              allowing us to create packaging that not only stands out on the
              shelves but also communicates your brand values effectively.
            </p>
          </div>
        </div>
        <div class="card box box1">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/strategic_packaging_design.png"
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
            src="~/assets/ServiceIcon/visual_impact_and_brand_consistency.png"
            alt="Services"
          />
        </div>
        <div class="card cd1">
          <div class="card-body">
            <h3 class="text-start text-dark mt-4">
              Visual Impact and Brand Consistency
              <hr width="400px" />
            </h3>
            <p class="text-start mt-4">
              Our talented designers combine creativity and expertise to craft
              visually impactful packaging that captures attention. We ensure
              that your packaging design reflects your brand's visual identity,
              including the use of color schemes, typography, and graphical
              elements, maintaining consistency across all your brand
              touchpoints.
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
              Product Protection and Functionality
              <hr
                width="400px"
                style="color: rgb(230, 74, 12); font-size: 10px"
              />
            </h3>
            <p class="text-start text-dark mt-4">
              In addition to aesthetics, we prioritize the functionality and
              practicality of your packaging. Our designers consider factors
              such as product safety, ease of use, and durability to ensure that
              your products are well-protected and that the packaging enhances
              the overall user experience.
            </p>
          </div>
        </div>
        <div class="card box box1">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/product_protection_and_functionality.png"
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
            src="~/assets/ServiceIcon/differentiation_and_shelf_appeal.png"
            alt="Services"
          />
        </div>
        <div class="card cd1">
          <div class="card-body">
            <h3 class="text-start text-dark mt-4">
              Differentiation and Shelf Appeal
              <hr width="400px" />
            </h3>
            <p class="text-start mt-4">
              In a crowded marketplace, it's crucial to differentiate your
              products from competitors. We strive to create packaging that
              stands out and catches the eye of consumers, enticing them to
              explore your product further. Our designs leverage unique visual
              elements, innovative structures, and attention-grabbing graphics
              to help your products shine on the shelf.
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
              Storytelling through Packaging
              <hr
                width="300px"
                style="color: rgb(230, 74, 12); font-size: 10px"
              />
            </h3>
            <p class="text-start text-dark mt-4">
              We believe that packaging is an opportunity to tell your brand's
              story and connect emotionally with your customers. Our designers
              skillfully integrate brand messaging, product information, and
              storytelling elements into the packaging design, creating an
              engaging and memorable experience for consumers.
            </p>
          </div>
        </div>
        <div class="card box box1">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/storytelling_through_packaging.png"
            alt="Services"
          />
        </div>
      </div>
    </div>

    <!-- 6-->
    <div class="col-xxl-12">
      <div class="card-group">
        <div class="card box box1">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/sustainability_and_eco_friendly_solutions.png"
            alt="Services"
          />
        </div>
        <div class="card cd1">
          <div class="card-body">
            <h3 class="text-start text-dark mt-4">
              Sustainability and Eco-Friendly Solutions
              <hr width="450px" />
            </h3>
            <p class="text-start mt-4">
              We are committed to promoting sustainable packaging practices. Our
              designers explore eco-friendly materials, recyclable options, and
              minimalist designs that minimize environmental impact while
              maintaining the visual appeal and functionality of your packaging.
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
              Collaborative Design Process
              <hr
                width="350px"
                style="color: rgb(230, 74, 12); font-size: 10px"
              />
            </h3>
            <p class="text-start text-dark mt-4">
              We believe in close collaboration with our clients throughout the
              packaging design process. We value your input and feedback,
              ensuring that the final design aligns with your vision and meets
              your specific requirements.
            </p>
          </div>
        </div>
        <div class="card box box1">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/collaborative_design_process.png"
            alt="Services"
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
      title: "Packing Design",
    });
  },

  data() {
    return { bg };
  },
};
</script>
