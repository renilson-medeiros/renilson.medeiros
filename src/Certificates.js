import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export const certificates = [
    {
        id: 1,
        title: "NLW Expert trilha de React",
        link: "https://app.rocketseat.com.br/certificates/a9d26dde-903d-4ae8-ab7f-e043c8378205"
    },
    {
        id: 2,
        title: "NLW Expert trilha de HTML, CSS e JS",
        link: "https://app.rocketseat.com.br/certificates/af4afe11-53ce-4b55-ad6d-95da2113ba23"
    },
    {
        id: 3,
        title: "NLW Expert trilha de Python",
        link: "https://app.rocketseat.com.br/certificates/c5c34a33-90a6-4ea5-a07a-d00504bd408f"
    }
];
function Certificates() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide === certificates.length - 1 ? 0 : prevSlide + 1);
    };
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide === 0 ? certificates.length - 1 : prevSlide - 1);
    };
    return (_jsxs("div", { className: 'relative flex flex-col items-center justify-center w-full gap-6 py-10', children: [_jsx("div", { className: 'flex justify-center items-center animate-slide-top', children: certificates.map((certificate, index) => (_jsxs("div", { style: { display: index !== currentSlide ? 'none' : '' }, className: 'animate-left', children: [_jsx("div", { className: 'mb-4 max-w-96 animate-left', children: _jsx("img", { src: "https://app.rocketseat.com.br/_next/image?url=%2Fassets%2Fimages%2Fcertificates%2Fplaceholder-pt.png&w=1920&q=100", alt: "Imagem do certificado Rocketseat" }) }), _jsxs("div", { className: 'flex flex-col items-center gap-4', children: [_jsx("h3", { className: 'font-medium text-center py-2 w-full', children: certificate.title }), _jsxs("a", { className: 'w-fit text-sm max-[375px]:w-full flex justify-center rounded border border-black-200 px-8 py-2 cursor-pointer text-black-100 hover:bg-black-200 hover:text-gray-50 transition-all hover:shadow-sm hover:shadow-gray-100 items-center gap-1 hover:gap-4', href: certificate.link, target: '_blank', children: [_jsx("span", { children: "Acessar certificado" }), _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-arrow-up-right", children: [_jsx("path", { d: "M7 7h10v10" }), _jsx("path", { d: "M7 17 17 7" })] })] })] })] }, index))) }), _jsxs("div", { className: 'absolute flex w-full justify-between max-[500px]:w-full max-[500px]:top-[50%]', children: [_jsx("div", { className: 'max-[500px]:absolute max-[500px]:-left-8 bg-black-100 text-gray-50 hover:bg-black-200 hover:shadow-md p-2 rounded-full cursor-pointer transition-all', onClick: prevSlide, children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-chevron-left", children: _jsx("path", { d: "m15 18-6-6 6-6" }) }) }), _jsx("div", { className: 'max-[500px]:absolute max-[500px]:-right-8 bg-black-100 text-gray-50 hover:bg-black-200 hover:shadow-md p-2 rounded-full cursor-pointer transition-all', onClick: nextSlide, children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-chevron-right", children: _jsx("path", { d: "m9 18 6-6-6-6" }) }) })] })] }));
}
export default Certificates;
