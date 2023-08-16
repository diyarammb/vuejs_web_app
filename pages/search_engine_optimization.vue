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
              <h2 class="text-white text-center">
                Boost Your Online Visibility with Expert SEO Services
              </h2>
              <p class="text-white">
                Drive Organic Traffic and Outrank Your Competitors with
                Effective SEO Strategies
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
            In today's digital landscape, search engine optimization (SEO) is
            vital for businesses looking to increase their online visibility and
            drive targeted traffic to their websites. At Etechflow , we offer
            expert SEO services designed to improve your search engine rankings,
            attract quality leads, and boost your brand's online presence.
            Here's how our SEO expertise can benefit your business:
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
              Comprehensive SEO Audits
              <hr
                width="300px"
                style="color: rgb(230, 74, 12); font-size: 10px"
              />
            </h3>
            <p class="text-start text-dark mt-4">
              We start by conducting in-depth SEO audits of your website to
              identify areas for improvement. Our team analyzes various factors,
              including website structure, on-page elements, content quality,
              and backlink profiles. Through this comprehensive assessment, we
              develop a customized SEO strategy tailored to your specific goals
              and target audience.
            </p>
          </div>
        </div>
        <div class="card box">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/comprehensive_seo_audits.png"
            alt="Services" 
          />
        </div>
      </div>
    </div>
    <!-- 2 -->
    <div class="col-xxl-12">
      <div class="card-group">
        <div class="card box">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/keyword_research_and_optimization.png"
            alt="Services"
          />
        </div>
        <div class="card cd1">
          <div class="card-body">
            <h3 class="text-start text-dark mt-4">
              Keyword Research and Optimization
              <hr width="350px" />
            </h3>
            <p class="text-start mt-4">
              Keyword research is the foundation of effective SEO. We perform
              extensive keyword analysis to identify the most relevant and
              high-impact keywords for your business. Our SEO specialists
              optimize your website's content, meta tags, headings, and URLs to
              ensure maximum keyword visibility, improving your chances of
              ranking higher on search engine result pages (SERPs).
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
              On-Page Optimization:
              <hr
                width="150px"
                style="color: rgb(230, 74, 12); font-size: 10px"
              />
            </h3>
            <p class="text-start text-dark mt-4">
              We optimize your website's on-page elements to enhance its search
              engine friendliness. This includes optimizing meta titles and
              descriptions, improving website loading speed, implementing schema
              markup, and optimizing images and multimedia elements. Our goal is
              to create a seamless user experience while ensuring your website
              meets search engine requirements.
            </p>
          </div>
        </div>
        <div class="card box box1">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/on_page_optimization.png"
            alt="Services"
          />
        </div>
      </div>
    </div>

    <!-- 4 -->
    <div class="col-xxl-12">
      <div class="card-group">
        <div class="card box">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/quality_content_creation.png"
            alt="Services"
          />
        </div>
        <div class="card cd1">
          <div class="card-body">
            <h3 class="text-start text-dark mt-4">
              Quality Content Creation
              <hr width="150px" />
            </h3>
            <p class="text-start mt-4">
              Engaging and informative content plays a crucial role in SEO
              success. Our team of skilled content writers develops
              high-quality, SEO-friendly content that aligns with your brand and
              target keywords. We focus on creating valuable and shareable
              content that not only attracts search engines but also engages
              your audience and encourages them to stay on your website.
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
              Link Building and Off-Page Optimization
              <hr
                width="350px"
                style="color: rgb(230, 74, 12); font-size: 10px"
              />
            </h3>
            <p class="text-start text-dark mt-4">
              Building high-quality backlinks is essential for improving your
              website's authority and search engine rankings. Our SEO
              specialists employ proven link building strategies, including
              outreach to authoritative websites, guest blogging, and content
              promotion, to secure relevant and reputable backlinks. We also
              optimize your online presence through directory submissions,
              social bookmarking, and other off-page SEO techniques.
            </p>
          </div>
        </div>
        <div class="card box ">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/link_building_and_off_page_optimization.png"
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
            src="~/assets/ServiceIcon/technical_seo_enhancements.png"
            alt="Services"
          />
        </div>
        <div class="card cd1">
          <div class="card-body">
            <h3 class="text-start text-dark mt-4">
              Technical SEO Enhancements
              <hr width="350px" />
            </h3>
            <p class="text-start mt-4">
              We optimize the technical aspects of your website to ensure it is
              easily crawlable and indexable by search engines. Our team
              addresses issues such as duplicate content, broken links, XML
              sitemap optimization, robots.txt configuration, and website
              mobile-friendliness. These technical enhancements improve your
              website's overall visibility and user experience.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 7-->
    <div class="col-xxl-12">
      <div class="card-group">
        <div class="card cd1">
          <div class="card-body">
            <h3 class="text-start text-dark mt-4">
              Continuous Monitoring and Reporting
              <hr
                width="400px"
                style="color: rgb(230, 74, 12); font-size: 10px"
              />
            </h3>
            <p class="text-start text-dark mt-4">
              SEO is an ongoing process, and we provide regular monitoring and
              reporting to track the progress of our efforts. We use advanced
              analytics tools to measure key metrics, such as organic traffic,
              keyword rankings, and conversion rates. Our detailed reports offer
              valuable insights into the performance of your SEO campaign and
              guide future optimization strategies.  
            </p>
          </div>
        </div>
        <div class="card box ">
          <img
            class="card-img-top"
            src="~/assets/ServiceIcon/continuous_monitoring_and_reporting.png"
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
      title: "Native Mobile App Development",
    });
  },

  data() {
    return { bg };
  },
};
</script>
