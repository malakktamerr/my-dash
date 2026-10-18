// import React from 'react';
// import { ResponsiveContainer, AreaChart, Area } from 'recharts';
// import { ArrowUpRight } from 'lucide-react';

// const mockChartData = [
//   { value: 20 },
//   { value: 12 },
//   { value: 30 },
//   { value: 28 },
//   { value: 45 }, // Peak Dot
//   { value: 32 },
//   { value: 38 },
//   { value: 15 },
// ];

// export default function KPICard({ title, value, percentage, icon }) {
//   // دالة لرسم النقطة البرتقالية المميزة أعلى المنحنى مثل الصورة بالضبط
//   const renderCustomDot = (props) => {
//     const { cx, cy, index } = props;
//     if (index === 4) { // أعلى نقطة في الشارت
//       return (
//         <circle
//           key={index}
//           cx={cx}
//           cy={cy}
//           r={4.5}
//           fill="#FF5B24"
//           stroke="#ffffff"
//           strokeWidth={2}
//         />
//       );
//     }
//     return <React.Fragment key={index} />;
//   };

//   return (
//     <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-gray-200 dark:border-slate-800 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden transition-all hover:shadow-md">
      
//       {/* Top Header: Icon on Left & Badge on Right */}
//       <div className="flex items-center justify-between w-full">
//         <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800/80 flex items-center justify-center text-gray-800 dark:text-slate-200">
//           {icon}
//         </div>

//         <div className="flex items-center gap-1 bg-gray-100/80 dark:bg-slate-800/80 text-[#FF5B24] text-xs font-black px-3 py-1.5 rounded-full">
//           <ArrowUpRight size={14} className="stroke-[2.5]" />
//           <span>{percentage}</span>
//         </div>
//       </div>

//       {/* Title & Main Value */}
//       <div className="text-right my-3">
//         <span className="text-xs font-bold text-gray-400 dark:text-slate-400 block mb-1">{title}</span>
//         <h3 className="text-2xl font-black text-gray-900 dark:text-white font-mono tracking-tight">{value}</h3>
//       </div>

//       {/* Orange Smooth Sparkline Chart with Gradient & Dot */}
//       <div className="flex items-end justify-between mt-2 pt-2 border-t border-gray-100 dark:border-slate-800/60">
//         <span className="text-[11px] text-gray-400 dark:text-slate-500 font-medium shrink-0">مقارنة بالشهر الماضي</span>
        
//         <div className="h-12 w-28 shrink-0">
//           <ResponsiveContainer width="100%" height="100%">
//             <AreaChart data={mockChartData} margin={{ top: 6, right: 4, left: 4, bottom: 2 }}>
//               <defs>
//                 <linearGradient id="kpiOrangeGrad" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#FF5B24" stopOpacity={0.35} />
//                   <stop offset="100%" stopColor="#FF5B24" stopOpacity={0.0} />
//                 </linearGradient>
//               </defs>
//               <Area 
//                 type="monotone" 
//                 dataKey="value" 
//                 stroke="#FF5B24" 
//                 strokeWidth={2.2} 
//                 fill="url(#kpiOrangeGrad)" 
//                 dot={renderCustomDot}
//                 isAnimationActive={true}
//               />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//     </div>
//   );
// }


// import React from 'react';
// import { ResponsiveContainer, AreaChart, Area } from 'recharts';
// import { ArrowUpRight } from 'lucide-react';

// const mockChartData = [
//   { value: 20 },
//   { value: 12 },
//   { value: 30 },
//   { value: 28 },
//   { value: 45 },
//   { value: 32 },
//   { value: 38 },
//   { value: 15 },
// ];

// export default function KPICard({ title, value, percentage, icon }) {
//   const renderCustomDot = (props) => {
//     const { cx, cy, index } = props;
//     if (index === 4) {
//       return (
//         <circle
//           key={index}
//           cx={cx}
//           cy={cy}
//           r={4}
//           fill="#FF5B24"
//           stroke="#ffffff"
//           strokeWidth={2}
//         />
//       );
//     }
//     return <React.Fragment key={index} />;
//   };

//   return (
//     <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-slate-800 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex flex-col justify-between w-full overflow-hidden transition-all hover:shadow-md">
      
//       {/* Top Header */}
//       <div className="flex items-center justify-between w-full mb-2">
//         <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-slate-800/80 flex items-center justify-center text-gray-800 dark:text-slate-200 shrink-0">
//           {icon}
//         </div>

