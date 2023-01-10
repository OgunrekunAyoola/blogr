import phones from "../assets/images/illustration-phones.svg";

const Infrastructure = () => {
	return (
		<section className="phones">
			<div className="flex flex-col sm:flex-row sm:max-h-[25rem] sm:mt-6 items-center justify-between px-20 text-center sm:text-left">
				<div>
					<img
						className="illustration-phones"
						src={phones}
						alt="img"
					/>
				</div>
				<div>
					<h4 className="title">State of the Art Infrastructure</h4>
					<p className="purpose">
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
