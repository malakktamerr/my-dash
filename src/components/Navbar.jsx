// import React, { useState, useRef, useEffect } from "react";
// import {
//   Search,
//   Bell,
//   Plus,
//   Zap,
//   Mail,
//   Moon,
//   Sun,
//   Globe,
//   ChevronDown,
//   User,
//   LogOut,
// } from "lucide-react";
// import { useLanguage } from "../i18n/LanguageContext";
// import { useTheme } from "../theme/ThemeContext";

// export default function Navbar({ userProfile, onAddLead, onSearch }) {
//   const { t, lang, toggleLanguage } = useLanguage();
//   const { isDark, toggleTheme } = useTheme();
//   const [profileMenuOpen, setProfileMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const menuRef = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setProfileMenuOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     if (onSearch) onSearch(query);
//   };

//   return (
//     <header className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 px-6 py-3 flex items-center justify-between sticky top-0 z-20 shadow-sm flex-row-reverse">
//       <div className="flex items-center gap-3 flex-row-reverse">
//         <button
//           onClick={() => alert(t("quickActions"))}
//           className="bg-black hover:bg-gray-800 text-white font-medium text-xs px-3.5 py-2 rounded-full flex items-center gap-1.5 transition shadow-sm cursor-pointer"
//         >
//           <Zap size={14} className="fill-white" />
//           <span>{t("quickActions")}</span>
//         </button>

//         <div className="relative w-72">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             placeholder={t("searchSystem")}
//             className="w-full bg-gray-50/80 dark:bg-slate-800/80 border border-gray-300/80 dark:border-slate-700 rounded-full py-1.5 pe-9 ps-4 text-xs text-gray-800 dark:text-slate-100 focus:outline-none focus:border-amber-500 focus:bg-white dark:focus:bg-slate-800 transition"
//           />
//           <Search size={14} className="absolute end-3 top-2.5 text-gray-400" />
//         </div>
//       </div>

//       <div className="flex items-center gap-3 flex-row-reverse">
//         <div className="flex items-center gap-1 text-gray-500 dark:text-slate-400">
//           <button
//             type="button"
//             onClick={toggleLanguage}
//             className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition cursor-pointer flex items-center gap-1"
//             aria-label={
//               lang === "ar" ? "Switch to English" : "التبديل إلى العربية"
//             }
//             title={lang === "ar" ? "English" : "العربية"}
//           >
//             <Globe size={16} />
//             <span className="text-xs font-bold text-gray-600 dark:text-slate-300">
//               {t("langCode")}
//             </span>
//           </button>
//           <button
//             type="button"
//             onClick={toggleTheme}
//             className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition cursor-pointer"
//             aria-label={isDark ? t("switchToLight") : t("switchToDark")}
//             title={isDark ? t("switchToLight") : t("switchToDark")}
//           >
//             {isDark ? <Sun size={16} /> : <Moon size={16} />}
//           </button>

//           <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition relative">
//             <Mail size={16} />
//             <span className="absolute top-1 end-1 bg-amber-500 text-white font-bold text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center">
//               {userProfile?.unread_messages_count || 0}
//             </span>
//           </button>

//           <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition relative">
//             <Bell size={16} />
//             <span className="absolute top-1 end-1 bg-orange-500 text-white font-bold text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center">
//               {userProfile?.unread_notifications_count || 0}
//             </span>
//           </button>
//         </div>

//         <button
//           onClick={onAddLead}
//           className="bg-black hover:bg-gray-800 text-white font-bold text-xs px-5 py-2.5 rounded-full flex items-center gap-1.5 transition shadow-sm cursor-pointer"
//         >
//           <Plus size={14} className="text-red-500" />
//           <span>{t("addLead")}</span>
//         </button>

//         <div
//           className="relative border-e border-gray-300 dark:border-slate-700 pe-3 me-1"
//           ref={menuRef}
//         >
//           <div
//             onClick={() => setProfileMenuOpen(!profileMenuOpen)}
//             className="flex items-center gap-2 cursor-pointer select-none group"
//           >
//             <ChevronDown
//               size={14}
//               className={`text-gray-400 transition-transform ${profileMenuOpen ? "rotate-180" : ""}`}
//             />
//             <div className="text-start">
//               <h5 className="text-xs font-bold text-gray-800 dark:text-slate-100 leading-tight group-hover:text-black dark:group-hover:text-white">
//                 {userProfile?.name || t("userName")}
//               </h5>
//               <p className="text-[10px] text-gray-400">
//                 {userProfile?.role || t("roleGeneralManager")}
//               </p>
//             </div>
//             <div className="w-8 h-8 rounded-full bg-black text-white font-bold flex items-center justify-center text-xs shadow-sm">
//               {userProfile?.avatar_initial || t("userInitial")}
//             </div>
//           </div>

//           {profileMenuOpen && (
//             <div className="absolute end-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-700 rounded-xl shadow-lg py-1.5 z-50 text-xs">
//               <div className="px-4 py-2 border-b border-gray-100 dark:border-slate-700">
//                 <p className="font-bold text-gray-800 dark:text-slate-100">
//                   {userProfile?.name || t("userName")}
//                 </p>
//                 <p className="text-[10px] text-gray-400">
//                   {userProfile?.email || "admin@company.com"}
//                 </p>
//               </div>
//               <a
//                 href="#profile"
//                 className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition"
//               >
//                 <User size={14} className="text-gray-400" />
//                 <span>{t("profile")}</span>
//               </a>
//               <button
//                 onClick={() => alert(t("logout"))}
//                 className="w-full text-start flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 transition cursor-pointer"
//               >
//                 <LogOut size={14} className="text-red-500" />
//                 <span>{t("logout")}</span>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }
   

