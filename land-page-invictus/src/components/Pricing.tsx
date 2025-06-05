import React, { useState } from 'react';
import { pricingPlans } from '../data/pricingData';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Flexible Pricing Plans
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your language learning journey.
          </p>
          
          <div className="mt-8 inline-flex p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 text-sm rounded-md ${
                billingCycle === 'monthly'
                  ? 'bg-white text-blue-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annually')}
              className={`px-4 py-2 text-sm rounded-md ${
                billingCycle === 'annually'
                  ? 'bg-white text-blue-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annually <span className="text-green-600">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? 'shadow-xl ring-2 ring-blue-600 scale-105 md:scale-110 z-10'
                  : 'shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-2">
                  <p className="text-sm font-medium">Most Popular</p>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900">{plan.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                
                <div className="mt-4">
                  <p className="text-4xl font-bold text-blue-900">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                    <span className="text-base font-normal text-gray-500">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </p>
                  {billingCycle === 'annually' && (
                    <p className="mt-1 text-sm text-green-600">
                      Save ${(plan.monthlyPrice * 12 - plan.annualPrice).toFixed(2)} annually
                    </p>
                  )}
                </div>
                
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`mt-8 w-full py-3 rounded-md text-center font-medium transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-blue-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-blue-50 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-blue-900">Need a custom solution?</h3>
              <p className="mt-2 text-gray-600">Contact us for corporate packages and special group rates.</p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;