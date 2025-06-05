import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 z-0"></div>
      <div className="absolute right-0 bottom-0 w-full h-full max-w-7xl opacity-10 z-0">
        <div className="w-full h-full bg-[url('https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-no-repeat bg-right-bottom bg-contain"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 leading-tight">
              Desbloqueie Seu Potencial Através do Idioma
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Junte-se a mais de 10.000 alunos no mundo todo que transformaram suas vidas e carreiras com nossa experiência imersiva em aprendizado de idiomas.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Ver Cursos
              </button>
              <button className="px-8 py-4 text-base font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:text-blue-700 hover:border-blue-700 transition-colors shadow-md hover:shadow-lg">
                Aula Experimental Gratuita
              </button>
            </div>

            <div className="mt-8 sm:mt-12 flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                   
                     <img 
                      src={`https://images.pexels.com/photos/22116${i}/pexels-photo-22116${i}.jpeg?auto=compress&cs=tinysrgb&w=100`}
                      alt={`Estudante ${i}`}
                      className="w-full h-full object-cover" />
                    
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">4,9/5</span> baseado em mais de 2.500 avaliações
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -left-8 -top-8 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute inset-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5905885/pexels-photo-5905885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Estudantes aprendendo"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