//         <div className="flex items-center gap-1 bg-gray-100/80 dark:bg-slate-800/80 text-[#FF5B24] text-[11px] sm:text-xs font-black px-2.5 py-1 rounded-full">
//           <ArrowUpRight size={12} className="stroke-[2.5]" />
//           <span>{percentage}</span>
//         </div>
//       </div>

//       {/* Value & Title */}
//       <div className="text-right my-2">
//         <span className="text-[11px] sm:text-xs font-bold text-gray-400 dark:text-slate-400 block mb-0.5">{title}</span>
//         <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white font-mono tracking-tight">{value}</h3>
//       </div>

//       {/* Bottom Sparkline Area */}
//       <div className="flex items-end justify-between mt-2 pt-2 border-t border-gray-100 dark:border-slate-800/60 gap-2">
//         <span className="text-[10px] sm:text-[11px] text-gray-400 dark:text-slate-500 font-medium shrink-0 leading-tight">مقارنة بالشهر الماضي</span>
        
//         <div className="h-10 sm:h-12 w-20 sm:w-28 shrink-0">
//           <ResponsiveContainer width="100%" height="100%">
//             <AreaChart data={mockChartData} margin={{ top: 4, right: 2, left: 2, bottom: 2 }}>
//               <defs>
//                 <linearGradient id="kpiOrangeGrad" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#FF5B24" stopOpacity={0.35} />
//                   <stop offset="100%" stopColor="#FF5B24" stopOpacity={0.0} />
//                 </linearGradient>
//               </defs>
//               <Area 
//                 type="monotone" 
//                 dataKey="value" 
//                 stroke="#FF5B24" 
//                 strokeWidth={2} 
//                 fill="url(#kpiOrangeGrad)" 
//                 dot={renderCustomDot}
//                 isAnimationActive={true}
//               />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//     </div>
//   );
// }



import React from 'react';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import { ArrowUpRight } from 'lucide-react';

const mockChartData = [
  { value: 20 },
  { value: 12 },
  { value: 30 },
  { value: 28 },
  { value: 45 },
  { value: 32 },
  { value: 38 },
  { value: 15 },
];

export default function KPICard({ title, value, percentage, icon }) {
  const renderCustomDot = (props) => {
    const { cx, cy, index } = props;
    if (index === 4) {
      return (
        <circle
          key={index}
          cx={cx}
          cy={cy}
          r={4.5}
          fill="#FF5B24"
          stroke="#ffffff"
          strokeWidth={2}
        />
      );
    }
    return <React.Fragment key={index} />;
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-gray-300 dark:border-slate-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between w-full overflow-hidden transition-all hover:shadow-md">
      
      {/* Top Header */}
      <div className="flex items-center justify-between w-full mb-2">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-slate-800/80 flex items-center justify-center text-gray-800 dark:text-slate-200 shrink-0">
          {icon}
        </div>

        <div className="flex items-center gap-1 bg-gray-100/80 dark:bg-slate-800/80 text-[#FF5B24] text-[11px] sm:text-xs font-black px-2.5 py-1 rounded-full">
          <ArrowUpRight size={12} className="stroke-[2.5]" />
          <span>{percentage}</span>
        </div>
      </div>

      {/* Value & Title */}
      <div className="text-right my-2">
        <span className="text-[11px] sm:text-xs font-bold text-gray-500 dark:text-slate-400 block mb-0.5">{title}</span>
        <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white font-mono tracking-tight">{value}</h3>
      </div>

      {/* Bottom Sparkline Area */}
      <div className="flex items-end justify-between mt-2 pt-2 border-t border-gray-200 dark:border-slate-800/60 gap-2">
        <span className="text-[10px] sm:text-[11px] text-gray-400 dark:text-slate-500 font-medium shrink-0 leading-tight">مقارنة بالشهر الماضي</span>
        
        <div className="h-10 sm:h-12 w-20 sm:w-28 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockChartData} margin={{ top: 4, right: 2, left: 2, bottom: 2 }}>
              <defs>
                <linearGradient id="kpiOrangeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF5B24" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#FF5B24" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#FF5B24" 
                strokeWidth={2.2} 
                fill="url(#kpiOrangeGrad)" 
                dot={renderCustomDot}
                isAnimationActive={true}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}