import { AiOutlineUserDelete } from "react-icons/ai";
import { CiPercent, CiSettings } from "react-icons/ci";
import { PiMoneyLight, PiWallet } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { TbClipboardList } from "react-icons/tb";

const Sidebaritems = [
	{
		label: "Dashboard",
		path: "/dashboard",
		icon: <RxDashboard size={24}/>,
		children: [
			{
				label: "Short Loan",
		path: "/dashboard/shortloan",
		icon: <RxDashboard size={24}/>,
			},
			{
				label: "Installmental Loan",
		path: "/dashboard/installment",
		icon: <RxDashboard size={24}/>,
			},
		]
		
	},
	{
		label: "Loan",
		path: "/loan",
		icon: <PiMoneyLight size={24}/>,
		
	},
	{
		label: "Transaction",
		path: "/transactions",
		icon: <AiOutlineUserDelete size={24}/>,
		
	},
	{
		label: "Users",
		path: "/users",
		icon: <AiOutlineUserDelete size={24}/>,
		
	},
	{
		label: "Payments",
		path: "/payments",
		icon: <CiPercent size={24}/>,
		
	},
	{
		label: "Wallet",
		path: "/wallet",
		icon: <PiWallet size={24}/>,
		
	},
	{
		label: "Wallet",
		path: "/wallet",
		icon: <TbClipboardList size={24}/>,
		
	},
	{
		label: "Wallet",
		path: "/wallet",
		icon: <TbClipboardList size={24}/>,
		
	},
	{
		label: "Settings",
		path: "/wallet",
		icon: <CiSettings size={24}/>

		
	},
	
];

export default Sidebaritems;


