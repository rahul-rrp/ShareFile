"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, Calendar as CalendarIcon, ChevronLeft, ArrowRight, Building } from "lucide-react";

const cities = [
  "Delhi", "Gurgaon", "Noida",
  "Jaipur", "Rishikesh", "Varanasi",
  "Bhopal", "Ujjain", "Bengaluru",
  "Chandigarh"
];

const hotels = [
  "Saltstayz Autograph, Golf Course Road",
  "Saltstayz Autograph, MG Road",
  "Saltstayz Premier, Sector 50",
  "Saltstayz Select, Cyber City"
];

// Helper to generate calendar days
const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

export default function HeroSearchBar() {
  const [selection, setSelection] = useState<{ type: 'city' | 'hotel', value: string } | null>(null);
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  const [, setErrors] = useState({ selection: false, dates: false });
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileCalendar, setShowMobileCalendar] = useState(false);
  const [showDesktopCalendar, setShowDesktopCalendar] = useState(false);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  // Today's date for past date validation
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowDesktopCalendar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFindStayz = () => {
    const newErrors = {
      selection: !selection,
      dates: !checkIn || !checkOut
    };
    setErrors(newErrors);

    if (!newErrors.selection && !newErrors.dates) {
      setErrorMessage(null);
      console.log("Searching for:", { selection, checkIn, checkOut });
      alert("Search initiated!");
    } else {
      const errorMsg = "Please ";
      const missing = [];
      if (newErrors.selection) missing.push("choose a city or property");
      if (newErrors.dates) missing.push("choose dates");
      setErrorMessage(errorMsg + missing.join(" and ") + ".");

      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleDateClick = (day: number, month: number, year: number) => {
    const clickedDate = new Date(year, month, day);
    if (clickedDate < today) return; // Prevent past dates

    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(clickedDate);
      setCheckOut(null);
      setErrors(prev => ({ ...prev, dates: false }));
    } else if (clickedDate > checkIn) {
      setCheckOut(clickedDate);
    } else {
      setCheckIn(clickedDate);
    }
  };

  const renderMonth = (monthOffset: number, isDesktop: boolean = false) => {
    const date = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
    const month = date.getMonth();
    const year = date.getFullYear();
    const monthName = date.toLocaleString('default', { month: 'long' });

    const days = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    return (
      <div className={isDesktop ? "mb-2" : "mb-6"}>
        <h3 className={`text-center font-calibri font-bold text-gray-700 py-3 ${isDesktop ? '' : 'bg-gray-50'}`}>{monthName} {year}</h3>
        <div className={`grid grid-cols-7 gap-y-2 text-center text-sm ${isDesktop ? 'px-1' : 'px-4 gap-y-4'}`}>
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`}></div>
          ))}
          {Array.from({ length: days }).map((_, i) => {
            const day = i + 1;
            const currentDate = new Date(year, month, day);
            const isPast = currentDate < today;
            const isCheckIn = checkIn && currentDate.getTime() === checkIn.getTime();
            const isCheckOut = checkOut && currentDate.getTime() === checkOut.getTime();
            const isInRange = checkIn && checkOut && currentDate > checkIn && currentDate < checkOut;

            return (
              <div
                key={day}
                onClick={() => handleDateClick(day, month, year)}
                className={`w-9 h-9 md:w-10 md:h-10 mx-auto flex items-center justify-center font-calibri font-bold text-xs
                  ${isPast ? 'text-gray-300 cursor-not-allowed' : 'cursor-pointer text-gray-700'}
                  ${isCheckIn || isCheckOut ? 'bg-[#4c6742] text-white rounded-full shadow-md' : ''}
                  ${isInRange ? 'bg-green-50 text-[#4c6742]' : ''}
                  ${!isPast && !isCheckIn && !isCheckOut && !isInRange ? 'hover:border hover:border-[#4c6742] rounded-full' : ''}
                `}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full max-w-5xl z-20 -translate-x-[48px]">
      {errorMessage && (
        <div className="absolute -top-16 left-0 right-0 mx-auto w-max max-w-md bg-[#faeaea] border border-[#f0caca] rounded flex items-center px-4 py-3 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300 z-30">
          <svg className="w-5 h-5 text-[#c53b3b] mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="#bd4040" />
            <path d="M11.25 7H12.75V13H11.25V7ZM11.25 15H12.75V17H11.25V15Z" fill="white" />
          </svg>
          <span className="text-[#1e293b] font-medium text-sm">{errorMessage}</span>
        </div>
      )}

      <div
        className="
          bg-white 
          w-full 
          max-w-[920px] 
          h-[78.5px] 
          mx-auto
          grid 
          grid-cols-[374.992px_374.992px_150.02px] 
          gap-[4px] 
          rounded-[16px] 
          p-[6px] 
          shadow-xl 
          relative 
          items-center
          hidden md:grid
        "
      >
        {/* Location Section */}
        <div
          ref={dropdownRef}
          onClick={() => { setShowDropdown(!showDropdown); setShowDesktopCalendar(false); }}
          className="flex items-center w-[374.992px] h-[66.5px] px-[22px] py-[14px] gap-[10px] border-r border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors rounded-l-[12px]"
        >
          {selection?.type === 'hotel' ? (
            <Building className="w-5 h-5 text-gray-400 shrink-0" strokeWidth={1.5} />
          ) : (
            <MapPin className="w-5 h-5 text-gray-400 shrink-0" strokeWidth={1.5} />
          )}
          <div className="flex flex-col overflow-hidden">
            <span className="text-[10px] font-calibri font-bold text-gray-400 uppercase tracking-widest leading-none">Where</span>
            <span className="text-[15px] font-calibri font-bold text-gray-900 leading-tight truncate mt-1">
              {selection ? selection.value : "Search City or Hotel"}
            </span>
          </div>

          {/* Dropdown */}
          {showDropdown && (
            <div className="absolute top-full left-0 mt-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 max-h-80 overflow-y-auto">
              <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50 border-b border-gray-100 font-calibri">Popular Cities</div>
              {cities.map((c) => (
                <div
                  key={c}
                  onClick={(e) => { e.stopPropagation(); setSelection({ type: 'city', value: c }); setErrors(prev => ({ ...prev, selection: false })); setShowDropdown(false); }}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm font-bold text-gray-800 flex items-center font-calibri"
                >
                  <MapPin className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                  <span>{c}</span>
                </div>
              ))}

              <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50 border-y border-gray-100 mt-2 font-calibri">Saltstayz Hotels</div>
              {hotels.map((h) => (
                <div
                  key={h}
                  onClick={(e) => { e.stopPropagation(); setSelection({ type: 'hotel', value: h }); setErrors(prev => ({ ...prev, selection: false })); setShowDropdown(false); }}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm font-bold text-gray-800 flex items-center font-calibri"
                >
                  <Building className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">{h}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Calendar Section */}
        <div
          ref={calendarRef}
          onClick={() => setShowDesktopCalendar(!showDesktopCalendar)}
          className="flex items-center w-[374.992px] h-[66.5px] px-[22px] py-[14px] gap-[10px] cursor-pointer hover:bg-gray-50 transition-colors relative"
        >
          <CalendarIcon className="w-5 h-5 text-gray-400 shrink-0" strokeWidth={1.5} />
          <div className="flex flex-col w-full">
            <span className="text-[10px] font-calibri font-bold text-gray-400 uppercase tracking-widest leading-none">When</span>
            <span className="text-[15px] font-calibri font-bold text-gray-900 leading-tight mt-1">
              {checkIn ? (
                <>
                  {checkIn.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                  {checkOut ? ` — ${checkOut.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}` : ' — Select Check-out'}
                </>
              ) : "Select Dates"}
            </span>
          </div>

          {/* Desktop Calendar Dropdown */}
          {showDesktopCalendar && (
            <div className="absolute top-full left-0 md:-left-40 mt-4 bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-8 z-50 w-[750px] cursor-default">
              <div className="flex justify-between items-center mb-6 px-4 pb-6 border-b border-gray-400">
                <div className="flex space-x-12">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-calibri font-bold text-gray-400 uppercase tracking-widest">Check-in</span>
                    <span className="text-xl font-calibri font-bold text-gray-800">{checkIn ? checkIn.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Add dates'}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-calibri font-bold text-gray-400 uppercase tracking-widest">Check-out</span>
                    <span className="text-xl font-calibri font-bold text-gray-800">{checkOut ? checkOut.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Add dates'}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-2 pt-4 ">
                  <button
                    onClick={() => setShowDesktopCalendar(false)}
                    className="bg-primary text-white px-8 py-3 rounded-xl font-calibri font-bold text-sm hover:bg-[#3d5335] transition-colors"
                  >
                    Apply Dates {checkIn && checkOut ? `(${Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))} Night${Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) > 1 ? 's' : ''})` : ''}
                  </button>
                </div>
              </div>

              <div className="flex space-x-8">
                <div className="flex-1">
                  <div className="grid grid-cols-7 text-center pb-2 text-xs font-calibri font-bold text-gray-400 border-b mb-2">
                    <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                  </div>
                  {renderMonth(0, true)}
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-7 text-center pb-2 text-xs font-calibri font-bold text-gray-400 border-b mb-2">
                    <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                  </div>
                  {renderMonth(1, true)}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <button
          onClick={handleFindStayz}
          className="bg-primary font-calibri text-white w-[150.02px] h-[67.5px] min-w-[150.02px] px-[36px] py-[24.75px] rounded-[12px] font-bold text-[16px] hover:bg-primary-dark transition-colors shadow-md flex items-center justify-center"
        >
          Find Stayz
        </button>
      </div>

      {/* Mobile view fallback - keeps existing functionality but applies calibri */}
      <div className="md:hidden bg-white rounded-[20px] p-2.5 flex flex-col items-stretch w-full shadow-xl gap-2 relative">
        <div
          onClick={() => { setShowDropdown(!showDropdown); }}
          className="flex items-center w-full min-h-[70px] px-4 py-3 border border-gray-100 rounded-[14px]"
        >
          <MapPin className="w-5 h-5 text-gray-400 mr-3" />
          <div className="flex flex-col">
            <span className="text-[12px] font-calibri font-bold text-gray-500 uppercase tracking-widest">Where</span>
            <span className="text-[16px] font-calibri font-bold text-gray-900 truncate">
              {selection ? selection.value : "Search City or Hotel"}
            </span>
          </div>
        </div>

        <div
          onClick={() => setShowMobileCalendar(true)}
          className="flex items-center min-h-[70px] px-4 py-3 border border-gray-100 rounded-[14px]"
        >
          <CalendarIcon className="w-5 h-5 text-gray-400 mr-3" />
          <div className="flex flex-col">
            <span className="text-[12px] font-calibri font-bold text-gray-500 uppercase tracking-widest">When</span>
            <span className="text-[16px] font-calibri font-bold text-gray-900">
              {checkIn ? checkIn.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : "Select Dates"}
            </span>
          </div>
        </div>

        <button
          onClick={handleFindStayz}
          className="bg-primary font-calibri text-white py-4 rounded-[12px] font-bold text-[16px]"
        >
          Find Stayz
        </button>
      </div>

      {/* Mobile Calendar Modal */}
      {showMobileCalendar && (
        <div className="fixed inset-0 z-50 flex items-end md:hidden justify-center bg-black/50">
          <div className="bg-white w-full h-[85vh] rounded-t-3xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-full">
            <div className="bg-[#4c6742] text-white pt-6 pb-4 px-6 relative">
              <button
                onClick={() => setShowMobileCalendar(false)}
                className="absolute top-6 left-6"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <h2 className="text-center font-semibold text-lg mb-6">Calendar</h2>

              <div className="flex items-center justify-between mt-4">
                <div className="flex flex-col">
                  <span className="text-sm text-green-200">Check-in</span>
                  {checkIn ? (
                    <div className="flex items-end">
                      <span className="text-4xl font-bold">{checkIn.getDate()}</span>
                      <div className="flex flex-col ml-1 mb-1 text-xs">
                        <span>{checkIn.toLocaleDateString('en-GB', { weekday: 'short' })}</span>
                        <span>{checkIn.toLocaleDateString('en-GB', { month: 'short' })}</span>
                      </div>
                    </div>
                  ) : (
                    <span className="text-lg mt-2">Select Date</span>
                  )}
                </div>

                <ArrowRight className="w-5 h-5 text-green-300" strokeWidth={1.5} />

                <div className="flex flex-col text-right">
                  <span className="text-sm text-green-200">Check-out</span>
                  {checkOut ? (
                    <div className="flex items-end justify-end">
                      <span className="text-4xl font-bold">{checkOut.getDate()}</span>
                      <div className="flex flex-col ml-1 mb-1 text-xs text-left">
                        <span>{checkOut.toLocaleDateString('en-GB', { weekday: 'short' })}</span>
                        <span>{checkOut.toLocaleDateString('en-GB', { month: 'short' })}</span>
                      </div>
                    </div>
                  ) : (
                    <span className="text-lg mt-2 text-green-200">Select Date</span>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-7 text-center py-3 text-xs font-semibold text-gray-500 border-b shadow-sm">
              <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {renderMonth(0, false)}
              {renderMonth(1, false)}
              {renderMonth(2, false)}
            </div>

            <div className="p-4 border-t bg-white">
              <button
                onClick={() => setShowMobileCalendar(false)}
                className="w-full bg-[#4c6742] text-white py-4 rounded-xl font-semibold text-lg"
              >
                OK {checkIn && checkOut ? `(${Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))} Night${Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) > 1 ? 's' : ''})` : ''}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
