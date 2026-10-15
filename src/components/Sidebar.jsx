import React, { useState } from 'react';
import { 
  Users, TrendingUp, Box, Briefcase, 
  ChevronDown, ChevronLeft, ChevronRight, Plus, Search, Home 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Sidebar() {
  const { t, dir } = useLanguage();
  const [openSub, setOpenSub] = useState('crm');
  const CollapseIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;

  const toggleSub = (menu) => {
    setOpenSub(openSub === menu ? null : menu);
  };

  return (
    <aside className="w-64 bg-[#0d1117] dark:bg-black text-gray-300 h-screen sticky top-0 flex flex-col justify-between text-xs overflow-y-auto border-e border-transparent dark:border-slate-800">
      <div>
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center text-sm">
              {t('companyInitial')}
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">{t('companyName')}</h4>
              <p className="text-[10px] text-gray-400">{t('roleGeneralManager')}</p>
            </div>
          </div>
          <ChevronDown size={14} className="text-gray-400 cursor-pointer" />
        </div>

        <div className="p-3">
          <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-3 rounded-md flex items-center justify-center gap-2 transition">
            <Plus size={14} />
            <span>{t('quickAction')}</span>
          </button>
        </div>

        <div className="px-3 mb-2">
          <div className="relative">
            <input 
              type="text" 
              placeholder={t('search')} 
              className="w-full bg-gray-900 border border-gray-800 rounded-md py-1.5 pe-8 ps-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-600 text-xs"
            />
            <Search size={14} className="absolute end-2.5 top-2 text-gray-500" />
          </div>
        </div>

        <nav className="p-2 space-y-1">
          <a href="#" className="flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-gray-800 text-gray-300">
            <Home size={16} />
            <span>{t('dashboard')}</span>
          </a>

          <div>
            <button 
              onClick={() => toggleSub('crm')} 
              className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-800 text-gray-300"
            >
              <div className="flex items-center gap-2.5">
                <Users size={16} />
                <span>{t('crm')}</span>
              </div>
              {openSub === 'crm' ? <ChevronDown size={14} /> : <CollapseIcon size={14} />}
            </button>
            
            {openSub === 'crm' && (
              <div className="ms-6 my-1 space-y-1 border-s border-gray-800 pe-2">
                <a href="#" className="block px-3 py-1.5 rounded text-amber-400 font-medium bg-gray-800/50">{t('crmClientsDeals')}</a>
                <a href="#" className="block px-3 py-1.5 rounded text-gray-400 hover:text-white">{t('crmProjectsTasks')}</a>
                <a href="#" className="block px-3 py-1.5 rounded text-gray-400 hover:text-white">{t('crmTickets')}</a>
              </div>
            )}
          </div>

          <a href="#" className="flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-gray-800 text-gray-300">
            <TrendingUp size={16} />
            <span>{t('salesPurchases')}</span>
          </a>

          <a href="#" className="flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-gray-800 text-gray-300">
            <Box size={16} />
            <span>{t('inventory')}</span>
          </a>

          <a href="#" className="flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-gray-800 text-gray-300">
            <Briefcase size={16} />
            <span>{t('hr')}</span>
          </a>
        </nav>
      </div>

      <div className="p-3 border-t border-gray-800 text-[11px] text-gray-500">
        {t('workspace')}
      </div>
    </aside>
  );
}
