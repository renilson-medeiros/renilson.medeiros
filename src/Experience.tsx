import { useState, useEffect } from 'react';
import Certificates from './Certificates'; 
import './App.css';

function Experience() {
  const [showCertificates, setShowCertificates] = useState(false);

  const toggleCertificates = () => {
    setShowCertificates(!showCertificates);
  };

  const closeCertificates = () => {
    setShowCertificates(false);
  };

  useEffect(() => {
    const body = document.body;
    if (showCertificates) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }

    // Limpa o efeito ao desmontar o componente
    return () => {
      body.style.overflow = 'auto';
    };
  }, [showCertificates]);

  return (
    <div className="w-full flex justify-around items-center my-12 px-10 max-[500px]:px-5">
      <div className='w-full flex max-w-screen-sm'>
        <div className="flex flex-col gap-2 max-[500px]:justify-center max-[500px]:flex-col max-[500px]:gap-2">
          <h2 className='font-semibold text-md text-black-200'>Experiência</h2>

          <div className='text-sm flex gap-1 max-[500px]:flex-wrap'>
            <span className='text-gray-200 font-medium before:content-["Atual"] before:py-1 before:px-2 before:rounded before:mr-1 before:bg-black-50 before:text-gray-50 before:text-xs'>Software Engineering Associate</span>
            <a href="https://www.accenture.com/br-pt" target='blanck' className='underline flex items-center'>
              <span className='font-medium'>Accenture</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </a>
          </div>

          <div className='text-sm flex gap-1 max-[500px]:flex-wrap'>
            <span className='text-gray-200 font-medium'>Analista de Desenvolvimento de Sistemas</span>
            <a href="https://k2partnering.com/pt/" target='blanck' className='underline flex items-center'>
              <span className='font-medium'>K2 Partnering Solutions</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </a>
          </div>

          <div className='text-sm w-fit'>
            <span className='text-gray-200 flex gap-1 font-medium items-center underline cursor-pointer' onClick={toggleCertificates}>
              <span>Certificados</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
              </svg>
            </span>
          </div>
            {showCertificates && (
              <div className="w-full h-full flex justify-center items-center absolute max-[500px]:px-5 top-0 left-0 z-50 bg-black-200 bg-opacity-90 transition-all">
                <div className='w-full flex max-w-screen-sm bg-white-1 border border-gray-50 rounded p-4 relative animate-slide-top'>
                  <Certificates />
                  <button className="absolute top-4 right-4" onClick={closeCertificates}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                </div>
              </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Experience;
