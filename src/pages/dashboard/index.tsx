import React from "react";
import DashboardHeader from "./components/DashboardHeader";
import DashboardTopSection from "./components/DashboardTopSection";
import DashboardTable from "./components/DashboardTable";

function Dashboard() {
	return <div>
        <DashboardHeader />
        <DashboardTopSection />
        <DashboardTable />
    </div>;
}

export default Dashboard;
