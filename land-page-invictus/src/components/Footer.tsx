import React from 'react';
import paises from '../assets/paises.avif'


const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <img src="https://static.wixstatic.com/media/a32b51_0a85c6fabb3847c1a72440be5ade8b16~mv2.png/v1/fill/w_184,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HOR2_3x-2.png" alt="" />
            </div>
            <p className="mt-4 text-white">
              Promovendo a comunicação global por meio da educação linguística inovadora desde 2010.
            </p>
            <div className="mt-6 flex space-x-4">
              
             <img src={paises} alt="paises" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Links Rápidos</h3>
            <ul className="mt-4 space-y-3">
              {[
                { name: 'Início', href: '#home' },
                { name: 'Sobre Nós', href: '#about' },
                { name: 'Cursos', href: '#courses' },
                { name: 'Professores', href: '#teachers' },
                { name: 'Preços', href: '#pricing' },
                { name: 'Contato', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Cursos</h3>
            <ul className="mt-4 space-y-3">
              {[
                'Espanhol',
                'Francês',
                'Alemão',
                'Italiano',
                'Chinês',
                'Japonês',
              ].map((course) => (
                <li key={course}>
                  <a href="#courses" className="text-white hover:text-white transition-colors">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Informações de Contato</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6  text-yellow-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white">
                  Rua dos Idiomas, 123<br />
                  Nova York, NY 10001
                </span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white">contato@linguaworld.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-yellow-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white">+1 (555) 123-4567</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white">Assine Nossa Newsletter</h4>
              <div className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="px-4 py-2 w-full rounded-l-md bg-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <button className="bg-blue-600 hover:bg-green-600 px-4 py-2 rounded-r-md">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-yellow-600 text-center">
          <p className=" text-white text-lx">
            &copy; {new Date().getFullYear()} LinguaWorld. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
