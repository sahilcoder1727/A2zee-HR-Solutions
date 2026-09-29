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
	"/logos/Clay-Craft-Logo_-removebg-preview.png",
	"/logos/image-removebg-preview.png",
	"/logos/images-removebg-preview.png",
	"/logos/images__2_-removebg-preview.png",
	"/logos/light.png",
	"/logos/Vivo-Logo.png",
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
		pauseOnHover: true,
		cssEase: "linear",
		rtl,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	});

	const rowGroups = Array.from({ length: Math.ceil(partnersLogos.length / 5) }, (_, rowIndex) =>
		partnersLogos.slice(rowIndex * 5, rowIndex * 5 + 5)
	);

	return (
		<div className="bg-white py-8">
			<h2 className="text-center text-3xl font-semibold mb-6">Our Partners</h2>
			<div className="max-w-5xl mx-auto space-y-6">
				{rowGroups.map((group, rowIndex) => (
					<Slider key={rowIndex} {...sliderSettings(rowIndex % 2 === 0)}>
						{group.map((logo, index) => (
							<div key={`${rowIndex}-${index}`} className="flex justify-center items-center">
								<img
									src={logo}
									alt={`Partner Logo ${rowIndex * 5 + index + 1}`}
									className="h-20 md:h-24 lg:h-28 w-20 md:w-24 lg:w-28 object-contain"
								/>
							</div>
						))}
					</Slider>
				))}
			</div>
		</div>
	);
};

export default OurPartners;
