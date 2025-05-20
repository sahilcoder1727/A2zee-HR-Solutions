import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partnersLogos = [
	// "/logos/WhatsApp Image 2024-11-22 at 12.17.32 PM.jpeg",
	"/logos/AUTOVIN-LOGO-FULL.png",
	"/logos/BISTRO K&C Logo-01.avif",
	"/logos/ashiana.jpg",
	"/logos/ocean.jpg",
	"/logos/magnot.png",
	"/logos/sanguinerecruitment_logo.jpeg",
	"/logos/untitled-2-120x120.webp",
	"/logos/Untitled-design-10.webp",
	"/logos/revfin.png",
];

const OurPartners = () => {
	const sliderSettings = (rtl = false) => ({
		dots: false,
		infinite: true,
		speed: 3000,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		pauseOnHover: true, // Pauses on hover
		cssEase: "linear",
		rtl, // Slides right-to-left if true
		responsive: [
			{
				breakpoint: 1024, // Tablet
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 768, // Mobile
				settings: {
					slidesToShow: 3,
				},
			},
		],
	});

	return (
		<div className="bg-white py-8">
			<h2 className="text-center text-3xl font-semibold mb-6">Our Partners</h2>
			<div className="max-w-5xl mx-auto space-y-6">
				{/* First Row: Sliding Right-to-Left */}
				<Slider {...sliderSettings(true)}>
					{partnersLogos.slice(0, 5).map((logo, index) => (
						<div key={index} className="flex justify-center items-center">
							<img
								src={logo}
								alt={`Partner Logo ${index + 1}`}
								className="h-20 md:h-24 lg:h-28 w-20 md:w-24 lg:w-28 object-contain"
							/>
						</div>
					))}
				</Slider>

				{/* Second Row: Sliding Left-to-Right */}
				<Slider {...sliderSettings(false)}>
					{partnersLogos.slice(5, 10).map((logo, index) => (
						<div key={index} className="flex justify-center items-center">
							<img
								src={logo}
								alt={`Partner Logo ${index + 6}`}
								className="h-20 md:h-24 lg:h-28 w-20 md:w-24 lg:w-28 object-contain"
							/>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default OurPartners;
