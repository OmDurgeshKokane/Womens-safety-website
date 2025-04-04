'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function SelfDefense() {
  const { t } = useLanguage();
  const [activeResource, setActiveResource] = useState(null);

  const selfDefenseTechniques = [
    {
      category: t['selfDefense.basicTechniques'],
      techniques: [
        {
          title: t['selfDefense.basic1.title'],
          description: t['selfDefense.basic1.desc'],
          steps: [
            t['selfDefense.basic1.step1'],
            t['selfDefense.basic1.step2'],
            t['selfDefense.basic1.step3'],
            t['selfDefense.basic1.step4'],
          ],
        },
        {
          title: t['selfDefense.basic2.title'],
          description: t['selfDefense.basic2.desc'],
          steps: [
            t['selfDefense.basic2.step1'],
            t['selfDefense.basic2.step2'],
            t['selfDefense.basic2.step3'],
            t['selfDefense.basic2.step4'],
          ],
        },
        {
          title: t['selfDefense.basic3.title'],
          description: t['selfDefense.basic3.desc'],
          steps: [
            t['selfDefense.basic3.step1'],
            t['selfDefense.basic3.step2'],
            t['selfDefense.basic3.step3'],
            t['selfDefense.basic3.step4'],
          ],
        },
      ],
    },
    {
      category: t['selfDefense.escapeTechniques'],
      techniques: [
        {
          title: t['selfDefense.escape1.title'],
          description: t['selfDefense.escape1.desc'],
          steps: [
            t['selfDefense.escape1.step1'],
            t['selfDefense.escape1.step2'],
            t['selfDefense.escape1.step3'],
            t['selfDefense.escape1.step4'],
          ],
        },
        {
          title: t['selfDefense.escape2.title'],
          description: t['selfDefense.escape2.desc'],
          steps: [
            t['selfDefense.escape2.step1'],
            t['selfDefense.escape2.step2'],
            t['selfDefense.escape2.step3'],
            t['selfDefense.escape2.step4'],
          ],
        },
        {
          title: t['selfDefense.escape3.title'],
          description: t['selfDefense.escape3.desc'],
          steps: [
            t['selfDefense.escape3.step1'],
            t['selfDefense.escape3.step2'],
            t['selfDefense.escape3.step3'],
            t['selfDefense.escape3.step4'],
          ],
        },
      ],
    },
    {
      category: t['selfDefense.preventionTips'],
      techniques: [
        {
          title: t['selfDefense.prevention1.title'],
          description: t['selfDefense.prevention1.desc'],
          steps: [
            t['selfDefense.prevention1.step1'],
            t['selfDefense.prevention1.step2'],
            t['selfDefense.prevention1.step3'],
            t['selfDefense.prevention1.step4'],
          ],
        },
        {
          title: t['selfDefense.prevention2.title'],
          description: t['selfDefense.prevention2.desc'],
          steps: [
            t['selfDefense.prevention2.step1'],
            t['selfDefense.prevention2.step2'],
            t['selfDefense.prevention2.step3'],
            t['selfDefense.prevention2.step4'],
          ],
        },
        {
          title: t['selfDefense.prevention3.title'],
          description: t['selfDefense.prevention3.desc'],
          steps: [
            t['selfDefense.prevention3.step1'],
            t['selfDefense.prevention3.step2'],
            t['selfDefense.prevention3.step3'],
            t['selfDefense.prevention3.step4'],
          ],
        },
      ],
    },
  ];

  const trainingResources = [
    {
      title: t['selfDefense.resource1.title'],
      description: t['selfDefense.resource1.desc'],
      link: 'https://www.wikihow.com/Learn-Self-Defense',
      type: 'pdf',
    },
    {
      title: t['selfDefense.resource2.title'],
      description: t['selfDefense.resource2.desc'],
      link: 'https://www.coursera.org/courses?query=self%20defense',
      type: 'course',
    },
    {
      title: t['selfDefense.resource3.title'],
      description: t['selfDefense.resource3.desc'],
      link: 'https://www.youtube.com/results?search_query=women+self+defense+techniques',
      type: 'video',
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t['selfDefense.title']}
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            {t['selfDefense.subtitle']}
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {selfDefenseTechniques.map((category) => (
            <div key={category.category}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.techniques.map((technique) => (
                  <div
                    key={technique.title}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
                  >
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {technique.title}
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      {technique.description}
                    </p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                        {t['selfDefense.steps']}
                      </h4>
                      <ol className="mt-2 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                        {technique.steps.map((step, index) => (
                          <li key={index} className="flex items-start">
                            <span className="flex-shrink-0 h-6 w-6 text-blue-500">
                              {index + 1}.
                            </span>
                            <span className="ml-2">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Training Resources Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t['selfDefense.trainingResources']}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {trainingResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {resource.description}
                  </p>
                  <div className="mt-4">
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
                    >
                      {t['selfDefense.accessResource']}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
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