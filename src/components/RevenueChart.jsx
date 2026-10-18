import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "يناير", revenue: 2100 },
  { month: "فبراير", revenue: 2800 },
  { month: "مارس", revenue: 3200 },
  { month: "أبريل", revenue: 2900 },
  { month: "مايو", revenue: 4100 },
  { month: "يونيو", revenue: 3800 },
  { month: "يوليو", revenue: 5200 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm col-span-2">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-bold text-gray-800">
            الإيرادات مقابل الهدف
          </h3>
          <p className="text-xs text-gray-400">يناير - يوليو 2026</p>
        </div>
        <button className="text-xs text-amber-600 font-semibold hover:underline">
          عرض الكل
        </button>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#f59e0b"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRev)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
