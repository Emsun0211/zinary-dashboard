import { useState } from "react";

const DashboardLayout = () => {
    const [duration, setDuration] = useState('Today');

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-64 bg-white border-r">
                <div className="p-4 bg-orange-500 text-white text-xl font-bold">
                    General Dashboard
                </div>
                <ul className="mt-2">
                    <li className="py-2 px-4 hover:bg-gray-200">Dashboard</li>
                    <li className="py-2 px-4 hover:bg-gray-200">Short Loan</li>
                    <li className="py-2 px-4 hover:bg-gray-200">Installment Loan</li>
                    <li className="py-2 px-4 hover:bg-gray-200">Loans</li>
                    <li className="py-2 px-4 hover:bg-gray-200">Transactions</li>
                    <li className="py-2 px-4 hover:bg-gray-200">Users</li>
                    <li className="py-2 px-4 hover:bg-gray-200">Payments</li>
                    <li className="py-2 px-4 bg-orange-200">Wallet</li>
                    <li className="py-2 px-4 hover:bg-gray-200">Staff</li>
                    <li className="py-2 px-4 hover:bg-gray-200">Audit Trail</li>
                    <li className="py-2 px-4 hover:bg-gray-200">Settings</li>
                </ul>
                <div className="p-4">
                    <img src="your-image-url" alt="Decorative" className="w-full h-auto" />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">WalletOverview</h1>
                    <div className="flex items-center">
                        <span>Sarah Shaibu</span>
                        <select
                            className="ml-4 border rounded p-2"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        >
                            <option>Today</option>
                            <option>This Week</option>
                            <option>This Month</option>
                        </select>
                    </div>
                </div>

                {/* Overview Cards */}
                <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-4 rounded shadow">
                        <p>Total Withdrawals</p>
                        <p className="text-orange-500">₦3,402,300</p>
                        <p>722 Cases</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <p>Total Deposits</p>
                        <p className="text-orange-500">₦3,402,300</p>
                        <p>722 Cases</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <p>Total Payments</p>
                        <p className="text-orange-500">₦3,402,300</p>
                        <p>722 Cases</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <p>Total Commission</p>
                        <p className="text-orange-500">₦3,402,300</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <p>Total Amount</p>
                        <p className="text-orange-500">₦3,402,300</p>
                    </div>
                </div>

                {/* Real-Time Update Chart */}
                <div className="bg-white p-4 rounded shadow mb-6" style={{ width: '570px', height: '342px' }}>
                    <p>Real-Time Update</p>
                    {/* Chart placeholder */}
                    <div className="h-full w-full flex items-center justify-center">
                        Chart Placeholder
                    </div>
                </div>

                {/* Transactions Table */}
                <div className="bg-white p-4 rounded shadow">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <button className="px-4 py-2 border rounded">All</button>
                            <button className="px-4 py-2 border rounded ml-2">Withdrawals</button>
                            <button className="px-4 py-2 border rounded ml-2">Deposits</button>
                            <button className="px-4 py-2 border rounded ml-2">Payments</button>
                        </div>
                        <input type="text" placeholder="Search" className="border rounded p-2" />
                    </div>
                    <table className="w-full text-left">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">S/N</th>
                                <th className="border px-4 py-2">Name</th>
                                <th className="border px-4 py-2">Transaction Reference</th>
                                <th className="border px-4 py-2">Type</th>
                                <th className="border px-4 py-2">Amount</th>
                                <th className="border px-4 py-2">Date</th>
                                <th className="border px-4 py-2">Status</th>
                                <th className="border px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">0000001</td>
                                <td className="border px-4 py-2">Tife Balogun</td>
                                <td className="border px-4 py-2">tanya.hill@example.com</td>
                                <td className="border px-4 py-2">Deposit</td>
                                <td className="border px-4 py-2">₦34,694,145</td>
                                <td className="border px-4 py-2">Dec 4, 2019 21:42</td>
                                <td className="border px-4 py-2 text-green-500">Successful</td>
                                <td className="border px-4 py-2">
                                    <button className="px-4 py-2 border rounded bg-orange-500 text-white">View</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">0000001</td>
                                <td className="border px-4 py-2">Kelechi Nwosu</td>
                                <td className="border px-4 py-2">georgia.young@example.com</td>
                                <td className="border px-4 py-2">Withdrawal</td>
                                <td className="border px-4 py-2">₦784,324.34</td>
                                <td className="border px-4 py-2">Dec 7, 2019 23:26</td>
                                <td className="border px-4 py-2 text-red-500">Failed</td>
                                <td className="border px-4 py-2">
                                    <button className="px-4 py-2 border rounded bg-orange-500 text-white">View</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">0000001</td>
                                <td className="border px-4 py-2">Temi Obadofin</td>
                                <td className="border px-4 py-2">deanna.curtis@example.com</td>
                                <td className="border px-4 py-2">Payments</td>
                                <td className="border px-4 py-2">₦11,784.22</td>
                                <td className="border px-4 py-2">Dec 30, 2019 05:18</td>
                                <td className="border px-4 py-2 text-yellow-500">Pending</td>
                                <td className="border px-4 py-2">
                                    <button className="px-4 py-2 border rounded bg-orange-500 text-white">View</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex justify-center mt-4">
                        <button className="px-4 py-2 border rounded bg-orange-500 text-white">View All</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;