import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import saleData from "../../data/saleData";

function AreaChartSection() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={saleData}
        margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

        <XAxis
          dataKey="name"
          tick={{ fill: "#6b7280", fontSize: 12 }}
          tickLine={false}
        />

        <YAxis
          tick={{ fill: "#6b7280", fontSize: 12 }}
          tickFormatter={(v) => `$${v}`}
          tickLine={false}
          axisLine={false}
        />

        <Tooltip
          formatter={(v) => [`$${v}`, "Sales"]}
          contentStyle={{
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
            border: "none",
            fontSize: "13px",
          }}
        />

        <defs>
          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.45} />
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area
          type="monotone"
          dataKey="sales"
          stroke="#6366f1"
          strokeWidth={3}
          fill="url(#colorSales)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default AreaChartSection;
