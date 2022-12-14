import {
	GitHubIcon,
	InstagramIcon,
	TwitterIcon,
	LinkedinIcon,
} from "./icons/icons";

function Socials() {
	return (
		<div className="w-fit flex md:space-y-0 space-y-4 md:space-x-4 md:flex-row flex-col ">
			<a
				href="https://github.com/varun-raana"
				target={"_blank"}
				rel="noreferrer"
				className="flex items-center md:justify-center text-sm relative text-skin-light font-black  group hover:text-skin-light">
				<span className="inline-block">
					<span className="absolute -bottom-1 left-0 bg-skin-normal h-[1.5px] w-0  group-hover:w-full transition-all duration-300 ease-in"></span>
					<GitHubIcon />
				</span>
				<span>GitHub</span>
			</a>
			<a
				href="https://linkedin.com/in/varunranaa"
				target={"_blank"}
				rel="noreferrer"
				className="flex items-center md:justify-center text-sm relative text-skin-light font-black  group hover:text-skin-light">
				<span className="inline-block">
					<span className="absolute -bottom-1 left-0 bg-skin-normal h-[1.5px] w-0  group-hover:w-full transition-all duration-300 ease-in"></span>
					<LinkedinIcon />
				</span>
				<span>Linkedin</span>
			</a>
			<a
				href="https://twitter.com/Varun_Ranaa"
				target={"_blank"}
				rel="noreferrer"
				className="flex items-center md:justify-center text-sm relative text-skin-light font-black  group hover:text-skin-light">
				<span className="inline-block">
					<span className="absolute -bottom-1 left-0 bg-skin-normal h-[1.5px] w-0  group-hover:w-full transition-all duration-300 ease-in"></span>
					<TwitterIcon />
				</span>
				<span>Twitter</span>
			</a>
			<a
				href="https://www.instagram.com/varun8048/"
				target={"_blank"}
				rel="noreferrer"
				className="flex items-center md:justify-center text-sm relative text-skin-light font-black  group hover:text-skin-light">
				<span className="inline-block">
					<span className="absolute -bottom-1 left-0 bg-skin-normal h-[1.5px] w-0  group-hover:w-full transition-all duration-300 ease-in"></span>
					<InstagramIcon />
				</span>
				<span>Instagram</span>
			</a>
		</div>
	);
}

export default Socials;
