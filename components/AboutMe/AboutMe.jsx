import React from "react";

function AboutMe({ route }) {
	return (
		<>
			<section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="about me">
				<div className="text-slate-500">
					<p className=" mb-2">
						<span className="hover-highlight">6+</span> years of experience...{" "}
					</p>
					<p className=" mb-2">
						I am a <span className="hover-highlight">Mobile & Front End developer</span> that based in Ulaanbaatar,
						Mongolia. I enjoy building things that run on the Internet
					</p>
				</div>
			</section>
		</>
	);
}

export default AboutMe;
