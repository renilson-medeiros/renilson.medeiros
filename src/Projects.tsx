import './App.css'

function Projects() {

  return (
    <div className="w-full flex relative justify-around items-center my-12 px-10 max-[500px]:px-5">
      <div className='w-full max-w-screen-sm flex flex-col'>
        <div className="w-full flex justify-between items-center mb-4">
          <h2 className='font-semibold text-md text-black-200'>Projeto recente</h2>
          <span className='font-sm text-sm text-gray-200 transition-all hover:text-black-200'>
            <a href="" className='flex items-center p-2 gap-1 rounded hover:bg-gray-50 transition-all hover:gap-2'> 
              <span>Ver todos</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
          </span>
        </div>

      <div className='rounded overflow-hidden relative'>
          <span className='absolute top-3 -left-1 z-10 max-[500px]:top-[6px]'>
            <a href="" className='bg-black-100 hover:bg-black-200 text-gray-50 hover:pl-8 font-semibold relative py-4 px-6 max-[500px]:py-2 rounded hover:no-underline transition-all'>Landing Page de pagamentos</a>
          </span>
          <span className='bg-black-100 py-2 px-4 rounded hover:bg-black-200 bottom-6 right-6 absolute z-10 max-[500px]:bottom-4 max-[500px]:right-4 max-[500px]:py-1'>
            <a href="" className='flex gap-1 hover:gap-2 items-center text-gray-50 transition-all'>
              <span>Ver mais</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right">
                <path d="M7 7h10v10"/>
                <path d="M7 17 17 7"/>
              </svg>
              </a>
          </span>
        <div className='transition-all cursor-pointer opacity-90 hover:opacity-100 max-h-[400px]'>
          <img loading="lazy" src="https://raw.githubusercontent.com/renilson-medeiros/renilson.medeiros/main/src/assets/imgs/preview_landing_page_pagamentos.png" alt="Preview landing page de pagamentos" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects
