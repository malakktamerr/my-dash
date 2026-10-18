

// import React, { useState, useEffect } from 'react';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';
// import KPICard from './components/KPICard';
// import { 
//   AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell
// } from 'recharts';
// import { 
//   AlertTriangle, CheckCircle2, Circle, ChevronLeft, ChevronRight, Download,
//   TrendingUp, Users, CheckCircle, Clock, Wallet, ArrowUpLeft, Activity
// } from 'lucide-react';
// import { useLanguage } from './i18n/LanguageContext';
// import { useTheme } from './theme/ThemeContext';

// export default function App() {
//   const { t, dir } = useLanguage();
//   const { isDark } = useTheme();
//   const ViewAllIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;
//   const tickColor = isDark ? '#94a3b8' : '#6b7280';
//   const chartStroke = isDark ? '#e2e8f0' : '#000000';
//   const tooltipStyle = {
//     backgroundColor: isDark ? '#0f172a' : '#ffffff',
//     border: isDark ? '1px solid #334155' : '1px solid #e5e7eb',
//     borderRadius: 8,
//     fontSize: 12,
//     color: isDark ? '#e2e8f0' : '#1f2937',
//   };

//   const getText = (keyOrText) => {
//     if (!keyOrText) return '';
//     const translated = t(keyOrText);
//     return translated !== keyOrText ? translated : keyOrText;
//   };

//   const [kpiData, setKpiData] = useState([]);
//   const [revenueData, setRevenueData] = useState([]);
//   const [clientSources, setClientSources] = useState([]);
//   const [cashFlowData, setCashFlowData] = useState([]);
//   const [tasks, setTasks] = useState([]);
//   const [recentActivities, setRecentActivities] = useState([]);
//   const [obligationsData, setObligationsData] = useState({
//     upcoming: [],
//     collections: { total: "4.58", invoicesCount: 5, progress: [] }
//   });
//   const [financialOverview, setFinancialOverview] = useState({
//     revenues: [],
//     expenses: []
//   });

//   useEffect(() => {
//     setKpiData([
//       { id: 'revenue', title: getText('kpiRevenue') || 'إجمالي الإيرادات', val: "4.86", unit: getText('unitEgp') || 'جنيهًا', change: "18.3%+", icon: <TrendingUp size={18} /> },
//       { id: 'leads', title: getText('kpiLeads') || 'العملاء المؤهلون', val: "1,248", unit: "", change: "18.3%+", icon: <Users size={18} /> },
//       { id: 'deals', title: getText('kpiDeals') || 'الصفقات المغلقة', val: "86", unit: "", change: "18.3%+", icon: <CheckCircle size={18} /> },
//       { id: 'conversion', title: getText('kpiConversion') || 'معدل التحويل', val: "18.6%", unit: "", change: "18.3%+", icon: <Activity size={18} /> },
//     ]);

//     setRevenueData([
//       { month: getText('jan') || 'يناير', value: 250 }, { month: getText('feb') || 'فبراير', value: 380 },
//       { month: getText('mar') || 'مارس', value: 480 }, { month: getText('apr') || 'أبريل', value: 420 },
//       { month: getText('may') || 'مايو', value: 600 }, { month: getText('jun') || 'يونيو', value: 550 },
//       { month: getText('jul') || 'يوليو', value: 780 }, { month: getText('aug') || 'أغسطس', value: 700 },
//       { month: getText('sep') || 'سبتمبر', value: 890 }, { month: getText('oct') || 'أكتوبر', value: 820 },
//       { month: getText('nov') || 'نوفمبر', value: 950 }, { month: getText('dec') || 'ديسمبر', value: 900 },
//     ]);

//     setClientSources([
//       { name: getText('sourceDigital') || 'الحملات الرقمية', value: 42, color: '#f59e0b' },
//       { name: getText('sourceReferral') || 'الإحالات', value: 28, color: '#94a3b8' },
//       { name: getText('sourceInbound') || 'الموقع والاتصال', value: 18, color: isDark ? '#64748b' : '#1e293b' },
//       { name: getText('sourceExhibitions') || 'المعارض', value: 12, color: '#ea580c' },
//     ]);

//     setCashFlowData([
//       { month: 'يناير', in: 40, out: 20 }, { month: 'فبراير', in: 55, out: 30 },
//       { month: 'مارس', in: 60, out: 35 }, { month: 'أبريل', in: 50, out: 25 },
//       { month: 'مايو', in: 75, out: 45 }, { month: 'يونيو', in: 80, out: 50 },
//       { month: 'يوليو', in: 65, out: 38 }, { month: 'أغسطس', in: 70, out: 40 },
//       { month: 'سبتمبر', in: 85, out: 55 }, { month: 'أكتوبر', in: 90, out: 60 },
//       { month: 'نوفمبر', in: 95, out: 65 }, { month: 'ديسمبر', in: 100, out: 70 },
//     ]);

//     setTasks([
//       { id: 1, title: 'متابعة أوراق العقد — مشروع الملقا', time: '10:30 ص', done: true },
//       { id: 2, title: 'اجتماع فريق المبيعات الأسبوعي', time: '12:00 م', done: false },
//       { id: 3, title: 'معاينة فيلا C08 مع العميل', time: '02:30 م', done: false },
//       { id: 4, title: 'مراجعة الميزانية التسويقية', time: '04:00 م', done: false },
//     ]);

//     setRecentActivities([
//       { id: 1, title: 'تمت جدول معاينة', subtitle: 'فيلا 3 — تلال الرياض', time: '12 د', type: 'schedule' },
//       { id: 2, title: 'تم تحديث مرحلة صفقة', subtitle: 'شروق السهلي . 420k', time: '38 د', type: 'deal' },
//       { id: 3, title: 'عميل جديد من الإحالة', subtitle: 'نجلاء القحطاني', time: '1 س', type: 'client' },
//     ]);

