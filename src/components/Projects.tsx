import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectDataProps } from '../lib/types';

export const Projects = ({
  data,
  colorVariant,
}: {
  data: ProjectDataProps[] | undefined;
  colorVariant: any;
}) => {
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
          {data?.map((project, idx) => {
            return (
              <Link key={idx} to={`/projects/${project.link}`}>
                <p className='text-lightGray font-extralight text-xl hover:font-normal transition-all p-2 hover:cursor-pointer'>
                  {project.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
