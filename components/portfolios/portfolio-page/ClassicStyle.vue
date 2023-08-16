<style>
.hvr:hover {
	padding: 5px;
	height: 230px;
	opacity: 0.5;
	transition: 0.5s ease-in-out;
	backface-visibility: hidden;
}
.active {
	border: 2px solid purple;
	border-radius: 20px;
	background-color: #673c8b;
	width: auto;
	height: 40px;
	margin: 0px 0px 25px 0px;
	padding: 5px 10px 5px 10px;
	color: white !important;
}
button:hover {
	border: 2px solid black;
	border-radius: 20px;
	background-color: rgb(5, 5, 5);
	 
	color: white!important;
	height: 40px; 
}
.list-enter-active,
.list-leave-active {
	transition: all 0.10s ease;
}
.list-enter-from {
	opacity: 0;
	transform: translateY(-30px);
}
.list-enter-to {
	opacity: 1;
	transform: translateY(0px);
}
.list-leave-from {
	opacity: 1;
	transform: translateY(10px);
}
.list-leave-to {
	opacity: 0;
	transform: translateX(-60px);
}
</style>

<template>
	<section class="portfolio__area pt-110 pb-75 p-relative fix">
		 
		<div class="container">
			<div class="row">
				<div class="col-xl-12">
					<div class="portfolio__section-title-wrapper text-center mb-90">
						<span class="portfolio__section-title-pre">
							CHECK OUT OUR WORK
						</span>
						<h3 class="portfolio__section-title">Portfolio</h3>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xxl-12">
					<div class=" text-center mb-40">
						<div class="masonary-menu filter-button-group">
							<button
							 style="margin: 20px; color: black;"
								v-for="(cate, i) in categories"
								:key="i"
								@click="handleCategoryItem(cate)"
								:class="`${cate === activeCategory ? 'active' : ''}`">
								{{ cate }}
							</button>
						</div>
					</div>
				</div>
			</div>
			<transition-group
				name="list"
				tag="div"
				appear
				class="row tp-gx-4 grid tp-portfolio-load-more"
				ref="product_ref"
			>
				<div
					v-for="(item, i) in portfolio_items?.slice(0, perView)"
					:key="i"
					:data-index="i"
					class="col-xl-4 col-lg-4 col-md-6 tp-portfolio grid-item hvr"
				>
					<classic-single-item
						:item="item"
						:index="i"
						:images="portfolio_items.map((item) => item.img)"
					/>
				</div>
			</transition-group>
			<div class="row">
				<div class="col-xxl-12">
					<div class="portfolio__load-more text-center">
						<button
							v-if="perView < portfolio_items.length"
							@click="handleLoadMore()"
							id="tp-load-more"
							type="button"
							class="tp-load-more-btn load-more mt-30 mb-50"
						>
							<svg
								width="17"
								height="17"
								viewBox="0 0 17 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 8.5C1 4.36 4.33 1 8.5 1C13.5025 1 16 5.17 16 5.17M16 5.17V1.42M16 5.17H12.67"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M15.9175 8.5C15.9175 12.64 12.5575 16 8.4175 16C4.2775 16 1.75 11.83 1.75 11.83M1.75 11.83H5.14M1.75 11.83V15.58"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							Load more Post
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { ref, onMounted } from "vue";
// internal
// brand images``
import br_1 from "~/assets/Portfolio/social/b1.jpg";
import br_2 from "~/assets/Portfolio/social/b2.jpg";
import br_3 from "~/assets/Portfolio/social/b3.jpg";
import br_4 from "~/assets/Portfolio/social/b4.jpg";
import br_5 from "~/assets/Portfolio/social/b5.jpeg";
import br_6 from "~/assets/Portfolio/social/b6.jpeg";
import br_7 from "~/assets/Portfolio/social/b7.jpg"; 

