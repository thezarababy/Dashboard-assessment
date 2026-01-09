export default function Navbar() {
  return (
    <header className=" px-6 pb-4  pt-5.5  bg-white">
      <div className="flex items-center justify-between ">
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-1  rounded-md w-156.25 pr-10   bg-[#E6E9F7]"
          />
          <img
            src="/Search.png"
            alt="Search"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
          ></img>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <div className=" h-4 w-4.25">
              <img src="/Burger.png" alt="burger" />
            </div>

            <p className="text-sm">Delicious Burger</p>
            <img src="/Dropdown.png" alt="" className="h-3.5 w-4.5" />
            <img src="/Bell2.png" alt="bell" className="h-4 w-3.25" />
          </div>
        </div>
      </div>
    </header>
  );
}
