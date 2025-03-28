import React from "react";
import { EmailIcon, GithubIcon, InstagramIcon, LinkedInIcon, SteamIcon, TwitterIcon } from "../Icons/Icons";

function SocialLinks() {
	return (
		<>
			<ul className="ml-1 mt-8 flex items-center">
				<li className="mr-5 text-xs">
					<a className="block hover:text-slate-200" href="https://github.com/EnkhturBaina" target="_blank">
						<GithubIcon style={{ height: 20, width: 20 }} />
					</a>
				</li>
				<li className="mr-5 text-xs">
					<a
						className="block hover:text-slate-200"
						href="https://steamcommunity.com/profiles/76561198798721628/"
						target="_blank"
					>
						<SteamIcon style={{ height: 20, width: 20 }} />
					</a>
				</li>
				<li className="mr-5 text-xs">
					<a className="block hover:text-slate-200" href="https://www.instagram.com/_xmdcv/" target="_blank">
						<InstagramIcon style={{ height: 20, width: 20 }} />
					</a>
				</li>
				<li className="mr-5 text-xs">
					<a
						className="block hover:text-slate-200"
						href="mailto:sict.etr@gmail.com?subject=Your%Subject%20Text&body=Your%body%20Text"
						target="_blank"
					>
						<EmailIcon style={{ height: 20, width: 20 }} />
					</a>
				</li>
			</ul>
		</>
	);
}

export default SocialLinks;
