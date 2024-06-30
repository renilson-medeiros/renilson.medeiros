import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
export const techSkills = [
    'HTML', 'TailwindCSS', 'CSS', 'Automação', 'JavaScript', 'Python', 'Git', 'Bootstrap', 'React', 'Linux', 'Figma', 'MySQL', 'Excel', 'PowerBi', 'VBA'
];
function Techskill() {
    return (_jsx("div", { className: "w-full flex relative justify-around items-center my-12 px-10 max-[500px]:px-5", children: _jsx("div", { className: 'w-full max-w-screen-sm flex flex-col', children: _jsx("div", { className: "w-full flex gap-2 justify-between items-center", children: _jsxs("div", { className: "Profile flex flex-col gap-2", children: [_jsx("h2", { className: 'font-semibold text-md text-black-200', children: "Tech skills" }), _jsx("div", { className: 'overflow-hidden', children: _jsx("ul", { className: 'flex font-medium cursor-pointer flex-wrap justify-start gap-1 text-sm max-[500px]:justify-center', children: techSkills.map((techSkill, index) => (_jsx("li", { className: 'py-2 px-4 rounded bg-black-50 hover:bg-black-100 text-sm text-gray-50 transition-all', children: techSkill }, index))) }) })] }) }) }) }));
}
export default Techskill;