//     setObligationsData({
//       upcoming: [
//         { id: 1, title: 'اعتماد دفعة مورد التسويق', time: 'اليوم 12:00 م', amount: '128,400 EGP', urgent: true },
//         { id: 2, title: 'انتهاء حجز شقة A-22', time: 'غدا 10:30 ص', amount: '128,400 EGP', urgent: false },
//         { id: 3, title: 'مراجعة أداء مشروع الملقا', time: '25 يوليو - 09:00 ص', amount: '128,400 EGP', urgent: false },
//         { id: 4, title: 'استحقاق فاتورة حملة رقمية', time: '26 يوليو - 02:00 م', amount: '128,400 EGP', urgent: false },
//       ],
//       collections: {
//         total: "4.58",
//         invoicesCount: 5,
//         progress: [
//           { label: 'خلال 7 أيام', amount: '680,000 جنيهًا', percentage: 40 },
//           { label: 'خلال 8 — 14 يوماً', amount: '540,000 جنيهًا', percentage: 30 },
//           { label: 'خلال 15 — 30 يوماً', amount: '640,000 جنيهًا', percentage: 38 },
//         ]
//       }
//     });

//     setFinancialOverview({
//       revenues: [
//         { id: 1, title: 'دفعة حجز — فيلا C08', date: 'اليوم', amount: '570,000 جنيهًا' },
//         { id: 2, title: 'عميل تجريبي 1', date: '04 مايو', amount: '500,000 جنيهًا' },
//       ],
//       expenses: [
//         { id: 1, title: 'حملة إعلانات الملقا', date: 'اليوم', amount: '42,000 جنيهًا' },
//         { id: 2, title: 'خدمات تصوير عقاري', date: 'أمس', amount: '8,500 جنيهًا' },
//       ]
//     });
//   }, [t, isDark]);

//   const handleToggleTask = (taskId) => {
//     setTasks(prevTasks => 
//       prevTasks.map(task => 
//         task.id === taskId ? { ...task, done: !task.done } : task
//       )
//     );
//   };

//   const cardClass = "bg-white dark:bg-slate-900 p-4 sm:p-5 md:p-6 rounded-2xl border border-gray-200 sm:border-gray-300 dark:border-slate-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-none w-full";
//   const headingClass = "text-xs sm:text-sm font-bold text-gray-800 dark:text-slate-100";
//   const currentUserName = getText('userName') || 'محمد العمري';

//   return (
//     <div className="flex min-h-screen w-full bg-[#f8fafc] dark:bg-slate-950 text-gray-800 dark:text-slate-100 font-sans" dir={dir}>
      
//       <Sidebar />

//       <div className="flex-1 flex flex-col min-w-0 w-full min-h-screen">
        
//         <Navbar 
//           userProfile={{ name: currentUserName, role: getText('roleGeneralManager') || 'المدير العام', avatar_initial: getText('userInitial') || 'م' }} 
//           onAddLead={() => console.log('Add Lead')}
//           onSearch={(query) => console.log('Search:', query)}
//         />

//         <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 w-full box-border">
          
//           {/* Header Section */}
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-1">
//             <div>
//               <p className="text-[11px] sm:text-xs text-gray-400">{getText('lastUpdate') || 'الثلاثاء، 22 يوليو 2025 • 9:32 ص'}</p>
//               <h1 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-0.5">
//                 {t('greeting') && !t('greeting').includes('{name}')
//                   ? t('greeting', { name: currentUserName })
//                   : `صباح الخير، ${currentUserName}`}
//               </h1>
//             </div>

//             <div className="flex items-center gap-2 self-start sm:self-auto">
//               <button className="bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-700 dark:text-slate-200 text-xs font-bold px-3.5 py-2 rounded-xl flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
//                 <span>{getText('viewReports') || 'عرض التقارير'}</span>
//               </button>
//               <button className="bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-700 dark:text-slate-200 text-xs font-bold px-3.5 py-2 rounded-xl flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
//                 <Download size={14} />
//                 <span>{getText('exportReport') || 'تصدير'}</span>
//               </button>
//             </div>
//           </div>

//           {/* Section 1: KPI Cards Grid */}
//           <div className="space-y-2.5">
//             <div className="flex items-center justify-between">
//               <h3 className="text-xs sm:text-sm font-bold text-gray-800 dark:text-slate-200">{getText('businessHealth') || 'مؤشرات صحة الأعمال'}</h3>
//               <button className="text-[11px] sm:text-xs font-bold text-gray-500 dark:text-slate-400 hover:underline">{getText('viewAllReports') || 'عرض الكل'}</button>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               {kpiData.map((kpi) => (
//                 <KPICard 
//                   key={kpi.id}
//                   title={kpi.title}
//                   value={kpi.unit ? `${kpi.val} ${kpi.unit}` : kpi.val}
//                   percentage={kpi.change}
//                   icon={kpi.icon}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Section 2: Revenue Chart & Critical Alerts / Recent Activities */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             <div className={`${cardClass} lg:col-span-2 flex flex-col justify-between`}>
//               <div className="flex items-center justify-between mb-3">
//                 <div>
//                   <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">{getText('revenueVsTarget') || 'الإيرادات مقابل الهدف'}</h3>
//                   <p className="text-[11px] sm:text-xs text-gray-400">{getText('revenuePeriod') || 'يناير — يوليو 2026 • بالألف ر.س'}</p>
//                 </div>
//                 <button className="text-[11px] sm:text-xs text-gray-500 dark:text-slate-400 font-semibold flex items-center gap-0.5">{getText('viewAll') || 'عرض الكل'} <ViewAllIcon size={12} /></button>
//               </div>