// mobile app images``
import ma_1 from "~/assets/Portfolio/mobile/1.jpg";
import ma_2 from "~/assets/Portfolio/mobile/2.jpg";
import ma_3 from "~/assets/Portfolio/mobile/3.jpg";
import ma_4 from "~/assets/Portfolio/mobile/4.jpg"; 

// web developments images``Portfolio\SEO
import wb_1 from "~/assets/Portfolio/Websites/century21.com/Header.png";
import wb_2 from "~/assets/Portfolio/Websites/dufferinconstruction.com/Header.png";
import wb_3 from "~/assets/Portfolio/Websites/excentric.ca/Header.png";
import wb_4 from "~/assets/Portfolio/Websites/fleetcart.envaysoft.com/Header.png";
import wb_5 from "~/assets/Portfolio/Websites/gfa-group.de/Header.png";
import wb_6 from "~/assets/Portfolio/Websites/healthrangerstore.com/Header.png";
import wb_7 from "~/assets/Portfolio/Websites/hochtief.com/Header.png"; 
import wb_8 from "~/assets/Portfolio/Websites/kith.com/Header.png"; 
import wb_9 from "~/assets/Portfolio/Websites/ledcor.com/Header.png"; 
import wb_10 from "~/assets/Portfolio/Websites/madeagency.com.au/Header.png"; 
import wb_11 from "~/assets/Portfolio/Websites/mendingnaturally.com/Header.png"; 
import wb_12 from "~/assets/Portfolio/Websites/oryx-data.com/Header.png"; 
import wb_13 from "~/assets/Portfolio/Websites/pcl.com/Header.png"; 
import wb_14 from "~/assets/Portfolio/Websites/quatropi.com/Header.png"; 
import wb_15 from "~/assets/Portfolio/Websites/redfin.com/Header.png"; 
import wb_16 from "~/assets/Portfolio/Websites/sohocreativegroup.com/Header.png"; 
import wb_17 from "~/assets/Portfolio/Websites/uphoriacbd.com/Header.png";    

// SEO IMAGES

import s_1 from "~/assets/Portfolio/seo/1.png";
import s_2 from "~/assets/Portfolio/seo/2.png";
import s_3 from "~/assets/Portfolio/seo/3.png";
import s_4 from "~/assets/Portfolio/seo/4.png";
import s_5 from "~/assets/Portfolio/seo/5.png";
import s_6 from "~/assets/Portfolio/seo/6.png";
import s_7 from "~/assets/Portfolio/seo/7.png"; 
import s_8 from "~/assets/Portfolio/seo/8.png";
import s_9 from "~/assets/Portfolio/seo/9.png"; 
import s_10 from "~/assets/Portfolio/seo/10.png"; 
// logo design images``

import l1 from "~/assets/Portfolio/logo/1.png"; 
import l2 from "~/assets/Portfolio/logo/2.png"; 
import l3 from "~/assets/Portfolio/logo/3.png"; 
import l4 from "~/assets/Portfolio/logo/4.png"; 
import l5 from "~/assets/Portfolio/logo/5.png"; 
import l6 from "~/assets/Portfolio/logo/6.png"; 
import l7 from "~/assets/Portfolio/logo7.png"; 
import l8 from "~/assets/Portfolio/logo/8.png"; 
import l9 from "~/assets/Portfolio/logo/9.png"; 
import l10 from "~/assets/Portfolio/logo/10.png"; 
import l11 from "~/assets/Portfolio/logo/11.png"; 
import l12 from "~/assets/Portfolio/logo/12.png"; 
import l13 from "~/assets/Portfolio/logo/13.png"; 
import l14 from "~/assets/Portfolio/logo/14.png"; 
import l15 from "~/assets/Portfolio/logo/15.png"; 
import l16 from "~/assets/Portfolio/logo/16.png"; 
import l17 from "~/assets/Portfolio/logo/17.png"; 
import l18 from "~/assets/Portfolio/logo/18.png"; 
import l19 from "~/assets/Portfolio/logo/19.png"; 
import l20 from "~/assets/Portfolio/logo/20.png"; 
import l21 from "~/assets/Portfolio/logo/21.png"; 
import l22 from "~/assets/Portfolio/logo/22.png"; 
import l23 from "~/assets/Portfolio/logo/23.png"; 
import l24 from "~/assets/Portfolio/logo/24.png"; 
import l25 from "~/assets/Portfolio/logo/25.png"; 
import l26 from "~/assets/Portfolio/logo/26.png"; 
import l27 from "~/assets/Portfolio/logo/27.png"; 
import l28 from "~/assets/Portfolio/logo/28.png"; 
import l29 from "~/assets/Portfolio/logo/29.png"; 
import l30 from "~/assets/Portfolio/logo/30.png"; 
import l31 from "~/assets/Portfolio/logo/31.png"; 

