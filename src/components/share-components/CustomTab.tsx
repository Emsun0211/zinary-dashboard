import { useState } from "react";
import TableNav from "./TableNav";
import { TransactionTable } from "./TransactionTable";

export function CustomTabs() {
	const [activeTab, setActiveTab] = useState("All");

	const tabs = ["All", "Withdrawal", "Deposit", "Payments"];

  const data = [
    {
      sn: "0000001",
      name: "Tife Balogun",
      email: "tanya.hill@example.com",
      type: "Deposit",
      amount: "₦34,694.145",
      date: "Dec 4, 2019 21:42",
      status: "Successful",
      statusColor: "green",
    },
    {
      sn: "0000002",
      name: "Kelechi Nwosu",
      email: "georgia.young@example.com",
      type: "Withdrawal",
      amount: "₦784,324.34",
      date: "Dec 7, 2019 23:26",
      status: "Failed",
      statusColor: "red",
    },
    {
      sn: "0000003",
      name: "Temi Obadofin",
      email: "deanna.curtis@example.com",
      type: "Payments",
      amount: "₦11,784.22",
      date: "Dec 30, 2019 05:18",
      status: "Pending",
      statusColor: "orange",
    },
  ] 

	return (
		<div className="w-full grid gap-4">
			<div className="flex border-b border-gray-200">
				{tabs.map((tab) => (
					<button
						key={tab}
						onClick={() => setActiveTab(tab)}
						className={`px-4 py-4 text-sm font-medium ${
							activeTab === tab
								? "text-orange-600 border-orange-600 border-b-2"
								: "text-gray-600"
						}`}
					>
						{tab}
					</button>
				))}
			</div>
			<TableNav />

			<div className="mt-4">
				{/* Content based on activeTab */}
				
					
						<div className="">
							<TransactionTable data={activeTab === 'All' ? data :  data.filter( (item) => item.type === activeTab)} />

						</div>
					
				
				
            <div className="bg-[#EC681C] py-2 w-24 mt-10 px-3 rounded-md text-white text-center font-semibold mx-auto">View All</div>
			</div>
		</div>
	);
}

