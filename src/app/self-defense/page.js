'use client';

import { useState } from 'react';

const selfDefenseTechniques = [
  {
    category: 'Basic Techniques',
    techniques: [
      {
        title: 'Palm Strike',
        description: 'A powerful strike using the heel of your palm to the attacker\'s nose or chin.',
        steps: [
          'Keep your fingers together and thumb tucked in',
          'Extend your arm straight from your shoulder',
          'Strike with the heel of your palm',
          'Aim for sensitive areas like nose, chin, or throat',
        ],
      },
      {
        title: 'Elbow Strike',
        description: 'Use your elbow for close-range defense, especially when grabbed from behind.',
        steps: [
          'Keep your elbow bent at 90 degrees',
          'Rotate your body to generate power',
          'Strike with the point of your elbow',
          'Target vulnerable areas like ribs or face',
        ],
      },
      {
        title: 'Knee Strike',
        description: 'Effective for close-range defense, especially when grabbed.',
        steps: [
          'Grab the attacker\'s shoulders or head',
          'Pull them down while raising your knee',
          'Strike with your knee to their groin or face',
          'Use your body weight for maximum impact',
        ],
      },
    ],
  },
  {
    category: 'Escape Techniques',
    techniques: [
      {
        title: 'Wrist Release',
        description: 'Technique to escape from wrist grabs.',
        steps: [
          'Rotate your wrist against the attacker\'s thumb',
          'Pull your arm away quickly',
          'Step back to create distance',
          'Be ready to strike or run',
        ],
      },
      {
        title: 'Bear Hug Escape',
        description: 'Escape from being grabbed from behind.',
        steps: [
          'Drop your weight to make it harder to lift you',
          'Stomp on their foot with your heel',
          'Use your elbows to strike their ribs',
          'Turn and face them while creating distance',
        ],
      },
      {
        title: 'Choke Defense',
        description: 'Defense against being choked from the front.',
        steps: [
          'Tuck your chin to protect your airway',
          'Grab their wrists and pull down',
          'Step back and create distance',
          'Be ready to strike or escape',
        ],
      },
    ],
  },
  {
    category: 'Prevention Tips',
    techniques: [
      {
        title: 'Situational Awareness',
        description: 'Stay alert and aware of your surroundings.',
        steps: [
          'Keep your head up and look around',
          'Avoid distractions like phones or headphones',
          'Trust your instincts if something feels wrong',
          'Plan escape routes in advance',
        ],
      },
      {
        title: 'Body Language',
        description: 'Project confidence through your body language.',
        steps: [
          'Stand tall with shoulders back',
          'Make eye contact with people around you',
          'Walk with purpose and confidence',
          'Keep your hands free and ready',
        ],
      },
      {
        title: 'Verbal Defense',
        description: 'Use your voice as a powerful self-defense tool.',
        steps: [
          'Speak firmly and clearly',
          'Use "No" or "Stop" loudly',
          'Call for help if needed',
          'Be assertive without being aggressive',
        ],
      },
    ],
  },
];

const trainingResources = [
  {
    title: 'Self-Defense Training Guide',
    description: 'Comprehensive guide to basic self-defense techniques with step-by-step instructions and videos.',
    link: 'https://www.wikihow.com/Learn-Self-Defense',
    type: 'pdf',
  },
  {
    title: 'Women\'s Self-Defense Courses',
    description: 'Find local and online courses specifically designed for women\'s self-defense training.',
    link: 'https://www.coursera.org/courses?query=self%20defense',
    type: 'course',
  },
  {
    title: 'Defensive Techniques Video Library',
    description: 'Collection of instructional videos demonstrating effective self-defense moves.',
    link: 'https://www.youtube.com/results?search_query=women+self+defense+techniques',
    type: 'video',
  },
];

export default function SelfDefense() {
  const [activeResource, setActiveResource] = useState(null);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Self-Defense Guide
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Basic self-defense techniques and prevention strategies
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
                        Steps:
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
              Training Resources
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
                      Access Resource →
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
            Emergency: 112
          </a>
        </div>
      </div>
    </div>
  );
} 