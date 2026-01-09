import Sidebar from "./components/Sidebar";
import Header from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        <Header />

        <main className="p-6">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
