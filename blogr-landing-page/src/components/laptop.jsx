import Device from "../assets/images/illustration-laptop-desktop.svg";
import devices from "../assets/images/illustration-laptop-mobile.svg";

const Laptop = () => {
	return (
		<div className="flex flex-col sm:flex-row text-center sm:text-left py-16 sm:pt-20 sm:pb-32 items-center">
			<div className="laptop-img items-center justify-center">
				<picture className=" w-full item-center">
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
			<div className="items-center pb-15 pt-10 h-auto w-auto sm:w-[50%] p-6 flex flex-shrink-0 flex-col gap-5 text-center sm:text-start sm:items-center">
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