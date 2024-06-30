import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
function calculaIdade(dateBorn) {
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
    const dateBorn = '1996-01-14'; // Explicitando o tipo como string
    const idade = calculaIdade(dateBorn);
    return (_jsx("div", { className: "w-full flex relative justify-around items-center my-12 px-10 max-[500px]:px-5", children: _jsx("div", { className: 'w-full flex max-w-screen-sm', children: _jsxs("div", { className: "Profile flex flex-col gap-2", children: [_jsx("h2", { className: 'font-semibold text-md text-black-200', children: "Sobre" }), _jsxs("div", { className: 'text-gray-200 w-full flex gap-4 flex-col', children: [_jsxs("p", { children: ["Me chamo Renilson Medeiros, tenho ", idade, " anos e moro em S\u00E3o Jos\u00E9 dos Pinhais, PR. Desde os 16 anos, tenho explorado o mundo da tecnologia, e foi nesse caminho que me apaixonei pela programa\u00E7\u00E3o, especialmente pelo ", _jsx("span", { className: 'font-medium', children: "Front-end" }), "."] }), _jsx("p", { children: "Me considero uma pessoa bastante curiosa, sempre em busca de novos aprendizados que possam contribuir para projetos e tamb\u00E9m para o aprimoramento das minhas skills." }), _jsxs("p", { children: ["Atualmente, trabalho com ", _jsx("span", { className: 'font-medium', children: "automa\u00E7\u00F5es em Python" }), ", mas dedico parte do meu tempo para a constante evolu\u00E7\u00E3o do meu conhecimento."] })] })] }) }) }));
}
export default About;
