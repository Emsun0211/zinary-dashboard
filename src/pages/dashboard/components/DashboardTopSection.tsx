import React from "react";
import {
	Card,
	CardContent,
	
	CardHeader,

} from "../../../components/ui/card";
import { ChartComponent } from "./DashboardChart";

const transactions = [
	{
		title: "Total Withdrawal",
		amount: 3402300,
		cases: 723,
	},
	{
		title: "Total Deposit",
		amount: 3402300,
		cases: 723,
	},
	{
		title: "Total Payment",
		amount: 3402300,
		cases: 723,
	},
	{
		title: "Total Commision",
		amount: 3402300,
		cases: 723,
	},
	{
		title: "Total Amount",
		amount: 3402300,
		cases: 723,
	},
];

function DashboardTopSection() {
	return (
		<section className="mt-6">
			<div className="grid grid-cols-2 gap-10">
				<div className="grid grid-cols-5 gap-10">
					<div className="grid grid-cols-2 col-span-3 gap-4 bg-white shadow-lg p-3">
						{transactions.slice(0, 4).map((transaction, index) => (
							<Card
								key={index}
								className="bg-[#FFF7E5] text-left border-none"
							>
								<CardHeader>
									<p className="text-[#505050] text-xs font-bold">
										Withdrawals
									</p>
								</CardHeader>
								<CardContent>
									<div>
										<p className="text-[#FF6600] font-bold">
											N{transaction.amount}
										</p>
										<p className="text-xs text-[#505050]">
											{transaction.cases} cases
										</p>
									</div>
								</CardContent>
							</Card>
						))}
						<div className="col-span-2  bg-[#505050] text-white  rounded-md p-3 flex items-center justify-between">
							<p className=" text-xs font-bold">Total Amount</p>
							<p className=" text-sm font-bold">N3,304,200</p>
						</div>
					</div>
					<div className="col-span-2 text-white bg-[#FF6600] py-4 px-4 rounded-lg grid gap-4">
						{transactions?.map((transaction, index) => (
							<div key={index} className="text-left flex flex-col gap-[0.1rem]">
								<p className="text-sm">{transaction?.title}</p>
								<p className="font-bold">{transaction?.amount}</p>
                                {index !== transactions?.length - 1 && <hr  className="bg-white mt-2"/>}
							</div>
						))}
					</div>
				</div>
				<div>
                    <ChartComponent/>
                </div>
			</div>
		</section>
	);
}

export default DashboardTopSection;
