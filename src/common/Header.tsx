import { mdiMenu } from "@mdi/js";
import { useState } from "react";
import { MobileNav, DesktopNav } from "./Nav";
import Icon from "@mdi/react";

const Header = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="text-white font-proxima sm:text-lg text-2xl">
			<header className="bg-[#111111] relative z-100 flex items-center">
				<div className="p-5 container mx-auto flex justify-between items-center">
					<div>Logo</div>

					<button
						className="sm:hidden"
						onClick={() => setIsActive(!isActive)}
					>
						<Icon path={mdiMenu} className="w-8 h-8" />
					</button>

					<DesktopNav />
				</div>
			</header>

			<MobileNav isActive={isActive} />
		</div>
	);
};

export default Header;
