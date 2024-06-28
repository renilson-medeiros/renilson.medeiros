 import './App.css'

const scrollToTtop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

function Footer() {

  return (
    <div className="w-full flex relative justify-around items-center py-5 px-10 border-t-2 border-gray-50  max-[500px]:px-5">
      <div className='w-full flex max-w-screen-sm'>
        <div className="Profile w-full flex flex-col gap-2">
          <div className='text-gray-200 font-medium text-sm w-full flex justify-between'>

          <button onClick={scrollToTtop} className='bg-black-100 hover:bg-black-200 transsition-all p-2 rounded text-gray-50'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up">
              <path d="m5 12 7-7 7 7"/>
              <path d="M12 19V5"/>
            </svg>
          </button>

          <div className='flex flex-col items-end'>
            <p>Desenvolvido por: <span className='text-black-100'>Renilson Medeiros</span></p>
            <p>&copy; 2024 - Todos os Direitos reservados</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
