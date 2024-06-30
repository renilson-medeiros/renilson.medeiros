import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
const email = 'renilson.medeiros96@outlook.com';
const EmailButton = ({ label, subject, body }) => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return (_jsxs("a", { className: "w-52 max-[500px]:w-full flex justify-center rounded border border-black-200 px-8 py-2 cursor-pointer text-black-100 hover:bg-black-200 hover:text-gray-50 transition-all hover:shadow-sm hover:shadow-gray-100 items-center gap-1 hover:gap-2", href: mailtoLink, children: [_jsx("span", { children: label }), _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-arrow-up-right", children: [_jsx("path", { d: "M7 7h10v10" }), _jsx("path", { d: "M7 17L17 7" })] })] }));
};
function Contact() {
    return (_jsx("div", { className: "w-full flex relative justify-around items-center my-12 px-10 max-[500px]:px-5", children: _jsx("div", { className: "w-full flex max-w-screen-sm", children: _jsxs("div", { className: "Profile w-full flex flex-col gap-2", children: [_jsx("h2", { className: "font-semibold text-md text-black-200", children: "Contato" }), _jsxs("div", { className: "text-gray-200 w-full flex-wrap gap-2", children: [_jsx("span", { children: "Ficou interessado em meu trabalho? Entre em contato comigo atrav\u00E9s do email clicando nos bot\u00F5es abaixo:" }), _jsxs("div", { className: "w-full flex items-center justify-center gap-4 mt-8 font-medium max-[500px]:flex-col max-[500px]:gap-2 max-[500px]:justify-center", children: [_jsx(EmailButton, { label: "Recrutamento", subject: "Temos uma vaga que poderia lhe interessar.", body: "Ol\u00E1, Gostaria de entrar em contato sobre uma vaga [Descri\u00E7\u00E3o da vaga]." }), _jsx("span", { children: "ou" }), _jsx(EmailButton, { label: "Or\u00E7amento", subject: "Or\u00E7amento de...", body: "Ol\u00E1, Gostaria de entrar em contato para um or\u00E7amento." })] })] })] }) }) }));
}
export default Contact;
