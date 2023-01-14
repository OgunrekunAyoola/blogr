import phones from "../assets/images/illustration-phones.svg";

const Infrastructure = () => {
	return (
		<section className="phones">
			<div className="flex flex-col sm:flex-row sm:max-h-[25rem] sm:mt-[150px] items-center justify-between px-20 text-center sm:text-left">
				<div>
					<img
						className="illustration-phones"
						src={phones}
						alt="img"
					/>
				</div>
				<div className="sm:ml-12 pb-24 sm:pb-0">
					<h4 className="title-3 font-normal font-overpass tracking-[-1px] text-[var(--neutral-clr-400)]  text-3xl sm:text-[2.425rem] my-1">State of the Art Infrastructure</h4>
					<p className="font-normal font-overpass tracking-[0.0325em] text-[var(--neutral-clr-400)] font-base leading-7 max-w-[56ch] pt-3">
						With reliability and speed in mind, worldwide data centers provide
						the backbone for ultra-fast connectivity. This ensures your site
						will load instantly, no matter where your readers are, keeping your
						site competitive.
					</p>
				</div>
			</div>
		</section>
	);
}; 

export default Infrastructure;
