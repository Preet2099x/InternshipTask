import React from 'react';

const plans = [
  {
    id: 1,
    name: 'Basic',
    price: 19,
    features: [
      'Up to 5 users', 
      '10GB storage', 
      'Basic support', 
      'Limited features'
    ],
    isPopular: false
  },
  {
    id: 2,
    name: 'Professional',
    price: 49,
    features: [
      'Up to 20 users', 
      '50GB storage', 
      'Priority support', 
      'Advanced features', 
      'API access'
    ],
    isPopular: true
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 99,
    features: [
      'Unlimited users', 
      '500GB storage', 
      '24/7 dedicated support', 
      'All features', 
      'Custom integrations', 
      'Advanced security'
    ],
    isPopular: false
  }
];

const PricingTable = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map(plan => (
            <div 
              key={plan.id} 
              className={`rounded-lg shadow-md overflow-hidden border flex flex-col h-full ${
                plan.isPopular ? 'border-2 border-blue-500 relative' : 'border border-gray-300'
              }`}
            >
              {plan.isPopular && (
                <div className="bg-blue-500 text-white text-center py-1 font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-6">
                  ${plan.price}
                  <span className="text-base font-normal text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg 
                        className="w-5 h-5 text-green-500 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-2 px-4 rounded-lg font-bold transition duration-300 mt-auto ${
                    plan.isPopular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
