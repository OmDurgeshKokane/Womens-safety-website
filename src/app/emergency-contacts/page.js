'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function EmergencyContacts() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  
  const emergencyContacts = [
    {
      name: t['emergencyContacts.national1.name'],
      number: '112',
      description: t['emergencyContacts.national1.desc'],
    },
    {
      name: t['emergencyContacts.national2.name'],
      number: '181',
      description: t['emergencyContacts.national2.desc'],
    },
    {
      name: t['emergencyContacts.national3.name'],
      number: '100',
      description: t['emergencyContacts.national3.desc'],
    },
    {
      name: t['emergencyContacts.national4.name'],
      number: '1098',
      description: t['emergencyContacts.national4.desc'],
    },
    {
      name: t['emergencyContacts.national5.name'],
      number: '181',
      description: t['emergencyContacts.national5.desc'],
    },
    {
      name: t['emergencyContacts.national6.name'],
      number: '155260',
      description: t['emergencyContacts.national6.desc'],
    },
  ];

  const stateContacts = [
    {
      state: 'Andhra Pradesh',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Arunachal Pradesh',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Assam',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Bihar',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Chhattisgarh',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Goa',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Gujarat',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Haryana',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Himachal Pradesh',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Jharkhand',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Karnataka',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Kerala',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Madhya Pradesh',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Maharashtra',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '103' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Manipur',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Meghalaya',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Mizoram',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Nagaland',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Odisha',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Punjab',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Rajasthan',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Sikkim',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Tamil Nadu',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Telangana',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Tripura',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Uttar Pradesh',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Uttarakhand',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'West Bengal',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
    {
      state: 'Delhi (NCT)',
      contacts: [
        { name: t['emergencyContacts.state.womenHelpline'], number: '181' },
        { name: t['emergencyContacts.state.police'], number: '100' },
        { name: t['emergencyContacts.state.ambulance'], number: '108' },
      ],
    },
  ];

  // Filter states based on search term
  const filteredStates = stateContacts.filter(state =>
    state.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t['emergencyContacts.title']}
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            {t['emergencyContacts.subtitle']}
          </p>
        </div>

        {/* National Emergency Numbers */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {t['emergencyContacts.national']}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {emergencyContacts.map((contact) => (
              <div
                key={contact.name}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {contact.name}
                </h3>
                <a href={`tel:${contact.number}`} className="mt-2 text-3xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 block">
                  {contact.number}
                </a>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {contact.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* State-wise Contacts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {t['emergencyContacts.stateWise']}
          </h2>
          
          {/* Search input */}
          <div className="relative max-w-md mx-auto mb-8">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t['emergencyContacts.searchPlaceholder']}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredStates.map((state) => (
              <div
                key={state.state}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  {state.state}
                </h3>
                <ul className="space-y-2">
                  {state.contacts.map((contact) => (
                    <li key={contact.name} className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">{contact.name}</span>
                      <a href={`tel:${contact.number}`} className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                        {contact.number}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* No results message */}
          {searchTerm && filteredStates.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">{t['emergencyContacts.noResults']} "{searchTerm}"</p>
            </div>
          )}
        </div>

        {/* Emergency Button */}
        <div className="mt-12 text-center">
          <a href="tel:112" className="emergency-button inline-block">
            {t['emergency.call']}
          </a>
        </div>
      </div>
    </div>
  );
} 