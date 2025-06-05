import React, { useState } from 'react';
import { testimonials } from '../data/testimonialsData';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const next = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            What Our Students Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from our students about their language learning journey with LinguaWorld.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-12">
            <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 h-16 w-16 text-blue-200" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.7662 12.86C3.84088 12.86 3.07464 12.5533 2.46748 11.94C1.86032 11.3266 1.55674 10.4467 1.55674 9.29999C1.55674 8.07332 1.93748 6.87332 2.69896 5.69999C3.46044 4.49999 4.59028 3.55332 6.08847 2.85999L6.79947 3.75999C5.99912 4.19999 5.35368 4.76666 4.86316 5.45999C4.37264 6.15332 4.0953 6.8 3.93114 7.39999C4.19692 7.29332 4.5367 7.23999 4.95046 7.23999C5.67048 7.23999 6.26356 7.47999 6.72969 7.95999C7.19582 8.43999 7.39762 9.09999 7.39762 9.93999V10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0675 12.86 10.3012 12.5533 9.69408 11.94C9.08692 11.3266 8.78334 10.4467 8.78334 9.29999C8.78334 8.07332 9.16408 6.87332 9.92556 5.69999C10.687 4.49999 11.8169 3.55332 13.3151 2.85999L14.0261 3.75999C13.2257 4.19999 12.5803 4.76666 12.0898 5.45999C11.5992 6.15332 11.3219 6.8 11.1577 7.39999C11.4235 7.29332 11.7633 7.23999 12.1771 7.23999C12.8971 7.23999 13.4902 7.47999 13.9563 7.95999C14.4224 8.43999 14.6242 9.09999 14.6242 9.93999V10.3Z" fill="currentColor" />
            </svg>
            
            <div className="relative z-10">
              <div className="transition-opacity duration-300">
                <p className="text-lg md:text-xl text-gray-700 italic">
                  "{testimonials[activeIndex].quote}"
                </p>
                
                <div className="mt-8 flex items-center">
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-blue-900">{testimonials[activeIndex].name}</h4>
                    <p className="text-gray-600">{testimonials[activeIndex].language} Student</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 right-0 p-6 md:p-12 flex space-x-2">
              <button 
                onClick={prev}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span className="sr-only">Previous</span>
              </button>
              <button 
                onClick={next}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;