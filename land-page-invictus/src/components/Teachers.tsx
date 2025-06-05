import React from 'react';
import { teachers } from '../data/teachersData';

const Teachers: React.FC = () => {
  return (
    <section id="teachers" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Meet Our Expert Teachers
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our experienced native-speaking instructors are passionate about helping you achieve fluency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <div 
              key={teacher.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900">{teacher.name}</h3>
                <p className="mt-1 text-blue-600 font-medium">{teacher.language} Teacher</p>
                <p className="mt-3 text-gray-600 text-sm">{teacher.bio}</p>
                
                <div className="mt-4 flex space-x-2">
                  {teacher.languages.map((lang, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
            View All Teachers
          </button>
        </div>
      </div>
    </section>
  );
};

export default Teachers;