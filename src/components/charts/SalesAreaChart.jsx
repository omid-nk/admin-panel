import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

function SalesAreaChart() {
  const saleData = [
    { name: "Jan", sales: 4200 },
    { name: "Feb", sales: 3020 },
    { name: "Mar", sales: 2000 },
    { name: "Apr", sales: 2780 },
    { name: "May", sales: 1890 },
    { name: "Jun", sales: 4390 },
    { name: "Jul", sales: 6490 },
    { name: "Aug", sales: 7200 },
    { name: "Sep", sales: 9190 },
    { name: "Oct", sales: 8220 },
    { name: "Nov", sales: 10700 },
    { name: "Dec", sales: 8400 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={saleData}
        margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="6 6" stroke="#88888820" />

        <XAxis
          dataKey="name"
          tick={{ fill: "#6b7280", fontSize: 10 }}
          tickLine={false}
        />

        <YAxis
          tick={{ fill: "#6b7280", fontSize: 10 }}
          tickFormatter={(v) => `$${v}`}
          tickLine={false}
          axisLine={false}
        />

        <Tooltip
          formatter={(v) => [`$${v}`]}
          contentStyle={{
            borderRadius: "8px",
            color: "#000",
            backgroundColor: "#fff",
            border: "none",
            fontSize: "10px",
          }}
        />

        <defs>
          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#155dfc" stopOpacity={0.4} />
            <stop offset="80%" stopColor="#155dfc" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area
          type="monotone"
          dataKey="sales"
          stroke="#155dfc"
          strokeWidth={2}
          fill="url(#colorSales)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default SalesAreaChart;
