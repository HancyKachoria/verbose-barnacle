import React from 'react';
import {
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const ContactSection = () => {
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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactInfo.map((contact) => (
          <a
            key={contact.label}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 rounded-lg bg-[#262626] hover:bg-[#363636] transition-colors"
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
  );
};

export default ContactSection; 