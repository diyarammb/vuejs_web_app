<template>
	<section
		class="breadcrumb__area breadcrumb__style-6 p-relative include-bg pt-200 pb-120"
	>
		<div
			class="breadcrumb__bg-2 breadcrumb__overlay include-bg "
			:style="{ backgroundImage: `url(${bg})` }"
		></div>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-xxl-8 col-xl-8 col-lg-10">
					<div class="breadcrumb__content text-center p-relative ">
						<h1 class="text-white">Website Maintenance and Support Services</h1>
						<p class="text-white">Empowering Your Website's Performance and Reliability</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import bg from "~/assets/img/servicehd.png";

export default {
	data() {
		return { bg };
	},
};
</script>
