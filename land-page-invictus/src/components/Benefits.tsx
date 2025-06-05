import React from 'react';
import { benefits } from '../data/benefitsData';

const Benefits: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Why Choose LinguaWorld?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer a unique approach to language learning that sets us apart from traditional methods.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg text-blue-600 mb-4">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 md:mt-24 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Nossa metodologia de ensino</h3>
              <p className="text-gray-600 mb-6">
                Our immersive approach combines conversational practice, cultural insights, and practical application to help you become confident in your new language quickly.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Immersive learning environment',
                  'Native-speaking instructors',
                  'Small class sizes (max 8 students)',
                  'Personalized learning paths',
                  'Regular progress assessments'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Learn More About Our Method
              </button>
            </div>
            
            <div className="hidden lg:block">
              <div className="h-full">
                <img 
                  src="https://images.pexels.com/photos/5427671/pexels-photo-5427671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Teaching methodology" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;