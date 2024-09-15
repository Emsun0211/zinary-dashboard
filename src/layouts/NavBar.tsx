import { useState } from "react";
import InputWithIcon from "../components/share-components/InputWithIcon";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

function Navbar() {
	const [isDropdownOpen, setISDropdownOpen] = useState(false);
	const handleToggle = () => {
		setISDropdownOpen(!isDropdownOpen);
	};
	return (
		<div className="flex items-center justify-between ">
			<div className="bg-white p-4 rounded-md flex items-center justify-between max-w-7xl w-full">
				<div className="w-3/4">
					<InputWithIcon />
				</div>
				<div className="flex gap-2 items-center text-[#A8A8A8]">
					<div className="flex items-center gap-4">
						<p className="">Sarah Shaibu </p>
						<div>
							<img src="/assets/z-profile.svg" />
						</div>

						<div>
							{!isDropdownOpen ? (
								<MdArrowDropDown size={24} onClick={handleToggle} />
							) : (
								<MdArrowDropUp size={24} onClick={handleToggle} />
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
