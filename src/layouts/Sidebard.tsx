import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
// import { BottomMenu } from "./navigationConfig";

const Sidebar = ({ items }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="bg-white h-full py-2">
			<div className="px-8">
				<div className="bg-orange-500 text-white rounded-lg p-4 flex flex-col  mt-4">
					<div
						className="flex justify-between items-center cursor-pointer"
						onClick={() => setIsOpen(!isOpen)}
					>
						<span className="font-semibold">General</span>
						<TiArrowSortedDown size={18} />
					</div>
					<div className="flex justify-between items-center cursor-pointer">
						<span className="font-semibold">Dashboard</span>
						<TiArrowSortedUp size={18}/>
					</div>
				</div>
			</div>
			<nav className="bg-white  py-4 h-full relative">
				{items.map((item) => (
					<SidebarItem
						key={item.label}
						item={item}
					/>
				))}
			</nav>
		</div>
	);
};

export const SidebarItem = ({ item }) => {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);
	const hasChildren = item.children && item.children.length > 0;
	const isActive =
		location.pathname === item.path || location.pathname.includes(item.path);

	return (
		<div>
			<div
				className={`py-4 text-[14px] px-8 rounded-md flex items-center gap-4 cursor-pointer ${
					isActive
						? "bg-[#FDEFE7] text-[#505050] text-[14px] border-l-[3px] rounded-none border-l-[#FF6600] font-semibold"
						: "bg-white font-[400] text-[#C4C4C4]"
				}  `}
				onClick={() => hasChildren && setIsOpen(!isOpen)}
			>
				<div className={` ${isActive ? "text-[#FF6600]" : "text-[#505050] "} `}>
					{item?.icon}
				</div>

				{item?.path ? (
					<Link
						to={item.path}
						className={` ${
							isActive
								? " text-[#505050] text-[14px] font-[700] "
								: "font-bold "
						} `}
					>
						{item.label}
					</Link>
				) : (
					<p
						to={item.path}
						className={` ${isActive ? " text-[#505050] text-[14px] " : " "} `}
					>
						{item.label}
					</p>
				)}
			</div>
			{hasChildren && isOpen && (
				<div className="ml-4 ">
					{item.children.map((child) => (
						<SidebarItem
							key={child.label}
							item={child}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Sidebar;