//               <div className="h-64 sm:h-72 w-full">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <AreaChart data={revenueData}>
//                     <XAxis dataKey="month" tick={{ fontSize: 9, fill: tickColor }} />
//                     <YAxis tick={{ fontSize: 9, fill: tickColor }} orientation={dir === 'rtl' ? 'right' : 'left'} />
//                     <Tooltip contentStyle={tooltipStyle} />
//                     <Area type="monotone" dataKey="value" stroke={chartStroke} strokeWidth={2} fillOpacity={0.08} fill={chartStroke} />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </div>

//               <div className="bg-orange-50/60 dark:bg-orange-950/40 p-3.5 rounded-xl border border-orange-200 dark:border-orange-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-3">
//                 <p className="text-[11px] sm:text-xs text-gray-700 dark:text-slate-200">
//                   الفجوة عن هدف يوليو: EGP 100,000 . لديك 216 صفقة في مرحلة التفاوض
//                 </p>
//                 <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-3.5 py-1.5 rounded-lg transition shrink-0">عرض الصفقات</button>
//               </div>
//             </div>

//             <div className="space-y-6">
//               <div className={cardClass}>
//                 <div className="flex items-center justify-between mb-3">
//                   <h3 className={headingClass}>تنبيهات حرجة</h3>
//                   <button className="text-[11px] text-gray-400 flex items-center gap-0.5 hover:underline">إدارة <ViewAllIcon size={12} /></button>
//                 </div>
//                 <div className="space-y-2.5">
//                   <div className="flex items-start justify-between p-2.5 rounded-xl bg-orange-50/60 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/30">
//                     <div>
//                       <h5 className="text-xs font-bold text-gray-800 dark:text-slate-100">4 حجوزات تنتهي اليوم</h5>
//                       <span className="text-[10px] text-orange-600 dark:text-orange-400 font-semibold">أولوية عالية</span>
//                     </div>
//                     <AlertTriangle size={15} className="text-orange-500 mt-0.5 shrink-0" />
//                   </div>
//                   <div className="flex items-start justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50">
//                     <div>
//                       <h5 className="text-xs font-bold text-gray-800 dark:text-slate-100">فاتورة مورد متأخرة</h5>
//                       <span className="text-[10px] text-gray-400">منذ 3 أيام</span>
//                     </div>
//                     <AlertTriangle size={15} className="text-gray-400 mt-0.5 shrink-0" />
//                   </div>
//                   <div className="flex items-start justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50">
//                     <div>
//                       <h5 className="text-xs font-bold text-gray-800 dark:text-slate-100">انخفاض معدل التحويل</h5>
//                       <span className="text-[10px] text-gray-400">-3.2% هذا الأسبوع</span>
//                     </div>
//                     <AlertTriangle size={15} className="text-gray-400 mt-0.5 shrink-0" />
//                   </div>
//                 </div>
//               </div>

//               <div className={cardClass}>
//                 <div className="flex items-center justify-between mb-3">
//                   <h3 className={headingClass}>آخر الأنشطة</h3>
//                   <button className="text-[11px] text-gray-400 flex items-center gap-0.5 hover:underline">عرض الكل <ViewAllIcon size={12} /></button>
//                 </div>
//                 <div className="space-y-3">
//                   {recentActivities.map((activity) => (
//                     <div key={activity.id} className="flex items-start justify-between gap-2">
//                       <div className="flex items-start gap-2.5 min-w-0">
//                         <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${activity.type === 'deal' ? 'bg-black dark:bg-white' : 'bg-gray-400 dark:bg-slate-500'}`} />
//                         <div className="truncate">
//                           <h5 className="text-xs font-bold text-gray-800 dark:text-slate-100 truncate">{activity.title}</h5>
//                           <p className="text-[10px] text-gray-400 truncate">{activity.subtitle}</p>
//                         </div>
//                       </div>
//                       <span className="text-[10px] text-gray-400 shrink-0">{activity.time}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Section 3: Tasks & Client Sources */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className={cardClass}>
//               <div className="flex items-center justify-between mb-3">
//                 <h3 className={headingClass}>{getText('todayTasks') || 'مهام اليوم'}</h3>
//                 <span className="text-[11px] text-gray-400">{tasks.length} مهام</span>
//               </div>
//               <div className="space-y-2">
//                 {tasks.map(task => (
//                   <div key={task.id} onClick={() => handleToggleTask(task.id)} className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer select-none">
//                     <div className="flex items-center gap-2 min-w-0">
//                       {task.done ? <CheckCircle2 size={15} className="text-black dark:text-white shrink-0" /> : <Circle size={15} className="text-gray-400 dark:text-slate-600 shrink-0" />}
//                       <span className={`text-xs truncate ${task.done ? 'line-through text-gray-400' : 'text-gray-800 dark:text-slate-100 font-medium'}`}>
//                         {task.title}
//                       </span>
//                     </div>
//                     <span className="text-[10px] text-gray-400 shrink-0 mr-1">{task.time}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className={cardClass}>
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className={headingClass}>{getText('clientSources') || 'مصادر العملاء'}</h3>
//               </div>
//               <div className="flex items-center gap-2 h-40">
//                 <ResponsiveContainer width="50%" height="100%">
//                   <PieChart>
//                     <Pie data={clientSources} innerRadius={30} outerRadius={50} paddingAngle={2} dataKey="value">
//                       {clientSources.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={entry.color} />
//                       ))}
//                     </Pie>
//                   </PieChart>
//                 </ResponsiveContainer>
//                 <div className="w-1/2 space-y-1.5 text-xs">
//                   {clientSources.map((s, i) => (
//                     <div key={i} className="flex items-center justify-between gap-1">
//                       <span className="text-gray-500 text-[10px] sm:text-[11px] truncate">{s.name}</span>
//                       <span className="font-bold text-[11px]">{s.value}%</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className={cardClass + " md:col-span-2 lg:col-span-1"}>
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className={headingClass}>{getText('salesTrend') || 'اتجاه المبيعات'}</h3>
//               </div>
//               <div className="h-40 w-full">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <AreaChart data={revenueData.slice(0, 6)}>
//                     <Area type="monotone" dataKey="value" stroke="#ff5b24" fill={isDark ? '#FF4100' : '#eb8a6a'} />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           </div>

