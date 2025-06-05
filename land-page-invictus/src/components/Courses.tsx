import React from 'react';
import { languages } from '../data/coursesData';

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Descubra Nossos Cursos de Idiomas
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            De iniciantes a alunos avançados, nossos cursos são projetados para ajudá-lo a alcançar fluência no idioma escolhido.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {languages.map((language) => (
            <div 
              key={language.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={language.image} 
                  alt={language.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    {language.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900">{language.name}</h3>
                <p className="mt-2 text-gray-600">{language.description}</p>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Duração</span>
                    <span className="font-medium">{language.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Aulas</span>
                    <span className="font-medium">{language.lessons} aulas</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Alunos</span>
                    <span className="font-medium">{language.students}+ matriculados</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="w-full py-3 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                    Inscreva-se Agora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
            Ver Todos os Cursos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
