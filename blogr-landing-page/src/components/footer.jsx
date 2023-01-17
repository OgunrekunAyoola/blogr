import App from "../App";
import Logo from "../assets/images/logo.svg";
import { links } from "/src/constants";

const Footer = () => {
	return (
		<div className="footer-links sm:pt-24 pb-14 mt-40">
			<div className="article">
				<ul className="list-none grid sm:grid-cols-4 justify-center text-center sm:text-left px-6">
					<li className="mx-auto sm:mx-0 py-12 sm:py-0">
						<a href="#">
							<img
								src={Logo}
								alt=""
							/>
						</a>
					</li>
					{links.map((item) => (
						<li
							key={item.id}
							className="font-bold font-ubuntu text-base text-[var(--neutral-clr-400)]"
						>
							{item.title}
							<ul className="list-none my-6">
								{item.links.map((link) => (
									<li
										key={link}
										className="py-1 font-normal font-ubuntu text-base text-[var(--neutral-clr-400)] text-[15px]"
									>
										<a
											className="footer-link max-w-fit"
											href={`#${link.toLowerCase()}`}
										>
											{link}
										</a>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Footer;
