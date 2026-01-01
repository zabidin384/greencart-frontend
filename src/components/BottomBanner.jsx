import { assets, features } from "../assets/assets";

const BottomBanner = () => {
	return (
		<div className="relative mt-24">
			<img src={assets.bottom_banner_image} alt="banner" className="w-full hidden lg:block" />
			<img src={assets.bottom_banner_image_sm} alt="banner" className="w-full lg:hidden" />

			<div className="absolute inset-0 flex flex-col items-center lg:items-end lg:justify-center pt-16 lg:pt-0 lg:pr-24">
				<div>
					<h1 className="text-2xl sm:text-4xl font-semibold text-primary mb-6">Why We are the Best?</h1>
					{features.map((feature, index) => (
						<div key={index} className="flex items-center gap-4 mt-2">
							<img src={feature.icon} alt={feature.title} className="w-9 lg:w-11" />
							<div>
								<h3 className="text-lg sm:text-2xl font-semibold">{feature.title}</h3>
								<p className="text-gray-500/70 text-sm sm:text-base">{feature.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default BottomBanner;
