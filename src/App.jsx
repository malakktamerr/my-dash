import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import { 
  AlertTriangle, CheckCircle2, Circle, ArrowUpRight, ChevronLeft, ChevronRight, Download
} from 'lucide-react';
import { useLanguage } from './i18n/LanguageContext';
import { useTheme } from './theme/ThemeContext';

export default function App() {
  const { t, dir } = useLanguage();
  const { isDark } = useTheme();
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

  const [userProfile] = useState({
    email: 'm.omari@company.com',
    unread_messages_count: 4,
    unread_notifications_count: 7
  });

  const displayProfile = {
    ...userProfile,
    name: t('userName'),
    role: t('roleGeneralManager'),
    avatar_initial: t('userInitial'),
  };

  const kpiMetrics = [
    { id: 'revenue', title: t('kpiRevenue'), val: "4.86", unit: t('unitEgp'), change: "+18.3%" },
    { id: 'leads', title: t('kpiLeads'), val: "1,248", unit: "", change: "+18.3%" },
    { id: 'deals', title: t('kpiDeals'), val: "86", unit: "", change: "+18.3%" },
    { id: 'conversion', title: t('kpiConversion'), val: "18.6%", unit: "", change: "+18.3%" },
  ];

  const revenueData = [
    { month: t('jan'), value: 250 }, { month: t('feb'), value: 380 },
    { month: t('mar'), value: 480 }, { month: t('apr'), value: 420 },
    { month: t('may'), value: 600 }, { month: t('jun'), value: 550 },
    { month: t('jul'), value: 780 }, { month: t('aug'), value: 700 },
    { month: t('sep'), value: 890 }, { month: t('oct'), value: 820 },
    { month: t('nov'), value: 950 }, { month: t('dec'), value: 900 },
  ];

  const clientSources = [
    { name: t('sourceDigital'), value: 42, color: '#f59e0b' },
    { name: t('sourceReferral'), value: 28, color: '#94a3b8' },
    { name: t('sourceInbound'), value: 18, color: isDark ? '#64748b' : '#1e293b' },
    { name: t('sourceExhibitions'), value: 12, color: '#ea580c' },
  ];

  const cashFlowData = [
    { month: t('jan'), in: 40, out: 20 }, { month: t('feb'), in: 55, out: 30 },
    { month: t('mar'), in: 60, out: 35 }, { month: t('apr'), in: 50, out: 25 },
    { month: t('may'), in: 75, out: 45 }, { month: t('jun'), in: 80, out: 50 },
    { month: t('jul'), in: 65, out: 38 },
  ];

  const [tasks, setTasks] = useState([
    { id: 1, titleKey: 'task1', timeKey: 'time1030', done: true },
    { id: 2, titleKey: 'task2', timeKey: 'time1200', done: false },
    { id: 3, titleKey: 'task3', timeKey: 'time0230', done: false },
    { id: 4, titleKey: 'task4', timeKey: 'time0400', done: false },
  ]);

  const handleToggleTask = (taskId) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleAddLeadClick = () => {
    console.log('Open Lead Modal or trigger API event');
  };

  const cardClass = "bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm";
  const headingClass = "text-sm font-bold text-gray-800 dark:text-slate-100";

  return (
    <div className="flex min-h-screen bg-[#f8fafc] dark:bg-slate-950 text-gray-800 dark:text-slate-100 font-sans" dir={dir}>
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Navbar 
          userProfile={displayProfile} 
          onAddLead={handleAddLeadClick}
          onSearch={(query) => console.log('API Filter Query:', query)}
        />

        <main className="p-6 space-y-6 overflow-y-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400">{t('lastUpdate')}</p>
              <h1 className="text-2xl font-black text-gray-900 dark:text-white mt-1">{t('greeting', { name: displayProfile.name })}</h1>
            </div>

            <div className="flex items-center gap-2">
              <button className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-700 dark:text-slate-200 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm cursor-pointer">
                <span>{t('viewReports')}</span>
              </button>
              <button className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-700 dark:text-slate-200 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm cursor-pointer">
                <Download size={14} />
                <span>{t('exportReport')}</span>
              </button>
              <div className="bg-gray-100 dark:bg-slate-800 p-0.5 rounded-lg flex text-xs font-bold border border-gray-200 dark:border-slate-700">
                <button className="bg-black dark:bg-white text-white dark:text-slate-900 px-3 py-1 rounded-md cursor-pointer">{t('thisMonth')}</button>
                <button className="text-gray-600 dark:text-slate-300 px-3 py-1 hover:text-black dark:hover:text-white cursor-pointer">{t('thisQuarter')}</button>
                <button className="text-gray-600 dark:text-slate-300 px-3 py-1 hover:text-black dark:hover:text-white cursor-pointer">{t('thisYear')}</button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-gray-700 dark:text-slate-200">{t('businessHealth')}</h3>
              <button className="text-[11px] font-bold text-gray-500 dark:text-slate-400 hover:underline cursor-pointer">{t('viewAllReports')}</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {kpiMetrics.map((kpi) => (
                <div key={kpi.id} className={`${cardClass} relative overflow-hidden`}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 dark:text-slate-400 font-medium">{kpi.title}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full font-bold flex items-center gap-0.5">
                      <ArrowUpRight size={12} /> {kpi.change}
                    </span>
                  </div>
                  <div className="my-2">
                    <span className="text-2xl font-black text-gray-900 dark:text-white">{kpi.val}</span>
                    {kpi.unit && <span className="text-xs text-gray-500 dark:text-slate-400 me-1">{kpi.unit}</span>}
                  </div>
                  <p className="text-[10px] text-gray-400">{t('vsLastMonth')}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-6">
              <div className={cardClass}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className={headingClass}>{t('criticalAlerts')}</h3>
                  <button className="text-xs text-gray-400 flex items-center gap-0.5 cursor-pointer">{t('manage')} <ViewAllIcon size={12} /></button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start justify-between p-2 rounded-lg bg-orange-50/50 dark:bg-orange-950/40">
                    <div>
                      <h5 className="text-xs font-bold text-gray-800 dark:text-slate-100">{t('alertBookings')}</h5>
                      <span className="text-[10px] text-orange-600 dark:text-orange-400 font-semibold">{t('highPriority')}</span>
                    </div>
                    <AlertTriangle size={16} className="text-orange-500 mt-0.5" />
                  </div>
                  <div className="flex items-start justify-between p-2 rounded-lg bg-red-50/50 dark:bg-red-950/40">
                    <div>
                      <h5 className="text-xs font-bold text-gray-800 dark:text-slate-100">{t('alertInvoice')}</h5>
                      <span className="text-[10px] text-red-500 dark:text-red-400 font-semibold">{t('daysAgo')}</span>
                    </div>
                    <AlertTriangle size={16} className="text-red-500 mt-0.5" />
                  </div>
                  <div className="flex items-start justify-between p-2 rounded-lg bg-gray-50 dark:bg-slate-800">
                    <div>
                      <h5 className="text-xs font-bold text-gray-800 dark:text-slate-100">{t('alertConversion')}</h5>
                      <span className="text-[10px] text-gray-500 dark:text-slate-400">{t('conversionWeek')}</span>
                    </div>
                    <AlertTriangle size={16} className="text-gray-400 mt-0.5" />
                  </div>
                </div>
              </div>

              <div className={cardClass}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className={headingClass}>{t('recentActivity')}</h3>
                  <button className="text-xs text-gray-400 flex items-center gap-0.5 cursor-pointer">{t('viewAll')} <ViewAllIcon size={12} /></button>
                </div>
                <div className="space-y-3 border-s border-gray-100 dark:border-slate-800 pe-3 ms-1">
                  <div>
                    <span className="text-[10px] text-gray-400 block">{t('minutesAgo12')}</span>
                    <h5 className="text-xs font-bold text-gray-800 dark:text-slate-100">{t('activityPreview')}</h5>
                    <p className="text-[11px] text-gray-500 dark:text-slate-400">{t('activityPreviewMeta')}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block">{t('minutesAgo38')}</span>
                    <h5 className="text-xs font-bold text-gray-800 dark:text-slate-100">{t('activityDeal')}</h5>
                    <p className="text-[11px] text-gray-500 dark:text-slate-400">{t('activityDealMeta')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-5 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">{t('revenueVsTarget')}</h3>
                  <p className="text-xs text-gray-400">{t('revenuePeriod')}</p>
                </div>
                <button className="text-xs text-gray-500 dark:text-slate-400 font-semibold flex items-center gap-1 cursor-pointer">{t('viewAll')} <ViewAllIcon size={14} /></button>
              </div>

              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <XAxis dataKey="month" tick={{ fontSize: 10, fill: tickColor }} />
                    <YAxis tick={{ fontSize: 10, fill: tickColor }} orientation={dir === 'rtl' ? 'right' : 'left'} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Area type="monotone" dataKey="value" stroke={chartStroke} strokeWidth={2.5} fillOpacity={0.08} fill={chartStroke} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-orange-50/60 dark:bg-orange-950/40 p-3 rounded-lg border border-orange-100 dark:border-orange-900/50 flex items-center justify-between mt-4">
                <p className="text-xs text-gray-700 dark:text-slate-200">
                  {t('revenueGap', { gap: t('gapAmount'), deals: t('dealsCount') })}
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-3 py-1.5 rounded-lg transition cursor-pointer">{t('viewDeals')}</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className={cardClass}>
              <div className="flex items-center justify-between mb-3">
                <h3 className={headingClass}>{t('todayTasks')}</h3>
                <span className="text-xs text-gray-400 flex items-center gap-0.5">{t('tasksCount', { count: tasks.length })}</span>
              </div>
              <div className="space-y-2">
                {tasks.map(task => (
                  <div 
                    key={task.id} 
                    onClick={() => handleToggleTask(task.id)}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer transition select-none"
                  >
                    <div className="flex items-center gap-2">
                      {task.done ? <CheckCircle2 size={16} className="text-black dark:text-white" /> : <Circle size={16} className="text-gray-300 dark:text-slate-600" />}
                      <span className={`text-xs ${task.done ? 'line-through text-gray-400' : 'text-gray-800 dark:text-slate-100 font-medium'}`}>
                        {t(task.titleKey)}
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-400">{t(task.timeKey)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={cardClass}>
              <div className="flex items-center justify-between mb-2">
                <h3 className={headingClass}>{t('clientSources')}</h3>
                <span className="text-xs text-gray-400 flex items-center gap-0.5 cursor-pointer">{t('viewAll')} <ViewAllIcon size={12} /></span>
              </div>
              <div className="flex items-center gap-4 h-40">
                <ResponsiveContainer width="50%" height="100%">
                  <PieChart>
                    <Pie data={clientSources} innerRadius={35} outerRadius={55} paddingAngle={3} dataKey="value">
                      {clientSources.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="w-1/2 space-y-1.5 text-xs">
                  {clientSources.map((s, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-slate-400 text-[11px]">{s.name}</span>
                      <span className="font-bold text-gray-800 dark:text-slate-100">{s.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={cardClass}>
              <div className="flex items-center justify-between mb-2">
                <h3 className={headingClass}>{t('salesTrend')}</h3>
                <span className="text-xs text-gray-400">{t('last6Months')}</span>
              </div>
              <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData.slice(0, 6)}>
                    <Area type="monotone" dataKey="value" stroke="#ea580c" fill={isDark ? '#7c2d12' : '#ffedd5'} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{t('financialOutlook')}</h3>
                <p className="text-xs text-gray-400">{t('financialSubtitle')}</p>
              </div>
              <button className="text-xs text-gray-500 dark:text-slate-400 font-semibold flex items-center gap-1 cursor-pointer">{t('viewAll')} <ViewAllIcon size={14} /></button>
            </div>

            <div className="h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cashFlowData} barGap={4}>
                  <XAxis dataKey="month" tick={{ fontSize: 10, fill: tickColor }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: tickColor }} axisLine={false} tickLine={false} orientation={dir === 'rtl' ? 'right' : 'left'} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="in" fill={isDark ? '#e2e8f0' : '#000000'} radius={[2, 2, 0, 0]} barSize={8} />
                  <Bar dataKey="out" fill={isDark ? '#475569' : '#cbd5e1'} radius={[2, 2, 0, 0]} barSize={8} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
