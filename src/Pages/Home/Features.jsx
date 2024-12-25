import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🏺',
      title: 'Extensive Artifact Collection',
      description: 'Explore a vast collection of artifacts from diverse cultures and historical periods.'
    },
    {
      icon: '📚',
      title: 'Detailed Historical Context',
      description: 'Gain deep insights into the historical significance of each artifact with detailed descriptions.'
    },
    {
      icon: '🖼️',
      title: 'High-Quality Visuals',
      description: 'View artifacts in stunning detail with high-resolution images and interactive displays.'
    },
    {
      icon: '🌍',
      title: 'Global Discoveries',
      description: 'Learn about artifacts discovered around the globe, showcasing the rich heritage of humanity.'
    },
    {
      icon: '🎓',
      title: 'Educational Resources',
      description: 'Access resources tailored for students, researchers, and enthusiasts to enhance learning.'
    },
    {
      icon: '📞',
      title: '24/7 Support for Queries',
      description: 'Our team is available around the clock to answer your questions about the artifacts.'
    }
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Why Explore Our Artifacts?
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Discover the stories of the past through our comprehensive collection of artifacts and resources.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-5xl text-blue-500 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
