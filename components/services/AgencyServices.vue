<template>
	<section class="services__area grey-bg-8 pt-110 pb-130 p-relative z-index-1">
		<div class="services__shape">
			<img
				class="services__shape-4"
				src="~/assets/img/services/5/shape/services-shape-1.png"
				alt="shape"
			/>
			<img
				class="services__shape-5"
				src="~/assets/img/services/5/shape/services-shape-2.png"
				alt="shape"
			/>
			<img
				class="services__shape-6"
				src="~/assets/img/services/5/shape/services-shape-3.png"
				alt="shape"
			/>
			<img
				class="services__shape-7"
				src="~/assets/img/services/5/shape/services-shape-4.png"
				alt="shape"
			/>
			<img
				class="services__shape-8"
				src="~/assets/img/services/5/shape/services-shape-5.png"
				alt="shape"
			/>
			<img
				class="services__shape-9"
				src="~/assets/img/services/5/shape/services-shape-6.png"
				alt="shape"
			/>
		</div>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-xxl-8 col-xl-8 col-lg-10">
					<div
						class="services__section-title-5"
						data-sal="slide-up"
						data-sal-delay="150"
						data-sal-duration="1000"
					>
						<div class="section__title-wrapper-5 mb-70 text-center">
							<span class="section__title-pre-5">OUR SERVICES</span>
							<h3 class="section__title-5">
								We provide wide range of digital services
							</h3>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
	
				<div
					v-for="item in service_data"
					:key="item.id"
					class="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
				>
					<div
						class="services__item-5 mb-30 white-bg wow fadeInUp"
						data-sal="slide-up"
						data-sal-delay="item.delay"
						data-sal-duration="1000"
					>
						<div
							class="services__item-5-inner text-center transition-3 white-bg"
						>
							<div class="services__content-5">
								<h3 class="services__title-5">
									<nuxt-link href="/service-details">{{
										item.title
									}}</nuxt-link>
								</h3>
								<p>{{ item.subtitle }}</p>

								<div class="services__btn-5">
									<nuxt-link
										href="/service-details"
										class="tp-link-btn-circle justify-content-center"
									>
										See More
										<span>
											<i class="fa-regular fa-arrow-right"></i>
											<i class="fa-regular fa-arrow-right"></i>
										</span>
									</nuxt-link>
								</div>
							</div>
							<div class="services__thumb-5">
								<img :src="item.img" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-lg-8 col-xl-8 col-lg-10">
					<div
						class="ticket__wrapper mt-50 d-md-flex align-items-center justify-content-between"
						data-bg-color="blue-bg-2"
					>
						<div class="ticket__inner d-sm-flex align-items-center">
							<div class="ticket__shape">
								<img
									class="ticket__shape-1"
									data-sal="slide-down"
									data-sal-delay="130"
									data-sal-duration="1000"
									src="~/assets/img/ticket/ticket-shape-1.png"
									alt=""
								/>
								<img
									class="ticket__shape-2 wow fadeInDown"
									data-sal="slide-down"
									data-sal-delay="150"
									data-sal-duration="1000"
									src="~/assets/img/ticket/ticket-shape-2.png"
									alt=""
								/>
								<img
									class="ticket__shape-3 wow fadeInUp"
									data-sal="slide-up"
									data-sal-delay="170"
									data-sal-duration="1000"
									src="~/assets/img/ticket/ticket-shape-3.png"
									alt=""
								/>
							</div>
							<div class="ticket__icon mr-15">
								<img src="~/assets/img/ticket/ticket-icon.png" alt="" />
							</div>
							<div class="ticket__content">
								<h4 class="ticket__title">Contact us to</h4>
								<p>Get a professional service.</p>
							</div>
						</div>
						<div class="ticket__btn">
							<nuxt-link href="/contact" class="tp-btn-white-sm"
								>Submit a Ticket</nuxt-link
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
// service image

import agn_ser_1 from "~/assets/img/services/5/1.png";
import agn_ser_2 from "~/assets/img/services/5/2.png";
import agn_ser_3 from "~/assets/img/services/5/3.png";

import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
	mixins: [SalScrollAnimationMixin],
	data() {
		return {
			service_data: [
				{
					id: 1,
					delay: "130",
					img: agn_ser_1,
					title: "Web Development",
					subtitle:
						"Building websites that make a difference.",
				},
				{
					id: 2,
					delay: "150",
					img: agn_ser_2,
					title: "UI/UX Design",
					subtitle:
						"We design experiences that make brands stick",
				},
				{
					id: 3,
					delay: "170",
					img: agn_ser_3,
					title: "Mobile App ",
					subtitle:
						"We turn ideas into apps that change the world.",
				},
				{
					id: 4,
					delay: "180",
					img: agn_ser_1,
					title: "Digital MArketing",
					subtitle:
						"We'll help you reach your target audience and grow your business",
				},
				{
					id: 5,
					delay: "200",
					img: agn_ser_2,
					title: "Custom Development",
					subtitle:
						"Weaving the code of your dreams.",

				},
				{
					id: 6,
					delay: "180",
					img: agn_ser_3,
					title: "Maintainace & Support",
					subtitle:
						"Keeping your website up and running.",
				},
			],
		};
	},
};
</script>
