import { Outlet } from "react-router-dom";
import Sidebaritems from "./navigationConfig";
import Sidebar from "./Sidebard";
import Navbar from "./NavBar";

const Layout = () => {
	return (
		// <div className="bg-gradient-to-r from-[#023C49] to-[#076B17] min-h-screen h-full w-full flex p-3 gap-10 fixed top-0 left-0">
		<div className="bg-[#F8F8F8]  max-h-screen h-full w-full flex  gap-10 fixed top-0 left-0 font-poppins">
			{/* Sidebar */}
			<div className="w-[18%] hidden h  h-full  lg:block relative">
				<Sidebar items={Sidebaritems} />
			</div>
			{/* Main Content Area */}
			<div className="flex-1 flex flex-col">
				{/* Main Content */}
				<div className="flex-1 p-4 flex-col   overflow-y-auto hide-scrollbar ">
					{/* Navbar */}
					<div className="h-24 sticky top-0">
						<Navbar />
					</div>
                    <div>

					<Outlet />
                    </div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
