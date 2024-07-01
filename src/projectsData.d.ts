declare module '../projectsData' {
    export interface Project {
      id: number;
      imgSrc: string;
      altText: string;
      title: string;
      description: string;
      link: string;
    }
  
    const projects: Project[];
    export default projects;
  }
  