import React from 'react';
import { InstagramLogo, TwitterLogo,  } from "@phosphor-icons/react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Entre em Contato
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Tem dúvidas sobre nossos cursos ou quer agendar um teste de nivelamento? Fale conosco hoje mesmo!
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-gray-600">
                    <p className="text-base font-medium text-gray-900">Nossa Localização</p>
                    <p className="mt-1">123 Rua dos Idiomas, Bairro da Educação</p>
                    <p>Nova York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-gray-600">
                    <p className="text-base font-medium text-gray-900">Envie um E-mail</p>
                    <p className="mt-1">info@linguaworld.com</p>
                    <p>support@linguaworld.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-gray-600">
                    <p className="text-base font-medium text-gray-900">Ligue para Nós</p>
                    <p className="mt-1">+1 (555) 123-4567</p>
                    <p>Seg-Sex, 9h às 18h</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-black">Siga-nos</h3>
                <div className="mt-4 flex space-x-4">
                  <button>
                                  <InstagramLogo size={32}  />
                                </button>
                                <button>
                                  <TwitterLogo size={32} weight="fill" />
                                </button>
                                <button>
                                  <FaLinkedinIn size={32} />                
                                  </button>
                                <a href="#">
                                  <FaFacebook size={32}  />
                                </a>
                
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Envie-nos uma Mensagem</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-white mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="João"
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-white mb-1">
                      Sobrenome
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Silva"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                    Endereço de E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="joao@exemplo.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
                    Número de Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+55 (11) 91234-5678"
                  />
                </div>
                
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-white mb-1">
                    Interesse em
                  </label>
                  <select
                    id="course"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled selected>Selecione um curso</option>
                    <option value="spanish">Espanhol</option>
                    <option value="french">Francês</option>
                    <option value="german">Alemão</option>
                    <option value="italian">Italiano</option>
                    <option value="chinese">Chinês</option>
                    <option value="japanese">Japonês</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                    Sua Mensagem
                  </label>
                                    <textarea
                                      id="message"
                                      rows={4}
                                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                      placeholder="Digite sua mensagem aqui..."
                                    />
                                  </div>
                                  <button
                                    type="submit"
                                    className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
                                  >
                                    Enviar Mensagem
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    );
                  };
                  
                  export default Contact;
