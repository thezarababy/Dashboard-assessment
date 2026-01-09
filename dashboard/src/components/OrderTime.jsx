import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import Card from "./ui/Card";

const data = [
  { name: "Afternoon", value: 40 },
  { name: "Evening", value: 32 },
  { name: "Morning", value: 28 },
];

const COLORS = ["#6366F1", "#A5B4FC", "#E0E7FF"];

const OrderTime = () => {
  return (
    <Card title="Order Time" action="View Report">
      <p className="text-sm text-gray-500 mb-4">From 1–6 Dec, 2020</p>

      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between text-xs text-gray-500 mt-4">
        {data.map((d) => (
          <span key={d.name}>
            {d.name} {d.value}%
          </span>
        ))}
      </div>
    </Card>
  );
};

export default OrderTime;
