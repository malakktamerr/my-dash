import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function KPICard({ title, value, unit, change, comparison }) {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-500">{title}</span>
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
          <ArrowUpRight size={12} />
          {change}
        </span>
      </div>

      <div className="my-3">
        <div className="text-2xl font-black text-gray-800">
          {value} <span className="text-xs font-normal text-gray-400">{unit}</span>
        </div>
      </div>

      <p className="text-[11px] text-gray-400">{comparison}</p>
    </div>
  );
}