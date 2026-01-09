import Sidebar from "../components/Sidebar";
import Header from "../components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main section */}
      <div className="flex flex-col flex-1">
        <Header />

        {/* Page content */}
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
