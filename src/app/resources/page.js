'use client';
import { useLanguage } from '../context/LanguageContext';

export default function Resources() {
  const { t } = useLanguage();

  const resources = [
    {
      category: t['resources.category.government'],
      items: [
        {
          title: t['resources.gov1.title'],
          description: t['resources.gov1.desc'],
          link: 'https://www.ncw.gov.in/',
          type: 'website',
        },
        {
          title: t['resources.gov2.title'],
          description: t['resources.gov2.desc'],
          link: 'https://wcd.gujarat.gov.in/',
          type: 'website',
        },
        {
          title: t['resources.gov3.title'],
          description: t['resources.gov3.desc'],
          link: 'https://bprd.nic.in/',
          type: 'pdf',
        },
      ],
    },
    {
      category: t['resources.category.nonprofit'],
      items: [
        {
          title: t['resources.npo1.title'],
          description: t['resources.npo1.desc'],
          link: 'https://www.hrw.org/topic/womens-rights',
          type: 'website',
        },
        {
          title: t['resources.npo2.title'],
          description: t['resources.npo2.desc'],
          link: 'https://www.unwomen.org/en/what-we-do/ending-violence-against-women',
          type: 'website',
        },
        {
          title: t['resources.npo3.title'],
          description: t['resources.npo3.desc'],
          link: 'https://www.globalfundforwomen.org/',
          type: 'directory',
        },
      ],
    },
    {
      category: t['resources.category.educational'],
      items: [
        {
          title: t['resources.edu1.title'],
          description: t['resources.edu1.desc'],
          link: 'https://www.wikihow.com/Learn-Self-Defense',
          type: 'pdf',
        },
        {
          title: t['resources.edu2.title'],
          description: t['resources.edu2.desc'],
          link: 'https://play.google.com/store/search?q=women%20safety%20app&c=apps',
          type: 'directory',
        },
        {
          title: t['resources.edu3.title'],
          description: t['resources.edu3.desc'],
          link: 'https://www.coursera.org/courses?query=personal%20safety',
          type: 'course',
        },
      ],
    },
    {
      category: t['resources.category.support'],
      items: [
        {
          title: t['resources.support1.title'],
          description: t['resources.support1.desc'],
          link: 'https://www.talkspace.com/',
          type: 'service',
        },
        {
          title: t['resources.support2.title'],
          description: t['resources.support2.desc'],
          link: 'https://www.legalaidatwork.org/',
          type: 'service',
        },
        {
          title: t['resources.support3.title'],
          description: t['resources.support3.desc'],
          link: 'https://www.womenshelters.org/',
          type: 'directory',
        },
      ],
    },
  ];

  const getResourceIcon = (type) => {
    switch (type) {
      case 'website':
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        );
      case 'pdf':
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'directory':
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case 'course':
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'service':
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t['resources.title']}
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            {t['resources.subtitle']}
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {resources.map((category) => (
            <div key={category.category}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                          {getResourceIcon(item.type)}
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
                      >
                        {t['resources.learnMore']}
                      </a>
                    </div>
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