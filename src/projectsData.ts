export interface Project {
  id: number;
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    imgSrc: "https://raw.githubusercontent.com/renilson-medeiros/renilson.medeiros/main/src/assets/imgs/preview_landing_page_pagamentos.png",
    altText: "Preview landing page de pagamentos",
    title: "Landing Page de pagamentos",
    description: "Projeto desenvolvido para o cliente acessar facilmente todas as suas faturas pendentes em um único lugar reduzindo o tempo e o esforço para efetuar os pagamentos.",
    link: "/case-study"
  },
  // Adicione mais projetos conforme necessário
];

export default projects;
