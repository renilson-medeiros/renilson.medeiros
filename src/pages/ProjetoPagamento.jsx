import { useState } from 'react';

const CaseStudy = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isIncorrectPassword, setIsIncorrectPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = import.meta.env.VITE_CASE_STUDY_OI;
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setIsIncorrectPassword(false);
    } else {
      setIsIncorrectPassword(true);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsIncorrectPassword(false);
  };

  const inputClass = `border w-full rounded px-4 py-4 ${isIncorrectPassword ? 'border-red-50' : 'border-black-100'}`;
  const feedbackTextClass = `text-red-50 absolute bottom-0 pl-1 text-sm ${isIncorrectPassword ? 'block' : 'hidden'}`;

  if (isAuthenticated) {
    return (
      <div className="relative w-full h-screen max-h-[500px] max-[500px]:h-[450px] flex justify-center items-center my-20 px-6 max-[500px]:my-12">
        <div className='w-full max-w-screen-sm flex flex-col'>
          <div className='absolute top-0 text-sm'>
            <a href="/" className='font-medium flex gap-1 items-center text-black-100 underline transition-all py-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
              <span className='font-medium'>Volte para o início</span>
            </a>
          </div>
          <div className="case-study text-center text-2xl">
            <h1>Case Study em construção!</h1>
            <p>Em breve mais atualizações.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen max-h-[500px] max-[500px]:h-[450px] flex justify-center items-center my-20 px-6 max-[500px]:my-12">
      <div className='w-full max-w-screen-sm flex flex-col'>
        <div className='absolute top-0 text-sm'>
          <a href="/" className='font-medium flex gap-1 items-center text-black-100 underline transition-all py-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            <span className='font-medium'>Volte para o início</span>
          </a>
        </div>
        <div className="relative case-study-login max-[500px]:max-w-full py-6">
          <form onSubmit={handleSubmit} className="flex items-start flex-col gap-1">
            <h2 className='text-4xl max-[500px]:text-3xl font-bold text-center mb-10'>Por favor, informe a senha para acessar a página.</h2>
            <label className='flex gap-4 w-full max-[500px]:flex-col'>
              <input
                className={inputClass}
                type="password"
                value={password}
                placeholder='Senha de acesso'
                onChange={handlePasswordChange}
              />
              <button type="submit" className='border border-transparent bg-black-200 rounded px-4 py-2 flex gap-2 justify-center items-center text-gray-50'>
                <span>Acessar</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </button>
            </label>
            <span className={feedbackTextClass}>Senha incorreta. Tente novamente.</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
