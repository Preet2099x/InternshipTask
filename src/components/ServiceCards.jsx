import React from 'react';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom web applications built with the latest technologies to meet your specific business requirements.',
    icon: '💻'
  },
  {
    id: 2,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps that provide seamless user experiences across all devices.',
    icon: '📱'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered design focused on creating intuitive, accessible, and visually appealing interfaces.',
    icon: '🎨'
  },
  {
    id: 4,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services to optimize your business operations.',
    icon: '☁️'
  }
];

const ServiceCards = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;