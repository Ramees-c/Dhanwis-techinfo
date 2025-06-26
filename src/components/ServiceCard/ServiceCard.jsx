import React, { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function ServiceCard({ icon, heading, desc }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [cardHeight, setCardHeight] = useState('auto');
  const cardRef = useRef(null);
  const wordCount = desc.split(' ').length;
  const showSeeMore = wordCount > 13;
  
  const displayText = isExpanded ? desc : desc.split(' ').slice(0, 13).join(' ');

  const toggleExpand = () => {
    if (!isExpanded) {
      setCardHeight(`${cardRef.current.clientHeight}px`);
      cardRef.current.offsetHeight;
      setCardHeight('auto');
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-[90%] mx-auto mb-10">
      <div 
        ref={cardRef}
        className="border border-opacity-5 border-gray-800 transition-all duration-300 shadow-md lg:shadow-lg group flex flex-col"
        style={{
          height: isExpanded ? 'auto' : 'auto',
          minHeight: isExpanded ? 'none' : '250px'
        }}
      >
        <div className="feature-icon w-16 h-16 bg-primary flex items-center justify-center mb-4 -mt-5 transition-all duration-500 group-hover:ml-12">
          {icon}
        </div>
        
        <div className="pl-5 pr-1 pt-0 flex-grow flex flex-col">
          <div>
            <h5 className="text-uppercase text-lg lg:text-xl font-semibold mb-3">
              {heading}
            </h5>
            <div className="relative">
              <p className="text-para text-sm lg:text-md mb-0">
                {displayText}
                {!isExpanded && showSeeMore && '...'}
              </p>
              {showSeeMore && (
                <button
                  onClick={toggleExpand}
                  className="text-primary text-sm flex items-center mt-2 hover:underline focus:outline-none"
                >
                  {isExpanded ? (
                    <>
                      <span>Show Less</span>
                      <FaChevronUp className="ml-1" size={14} />
                    </>
                  ) : (
                    <>
                      <span>See More</span>
                      <FaChevronDown className="ml-1" size={14} />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          <div className="mt-auto pt-4 pb-4">
            <a
              href="#"
              className="text-gray-700 pr-1 text-md uppercase flex justify-between items-center hover:text-primary transition-colors duration-300"
            >
              <span>Read More</span>
              <FaArrowRightLong />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;