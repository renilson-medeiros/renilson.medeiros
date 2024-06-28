import './App.css'

function Header() {
  
  return (
    <div className="w-full flex justify-around items-center my-20 px-6 max-[500px]:my-12">
      <div className='w-full flex flex-wrap max-w-screen-sm relative items-center'>
        <div className="flex w-full items-center justify-between text-lg flex-wrap max-[500px]:gap-6">
          <div className='flex items-center gap-4'>
            <div className='w-20 h-20 overflow-hidden rounded'>
              <img src="https://www.github.com/renilson-medeiros.png" alt="Foto de perfil de Renilson Medeiros" className='w-full h-full object-cover scale-110' />
            </div>
            <div className=''>
              <h1 className='font-semibold text-lg text-black-200'>Renilson Medeiros</h1>
              <p className='text-gray-200 font-medium text-base'>Devenvolvedor</p>
            </div>
          </div>

          <div className='max-[500px]:w-full max-[500px]:flex max-[500px]:justify-center max-[500px]:-mb-6'>
            <ul className='flex items-end gap-2'>

              <li className='bg-gray-50 w-10 h-10 rounded flex justify-center items-center hover:bg-black-200 text-black-200 hover:text-gray-50 cursor-pointer transition-all'>
                <a href="https://www.linkedin.com/in/renilsonmedeiros/" target="_blank" title='LinkedIn'>  
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </li>

              <li className='bg-gray-50 w-10 h-10 rounded flex justify-center items-center hover:bg-black-200 text-black-200 hover:text-gray-50 cursor-pointer transition-all'>
                <a href="https://github.com/renilson-medeiros" target="_blank" title='GitHub'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                </a>
              </li>

              <li className="relative bg-gray-50 w-10 h-10 hover:w-28 rounded flex justify-center items-center hover:bg-black-200 text-black-200 hover:text-gray-50 cursor-pointer transition-all overflow-hidden after:content-['Currículo'] after:justify-start after:items-start hover:gap-2 after:hidden after:hover:block after:text-sm max-[500px]:after:block max-[500px]:w-28 max-[500px]:gap-2">
                <a href=" " title='Baixar currículo'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" x2="12" y1="15" y2="3"/>
                  </svg>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