//           {/* Section 4: التزامات الأسبوع */}
//           <div className="space-y-3 pt-1">
//             <div className="text-right">
//               <h2 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white">التزامات الأسبوع</h2>
//               <p className="text-[11px] text-gray-400 mt-0.5">ما يحتاج قراراً أو متابعة في الأيام القادمة</p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div className={cardClass + " flex flex-col justify-between"}>
//                 <div>
//                   <div className="flex items-center justify-between mb-3">
//                     <div className="text-right">
//                       <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">الالتزامات القادمة</h3>
//                       <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">مواعيد تحتاج انتباه الإدارة</p>
//                     </div>
//                     <button className="text-[11px] text-gray-500 dark:text-slate-400 font-semibold flex items-center gap-0.5 hover:underline">
//                       <ViewAllIcon size={12} /> التقويم
//                     </button>
//                   </div>

//                   <div className="space-y-2.5">
//                     {obligationsData.upcoming.map((item) => (
//                       <div key={item.id} className="flex items-center justify-between p-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-800/40">
//                         <div className="flex items-center gap-2.5 text-left min-w-0">
//                           <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${item.urgent ? 'bg-orange-50 dark:bg-orange-950/50 text-orange-500' : 'bg-gray-100 dark:bg-slate-800 text-gray-500'}`}>
//                             <Clock size={14} />
//                           </div>
//                           <div className="truncate">
//                             <h5 className="text-xs font-bold text-gray-900 dark:text-white truncate">{item.title}</h5>
//                             <span className="text-[10px] text-gray-400 block">{item.time}</span>
//                           </div>
//                         </div>
//                         <span className="text-xs font-bold text-gray-900 dark:text-white font-mono tracking-tight shrink-0 mr-2">{item.amount}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className={cardClass + " flex flex-col justify-between"}>
//                 <div>
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="text-right">
//                       <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">التحصيلات المستحقة</h3>
//                       <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">متابعة المبالغ المتوقع تحصيلها</p>
//                     </div>
//                     <button className="text-[11px] text-gray-500 dark:text-slate-400 font-semibold flex items-center gap-0.5 hover:underline">
//                       <ViewAllIcon size={12} /> التفاصيل
//                     </button>
//                   </div>

//                   <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
//                     <div className="text-right">
//                       <p className="text-[10px] text-gray-400 mb-0.5">إجمالي مستحق خلال 30 يوماً</p>
//                       <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white font-mono tracking-tight">
//                         EGP {obligationsData.collections.total}
//                       </h3>
//                     </div>
//                     <div>
//                       <span className="inline-block bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full">
//                         {obligationsData.collections.invoicesCount} فواتير تحتاج متابعة
//                       </span>
//                     </div>
//                   </div>

//                   <div className="space-y-4">
//                     {obligationsData.collections.progress.map((item, idx) => (
//                       <div key={idx}>
//                         <div className="flex justify-between text-xs mb-1 font-bold">
//                           <span className="text-gray-400 font-normal text-[11px]">{item.label}</span>
//                           <span className="text-gray-900 dark:text-white font-mono text-[11px]">{item.amount}</span>
//                         </div>
//                         <div className="w-full bg-gray-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
//                           <div 
//                             className={`h-full rounded-full transition-all duration-500 ${idx === 0 ? 'bg-black dark:bg-white' : 'bg-gray-300 dark:bg-slate-600'}`} 
//                             style={{ width: `${item.percentage}%` }}
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Section 5: النظرة المالية */}
//           <div className={cardClass + " space-y-4"}>
//             <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-800 pb-3">
//               <div className="text-right">
//                 <h3 className="text-base sm:text-lg font-black text-gray-900 dark:text-white">النظرة المالية</h3>
//                 <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">السيولة والتحصيل والحركة الأخيرة</p>
//               </div>
//               <button className="text-[11px] text-gray-500 dark:text-slate-400 font-semibold flex items-center gap-0.5 hover:underline">
//                 <ViewAllIcon size={12} /> عرض الكل
//               </button>
//             </div>

//             <div className="flex items-center justify-between">
//               <h4 className="text-xs sm:text-sm font-bold text-gray-800 dark:text-slate-200">التدفق النقدي</h4>
//               <div className="flex items-center gap-3 text-[10px] sm:text-xs text-gray-400">
//                 <div className="flex items-center gap-1">
//                   <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-slate-600 inline-block"></span>
//                   <span>خارج</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <span className="w-2 h-2 rounded-full bg-black dark:bg-white inline-block"></span>
//                   <span>داخل</span>
//                 </div>
//               </div>
//             </div>

//             <div className="h-48 sm:h-60 w-full">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={cashFlowData} barGap={3}>
//                   <XAxis dataKey="month" tick={{ fontSize: 9, fill: tickColor }} axisLine={false} tickLine={false} />
//                   <YAxis hide orientation={dir === 'rtl' ? 'right' : 'left'} />
//                   <Tooltip contentStyle={tooltipStyle} />
//                   <Bar dataKey="in" fill={isDark ? '#e2e8f0' : '#111827'} radius={[3, 3, 0, 0]} barSize={8} />
//                   <Bar dataKey="out" fill={isDark ? '#475569' : '#cbd5e1'} radius={[3, 3, 0, 0]} barSize={8} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-3 border-t border-gray-200 dark:border-slate-800">
//               <div className="space-y-2.5">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-1 text-right">
//                      <span className="text-xs font-bold text-gray-900 dark:text-white">أحدث الإيرادات</span>
//                      <ArrowUpLeft size={14} className="text-gray-400" />
//                   </div>
//                   <button className="text-[11px] text-gray-500 dark:text-slate-400 font-semibold hover:underline">عرض الكل</button>
//                 </div>

