import React from 'react';
import { CodeBracketIcon, ChartBarIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline';

const Bio = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div className="flex items-center space-x-6">
          <img
            src="/profile-image.jpg" // You'll need to add your profile image
            alt="Yash Joshi"
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-200"
          />
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Yash Joshi</h1>
            <p className="text-xl text-gray-300">Data Scientist</p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="mb-8">
        <blockquote className="text-xl italic text-gray-300 border-l-4 border-[#0095F6] pl-4">
          "Transforming data into insights, one analysis at a time."
        </blockquote>
      </div>

      {/* Bio Content */}
      <div className="space-y-6">
        <p className="text-gray-300 text-lg leading-relaxed">
          Passionate Data Scientist with a keen eye for transforming complex datasets into actionable insights. 
          Specializing in creating data-driven solutions that bridge the gap between raw information and strategic decision-making.
        </p>

        {/* Expertise Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-[#262626] p-6 rounded-lg">
            <CodeBracketIcon className="w-8 h-8 text-[#0095F6] mb-4" />
            <h3 className="text-white font-semibold text-lg mb-2">Programming</h3>
            <p className="text-gray-400">Python & R Language Expert</p>
          </div>
          
          <div className="bg-[#262626] p-6 rounded-lg">
            <ChartBarIcon className="w-8 h-8 text-[#0095F6] mb-4" />
            <h3 className="text-white font-semibold text-lg mb-2">Visualization</h3>
            <p className="text-gray-400">Tableau & Power BI Specialist</p>
          </div>

          <div className="bg-[#262626] p-6 rounded-lg">
            <PresentationChartLineIcon className="w-8 h-8 text-[#0095F6] mb-4" />
            <h3 className="text-white font-semibold text-lg mb-2">Analytics</h3>
            <p className="text-gray-400">Data Analysis & Insights</p>
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-8">
          <h3 className="text-white font-semibold text-xl mb-4">Current Focus</h3>
          <p className="text-gray-300">
            Currently focused on building impactful data science projects that solve real-world problems. 
            Always exploring new technologies and methodologies to enhance data analysis capabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio; 