import Device from "../assets/images/illustration-laptop-desktop.svg";
import devices from "../assets/images/illustration-laptop-mobile.svg";

const Laptop = () => {
	return (
		<div className="flex flex-row pt-[100px]">
			<div className="">
				<picture className="laptop-img w-full item-center">
					<source
						srcSet={Device}
						media="(min-width: 768px)"
					/>
					<img
						className="w-[60vw] md-w-full"
						src={devices}
						alt="Illustration of Blogr's laptop"
					/>
				</picture>
			</div>
			<div className="items-center h-auto">
				<div>
					<h4 className="title">Free, open, simple</h4>
					<p className="purpose">
						Blogr is a free and open source application backed by a large
						community of helpful developers. It supports features such as code
						syntax highlighting, RSS feeds, social media integration,
						third-party commenting tools, and works seamlessly with Google
						Analytics. The architecture is clean and is relatively easy to
						learn.
					</p>
				</div>
				<div>
					<h4 className="title">Powerful tooling</h4>
					<p className="purpose">
						Batteries included. We built a simple and straightforward CLI tool
						that makes customization and deployment a breeze, but capable of
						producing even the most complicated sites.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Laptop;