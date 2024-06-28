import './App.css';

function calculaIdade(dateBorn: string) {
  const today = new Date();
  const born = new Date(dateBorn);
  let age = today.getFullYear() - born.getFullYear();
  const monthDiff = today.getMonth() - born.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < born.getDate())) {
    age--;
  }

  return age;
}

function About() {
  const dateBorn: string = '1996-01-14'; // Explicitando o tipo como string
  const idade = calculaIdade(dateBorn);

  return (
    <div className="w-full flex relative justify-around items-center my-12 px-10 max-[500px]:px-5">
      <div className='w-full flex max-w-screen-sm'>
        <div className="Profile flex flex-col gap-2">
          <h2 className='font-semibold text-md text-black-200'>Sobre</h2>
          <div className='text-gray-200 w-full flex gap-4 flex-col'>
            <p>
              Me chamo Renilson Medeiros, tenho {idade} anos e moro em São José dos Pinhais, PR. 
              Desde os 16 anos, tenho explorado o mundo da tecnologia, e foi nesse caminho que me 
              apaixonei pela programação, especialmente pelo <span className='font-medium'>Front-end</span>.
            </p>
            <p>
              Me considero uma pessoa bastante curiosa, sempre em busca de novos aprendizados que 
              possam contribuir para projetos e também para o aprimoramento das minhas skills.
            </p>
            <p>
              Atualmente, trabalho com <span className='font-medium'>automações em Python</span>, mas dedico parte do meu tempo para a 
              constante evolução do meu conhecimento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
