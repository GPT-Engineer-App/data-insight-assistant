import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Integrations"
          description="Manage your platform integrations"
          linkTo="/integrations"
        />
        <DashboardCard
          title="Data Connectors"
          description="Configure your data sources"
          linkTo="/data-connectors"
        />
        <DashboardCard
          title="User Management"
          description="Manage users and permissions"
          linkTo="/user-management"
        />
      </div>
    </div>
  );
};

const DashboardCard = ({ title, description, linkTo }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <Button asChild>
      <Link to={linkTo}>Manage</Link>
    </Button>
  </div>
);

export default Dashboard;