//                 <div className="space-y-2">
//                   {financialOverview.revenues.map((item) => (
//                     <div key={item.id} className="flex items-center justify-between p-2.5 rounded-xl border-r-4 border-r-gray-300 dark:border-r-slate-600 bg-gray-50/50 dark:bg-slate-800/40">
//                       <div className="text-right truncate min-w-0">
//                         <h5 className="text-xs font-bold text-gray-800 dark:text-slate-200 truncate">{item.title}</h5>
//                         <span className="text-[10px] text-gray-400 block">{item.date}</span>
//                       </div>
//                       <span className="text-xs font-bold text-gray-900 dark:text-white font-mono shrink-0 mr-2">{item.amount}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-2.5">
//                <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-1 text-right">
//                      <span className="text-xs font-bold text-gray-900 dark:text-white">أحدث المصروفات</span>
//                      <Wallet size={14} className="text-gray-400" />
//                    </div>
//                    <button className="text-[11px] text-gray-500 dark:text-slate-400 font-semibold hover:underline">عرض الكل</button>
//                </div>

//                 <div className="space-y-2">
//                   {financialOverview.expenses.map((item) => (
//                    <div key={item.id} className="flex items-center justify-between p-2.5 rounded-xl border-r-4 border-r-black dark:border-r-white bg-gray-50/50 dark:bg-slate-800/40">
//                       <div className="text-right truncate min-w-0">
//                          <h5 className="text-xs font-bold text-gray-800 dark:text-slate-200 truncate">{item.title}</h5>
//                          <span className="text-[10px] text-gray-400 block">{item.date}</span>
//                       </div>
//                        <span className="text-xs font-bold text-gray-900 dark:text-white font-mono shrink-0 mr-2">{item.amount}</span>
//                      </div>
//                    ))}
//                 </div>
//                </div>
//             </div>
//           </div>

//         </main>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import KPICard from './components/KPICard';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import { 
  AlertTriangle, CheckCircle2, Circle, ChevronLeft, ChevronRight, Download,
  TrendingUp, Users, CheckCircle, Clock, Wallet, ArrowUpLeft, Activity
} from 'lucide-react';
import { useLanguage } from './i18n/LanguageContext';
import { useTheme } from './theme/ThemeContext';

