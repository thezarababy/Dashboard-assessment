import Sidebar from "../components/Sidebar";
import Header from "../components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar (hidden on small screens) */}
      <aside className="hidden md:block">
        <Sidebar />
      </aside>

      {/* Main section */}
      <div className="flex flex-col flex-1">
        <Header />
        <hr className="border-gray-200" />

        {/* Page content (allow vertical scroll when needed) */}
        <main className="p-6 overflow-y-auto bg-white">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
