import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import Card from "./ui/Card";

const data = [
  { day: "01", value: 300 },
  { day: "02", value: 450 },
  { day: "03", value: 350 },
  { day: "04", value: 500 },
  { day: "05", value: 420 },
  { day: "06", value: 480 },
  { day: "07", value: 600 },
  { day: "08", value: 520 },
  { day: "09", value: 630 },
  { day: "10", value: 700 },
  { day: "11", value: 670 },
  { day: "12", value: 750 },
];

const Revenue = () => {
  return (
    <Card title="Revenue" subtitle=" IDR 7.852.000" action="View Report">
      <div className="mb-4">
        <p className="text-xs  text-green-600"> ↑ 2.1% vs last week</p>
        <p className="text-sm mt-5">Sales from 1–12 Dec, 2020</p>
      </div>

      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="day" />
            <Tooltip />
            <Bar dataKey="value" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default Revenue;
