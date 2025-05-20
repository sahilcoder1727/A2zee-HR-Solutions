import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/imgs/t1.png";
import img6 from "../assets/imgs/test_t1.jpg";
import img7 from "../assets/imgs/test-t2.jpg";
import img2 from "../assets/imgs/t2.jpg";
import img3 from "../assets/imgs/t3.jpeg";
import img4 from "../assets/imgs/t1.jpeg";
import img5 from "../assets/imgs/t5.png";
import img9 from "../assets/imgs/tm2.jpg";
const testimonials = [
	{
		name: "Vinay Mathur",
		role: "CEO at Company",
		testimonial:
			"This is an amazing service that transformed our HR management.",
		image: img1,
	},
	{
		name: "Mrs. Ritu Vijay",
		role: "Director of Sanguine Recruitment Pvt.Ltd",
		testimonial:
			"A2Zee HR SOLUTIONS, especially Devishwari, has significantly streamlined my company's business processes through expert HR policy implementation.",
		image: img9,
	},
	{
		name: "Mr. Neeraj Kumar Singh",
		role: "Creation Buildhime Pvt Ltd",
		testimonial:
			"A2Zee's dedication and expertise, especially through engaging training sessions, have significantly impacted our organization ",

		image: img6,
	},
	{
		name: "dev singh",
		role: " Senior Employee at Enterprise",
		testimonial: "Exceptional service and support. A game changer for us.",
		image: img1,
	},
	{
		name: "Mr. Ram Singh",
		role: "Hytech communications",
		testimonial:
			"I sincerely appreciate A2Zee's exceptional work in enhancing our Performance Management System (PMS), providing top-notch training, and ensuring compliance",
		image: img7,
	},
];

function Testimonial() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="px-8 py-8 space-x-4 bg-gray-100">
			<h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
			<Slider {...settings}>
				{testimonials.map((testimonial, index) => (
					<div
						key={index}
						className="relative flex flex-col px-4  mb-20 rounded-xl space-y-4 mt-28 lg:h-52 bg-white bg-clip-border text-gray-700 shadow-md gap-[10px]"
						style={{ marginRight: "10px" }}

					>
						<div className="relative mx-4 -mt-10 h-20 flex justify-center overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white">
							<img
								src={testimonial.image}
								alt={testimonial.name}
								className="object-cover w-20 h-20 rounded-full border-4 border-white"
							/>
						</div>
						<div className="pt-6 text-center">
							<h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
								{testimonial.name}
							</h5>
							{/* <p className="mb-4 block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
                {testimonial.role}
              </p> */}
							<p className="block font-sans text-base font-light leading-relaxed text-inherit h-40 antialiased">
								"{testimonial.testimonial}"
							</p>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Testimonial;
