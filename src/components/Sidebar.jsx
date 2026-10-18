import React, { useState } from "react";
import {
  Users,
  TrendingUp,
  Box,
  Briefcase,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Plus,
  Search,
  Home,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Sidebar() {
  const { t, dir } = useLanguage();
  const [openSub, setOpenSub] = useState("crm");
  const CollapseIcon = dir === "rtl" ? ChevronLeft : ChevronRight;

  const toggleSub = (menu) => {
    setOpenSub(openSub === menu ? null : menu);
  };

  return (
    <aside className="w-64 bg-[#0d1117] dark:bg-black text-gray-300 min-h-screen h-full sticky top-0 flex flex-col justify-between text-xs overflow-y-auto border-e border-gray-800 dark:border-slate-800 shrink-0 select-none">
      <div>
        {/* Company Header */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center text-sm">
              {t("companyInitial") || "أ"}
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">
                {t("companyName") || "اسم الشركة"}
              </h4>
              <p className="text-[10px] text-gray-400">
                {t("roleGeneralManager") || "المدير العام"}
              </p>
            </div>
          </div>
          <ChevronDown size={14} className="text-gray-400 cursor-pointer" />
        </div>

        {/* Quick Action Button */}
        <div className="p-3">
          <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-3 rounded-md flex items-center justify-center gap-2 transition cursor-pointer">
            <Plus size={14} />
            <span>{t("quickAction") || "إجراء سريع"}</span>
          </button>
        </div>

        {/* Search Input */}
        <div className="px-3 mb-2">
          <div className="relative">
            <input
              type="text"
              placeholder={t("search") || "بحث..."}
              className="w-full bg-gray-900 border border-gray-800 rounded-md py-1.5 pe-8 ps-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-600 text-xs"
            />
            <Search
              size={14}
              className="absolute end-2.5 top-2 text-gray-500"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="p-2 space-y-1">
          <a
            href="#"
            className="flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-gray-800 text-gray-300 transition"
          >
            <Home size={16} />
            <span>{t("dashboard") || "لوحة التحكم"}</span>
          </a>

          <div>
            <button
              onClick={() => toggleSub("crm")}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-800 text-gray-300 transition cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Users size={16} />
                <span>{t("crm") || "إدارة علاقات العملاء (CRM)"}</span>
              </div>
              {openSub === "crm" ? (
                <ChevronDown size={14} />
              ) : (
                <CollapseIcon size={14} />
              )}
            </button>

            {openSub === "crm" && (
              <div className="ms-6 my-1 space-y-1 border-s border-gray-800 ps-2">
                <a
                  href="#"
                  className="block px-3 py-1.5 rounded text-amber-400 font-medium bg-gray-800/50 transition"
                >
                  {t("crmClientsDeals") || "العملاء والصفقات"}
                </a>
                <a
                  href="#"
                  className="block px-3 py-1.5 rounded text-gray-400 hover:text-white transition"
                >
                  {t("crmProjectsTasks") || "المشروعات والمهام"}
                </a>
                <a
                  href="#"
                  className="block px-3 py-1.5 rounded text-gray-400 hover:text-white transition"
                >
                  {t("crmTickets") || "التذاكر والدعم"}
                </a>
              </div>
            )}
          </div>

          <a
            href="#"
            className="flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-gray-800 text-gray-300 transition"
          >
            <TrendingUp size={16} />
            <span>{t("salesPurchases") || "المبيعات والمشتريات"}</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-gray-800 text-gray-300 transition"
          >
            <Box size={16} />
            <span>{t("inventory") || "المخازن والمنتجات"}</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-gray-800 text-gray-300 transition"
          >
            <Briefcase size={16} />
            <span>{t("hr") || "الموارد البشرية"}</span>
          </a>
        </nav>
      </div>

      {/* Footer Workspace Version */}
      <div className="p-3 border-t border-gray-800 text-[11px] text-gray-500 mt-auto">
        {t("workspace") || "مساحة العمل v2.4"}
      </div>
    </aside>
  );
}