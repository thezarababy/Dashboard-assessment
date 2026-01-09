import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import Card from "./ui/Card";

const data = [
  { day: "01", value: 30 },
  { day: "02", value: 25 },
  { day: "03", value: 40 },
  { day: "04", value: 35 },
  { day: "05", value: 50 },
];

const Order = () => {
  return (
    <Card title="Order" action="View Report">
      <p className="text-xl font-semibold">2.568</p>
      <p className="text-sm text-red-500 mb-2">↓ 2.1% vs last week</p>
      <p>sales from 1-6 dec, 2020</p>

      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <Tooltip />
            <Line type="monotone" dataKey="value" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default Order;
