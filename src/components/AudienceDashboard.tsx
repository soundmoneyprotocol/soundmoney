'use client';

import React, { useState } from 'react';

interface AudienceSegment {
  percentage: string;
  label: string;
  count: string;
}

const audienceSegments: AudienceSegment[] = [
  {
    percentage: '1%',
    label: 'super listeners',
    count: '148',
  },
  {
    percentage: '18%',
    label: 'moderate listeners',
    count: '2,285',
  },
  {
    percentage: '81%',
    label: 'light listeners',
    count: '10,060',
  },
];

const tabs = [
  { id: 'overview', label: 'Overview', active: true },
  { id: 'demographics', label: 'Demographics', active: false },
  { id: 'location', label: 'Location', active: false },
  { id: 'engagement', label: 'Release Engagement', active: false },
];

const AudienceDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        {/* Main Title */}
        <h1 className="font-druk text-[30px] font-black uppercase tracking-[2px] text-[rgba(7,7,8,0.9)] mb-8">
          Audience
        </h1>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-6 py-3 rounded-full font-medium text-lg tracking-[-0.2px] leading-6 transition-all duration-200
                ${
                  activeTab === tab.id
                    ? 'bg-[rgba(7,7,8,0.06)] text-[rgba(7,7,8,0.9)]'
                    : 'bg-transparent text-[rgba(7,7,8,0.6)] hover:bg-[rgba(7,7,8,0.04)]'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Subtitle with highlighted text */}
        <p className="font-medium text-4xl tracking-[-0.72px] leading-9 text-[rgba(7,7,8,0.9)] mb-12">
          You have 12,493 listeners in your{' '}
          <span className="text-[#67BF68]">active audience.</span>
        </p>
      </div>

      {/* Dashboard Card */}
      <div className="max-w-2xl mx-auto">
        <div 
          className="bg-white/80 border border-[rgba(7,7,8,0.12)] rounded-[40px] p-10 backdrop-blur-[50px]"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(50px)',
          }}
        >
          <div className="space-y-2">
            {audienceSegments.map((segment, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-4 border-b border-[rgba(7,7,8,0.06)] last:border-b-0"
              >
                {/* Left side - Icon and text */}
                <div className="flex items-center gap-4">
                  {/* People Icon */}
                  <div className="w-9 h-9 flex items-center justify-center">
                    <svg
                      width="30"
                      height="21"
                      viewBox="0 0 30 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 10.5C22.6569 10.5 24 9.15685 24 7.5C24 5.84315 22.6569 4.5 21 4.5C19.3431 4.5 18 5.84315 18 7.5C18 9.15685 19.3431 10.5 21 10.5Z"
                        fill="rgba(7,7,8,0.9)"
                      />
                      <path
                        d="M9 10.5C10.6569 10.5 12 9.15685 12 7.5C12 5.84315 10.6569 4.5 9 4.5C7.34315 4.5 6 5.84315 6 7.5C6 9.15685 7.34315 10.5 9 10.5Z"
                        fill="rgba(7,7,8,0.9)"
                      />
                      <path
                        d="M15 12C16.6569 12 18 10.6569 18 9C18 7.34315 16.6569 6 15 6C13.3431 6 12 7.34315 12 9C12 10.6569 13.3431 12 15 12Z"
                        fill="rgba(7,7,8,0.9)"
                      />
                      <path
                        d="M9 12.75C6.515 12.75 1.5 13.9725 1.5 16.5V18.75H16.5V16.5C16.5 13.9725 11.485 12.75 9 12.75Z"
                        fill="rgba(7,7,8,0.9)"
                      />
                      <path
                        d="M21 12.75C20.73 12.75 20.4225 12.765 20.085 12.795C21.2175 13.65 21.75 14.7 21.75 16.5V18.75H28.5V16.5C28.5 13.9725 23.485 12.75 21 12.75Z"
                        fill="rgba(7,7,8,0.9)"
                      />
                      <path
                        d="M15 13.5C12.33 13.5 7.5 14.8425 7.5 17.25V20.25H22.5V17.25C22.5 14.8425 17.67 13.5 15 13.5Z"
                        fill="rgba(7,7,8,0.9)"
                      />
                    </svg>
                  </div>

                  {/* Text */}
                  <span className="font-medium text-xl tracking-[-0.2px] leading-7 text-[rgba(7,7,8,0.9)]">
                    {segment.percentage} {segment.label} ({segment.count})
                  </span>
                </div>

                {/* Right side - Arrow Icon */}
                <div className="w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-[rgba(7,7,8,0.04)] rounded-full transition-colors duration-200">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
                      fill="rgba(7,7,8,0.9)"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudienceDashboard;