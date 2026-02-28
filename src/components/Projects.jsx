import React from "react";
import { useState } from "react";

const Projects = () => {
    const [activeTab, setActiveTab] = useState('Team Members');

  const tabs = ['My Account', 'Company', 'Team Members', 'Billing'];
  const tabContent = {
    'My Account': 'Manage your personal profile settings, change your password, and set up two-factor authentication.',
    'Company': 'Update your organization details, upload your company logo, and manage workspace settings.',
    'Team Members': 'Invite new colleagues, manage roles and permissions, and view active users in your workspace.',
    'Billing': 'View your current subscription plan, download past invoices, and update your payment methods.'
  };
  return (
    <section className="m-20 border p-10" id="projects">
      <div className="flex flex-col">
        <div>
          <h1 className="text-center text-2xl font-bold">Projects</h1>
          <div className="text-center my-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            laboriosam laudantium doloribus? Odit doloribus consequatur
            obcaecati! Nisi alias, molestias expedita natus placeat ullam!
          </div>
        </div>
        
          <div className="flex flex-col gap-20 min-h-[200px] items-center justify-between  bg-[#0B0F19] p-10">
            {/* Container */}
            <div className="inline-flex overflow-hidden rounded-lg border border-gray-800 bg-[#0B0F19]">
              {tabs.map((tab, index) => {
                const isActive = activeTab === tab;

                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`
                relative px-8 py-4 text-sm transition-all duration-200
                ${index !== tabs.length - 1 ? "border-r border-gray-800" : ""}
                ${
                  isActive
                    ? "bg-[#151B28] font-bold text-white"
                    : "font-medium text-gray-400 hover:bg-gray-800/50 hover:text-gray-200"
                }
              `}
                  >
                    {tab}

                    {/* Active Indicator Line */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
                    )}
                  </button>
                );
              })}
            </div>
            <div className="w-full max-w-md text-center animate-in fade-in slide-in-from-bottom-2 duration-500">
        <h2 className="text-xl font-semibold text-white mb-2">{activeTab}</h2>
        <p className="text-gray-400 leading-relaxed">
          {tabContent[activeTab]}
        </p>
      </div>
          </div>
          {/* Content Section */}
      
        </div>
     
    </section>
  );
};

export default Projects;
