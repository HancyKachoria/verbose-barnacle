import React from 'react';
import {
  HomeIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  StarIcon,
  RocketLaunchIcon,
  Bars3Icon,
  PhoneIcon,
  GlobeAltIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

interface SidebarProps {
  showContactModal: boolean;
  setShowContactModal: (show: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ showContactModal, setShowContactModal }) => {
  const navItems = [
    { icon: HomeIcon, label: 'Home' },
    { icon: BriefcaseIcon, label: 'Projects' },
    { icon: DocumentTextIcon, label: 'Resume' },
    { icon: StarIcon, label: 'Skills' },
    { icon: RocketLaunchIcon, label: 'Experience' },
  ];

  const contactInfo = [
    {
      icon: <img src="/github.svg" alt="GitHub" className="w-6 h-6" />,
      label: 'GitHub',
      value: '@yourusername',
      link: 'https://github.com/yourusername',
    },
    {
      icon: <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Your Name',
      link: 'https://linkedin.com/in/yourprofile',
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      label: 'Phone',
      value: '+1 (234) 567-8900',
      link: 'tel:+12345678900',
    },
    {
      icon: <GlobeAltIcon className="w-6 h-6" />,
      label: 'Website',
      value: 'www.yourwebsite.com',
      link: 'https://www.yourwebsite.com',
    },
  ];

  return (
    <>
      <div className="fixed left-0 h-screen w-[245px] bg-black text-white p-4 border-r border-gray-800">
        {/* Logo */}
        <div className="mb-8 pl-2">
          <h1 className="text-2xl font-semibold font-['Instagram Sans'] tracking-wider">Portfolio</h1>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.label.toLowerCase()}`}
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <item.icon className="w-6 h-6" />
              <span className="text-[16px]">{item.label}</span>
            </a>
          ))}
          <button
            onClick={() => setShowContactModal(true)}
            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors w-full"
          >
            <EnvelopeIcon className="w-6 h-6" />
            <span className="text-[16px]">Contact</span>
          </button>
        </nav>

        {/* Profile and More */}
        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <a
            href="#profile"
            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <img
                src="https://i.pravatar.cc/100"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[16px]">Profile</span>
          </a>
          <button className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors w-full">
            <Bars3Icon className="w-6 h-6" />
            <span className="text-[16px]">More</span>
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-[#262626] rounded-xl max-w-lg w-full mx-4">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#363636] transition-colors"
                >
                  <div className="flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-[#A8A8A8] text-sm">{contact.label}</div>
                    <div className="text-white font-medium">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar; 