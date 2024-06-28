import './App.css';

const email = 'renilson.medeiros96@outlook.com';

type EmailButtonProps = {
  label: string;
  subject: string;
  body: string;
};

const EmailButton = ({ label, subject, body }: EmailButtonProps) => {
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a
      className="w-52 max-[500px]:w-full flex justify-center rounded border border-black-200 px-8 py-2 cursor-pointer text-black-100 hover:bg-black-200 hover:text-gray-50 transition-all hover:shadow-sm hover:shadow-gray-100 items-center gap-1 hover:gap-2"
      href={mailtoLink}
    >
      <span>{label}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-up-right"
      >
        <path d="M7 7h10v10" />
        <path d="M7 17L17 7" />
      </svg>
    </a>
  );
};

function Contact() {
  return (
    <div className="w-full flex relative justify-around items-center my-12 px-10 max-[500px]:px-5">
      <div className="w-full flex max-w-screen-sm">
        <div className="Profile w-full flex flex-col gap-2">
          <h2 className="font-semibold text-md text-black-200">Contato</h2>
          <div className="text-gray-200 w-full flex-wrap gap-2">
            <span>Ficou interessado em meu trabalho? Entre em contato comigo através do email clicando nos botões abaixo:</span>
            <div className="w-full flex items-center justify-center gap-4 mt-8 font-medium max-[500px]:flex-col max-[500px]:gap-2 max-[500px]:justify-center">
              <EmailButton
                label="Recrutamento"
                subject="Temos uma vaga que poderia lhe interessar."
                body="Olá, Gostaria de entrar em contato sobre uma vaga [Descrição da vaga]."
              />
              <span>ou</span>
              <EmailButton
                label="Orçamento"
                subject="Orçamento de..."
                body="Olá, Gostaria de entrar em contato para um orçamento."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
