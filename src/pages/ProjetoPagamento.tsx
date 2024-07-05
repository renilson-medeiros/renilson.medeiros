import { useState } from 'react';

export const tech = [
  'HTML', 'CSS', 'JavaScript', 'Python', 'Chalice', 'Lambda', 'API', 'Mongo'
];

const CaseStudy = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isIncorrectPassword, setIsIncorrectPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const correctPassword = import.meta.env.VITE_CASE_STUDY_OI;
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setIsIncorrectPassword(false);
    } else {
      setIsIncorrectPassword(true);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setIsIncorrectPassword(false);
  };
  

  const inputClass = `border w-full rounded px-4 py-4 ${isIncorrectPassword ? 'border-red-50' : 'border-black-100'}`;
  const feedbackTextClass = `text-red-50 absolute bottom-0 pl-1 text-sm ${isIncorrectPassword ? 'block' : 'hidden'}`;

  if (isAuthenticated) {
    return (
      <div className="relative w-full flex justify-center items-start my-20 px-6 max-[500px]:my-12">
        <div className='w-full max-w-screen-sm flex flex-col'>
          <div className='absolute top-0 text-sm'>
            <a href="/" className='font-medium flex gap-1 hover:gap-2 items-center text-black-100 underline transition-all py-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
              <span className='font-medium'>Volte para o início</span>
            </a>
          </div>
          <div className="case-study mt-14">
            <h1 className='text-3xl font-semibold uppercase max-[500px]:text-2xl'>Landing Page para pagamento de faturas</h1>

            <div className='transition-all rounded overflow-hidden mt-6 cursor-pointer opacity-90 hover:opacity-100 max-h-[400px]'>
              <img loading="lazy" src="https://raw.githubusercontent.com/renilson-medeiros/renilson.medeiros/main/src/assets/imgs/preview_projeto.png" alt="Preview landing page de pagamentos" />
            </div>

            <div className='flex mt-6 flex-col w-full items-start gap-2'>
                <h2 className='text-black-200 font-semibold w-full'>Introdução</h2>
                <p>
                Como parte de um projeto na Accenture, que presta serviços de cobrança para a 
                Oi através de contato por telefone, WhatsApp e SMS, sugeri a criação de uma 
                landing page. Essa página tem como objetivo facilitar o acesso dos usuários aos 
                dados necessários para o pagamento de suas faturas.
                </p>
            </div>

            <div className='flex mt-6 flex-col w-full items-start gap-2'>
                <h2 className='text-black-200 font-semibold w-full'>Desafio</h2>
                <p>
                  Tínhamos um problema onde os usuários relatavam dificuldade em pagar as
                  suas faturas, pois não conseguiam copiar os dados de pagamentos que eram 
                  enviados através de SMS.
                </p>
            </div>

            <div className='flex mt-6 flex-col w-full items-start gap-2'>
                <h2 className='text-black-200 font-semibold w-full'>Solução</h2>
                <p>
                  A solução foi criar uma landing page onde o usuário pode visualizar todas 
                  as faturas pendentes em seu nome. Os dados de pagamento são fornecidos, 
                  com o PIX como principal meio de pagamento, além da opção de boleto bancário.
                </p>

                <p>
                  Para facilitar o pagamento, o usuário pode clicar em um botão de copiar em cada
                  opção de pagamento ou escanear o QR Code no caso do PIX, permitindo que ele obtenha 
                  facilmente os códigos necessários para realizar a transação.
                </p>
            </div>

            <div className='flex mt-6 flex-col w-full items-start gap-2'>
                <h2 className='text-black-200 font-semibold w-full'>Benefício</h2>
                <p>
                  Tínhamos duas opções para a criação da landing page: desenvolvê-la internamente em 
                  nossa infraestrutura ou terceirizar esse serviço, o que adicionaria um custo extra ao projeto. 
                  Optamos por desenvolver a landing page internamente, pois dessa forma poderíamos reduzir os 
                  custos. 
                </p>

                <p>
                  Além disso, já utilizamos o AWS Lambda para envio de SMS dentro do projeto, o que nos 
                  permite economizar ainda mais, integrando essa funcionalidade sem gastos adicionais.
                </p>
            </div>

            <div className='flex mt-6 flex-col w-full items-start gap-2'>
                <h2 className='text-black-200 font-semibold w-full'>Resultado</h2>
                <p>
                  A implementação da landing page trouxe resultados significativos. Os usuários agora conseguem 
                  acessar facilmente todas as suas faturas pendentes em um único lugar, o que simplificou 
                  consideravelmente o processo de pagamento. Com a introdução dos botões de copiar e dos QR 
                  Codes para pagamentos via PIX, o tempo e o esforço necessários para efetuar os pagamentos 
                  foram drasticamente reduzidos.
                </p>

                <p>
                  Além disso, ao optar por desenvolver a solução internamente, conseguimos economizar custos 
                  significativos que seriam inevitáveis se tivéssemos terceirizado o desenvolvimento. A integração 
                  com o AWS Lambda para o envio de SMS com o link da página reduzindo o números de SMS enviado 
                  mostrou-se altamente eficiente, proporcionando uma solução coesa e econômica.
                </p>

                <p>
                  Em resumo, a criação da landing page não só melhorou a experiência do usuário, tornando o processo 
                  de pagamento mais rápido e fácil, como também resultou em economias substanciais para o projeto.
                </p>
            </div>

            <div className='flex mt-6 flex-col w-full items-start gap-1'>
                <h2 className='text-black-200 font-semibold w-full'>Tecnologias utilizadas</h2>
                <div className='flex flex-wrap justify-start gap-1'>
                  {tech.map((techSkill) => (
                    <span className='py-2 px-4 rounded bg-black-50 hover:bg-black-100 text-sm text-gray-50 transition-all'>{techSkill}</span>
                  ))}
                </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen max-h-[500px] max-[500px]:h-[450px] flex justify-center items-center my-20 px-6 max-[500px]:my-12">
      <div className='w-full max-w-screen-sm flex flex-col'>
        <div className='absolute top-0 text-sm'>
          <a href="/" className='font-medium flex gap-1 hover:gap-2 items-center text-black-100 underline transition-all py-1'>
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
              <button type="submit" className='border border-transparent bg-black-100 hover:bg-black-200 rounded transition-all px-4 py-2 flex gap-2 justify-center items-center text-gray-50'>
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
 