export default function App() {
  const { t, dir } = useLanguage();
  const { isDark } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const ViewAllIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;
  const tickColor = isDark ? '#94a3b8' : '#6b7280';
  const chartStroke = isDark ? '#e2e8f0' : '#000000';
  const tooltipStyle = {
    backgroundColor: isDark ? '#0f172a' : '#ffffff',
    border: isDark ? '1px solid #334155' : '1px solid #e5e7eb',
    borderRadius: 8,
    fontSize: 12,
    color: isDark ? '#e2e8f0' : '#1f2937',
  };

  const getText = (keyOrText) => {
    if (!keyOrText) return '';
    const translated = t(keyOrText);
    return translated !== keyOrText ? translated : keyOrText;
  };

  const [kpiData, setKpiData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [clientSources, setClientSources] = useState([]);
  const [cashFlowData, setCashFlowData] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);
  const [obligationsData, setObligationsData] = useState({
    upcoming: [],
    collections: { total: "4.58", invoicesCount: 5, progress: [] }
  });
  const [financialOverview, setFinancialOverview] = useState({
    revenues: [],
    expenses: []
  });

  useEffect(() => {
    setKpiData([
      { id: 'revenue', title: getText('kpiRevenue') || 'إجمالي الإيرادات', val: "4.86", unit: getText('unitEgp') || 'جنيهًا', change: "18.3%+", icon: <TrendingUp size={18} /> },
      { id: 'leads', title: getText('kpiLeads') || 'العملاء المؤهلون', val: "1,248", unit: "", change: "18.3%+", icon: <Users size={18} /> },
      { id: 'deals', title: getText('kpiDeals') || 'الصفقات المغلقة', val: "86", unit: "", change: "18.3%+", icon: <CheckCircle size={18} /> },
      { id: 'conversion', title: getText('kpiConversion') || 'معدل التحويل', val: "18.6%", unit: "", change: "18.3%+", icon: <Activity size={18} /> },
    ]);

    setRevenueData([
      { month: getText('jan') || 'يناير', value: 250 }, { month: getText('feb') || 'فبراير', value: 380 },
      { month: getText('mar') || 'مارس', value: 480 }, { month: getText('apr') || 'أبريل', value: 420 },
      { month: getText('may') || 'مايو', value: 600 }, { month: getText('jun') || 'يونيو', value: 550 },
      { month: getText('jul') || 'يوليو', value: 780 }, { month: getText('aug') || 'أغسطس', value: 700 },
      { month: getText('sep') || 'سبتمبر', value: 890 }, { month: getText('oct') || 'أكتوبر', value: 820 },
      { month: getText('nov') || 'نوفمبر', value: 950 }, { month: getText('dec') || 'ديسمبر', value: 900 },
    ]);

    setClientSources([
      { name: getText('sourceDigital') || 'الحملات الرقمية', value: 42, color: '#f59e0b' },
      { name: getText('sourceReferral') || 'الإحالات', value: 28, color: '#94a3b8' },
      { name: getText('sourceInbound') || 'الموقع والاتصال', value: 18, color: isDark ? '#64748b' : '#1e293b' },
      { name: getText('sourceExhibitions') || 'المعارض', value: 12, color: '#ea580c' },
    ]);

    setCashFlowData([
      { month: 'يناير', in: 40, out: 20 }, { month: 'فبراير', in: 55, out: 30 },
      { month: 'مارس', in: 60, out: 35 }, { month: 'أبريل', in: 50, out: 25 },
      { month: 'مايو', in: 75, out: 45 }, { month: 'يونيو', in: 80, out: 50 },
      { month: 'يوليو', in: 65, out: 38 }, { month: 'أغسطس', in: 70, out: 40 },
      { month: 'سبتمبر', in: 85, out: 55 }, { month: 'أكتوبر', in: 90, out: 60 },
      { month: 'نوفمبر', in: 95, out: 65 }, { month: 'ديسمبر', in: 100, out: 70 },
    ]);

    setTasks([
      { id: 1, title: 'متابعة أوراق العقد — مشروع الملقا', time: '10:30 ص', done: true },
      { id: 2, title: 'اجتماع فريق المبيعات الأسبوعي', time: '12:00 م', done: false },
      { id: 3, title: 'معاينة فيلا C08 مع العميل', time: '02:30 م', done: false },
      { id: 4, title: 'مراجعة الميزانية التسويقية', time: '04:00 م', done: false },
    ]);

    setRecentActivities([
      { id: 1, title: 'تمت جدول معاينة', subtitle: 'فيلا 3 — تلال الرياض', time: '12 د', type: 'schedule' },
      { id: 2, title: 'تم تحديث مرحلة صفقة', subtitle: 'شروق السهلي . 420k', time: '38 د', type: 'deal' },
      { id: 3, title: 'عميل جديد من الإحالة', subtitle: 'نجلاء القحطاني', time: '1 س', type: 'client' },
    ]);

    setObligationsData({
      upcoming: [
        { id: 1, title: 'اعتماد دفعة مورد التسويق', time: 'اليوم 12:00 م', amount: '128,400 EGP', urgent: true },
        { id: 2, title: 'انتهاء حجز شقة A-22', time: 'غدا 10:30 ص', amount: '128,400 EGP', urgent: false },
        { id: 3, title: 'مراجعة أداء مشروع الملقا', time: '25 يوليو - 09:00 ص', amount: '128,400 EGP', urgent: false },
        { id: 4, title: 'استحقاق فاتورة حملة رقمية', time: '26 يوليو - 02:00 م', amount: '128,400 EGP', urgent: false },
      ],
      collections: {
        total: "4.58",
        invoicesCount: 5,
        progress: [
          { label: 'خلال 7 أيام', amount: '680,000 جنيهًا', percentage: 40 },
          { label: 'خلال 8 — 14 يوماً', amount: '540,000 جنيهًا', percentage: 30 },
          { label: 'خلال 15 — 30 يوماً', amount: '640,000 جنيهًا', percentage: 38 },
        ]
      }
    });

    setFinancialOverview({
      revenues: [
        { id: 1, title: 'دفعة حجز — فيلا C08', date: 'اليوم', amount: '570,000 جنيهًا' },
        { id: 2, title: 'عميل تجريبي 1', date: '04 مايو', amount: '500,000 جنيهًا' },
      ],
      expenses: [
        { id: 1, title: 'حملة إعلانات الملقا', date: 'اليوم', amount: '42,000 جنيهًا' },
        { id: 2, title: 'خدمات تصوير عقاري', date: 'أمس', amount: '8,500 جنيهًا' },
      ]
    });
  }, [t, isDark]);

  const handleToggleTask = (taskId) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  const cardClass = "bg-white dark:bg-slate-900 p-4 sm:p-5 md:p-6 rounded-2xl border border-gray-200 sm:border-gray-300 dark:border-slate-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-none w-full";
  const headingClass = "text-xs sm:text-sm font-bold text-gray-800 dark:text-slate-100";
  const currentUserName = getText('userName') || 'محمد العمري';

  return (
    <div className="flex min-h-screen w-full bg-[#f8fafc] dark:bg-slate-950 text-gray-800 dark:text-slate-100 font-sans" dir={dir}>
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      <div className="flex-1 flex flex-col min-w-0 w-full min-h-screen">
        
        <Navbar 
          userProfile={{ name: currentUserName, role: getText('roleGeneralManager') || 'المدير العام', avatar_initial: getText('userInitial') || 'م' }} 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <main className="flex-1 p-3 sm:p-5 md:p-6 lg:p-8 space-y-4 sm:space-y-6 max-w-[1600px] mx-auto w-full box-border">
          
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-1">
            <div>
              <p className="text-[11px] sm:text-xs text-gray-400">{getText('lastUpdate') || 'الثلاثاء، 22 يوليو 2025 • 9:32 ص'}</p>
              <h1 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-0.5">
                {t('greeting') && !t('greeting').includes('{name}')
                  ? t('greeting', { name: currentUserName })
                  : `صباح الخير، ${currentUserName}`}
              </h1>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto w-full sm:w-auto">
              <button className="flex-1 sm:flex-initial bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-700 dark:text-slate-200 text-xs font-bold px-3.5 py-2 rounded-xl flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
                <span>{getText('viewReports') || 'عرض التقارير'}</span>
              </button>
              <button className="flex-1 sm:flex-initial bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-700 dark:text-slate-200 text-xs font-bold px-3.5 py-2 rounded-xl flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
                <Download size={14} />
                <span>{getText('exportReport') || 'تصدير'}</span>
              </button>
            </div>
          </div>

          {/* Section 1: KPI Cards Grid */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <h3 className="text-xs sm:text-sm font-bold text-gray-800 dark:text-slate-200">{getText('businessHealth') || 'مؤشرات صحة الأعمال'}</h3>
              <button className="text-[11px] sm:text-xs font-bold text-gray-500 dark:text-slate-400 hover:underline">{getText('viewAllReports') || 'عرض الكل'}</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {kpiData.map((kpi) => (
                <KPICard 
                  key={kpi.id}
                  title={kpi.title}
                  value={kpi.unit ? `${kpi.val} ${kpi.unit}` : kpi.val}
                  percentage={kpi.change}
                  icon={kpi.icon}
                />
              ))}
            </div>
          </div>

          {/* Section 2: Revenue Chart & Critical Alerts / Recent Activities */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className={`${cardClass} lg:col-span-2 flex flex-col justify-between`}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">{getText('revenueVsTarget') || 'الإيرادات مقابل الهدف'}</h3>
                  <p className="text-[11px] sm:text-xs text-gray-400">{getText('revenuePeriod') || 'يناير — يوليو 2026 • بالألف ر.س'}</p>
                </div>
                <button className="text-[11px] sm:text-xs text-gray-500 dark:text-slate-400 font-semibold flex items-center gap-0.5">{getText('viewAll') || 'عرض الكل'} <ViewAllIcon size={12} /></button>
              </div>

              <div className="h-56 sm:h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <XAxis dataKey="month" tick={{ fontSize: 9, fill: tickColor }} />
                    <YAxis tick={{ fontSize: 9, fill: tickColor }} orientation={dir === 'rtl' ? 'right' : 'left'} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Area type="monotone" dataKey="value" stroke={chartStroke} strokeWidth={2} fillOpacity={0.08} fill={chartStroke} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-orange-50/60 dark:bg-orange-950/40 p-3.5 rounded-xl border border-orange-200 dark:border-orange-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-3">
                <p className="text-[11px] sm:text-xs text-gray-700 dark:text-slate-200">
                  الفجوة عن هدف يوليو: EGP 100,000 . لديك 216 صفقة في مرحلة التفاوض
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-3.5 py-1.5 rounded-lg transition shrink-0">عرض الصفقات</button>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className={cardClass}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className={headingClass}>تنبيهات حرجة</h3>
                  <button className="text-[11px] text-gray-400 flex items-center gap-0.5 hover:underline">إدارة <ViewAllIcon size={12} /></button>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between p-2.5 rounded-xl bg-orange-50/60 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/30">
                    <div>
                      <h5 className="text-xs font-bold text-gray-800 dark:text-slate-100">4 حجوزات تنتهي اليوم</h5>
                      <span className="text-[10px] text-orange-600 dark:text-orange-400 font-semibold">أولوية عالية</span>
                    </div>
                    <AlertTriangle size={15} className="text-orange-500 mt-0.5 shrink-0" />
                  </div>
                  <div className="flex items-start justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50">
                    <div>
                      <h5 className="text-xs font-bold text-gray-800 dark:text-slate-100">فاتورة مورد متأخرة</h5>
                      <span className="text-[10px] text-gray-400">منذ 3 أيام</span>
                    </div>
                    <AlertTriangle size={15} className="text-gray-400 mt-0.5 shrink-0" />
                  </div>
                  <div className="flex items-start justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50">
                    <div>
                      <h5 className="text-xs font-bold text-gray-800 dark:text-slate-100">انخفاض معدل التحويل</h5>
                      <span className="text-[10px] text-gray-400">-3.2% هذا الأسبوع</span>
                    </div>
                    <AlertTriangle size={15} className="text-gray-400 mt-0.5 shrink-0" />
                  </div>
                </div>
              </div>

              <div className={cardClass}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className={headingClass}>آخر الأنشطة</h3>
                  <button className="text-[11px] text-gray-400 flex items-center gap-0.5 hover:underline">عرض الكل <ViewAllIcon size={12} /></button>
                </div>
                <div className="space-y-3">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2.5 min-w-0">
                        <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${activity.type === 'deal' ? 'bg-black dark:bg-white' : 'bg-gray-400 dark:bg-slate-500'}`} />
                        <div className="truncate">
                          <h5 className="text-xs font-bold text-gray-800 dark:text-slate-100 truncate">{activity.title}</h5>
                          <p className="text-[10px] text-gray-400 truncate">{activity.subtitle}</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-gray-400 shrink-0">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Tasks & Client Sources */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className={cardClass}>
              <div className="flex items-center justify-between mb-3">
                <h3 className={headingClass}>{getText('todayTasks') || 'مهام اليوم'}</h3>
                <span className="text-[11px] text-gray-400">{tasks.length} مهام</span>
              </div>
              <div className="space-y-2">
                {tasks.map(task => (
                  <div key={task.id} onClick={() => handleToggleTask(task.id)} className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer select-none">
                    <div className="flex items-center gap-2 min-w-0">
                      {task.done ? <CheckCircle2 size={15} className="text-black dark:text-white shrink-0" /> : <Circle size={15} className="text-gray-400 dark:text-slate-600 shrink-0" />}
                      <span className={`text-xs truncate ${task.done ? 'line-through text-gray-400' : 'text-gray-800 dark:text-slate-100 font-medium'}`}>
                        {task.title}
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-400 shrink-0 mr-1">{task.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={cardClass}>
              <div className="flex items-center justify-between mb-2">
                <h3 className={headingClass}>{getText('clientSources') || 'مصادر العملاء'}</h3>
              </div>
              <div className="flex items-center gap-2 h-40">
                <ResponsiveContainer width="50%" height="100%">
                  <PieChart>
                    <Pie data={clientSources} innerRadius={30} outerRadius={50} paddingAngle={2} dataKey="value">
                      {clientSources.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="w-1/2 space-y-1.5 text-xs">
                  {clientSources.map((s, i) => (
                    <div key={i} className="flex items-center justify-between gap-1">
                      <span className="text-gray-500 text-[10px] sm:text-[11px] truncate">{s.name}</span>
                      <span className="font-bold text-[11px]">{s.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={cardClass + " md:col-span-2 lg:col-span-1"}>
              <div className="flex items-center justify-between mb-2">
                <h3 className={headingClass}>{getText('salesTrend') || 'اتجاه المبيعات'}</h3>
              </div>
              <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData.slice(0, 6)}>
                    <Area type="monotone" dataKey="value" stroke="#ff5b24" fill={isDark ? '#FF4100' : '#eb8a6a'} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Section 4: التزامات الأسبوع */}
          <div className="space-y-3 pt-1">
            <div className="text-right">
              <h2 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white">التزامات الأسبوع</h2>
              <p className="text-[11px] text-gray-400 mt-0.5">ما يحتاج قراراً أو متابعة في الأيام القادمة</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className={cardClass + " flex flex-col justify-between"}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-right">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">الالتزامات القادمة</h3>
                      <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">مواعيد تحتاج انتباه الإدارة</p>
                    </div>
                    <button className="text-[11px] text-gray-500 dark:text-slate-400 font-semibold flex items-center gap-0.5 hover:underline">
                      <ViewAllIcon size={12} /> التقويم
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {obligationsData.upcoming.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-800/40">
                        <div className="flex items-center gap-2.5 text-left min-w-0">
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${item.urgent ? 'bg-orange-50 dark:bg-orange-950/50 text-orange-500' : 'bg-gray-100 dark:bg-slate-800 text-gray-500'}`}>
                            <Clock size={14} />
                          </div>
                          <div className="truncate">
                            <h5 className="text-xs font-bold text-gray-900 dark:text-white truncate">{item.title}</h5>
                            <span className="text-[10px] text-gray-400 block">{item.time}</span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-gray-900 dark:text-white font-mono tracking-tight shrink-0 mr-2">{item.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={cardClass + " flex flex-col justify-between"}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-right">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">التحصيلات المستحقة</h3>
                      <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">متابعة المبالغ المتوقع تحصيلها</p>
                    </div>
                    <button className="text-[11px] text-gray-500 dark:text-slate-400 font-semibold flex items-center gap-0.5 hover:underline">
                      <ViewAllIcon size={12} /> التفاصيل
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
                    <div className="text-right">
                      <p className="text-[10px] text-gray-400 mb-0.5">إجمالي مستحق خلال 30 يوماً</p>
                      <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white font-mono tracking-tight">
                        EGP {obligationsData.collections.total}
                      </h3>
                    </div>
                    <div>
                      <span className="inline-block bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full">
                        {obligationsData.collections.invoicesCount} فواتير تحتاج متابعة
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {obligationsData.collections.progress.map((item, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-xs mb-1 font-bold">
                          <span className="text-gray-400 font-normal text-[11px]">{item.label}</span>
                          <span className="text-gray-900 dark:text-white font-mono text-[11px]">{item.amount}</span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${idx === 0 ? 'bg-black dark:bg-white' : 'bg-gray-300 dark:bg-slate-600'}`} 
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: النظرة المالية */}
          <div className={cardClass + " space-y-4"}>
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-800 pb-3">
              <div className="text-right">
                <h3 className="text-base sm:text-lg font-black text-gray-900 dark:text-white">النظرة المالية</h3>
                <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">السيولة والتحصيل والحركة الأخيرة</p>
              </div>
              <button className="text-[11px] text-gray-500 dark:text-slate-400 font-semibold flex items-center gap-0.5 hover:underline">
                <ViewAllIcon size={12} /> عرض الكل
              </button>
            </div>

            <div className="flex items-center justify-between">
              <h4 className="text-xs sm:text-sm font-bold text-gray-800 dark:text-slate-200">التدفق النقدي</h4>
              <div className="flex items-center gap-3 text-[10px] sm:text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-slate-600 inline-block"></span>
                  <span>خارج</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-black dark:bg-white inline-block"></span>
                  <span>داخل</span>
                </div>
              </div>
            </div>

            <div className="h-48 sm:h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cashFlowData} barGap={3}>
                  <XAxis dataKey="month" tick={{ fontSize: 9, fill: tickColor }} axisLine={false} tickLine={false} />
                  <YAxis hide orientation={dir === 'rtl' ? 'right' : 'left'} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="in" fill={isDark ? '#e2e8f0' : '#111827'} radius={[3, 3, 0, 0]} barSize={8} />
                  <Bar dataKey="out" fill={isDark ? '#475569' : '#cbd5e1'} radius={[3, 3, 0, 0]} barSize={8} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-3 border-t border-gray-200 dark:border-slate-800">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-right">
                     <span className="text-xs font-bold text-gray-900 dark:text-white">أحدث الإيرادات</span>
                     <ArrowUpLeft size={14} className="text-gray-400" />
                  </div>
                  <button className="text-[11px] text-gray-500 dark:text-slate-400 font-semibold hover:underline">عرض الكل</button>
                </div>

                <div className="space-y-2">
                  {financialOverview.revenues.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-2.5 rounded-xl border-r-4 border-r-gray-300 dark:border-r-slate-600 bg-gray-50/50 dark:bg-slate-800/40">
                      <div className="text-right truncate min-w-0">
                        <h5 className="text-xs font-bold text-gray-800 dark:text-slate-200 truncate">{item.title}</h5>
                        <span className="text-[10px] text-gray-400 block">{item.date}</span>
                      </div>
                      <span className="text-xs font-bold text-gray-900 dark:text-white font-mono shrink-0 mr-2">{item.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-right">
                     <span className="text-xs font-bold text-gray-900 dark:text-white">أحدث المصروفات</span>
                     <Wallet size={14} className="text-gray-400" />
                   </div>
                   <button className="text-[11px] text-gray-500 dark:text-slate-400 font-semibold hover:underline">عرض الكل</button>
               </div>

                <div className="space-y-2">
                  {financialOverview.expenses.map((item) => (
                   <div key={item.id} className="flex items-center justify-between p-2.5 rounded-xl border-r-4 border-r-black dark:border-r-white bg-gray-50/50 dark:bg-slate-800/40">
                      <div className="text-right truncate min-w-0">
                         <h5 className="text-xs font-bold text-gray-800 dark:text-slate-200 truncate">{item.title}</h5>
                         <span className="text-[10px] text-gray-400 block">{item.date}</span>
                      </div>
                       <span className="text-xs font-bold text-gray-900 dark:text-white font-mono shrink-0 mr-2">{item.amount}</span>
                     </div>
                   ))}
                </div>
               </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}