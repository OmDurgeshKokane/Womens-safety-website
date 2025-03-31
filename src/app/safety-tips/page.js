'use client';

const safetyTips = [
  {
    category: 'Travel Safety',
    tips: [
      {
        title: 'Plan Your Route',
        description: 'Always plan your route in advance and share it with trusted friends or family members.',
      },
      {
        title: 'Stay Alert',
        description: 'Be aware of your surroundings and avoid using headphones while walking alone.',
      },
      {
        title: 'Use Well-Lit Areas',
        description: 'Stick to well-lit and populated areas, especially at night.',
      },
      {
        title: 'Keep Emergency Numbers Ready',
        description: 'Save emergency contact numbers on speed dial and keep them easily accessible.',
      },
    ],
  },
  {
    category: 'Public Transport',
    tips: [
      {
        title: 'Choose Safe Options',
        description: 'Prefer official taxi services or ride-sharing apps with verified drivers.',
      },
      {
        title: 'Share Location',
        description: 'Share your live location with trusted contacts while traveling.',
      },
      {
        title: 'Sit Strategically',
        description: 'Choose seats near the driver or in well-lit areas of public transport.',
      },
      {
        title: 'Trust Your Instincts',
        description: 'If something feels wrong, exit the vehicle at the next safe location.',
      },
    ],
  },
  {
    category: 'Digital Safety',
    tips: [
      {
        title: 'Privacy Settings',
        description: 'Regularly review and update your social media privacy settings.',
      },
      {
        title: 'Location Sharing',
        description: 'Be cautious about sharing your location on social media platforms.',
      },
      {
        title: 'Online Dating Safety',
        description: 'Meet in public places and inform friends about your plans.',
      },
      {
        title: 'Password Security',
        description: 'Use strong, unique passwords and enable two-factor authentication.',
      },
    ],
  },
  {
    category: 'Home Safety',
    tips: [
      {
        title: 'Secure Entry Points',
        description: 'Keep doors and windows locked, especially when alone at home.',
      },
      {
        title: 'Emergency Contacts',
        description: 'Keep a list of emergency contacts near your phone and front door.',
      },
      {
        title: 'Neighborhood Watch',
        description: 'Get to know your neighbors and participate in community safety programs.',
      },
      {
        title: 'Home Security',
        description: 'Consider installing security cameras and motion-sensor lights.',
      },
    ],
  },
];

export default function SafetyTips() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Safety Tips
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Essential safety guidelines for various situations
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
            Emergency: 112
          </a>
        </div>
      </div>
    </div>
  );
} 