import Sidebar from "../components/Sidebar";
import Header from "../components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main section */}
      <div className="flex flex-col flex-1">
        <Header />
        <hr className="border-gray-200" />

        {/* Page content */}
        <main className="p-6 bg-white overflow-hidden">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
