export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[rgb(241,242,247)]">
      <div className="pr-8 pl-15">
        <div className="flex justify-center">
          <img
            src="/Logo.png"
            alt="Logo"
            className="w-24 h-auto mx-auto my-6"
          />
        </div>
      </div>
      <hr className="border-gray-300" />
      <div className="pr-8 pl-15">
        <section>
          <h1 className="pb-5 pt-8  text-gray-500">MENU</h1>
          <div className="flex items-center gap-3 py-3 px-4 bg-[#E6E9F7] rounded-md  mb-3">
            <img src="/Chart.png" alt="" className="w-4.5 h-4.5" />
            <h3 className="text-sm text-[#5A6ACF]">Dashboard</h3>
          </div>
          <div className="flex items-center gap-3 py-2  mb-3">
            <img src="/Buy.png" alt="" className="w-4.5 h-4.5" />
            <h3 className="text-sm text-gray-500">Food Order</h3>
          </div>
          <div className="flex items-center gap-3 py-2  mb-3">
            <img src="/ManageMenu.png" alt="" className="w-4.5 h-4.5 " />
            <h3 className="text-sm text-gray-500">Manage Menu</h3>
          </div>
          <div className="flex items-center gap-3 py-2  mb-3">
            <img src="/CustomerReview.png" alt="" className="w-4.5 h-4.5" />
            <h3 className="text-sm text-gray-500">Customer Review</h3>
          </div>
        </section>
        <section>
          <h1 className="pb-5  text-gray-500">OTHERS</h1>
          <div className="flex items-center gap-3 py-2  mb-3">
            <img src="/Settings.png" alt="" className="w-4.5 h-4.5" />
            <h3 className="text-sm  text-gray-500">Settings</h3>
          </div>
          <div className="flex items-center gap-3 py-2  mb-3">
            <img src="/Payment.png" alt="" className="w-4.5 h-4.5" />
            <h3 className="text-sm text-gray-500">Payment</h3>
          </div>
          <div className="flex items-center gap-3 py-2  mb-3">
            <img src="/Accounts.png" alt="" className="w-4.5 h-4.5" />
            <h3 className="text-sm text-gray-500">Accounts</h3>
          </div>
          <div className="flex items-center gap-3 py-2  mb-3">
            <img src="/Help.png" alt="" className="w-4.5 h-4.5" />
            <h3 className="text-sm text-gray-500">Help</h3>
          </div>
        </section>
      </div>
    </div>
  );
}
