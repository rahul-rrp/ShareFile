"use client";

import { useState } from "react";
import { Check, ChevronRight } from "lucide-react";

type FilterCategory = {
    title: string;
    subtitle: string;
};

type FilterCategoryButtonProps = {
    title: string;
    subtitle: string;
    active?: boolean;
    onClick?: () => void;
};

function FilterCategoryButton({
    title,
    subtitle,
    active = false,
    onClick,
}: FilterCategoryButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={[
                "relative flex h-[91px] w-[101px] flex-col items-center justify-center gap-[2px] rounded-[12px] px-[9px] pt-[13px] pb-[11px] transition-all duration-200",
                active
                    ? "border-[2px] border-[#4F7134] bg-[#EEF3E6]"
                    : "border border-[#1A1A1A14] bg-[#F5F3EC] hover:border-[#4F7134]/40",
            ].join(" ")}
        >
            {/* Selected Badge */}
            {active && (
                <span className="absolute right-[8px] top-[7px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#4F7134]">
                    <Check className="h-[12px] w-[12px] text-white" strokeWidth={3} />
                </span>
            )}

            {/* Large Letter */}
            <span className="font-brand h-[22px] w-[45px] text-center text-[22px] font-bold uppercase leading-[22px] tracking-[-0.5px] text-[#3D5A26]">
                {title}
            </span>

            {/* Label */}
            <span className="font-brand h-[18px] w-[26px] text-center text-[12px] font-bold uppercase leading-[18px] tracking-[0.24px] text-[#1A1A1A]">
                {title === "ALL" ? "ALL" : title}
            </span>

            {/* Subtitle */}
            <span className="h-[15px] text-center text-[12px] font-Calibri leading-[15px] text-[#6A6A66]">
                {subtitle}
            </span>
        </button>
    );
}

const categories: FilterCategory[] = [
    { title: "ALL", subtitle: "7 stays" },
    { title: "A", subtitle: "Like 4 ★" },
    { title: "P", subtitle: "Premium 3 ★" },
    { title: "S", subtitle: "Like 3 ★" },
];

const localities = [
    { name: "Golf Course Road", count: 5 },
    { name: "Golf Course Ext. Road", count: 3 },
    { name: "Sohna Road", count: 2 },
    { name: "DLF Phase 1", count: 2 },
    { name: "MG Road", count: 2 },
];

export function FilterSidebar() {
    // Default selected category is ALL
    const [selectedCategory, setSelectedCategory] = useState("ALL");

    const handleClearAll = () => {
        setSelectedCategory("ALL");
    };

    return (
        <aside className="h-[661.5px] w-[252px] overflow-hidden rounded-[16px] border border-[#1A1A1A14] bg-white pb-[16px]">
            {/* Header */}
            <div className="flex h-[64px] w-[250px] items-center justify-between gap-[71.83px] border-b border-[#1A1A1A14] px-[20px] py-[18px]">
                <h2 className="h-[27px] w-[74px] text-[18px] font-brand font-bold uppercase leading-[27px] tracking-[0.36px] text-[#1A1A1A]">
                    Filters
                </h2>

                <button
                    type="button"
                    onClick={handleClearAll}
                    className="flex h-[25px] w-[58px] items-center justify-center rounded-[5px] px-[8px] py-[5px] text-center text-[12.5px] font-Calibri font-bold leading-none text-[#4F7134] hover:bg-[#F5F3EC]"
                >
                    Clear all
                </button>
            </div>

            {/* Categories */}
            <div className="h-[256.5px] w-[250px] border-b border-[#1A1A1A14] px-[20px] py-[16px]">
                {/* Section Title */}
                <h3 className="mb-[14px] h-[20px] w-[210px] text-[13px] font-brand font-bold uppercase leading-[19.5px] tracking-[1.56px] text-[#1A1A1A]">
                    Categories
                </h3>

                {/* Categories Grid */}
                <div className="grid h-[190px] w-[210px] grid-cols-2 gap-x-[8px] gap-y-[8px]">
                    {categories.map((item) => (
                        <FilterCategoryButton
                            key={item.title}
                            title={item.title}
                            subtitle={item.subtitle}
                            active={selectedCategory === item.title}
                            onClick={() => setSelectedCategory(item.title)}
                        />
                    ))}
                </div>
            </div>

            {/* Localities */}
            {/* Localities */}
            <div className="h-[287.5px] w-[250px] border-b border-[#1A1A1A14] px-[20px] py-[16px]">
                {/* Section Title */}
                <h3 className="mb-[14px] h-[20px] w-[210px] font-brand text-[13px] font-bold uppercase leading-[19.5px] tracking-[1.56px] text-[#1A1A1A]">
                    Localities
                </h3>

                {/* Localities List Container */}
                <div className="h-[221px] w-[210px]">
                    {localities.map((item) => (
                        <label
                            key={item.name}
                            className="flex h-[38px] w-[210px] items-center justify-between gap-[10px] px-[2px] py-[9px]"
                        >
                            {/* Left Part: Checkbox + Locality Name */}
                            <div className="flex h-[20px] w-[199px] items-center gap-[10px]">
                                {/* Checkbox */}
                                <label className="relative h-[18px] w-[18px] shrink-0 cursor-pointer rounded-[4px] border border-[#1A1A1A29] bg-white">
                                    <input
                                        type="checkbox"
                                        className="absolute h-[12px] w-[12px] opacity-0"
                                    />
                                </label>

                                {/* Locality Name */}
                                <span className="h-[20px] min-w-[104.06px] text-[14px] font-Calibri leading-[19.5px] text-[#1A1A1A]">
                                    {item.name}
                                </span>
                            </div>

                            {/* Right Part: Count */}
                            <span className="h-[18px] w-[7px] text-right text-[12px] font-Calibri leading-[18px] text-[#6A6A66]">
                                {item.count}
                            </span>
                        </label>
                    ))}

                    {/* Show More Button */}
                    <button
                        type="button"
                        className="mt-[10px] flex h-[27px] w-[78px] items-start justify-center pt-[10px] pb-[2px] text-center text-[12.5px] font-bold leading-none text-[#4F7134]"
                    >
                        + Show 6 more
                    </button>
                </div>
            </div>

            {/* Amenities */}
            <button
                type="button"
                className="flex h-[52px] w-full items-center justify-between px-[24px]"
            >
                {/* Left Container */}
                <div className="h-[19.5px] w-[87.38px]">
                    <span className="font-brand h-[20px] w-[86.15px] text-[13px] font-bold uppercase leading-[19.5px] tracking-[1.56px] text-[#1A1A1A]">
                        Amenities
                    </span>
                </div>

                {/* Right Container */}
                <div className="flex h-[14px] w-[14px] items-center justify-center">
                    <ChevronRight
                        className="h-[14px] w-[14px] shrink-0 text-[#6A6A66]"
                        strokeWidth={1.17}
                    />
                </div>
            </button>
        </aside>
    );
}