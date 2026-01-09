export default function Sidebar() {
  return (
    <div>
      <div className="flex justify-center">
        <img src="/logo.png" alt="Logo" className="w-24 h-auto mx-auto my-6" />
      </div>
      <section>
        <h1>MENU</h1>
        <div className="flex items-center gap-3 py-2">
          <img src="/Chart.png" alt="" className="w-6 h-6" />
          <h3 className="text-sm">Dashboard</h3>
        </div>
        <div className="flex items-center gap-3 py-2">
          <img src="/Buy.png" alt="" className="w-6 h-6" />
          <h3 className="text-sm">Food Order</h3>
        </div>
        <div className="flex items-center gap-3 py-2">
          <img src="/ManageMenu.png" alt="" className="w-6 h-6" />
          <h3 className="text-sm">Manage Menu</h3>
        </div>
        <div className="flex items-center gap-3 py-2">
          <img src="/CustomerReview.png" alt="" className="w-6 h-6" />
          <h3 className="text-sm">Customer Review</h3>
        </div>
      </section>
      <section>
        <h1>OTHERS</h1>
        <div className="flex items-center gap-3 py-2">
          <img src="/Settings.png" alt="" className="w-6 h-6" />
          <h3 className="text-sm">Settings</h3>
        </div>
        <div className="flex items-center gap-3 py-2">
          <img src="/Payment.png" alt="" className="w-6 h-6" />
          <h3 className="text-sm">Payment</h3>
        </div>
        <div className="flex items-center gap-3 py-2">
          <img src="/Accounts.png" alt="" className="w-6 h-6" />
          <h3 className="text-sm">Accounts</h3>
        </div>
        <div className="flex items-center gap-3 py-2">
          <img src="/Help.png" alt="" className="w-6 h-6" />
          <h3 className="text-sm">Help</h3>
        </div>
      </section>
    </div>
  );
}