// social media post``
import s1 from "~/assets/Portfolio/social/1.png"; 
import s2 from "~/assets/Portfolio/social/2.png"; 
import s3 from "~/assets/Portfolio/social/3.png"; 
import s4 from "~/assets/Portfolio/social/4.png"; 
import s5 from "~/assets/Portfolio/social/5.png"; 
import s6 from "~/assets/Portfolio/social/6.png"; 


// components
import ClassicSingleItem from "./ClassicSingleItem.vue"; 

export default {
	components: { ClassicSingleItem },
	data() {
		return {
			perView: 6,
			categories: [],
			activeCategory: "All",
			portfolio_items: [],
			portfolio_data: [
				{
					id: "1",
					img: br_1,
					title: "Branding",
					category: "Branding",
				},
				{
					id: "2",
					img: br_2,
					title: "Branding",
					category: "Branding",
				},
				{
					id: "3",
					img: br_3,
					title: "Branding",
					category: "Branding",
				},
				{
					id: "4",
					img: br_4,
					title: "Branding",
					category: "Branding",
				},
				{
					id: "5",
					img: br_5,
					title: "Branding",
					category: "Branding",
				},
				{
					id: "6",
					img: br_6,
					title: "Branding",
					category: "Branding",
				},
				{
					id: "7",
					img: br_7,
					title: "Branding",
					category: "Branding",
				},
				//  app mobile development``
				{
					id: "8",
					img: ma_1,
					title: "App Development",
					category: "App Development",
				},
				{
					id: "9",
					img: ma_2,
					title: "App Development",
					category: "App Development",
				},
				{
					id: "10",
					img: ma_3,
					title: "App Development",
					category: "App Development",
				},
				{
					id: "11",
					img: ma_4,
					title: "App Development",
					category: "App Development",
				},

				// web development
				{
					id: "12",
					img: wb_1,
					title: "Web Development",
					category: "Web Development",
				},{
					id: "13",
					img: wb_2,
					title: "Web Development",
					category: "Web Development",
				},{
					id: "14",
					img: wb_3,
					title: "Web Development",
					category: "Web Development",
				},{
					id: "15",
					img: wb_4,
					title: "Web Development",
					category: "Web Development",
				},{
					id: "16",
					img: wb_5,
					title: "Web Development",
					category: "Web Development",
				},{
					id: "17",
					img: wb_6,
					title: "Web Development",
					category: "Web Development",
				},{
					id: "18",
					img: wb_7,
					title: "Web Development",
					category: "Web Development",
				},{
					id: "19",
					img: wb_8,
					title: "Web Development",
					category: "Web Development",
				},{
					id: "20",
					img: wb_9,
					title: "Web Development",
					category: "Web Development",
				},{
					id: "21",
					img: wb_10,
					title: "Web Development",
					category: "Web Development",
				},{
					id: "22",
					img: wb_11,
					title: "Web Development",
					category: "Web Development",
				},{
					id: "23",
					img: wb_12,
					title: "Web Development",
					category: "Web Development",
				},{
					id: "24",
					img: wb_13,
					title: "Web Development",
					category: "Web Development",
				},{
					id: "25",
					img: wb_14,
					title: "Web Development",
					category: "Web Development",
				},{
					id: "26",
					img: wb_15,
					title: "Web Development",
					category: "Web Development",
				},{
					id: "27",
					img: wb_16,
					title: "Web Development",
					category: "Web Development",
				},{
					id: "28",
					img: wb_17,
					title: "Web Development",
					category: "Web Development",
				},
				// seo 
				{
					id: "29",
					img: s_1,
					title: "SEO",
					category: "SEO",
				}, 
				{
					id: "30",
					img: s_2,
					title: "SEO",
					category: "SEO",
				},
				{
					id: "31",
					img: s_3,
					title: "SEO",
					category: "SEO",
				},
				{
					id: "32",
					img: s_4,
					title: "SEO",
					category: "SEO",
				},{
					id: "33",
					img: s_5,
					title: "SEO",
					category: "SEO",
				},{
					id: "34",
					img: s_6,
					title: "SEO",
					category: "SEO",
				},{
					id: "35",
					img: s_7,
					title: "SEO",
					category: "SEO",
				},{
					id: "36",
					img: s_8,
					title: "SEO",
					category: "SEO",
				},{
					id: "37",
					img: s_9,
					title: "SEO",
					category: "SEO",
				},{
					id: "38",
					img: s_10,
					title: "SEO",
					category: "SEO",
				},
				// logo design``
				{
					id: "39",
					img: l1,
					title: "Logo Design",
					category: "Logo Design",
				},
				{
					id: "40",
					img: l2,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "41",
					img: l3,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "42",
					img: l4,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "43",
					img: l5,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "44",
					img: l6,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "45",
					img: l7,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "46",
					img: l8,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "47",
					img: l9,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "48",
					img: l10,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "49",
					img: l11,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "50",
					img: l12,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "51",
					img: l13,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "52",
					img: l14,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "53",
					img: l15,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "54",
					img: l16,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "55",
					img: l17,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "56",
					img: l18,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "57",
					img: l19,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "58",
					img: l20,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "59",
					img: l21,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "60",
					img: l22,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "61",
					img: l23,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "62",
					img: l24,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "63",
					img: l25,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "64",
					img: l26,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "65",
					img: l27,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "66",
					img: l28,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "67",
					img: l29,
					title: "Logo Design",
					category: "Logo Design",
				},{
					id: "68",
					img: l30,
					title: "Logo Design",
					category: "Logo Design",
				},
				// social media 
				{
					id: "69",
					img: s1,
					title: "Social Media Marketing",
					category: "Social Media Marketing",
				},
				{
					id: "70",
					img: s2,
					title: "Social Media Marketing",
					category: "Social Media Marketing",
				},{
					id: "72",
					img: s3,
					title: "Social Media Marketing",
					category: "Social Media Marketing",
				},{
					id: "73",
					img: s4,
					title: "Social Media Marketing",
					category: "Social Media Marketing",
				},{
					id: "74",
					img: s5,
					title: "Social Media Marketing",
					category: "Social Media Marketing",
				},{
					id: "75",
					img: s6,
					title: "Social Media Marketing",
					category: "Social Media Marketing",
				},
			],
		};
	},
	methods: {
		handleCategoryItem(value) {
			this.activeCategory = value;
			this.perView = this.perView;
			if (value === "All") {
				this.portfolio_items = this.portfolio_data;
			} else {
				this.portfolio_items = this.portfolio_data.filter(
					(item) => item.category === value
				);
			}
		},
		// handleLoadMore
		handleLoadMore() {
			this.perView = this.perView + 3;
		},
	},
	created() {
		this.categories = [
			"All",
			...new Set(this.portfolio_data.map((item) => item.category)),
		];
		this.portfolio_items = this.portfolio_data;
	},
};
</script>

 