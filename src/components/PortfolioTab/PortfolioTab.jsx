import React, { useState } from "react";

function PortfolioTab() {
  const [activeTab, setActiveTab] = useState("all");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const tabs = [
    { id: "all", label: "All" },
    { id: "Digital Marketing", label: "Digital Marketing" },
    { id: 'Website', label: 'Website' },
    // { id: 'marketing', label: 'Marketing' },
    // { id: 'seo', label: 'SEO' },
  ];
  return (
    <div className="w-full flex items-center justify-center mx-auto">
      {/* Desktop Filter Tabs */}
      <div className="pb-4 flex flex-col lg:flex-row gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-[300px] lg:w-[300px] h-[40px] lg:h-[50px] text-sm lg:text-lg font-medium transition-all duration-300 bg-customBlack text-white ${
              activeTab === tab.id
                ? "bg-primary text-white shadow-md"
                : "text-gray-600 hover:bg-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PortfolioTab;
