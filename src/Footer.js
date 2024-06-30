import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
const scrollToTtop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
function Footer() {
    return (_jsx("footer", { className: "w-full flex bottom-0 justify-around items-center py-5 px-10 border-t-2 border-gray-50  max-[500px]:px-5", children: _jsx("div", { className: 'w-full flex max-w-screen-sm', children: _jsx("div", { className: "w-full flex flex-col gap-2", children: _jsxs("div", { className: 'text-gray-200 font-medium text-sm w-full flex justify-between', children: [_jsx("button", { onClick: scrollToTtop, className: 'bg-black-100 hover:bg-black-200 transsition-all p-2 rounded text-gray-50', children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-arrow-up", children: [_jsx("path", { d: "m5 12 7-7 7 7" }), _jsx("path", { d: "M12 19V5" })] }) }), _jsxs("div", { className: 'flex flex-col items-end', children: [_jsxs("p", { children: ["Desenvolvido por: ", _jsx("span", { className: 'text-black-100', children: "Renilson Medeiros" })] }), _jsx("p", { children: "\u00A9 2024 - Todos os Direitos reservados" })] })] }) }) }) }));
}
export default Footer;
