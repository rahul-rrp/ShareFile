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

  const [errors, setErrors] = useState({ selection: false, dates: false });
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
      let errorMsg = "Please ";
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
        <h3 className={`text-center font-semibold text-gray-700 py-3 ${isDesktop ? '' : 'bg-gray-50'}`}>{monthName} {year}</h3>
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
                className={`w-9 h-9 md:w-10 md:h-10 mx-auto flex items-center justify-center font-medium
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
    <div className="relative w-full max-w-5xl z-20">
      {errorMessage && (
        <div className="absolute -top-16 left-0 right-0 mx-auto w-max max-w-md bg-[#faeaea] border border-[#f0caca] rounded flex items-center px-4 py-3 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300 z-30">
          <svg className="w-5 h-5 text-[#c53b3b] mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="#bd4040" />
            <path d="M11.25 7H12.75V13H11.25V7ZM11.25 15H12.75V17H11.25V15Z" fill="white" />
          </svg>
          <span className="text-[#1e293b] font-medium text-sm">{errorMessage}</span>
        </div>
      )}

      <div className="bg-white rounded-[20px] p-2.5 flex flex-col md:flex-row items-stretch md:items-center justify-between w-full shadow-xl gap-2 md:gap-0 md:rounded-2xl md:p-2 md:pl-6 relative">

        {/* Destination / Property combined */}
        <div ref={dropdownRef} className="flex-1 w-full md:w-auto relative">
          <div
            onClick={() => { setShowDropdown(!showDropdown); setShowDesktopCalendar(false); }}
            className="flex items-center w-full min-h-[76px] px-4 py-3 border border-gray-200 rounded-[14px] hover:bg-gray-50 cursor-pointer transition-colors md:min-h-0 md:border-0 md:px-0 md:py-3 md:rounded-l-[2rem] md:rounded-tr-none"
          >
            {selection?.type === 'hotel' ? (
              <Building className="w-5 h-5 text-gray-500 mr-3" strokeWidth={1.5} />
            ) : (
              <MapPin className="w-5 h-5 text-gray-500 mr-3" strokeWidth={1.5} />
            )}
            <div className="flex flex-col overflow-hidden">
              <span className="text-[12px] md:text-[10px] font-bold text-gray-500 md:text-gray-400 uppercase tracking-widest">Where</span>
              <span className="text-[16px] md:text-[15px] font-bold text-gray-900 leading-tight truncate">
                {selection ? selection.value : "Search City or Hotel"}
              </span>
            </div>
          </div>
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-gray-200"></div>

          {/* Dropdown */}
          {showDropdown && (
            <div className="absolute top-full left-0 mt-3 w-full md:mt-4 md:w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 max-h-80 overflow-y-auto">
              <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50 border-b border-gray-100">Popular Cities</div>
              {cities.map((c) => (
                <div
                  key={c}
                  onClick={(e) => { e.stopPropagation(); setSelection({ type: 'city', value: c }); setErrors(prev => ({ ...prev, selection: false })); setShowDropdown(false); }}
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm font-semibold text-gray-800 flex items-center"
                >
                  <MapPin className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                  <span>{c}</span>
                </div>
              ))}

              <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50 border-y border-gray-100 mt-2">Saltstayz Hotels</div>
              {hotels.map((h) => (
                <div
                  key={h}
                  onClick={(e) => { e.stopPropagation(); setSelection({ type: 'hotel', value: h }); setErrors(prev => ({ ...prev, selection: false })); setShowDropdown(false); }}
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm font-semibold text-gray-800 flex items-center"
                >
                  <Building className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                  <span className="truncate">{h}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* When */}
        <div
          ref={calendarRef}
          className="flex-[1.5] flex items-center min-h-[76px] px-4 py-3 border border-gray-200 rounded-[14px] w-full md:w-auto hover:bg-gray-50 cursor-pointer transition-colors md:min-h-0 md:border-0 md:px-6 md:py-3 md:rounded-none relative"
        >
          <CalendarIcon className="w-5 h-5 text-gray-500 mr-3" strokeWidth={1.5} />
          
          {/* Mobile view trigger */}
          <div className="flex flex-col md:hidden w-full" onClick={() => setShowMobileCalendar(true)}>
            <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest">When</span>
            <span className="text-[16px] font-bold text-gray-900 leading-tight">
              {checkIn ? (
                <>
                  {checkIn.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                  {checkOut ? ` — ${checkOut.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}` : ' — Select Check-out'}
                </>
              ) : "Select Dates"}
            </span>
          </div>

          {/* Web view trigger */}
          <div className="hidden md:flex flex-col w-full" onClick={() => setShowDesktopCalendar(!showDesktopCalendar)}>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">When</span>
            <span className="text-[15px] font-bold text-gray-900 leading-tight">
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
            <div className="hidden md:block absolute top-full left-0 md:-left-20 mt-4 bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-8 z-50 w-[750px] cursor-default">
              <div className="flex justify-between items-center mb-6 px-4">
                 <div className="flex space-x-12">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Check-in</span>
                      <span className="text-xl font-bold text-gray-800">{checkIn ? checkIn.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Add dates'}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Check-out</span>
                      <span className="text-xl font-bold text-gray-800">{checkOut ? checkOut.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Add dates'}</span>
                    </div>
                 </div>
              </div>

              <div className="flex space-x-8">
                <div className="flex-1">
                  <div className="grid grid-cols-7 text-center pb-2 text-xs font-bold text-gray-400 border-b mb-2">
                    <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                  </div>
                  {renderMonth(0, true)}
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-7 text-center pb-2 text-xs font-bold text-gray-400 border-b mb-2">
                    <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                  </div>
                  {renderMonth(1, true)}
                </div>
              </div>

              <div className="flex justify-between items-center mt-2 pt-4 border-t">
                <div className="flex items-center">
                  <div className="w-10 h-6 bg-gray-200 rounded-full flex items-center px-1 mr-3 cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">I want to see Day Use hourly rates only</span>
                </div>
                <button 
                  onClick={() => setShowDesktopCalendar(false)}
                  className="bg-[#4c6742] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#3d5335] transition-colors"
                >
                  Apply Dates {checkIn && checkOut ? `(${Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))} Night${Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) > 1 ? 's' : ''})` : ''}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <button
          onClick={handleFindStayz}
          className="bg-primary text-white px-8 md:px-10 h-[58px] md:h-auto md:py-4 rounded-[10px] md:rounded-2xl font-bold text-[16px] md:text-sm hover:bg-primary-dark transition-colors w-full md:w-auto shadow-md flex-shrink-0 ml-0 md:ml-2 mt-0"
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
