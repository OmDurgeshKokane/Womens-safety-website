'use client';
import { useLanguage } from '../context/LanguageContext';

export default function SafetyTips() {
  const { t } = useLanguage();

  const safetyTips = [
    {
      category: t['safetyTips.travelCategory'],
      tips: [
        {
          title: t['safetyTips.travel1.title'],
          description: t['safetyTips.travel1.desc'],
        },
        {
          title: t['safetyTips.travel2.title'],
          description: t['safetyTips.travel2.desc'],
        },
        {
          title: t['safetyTips.travel3.title'],
          description: t['safetyTips.travel3.desc'],
        },
        {
          title: t['safetyTips.travel4.title'],
          description: t['safetyTips.travel4.desc'],
        },
      ],
    },
    {
      category: t['safetyTips.publicTransportCategory'],
      tips: [
        {
          title: t['safetyTips.transport1.title'],
          description: t['safetyTips.transport1.desc'],
        },
        {
          title: t['safetyTips.transport2.title'],
          description: t['safetyTips.transport2.desc'],
        },
        {
          title: t['safetyTips.transport3.title'],
          description: t['safetyTips.transport3.desc'],
        },
        {
          title: t['safetyTips.transport4.title'],
          description: t['safetyTips.transport4.desc'],
        },
      ],
    },
    {
      category: t['safetyTips.digitalCategory'],
      tips: [
        {
          title: t['safetyTips.digital1.title'],
          description: t['safetyTips.digital1.desc'],
        },
        {
          title: t['safetyTips.digital2.title'],
          description: t['safetyTips.digital2.desc'],
        },
        {
          title: t['safetyTips.digital3.title'],
          description: t['safetyTips.digital3.desc'],
        },
        {
          title: t['safetyTips.digital4.title'],
          description: t['safetyTips.digital4.desc'],
        },
      ],
    },
    {
      category: t['safetyTips.homeCategory'],
      tips: [
        {
          title: t['safetyTips.home1.title'],
          description: t['safetyTips.home1.desc'],
        },
        {
          title: t['safetyTips.home2.title'],
          description: t['safetyTips.home2.desc'],
        },
        {
          title: t['safetyTips.home3.title'],
          description: t['safetyTips.home3.desc'],
        },
        {
          title: t['safetyTips.home4.title'],
          description: t['safetyTips.home4.desc'],
        },
      ],
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t['safetyTips.title']}
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            {t['safetyTips.subtitle']}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {safetyTips.map((category) => (
            <div
              key={category.category}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.tips.map((tip) => (
                  <div key={tip.title} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {tip.title}
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      {tip.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Button */}
        <div className="mt-12 text-center">
          <a href="tel:112" className="emergency-button inline-block">
            {t['emergency.main']}
          </a>
        </div>
      </div>
    </div>
  );
} 