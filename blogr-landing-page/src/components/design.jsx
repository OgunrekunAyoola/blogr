import React from "react";
import EditorDesktop from "../assets/images/illustration-editor-desktop.svg";
import EditorMobile from "../assets/images/illustration-editor-mobile.svg";

const Editor = () => {
	return (
		<div className="flex flex-col align-center justify-center mx-[7vw]">
			<div className="pt-7 w-auto">
				<h2 className=" align-center justify-center mt-10 w-full text-center text-4xl">
					Designed for the future
				</h2>
			</div>

			<div className="flex flex-col-reverse md:flex-row py-10">
				<div className=" w-auto md:w-[50%] p-6 flex flex-shrink-0 flex-col gap-5 text-center sm:text-start sm:items-center">
					<div>
						<h3 className="title">Introducing an extensible editor.</h3>
						<p className="purpose">
							Blogr features an exceedingly intuitive interface which lets you
							focus on one thing: creating content. The editor supports
							management of multiple blogs and allows easy manipulation of
							embeds such as images, videos, and Markdown. Extensibility with
							plugins and themes provide easy ways to add functionality or
							change the looks of a blog.
						</p>
					</div>
					<div> 
						<h3 className="title">Robust content management.</h3>
						<p className="purpose">
							Flexible content management enables users to easily move through
							posts. Increase the usability of your blog by adding customized
							categories, sections, format, or flow. With this functionality,
							you’re in full control.
						</p>
					</div>
				</div>
				<div className="design-img items-center justify-center">
					<picture className=" w-full item-center">
						<source
							srcSet={EditorDesktop}
							media="(min-width: 768px)"
						/>
						<img
							className="w-[60vw] md-w-full"
							src={EditorMobile}
							alt="Illustration of Blogr's edit"
						/>
					</picture>
				</div>
			</div>
		</div>
	);
};

export default Editor;