import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Bell,
  Plus,
  Zap,
  Mail,
  Moon,
  Sun,
  Globe,
  ChevronDown,
  User,
  LogOut,
  Menu,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../theme/ThemeContext";

export default function Navbar({ userProfile, onAddLead, onSearch, onToggleSidebar }) {
  const { t, lang, toggleLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) onSearch(query);
  };

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 px-3 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-20 shadow-sm flex-row-reverse">
      
      {/* Right Side: Quick Action & Search (Desktop) / Mobile Toggle */}
      <div className="flex items-center gap-2 sm:gap-3 flex-row-reverse">
        
        {/* Mobile Menu Toggle Button (Visible only on mobile/tablet) */}
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-xl text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition cursor-pointer"
          aria-label="Toggle Sidebar"
        >
          <Menu size={22} />
        </button>

        <button
          onClick={() => alert(t("quickActions"))}
          className="bg-black hover:bg-gray-800 text-white font-medium text-xs px-3.5 py-2 rounded-full hidden sm:flex items-center gap-1.5 transition shadow-sm cursor-pointer"
        >
          <Zap size={14} className="fill-white" />
          <span>{t("quickActions")}</span>
        </button>

        <div className="relative w-40 sm:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder={t("searchSystem")}
            className="w-full bg-gray-50/80 dark:bg-slate-800/80 border border-gray-300/80 dark:border-slate-700 rounded-full py-1.5 pe-9 ps-4 text-xs text-gray-800 dark:text-slate-100 focus:outline-none focus:border-amber-500 focus:bg-white dark:focus:bg-slate-800 transition"
          />
          <Search size={14} className="absolute end-3 top-2.5 text-gray-400" />
        </div>
      </div>

      {/* Left Side: Icons, Add Lead & User Profile */}
      <div className="flex items-center gap-2 sm:gap-3 flex-row-reverse">
        <div className="flex items-center gap-1 text-gray-500 dark:text-slate-400">
          <button
            type="button"
            onClick={toggleLanguage}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition cursor-pointer flex items-center gap-1"
            aria-label={
              lang === "ar" ? "Switch to English" : "التبديل إلى العربية"
            }
            title={lang === "ar" ? "English" : "العربية"}
          >
            <Globe size={16} />
            <span className="text-xs font-bold text-gray-600 dark:text-slate-300 hidden sm:inline">
              {t("langCode")}
            </span>
          </button>
          
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition cursor-pointer"
            aria-label={isDark ? t("switchToLight") : t("switchToDark")}
            title={isDark ? t("switchToLight") : t("switchToDark")}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition relative hidden sm:block">
            <Mail size={16} />
            <span className="absolute top-1 end-1 bg-amber-500 text-white font-bold text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center">
              {userProfile?.unread_messages_count || 0}
            </span>
          </button>

          <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition relative">
            <Bell size={16} />
            <span className="absolute top-1 end-1 bg-orange-500 text-white font-bold text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center">
              {userProfile?.unread_notifications_count || 0}
            </span>
          </button>
        </div>

        <button
          onClick={onAddLead}
          className="bg-black hover:bg-gray-800 text-white font-bold text-xs px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-1.5 transition shadow-sm cursor-pointer shrink-0"
        >
          <Plus size={14} className="text-red-500" />
          <span className="hidden sm:inline">{t("addLead")}</span>
        </button>

        <div
          className="relative border-e border-gray-300 dark:border-slate-700 pe-2 sm:pe-3 me-1"
          ref={menuRef}
        >
          <div
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            className="flex items-center gap-2 cursor-pointer select-none group"
          >
            <ChevronDown
              size={14}
              className={`text-gray-400 transition-transform hidden sm:block ${profileMenuOpen ? "rotate-180" : ""}`}
            />
            <div className="text-start hidden md:block">
              <h5 className="text-xs font-bold text-gray-800 dark:text-slate-100 leading-tight group-hover:text-black dark:group-hover:text-white">
                {userProfile?.name || t("userName")}
              </h5>
              <p className="text-[10px] text-gray-400">
                {userProfile?.role || t("roleGeneralManager")}
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-black text-white font-bold flex items-center justify-center text-xs shadow-sm">
              {userProfile?.avatar_initial || t("userInitial")}
            </div>
          </div>

          {profileMenuOpen && (
            <div className="absolute end-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-700 rounded-xl shadow-lg py-1.5 z-50 text-xs">
              <div className="px-4 py-2 border-b border-gray-100 dark:border-slate-700">
                <p className="font-bold text-gray-800 dark:text-slate-100">
                  {userProfile?.name || t("userName")}
                </p>
                <p className="text-[10px] text-gray-400">
                  {userProfile?.email || "admin@company.com"}
                </p>
              </div>
              <a
                href="#profile"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition"
              >
                <User size={14} className="text-gray-400" />
                <span>{t("profile")}</span>
              </a>
              <button
                onClick={() => alert(t("logout"))}
                className="w-full text-start flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 transition cursor-pointer"
              >
                <LogOut size={14} className="text-red-500" />
                <span>{t("logout")}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}