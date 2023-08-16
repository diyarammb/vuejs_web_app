export default {
	data() {
		return {
			menuData: [
				{
					id: 1,
					hasDropdown: false,
					title: "Home",
					link: "/",
					 
				},
				{
					id: 5,
					title: "Services",
					hasDropdown: true,
					megaMenu: true,
					link: "services",

					mega_menus: [
						{
							title: "Web development and design",
							link: "/services",
							submenus: [
								 
								{ title: "Website Maintenance & Support Services", link: "/websitemaintain" },
								{ title: "Front-end Development", link: "/front_end_development" },
								{ title: "Back-end Development", link: "/Back_end_Development" },
							],
						},
						{
							title: "Mobile Application development",
							link: "/mobile_application_development",
							submenus: [
								{ title: "Native App Development", link: "/native_app_development" },
								{ title: "Hybrid App Development", link: "/hybrid_app_development" },
								{ title: "Gaming App Development", link: "/gaming_app_development" }
							],
						},
						{
							title: "Custom Software Development",
							link: "custom_software_development",
							submenus: [
								{ title: "Enterprise Software Development", link: "enterprise_software_development" },
								{ title: "Cloud Application Development", link: "cloud_application_development" },
								{ title: "API Development", link: "api_development" },
								 
							],
						},
						{
							title: "Digital Marketing",
							link: "digital_marketing",
							submenus: [
								{ title: "Search Engine Optimization (SEO", link: "search_engine_optimization" },
								{ title: "Social Media Marketing", link: "social_media_marketing" },
								{ title: "Content Marketing", link: "content_marketing" },
								{ title: "Email Marketing", link: "email_marketing" },
								{ title: "Search Engine Marketing (SEM)", link: "search_engine_marketing" },
								{ title: "Influencer Marketing", link: "influencer_marketing" }, 
							],
						},
						{
							title: "Branding and Graphics Services",
							link: "#",
							submenus: [
								// { title: "Branding and Graphics Services", link: "contact-2" },
								{ title: " Brand Identity", link: "brand_identity" },
								{ title: "Logo Design", link: "logo_design" },
								{ title: "UI/UX Design", link: "ui_ux_design" },
								{ title: "Packaging Design", link: "packaging_design" } 
							],
						},
					],
				},

				{
					id: 3,
					hasDropdown: false,
					title: "Our Work",
					link: "/portfolio",
				
				},
				{
					id: 4,
					hasDropdown: false,
					title: "Insights",
					link: "/blog",
					
				},

				{
					id: 2,
					title: "About Us",
					hasDropdown: true,

					submenus: [
						{ title: "Vision and mission ", link: "/#" },
						{ title: "Our story ", link: "/#" },
						{ title: " Privacy policy", link: "/policy" },
						{ title: "Testinomials ", link: "/elements-testimonial" },
						{ title: "FAQS", link: "/faq" },
					],
				},
				{
					id: 6,
					hasDropdown: false,
					title: "Contact",
					link: "/contact",
					// submenus: [
					//   { title: "Contact Agency", link: "/contact" },
					//   { title: "Contact: Classic", link: "/contact-2" },
					// ],
				},
			],
		};
	},
};
