import Revenue from "../components/Revenue";
import Order from "../components/Order";
import OrderTime from "../components/OrderTime";
import Rating from "../components/Rating";
import MostOrderedFood from "../components/MostOrderedFood";

export default function Dashboard() {
  return (
    <div className="bg-white h-[80vh] w-full space-y-6">
      <h1 className="text-2xl font-bold text-[#1F384C]">Dashboard</h1>
      <section>
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Revenue />
          </div>
          <OrderTime />
        </div>
      </section>
      <section>
        {/* Bottom section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Rating />
          <MostOrderedFood />
          <Order />
        </div>
      </section>
    </div>
  );
}
