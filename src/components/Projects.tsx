import React from 'react';
import { Link } from 'react-router-dom';

export const Projects = ({ colorVariant }: { colorVariant: any }) => {
  const projectsArr = [
    {
      name: 'ZOX',
      link: '/projects/zox',
    },
    {
      name: 'PetFindr',
      link: '/projects/petfindr',
    },
    {
      name: 'The Watson',
      link: '/projects/the-watson',
    },
    {
      name: 'Recipeace',
      link: '/projects/recipeace',
    },
    {
      name: 'Flash Cards (Game)',
      link: '/projects/flash-cards',
    },
  ];
  return (
    <div className='w-full lg:w-[40%] xl:w-[30%] px-8 lg:px-0 transition-all'>
      <h3 className='text-lightGray text-5xl lg:text-xl font-extralight mb-4 mt-8 lg:mt-0'>
        Projects.
      </h3>
      <div className='relative w-full h-full'>
        <div
          className={`hidden lg:block absolute top-0 left-0 rounded-tl-xl w-1/2 h-1/2 aspect-square bg-gradient-to-br p-[6px] from-[${colorVariant.first}] via-[${colorVariant.second}] to-[${colorVariant.second}]`}></div>

        <div className='hidden lg:block w-3/4 h-3/4 aspect-square bg-darkGray absolute top-1 left-1 rounded-lg'></div>
        <div className='lg:absolute lg:top-1 lg:left-1 py-4 lg:py-16 px-0 lg:px-10 space-y-8 flex flex-col'>
          {projectsArr.map((project, idx) => {
            return (
              <Link key={idx} to={project?.link}>
                <p className='text-lightGray font-extralight text-xl hover:font-normal transition-all p-2 hover:cursor-pointer'>
                  {project.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
