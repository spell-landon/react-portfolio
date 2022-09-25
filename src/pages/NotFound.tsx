import React from 'react';

export const NotFound = ({ colorVariant }: { colorVariant: any }) => {
  return (
    <div className='h-full w-full lg:w-[60%] xl:w-[70%] px-8 lg:px-[4.5rem] transition-all'>
      <div className='w-full flex justify-between items-center'>
        <h2 className='text-lightGray group-hover:text-white transition-all text-4xl lg:text-6xl font-extralight tracking-wider'>
          Uh Oh!
        </h2>
      </div>
      <div className='flex gap-4 mt-8 lg:mt-16 h-fit'>
        <div
          className={`hidden lg:block h-auto w-4 bg-gradient-to-b from-[${colorVariant.first}] to-[${colorVariant.second}] rounded-lg`}></div>
        <div className='flex flex-col gap-4 text-lightGray'>
          <p>
            The page you were looking for is either unavailable or was never
            created in the first place. Please try again or navigate to the home
            page to start over.
          </p>
        </div>
      </div>
    </div>
  );
};
