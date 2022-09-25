import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectDataProps } from '../lib/types';
import _ from 'lodash';
import { AiFillGithub } from 'react-icons/ai';

export const ProjectPage = ({
  data,
  colorVariant,
}: {
  data: ProjectDataProps[] | undefined;
  colorVariant: any;
}) => {
  // Grab the title from the params to determine which data to display
  let { title } = useParams();

  // ThisProject state
  const [thisProject, setThisProject] = useState<ProjectDataProps | null>(null);
  // Find this projects data from the data array
  const thisData = _.find(data, { link: title });
  // On `title` change, change the data
  useEffect(() => {
    setThisProject(thisData);

    return () => {
      setThisProject(null);
    };
  }, [title]);

  const fetchProjectData = () => {
    let PROJECT_ID = 'x2qyyifc';
    let DATASET = 'production';
    let PROJECT_QUERY = encodeURIComponent('*[_type == "project"]');
    let PROJECTS_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${PROJECT_QUERY}`;
    fetch(PROJECTS_URL)
      .then((res) => res.json())
      .then((res) => {
        setThisProject(_.find(res.result, { link: title }));
      })
      .catch((err) => console.error(err));
  };

  if (!thisProject) {
    fetchProjectData();
  }
  if (!data) {
    return null;
  }

  return (
    <div className='h-full w-full lg:w-[60%] xl:w-[70%] px-8 lg:px-[4.5rem] transition-all'>
      <div className='w-full flex justify-between items-center'>
        <a href={thisProject?.external_link} className='group'>
          <h2 className='text-lightGray group-hover:text-white transition-all text-4xl lg:text-6xl font-extralight tracking-wider'>
            {thisProject ? thisProject.title : 'Loading..'}.
          </h2>
          {/* <div className='w-full h-[1px] bg-lightGray group-hover:bg-white transition-all'></div> */}
        </a>
        <a href={thisProject?.github_link}>
          <AiFillGithub className='text-iconGray text-4xl scale-95 hover:scale-105 hover:text-white transition-all hover:cursor-pointer' />
        </a>
      </div>
      <div className='flex gap-4 mt-8 lg:mt-16 h-fit'>
        <div
          className={`hidden lg:block h-auto w-4 bg-gradient-to-b from-[${colorVariant.first}] to-[${colorVariant.second}] rounded-lg`}></div>
        <div className='flex flex-col gap-4 text-lightGray'>
          {thisProject?.description.map((item) => {
            return <p key={item.children[0]._key}>{item.children[0].text}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
