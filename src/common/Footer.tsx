import { mdiChevronUp } from "@mdi/js";
import { NavLinks } from "./Nav";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";

const Footer = () => {
	return (
		<footer className="relative font-proxima">
			<div className="z-10 bg-[#f5f5f5] text-md text-[#757575] relative shadow-dark">
				<div className="relative container mx-auto flex justify-between py-5">
					<Link
						className="hover:text-[#333333] transition-colors duration-200"
						to="/"
					>
						@ 2025 Ahmad Nour Alla
					</Link>
					<div className="flex gap-8">
						{Object.entries(NavLinks).map(([label, link]) => (
							<Link
								className="hover:text-[#333333] transition-colors duration-200"
								to={link}
							>
								{label}
							</Link>
						))}
					</div>
				</div>
			</div>

			<motion.button
				transition={{ ease: "linear", duration: 0.2 }}
				whileHover={{
					translateY: -8,
				}}
				className="z-2 shadow-dark absolute bottom-2 text-white rounded-full w-[7.5rem] h-[7.5rem] mx-auto bg-[#f5f5f5] left-0 right-0"
			>
				<Icon
					style={{ position: "absolute", top: -20, right: 0 }}
					path={mdiChevronUp}
					size={5}
				/>
			</motion.button>
		</footer>
	);
};

export default Footer;
