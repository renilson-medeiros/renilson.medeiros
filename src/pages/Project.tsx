import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do React Router
import projects, { Project } from '../projectsData';

const ProjectComponent: React.FC = () => {
  return (
    <div className="w-full flex justify-around items-center my-20 px-6 max-[500px]:my-12">
      <div className='w-full flex flex-wrap max-w-screen-sm relative items-center'>
        <div className="flex w-full items-center justify-between text-base flex-wrap max-[500px]:gap-6">
        
        <div className='absolute top-0 text-base'>
            <a href="/" className='font-medium flex gap-1 hover:gap-2 items-center text-black-100 underline transition-all py-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
              <span className='font-medium'>Volte para o início</span>
            </a>
          </div>

          <div className="mt-14 w-full">
            <h1 className="text-2xl font-semibold max-[500px]:text-xl">Projetos</h1>

            <div className="mt-6">
              <div className='flex flex-wrap gap-y-16 justify-between'>
                
                {projects.map((project: Project) => (
                  <div key={project.id} className="bg-white-200 relative rounded overflow-hidden group shadow-sm">
                    <img 
                      className="w-full h-auto group-hover:blur-3xl group-hover:origin-bottom-left group-hover:scale-150 duration-500 transition-all"
                      loading="lazy" 
                      alt={project.altText}
                      src={project.imgSrc}
                    />
                    <div className="max-[500px]:py-4 max-[500px]:px-6 py-6 px-12 flex flex-col justify-between bg-gradient-to-t from-transparent to-transparent backdrop-opacity-20 absolute bottom-0 left:0 w-full h-full items-start cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex flex-col gap-6 max-[500px]:gap-4 drop-shadow-sm">
                        <h1 className="text-black-100 font-semibold text-3xl mt-14 max-[500px]:text-xl max-[500px]:mt-1">{project.title}</h1>
                        <p className="text-black-50 text-base max-[500px]:text-sm">
                          {project.description}
                        </p>
                      </div>
                      <Link className="w-full justify-end flex items-center gap-1 hover:gap-2 transition-all" to={project.link}>
                        <span>Ver mais</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                          <path d="M7 7h10v10"/>
                          <path d="M7 17 17 7"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
